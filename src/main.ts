import { Plugin, TFolder } from "obsidian";

import NLTSettingsTab from "./obsidian/nlt-settings-tab";

import { store } from "./redux/global/store";
import { setDarkMode, setDebugMode } from "./redux/global/global-slice";
import { NLTView, NOTION_LIKE_TABLES_VIEW } from "./obsidian/nlt-view";
import { TABLE_EXTENSION } from "./data/constants";
import { createTableFile } from "src/data/table-file";
import {
	EVENT_COLUMN_ADD,
	EVENT_COLUMN_DELETE,
	EVENT_DOWNLOAD_CSV,
	EVENT_DOWNLOAD_MARKDOWN,
	EVENT_ROW_ADD,
	EVENT_ROW_DELETE,
} from "./shared/events";
import { nltEmbeddedPlugin } from "./obsidian/nlt-embedded-plugin";
import { getEmbeddedTableLinkEls } from "./obsidian/utils";
import NLTEmbeddedRenderChild from "./obsidian/nlt-embedded-render-child";

export interface NLTSettings {
	shouldDebug: boolean;

	// If true, new tables will be created in the attachments folder define in
	// Obsidian settings. Otherwise, the `customFolderForNewTables` value will
	// be used.
	createAtObsidianAttachmentFolder: boolean;

	// Custom location for newly created tables. If the value is an empty string,
	// the root vault folder will be used.
	customFolderForNewTables: string;

	// If true, new tables will be named as ${activeFileName}-${timestamp}. However,
	// if no file has been opened, creating a new table will still use the default
	// table name.
	nameWithActiveFileNameAndTimestamp: boolean;
}

export const DEFAULT_SETTINGS: NLTSettings = {
	shouldDebug: false,
	createAtObsidianAttachmentFolder: false,
	customFolderForNewTables: "",
	nameWithActiveFileNameAndTimestamp: false,
};
export default class NLTPlugin extends Plugin {
	settings: NLTSettings;

	/**
	 * Called on plugin load.
	 * This can be when the plugin is enabled or Obsidian is first opened.
	 */
	async onload() {
		await this.loadSettings();

		this.registerView(NOTION_LIKE_TABLES_VIEW, (leaf) => new NLTView(leaf));
		this.registerExtensions([TABLE_EXTENSION], NOTION_LIKE_TABLES_VIEW);

		this.addRibbonIcon("table", "Create Notion-Like table", async () => {
			await this.newTableFile(null);
		});

		this.addSettingTab(new NLTSettingsTab(this.app, this));
		this.registerEmbeddedView();
		this.registerCommands();
		this.registerEvents();

		// this.app.vault.on(
		// 	"rename",
		// 	async (file: TAbstractFile, oldPath: string) => {
		// 		//Search all table files for the old path and rename them

		// 		//Get all table files
		// 		const tableFiles = this.app.vault
		// 			.getFiles()
		// 			.filter((file) => file.extension === TABLE_EXTENSION);

		// 		for (let i = 0; i < tableFiles.length; i++) {
		// 			const file = tableFiles[i];
		// 			const content = await file.vault.read(tableFiles[i]);
		// 			const newContent = content;
		// 			await file.vault.modify(file, newContent);

		// 			//If find wiki links up
		// 		}
		// 	}
		// );

		this.app.workspace.onLayoutReady(() => {
			this.checkForDarkMode();
			this.checkForDebug();
		});
	}

	private registerEmbeddedView() {
		//This registers a CodeMirror extension. It is used to render the embedded
		//table in live preview mode.
		this.registerEditorExtension(nltEmbeddedPlugin);

		//This registers a Markdown post processor. It is used to render the embedded
		//table in preview mode.
		// this.registerMarkdownPostProcessor((element, context) => {
		// 	const embeddedTableLinkEls = getEmbeddedTableLinkEls(element);
		// 	for (let i = 0; i < embeddedTableLinkEls.length; i++) {
		// 		const linkEl = embeddedTableLinkEls[i];
		// 		context.addChild(
		// 			new NLTEmbeddedRenderChild(
		// 				linkEl,
		// 				linkEl.getAttribute("src")!
		// 			)
		// 		);
		// 	}
		// });
	}

	private async newTableFile(contextMenuFolderPath: string | null) {
		let folderPath = "";
		if (contextMenuFolderPath) {
			folderPath = contextMenuFolderPath;
		} else if (this.settings.createAtObsidianAttachmentFolder) {
			folderPath = (this.app.vault as any).getConfig(
				"attachmentFolderPath"
			);
		} else {
			folderPath = this.settings.customFolderForNewTables;
		}

		const filePath = await createTableFile({
			folderPath,
			useActiveFileNameAndTimestamp:
				this.settings.nameWithActiveFileNameAndTimestamp,
		});
		//Open file in a new tab and set it to active
		await app.workspace.getLeaf(true).setViewState({
			type: NOTION_LIKE_TABLES_VIEW,
			active: true,
			state: { file: filePath },
		});
	}

	private checkForDebug() {
		store.dispatch(setDebugMode(this.settings.shouldDebug));
	}

	private checkForDarkMode() {
		let hasDarkTheme = false;
		const el = document.querySelector("body");
		if (el) hasDarkTheme = el.className.includes("theme-dark");
		store.dispatch(setDarkMode(hasDarkTheme));
	}

	registerEvents() {
		this.registerEvent(
			this.app.workspace.on("css-change", () => {
				this.checkForDarkMode();

				//When the theme changes, we need to re-render the view to update the values
				//TODO optimize this
				//Use the redux store instead?
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					const data = view.getViewData();
					view.setViewData(data, true);
				}
			})
		);

		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {
				if (file instanceof TFolder) {
					menu.addItem((item) => {
						item.setTitle("New Notion-Like table")
							.setIcon("document")
							.onClick(async () => {
								await this.newTableFile(file.path);
							});
					});
				}
			})
		);
	}

	registerCommands() {
		this.addCommand({
			id: "nlt-create-table",
			name: "Create table",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "=" }],
			callback: async () => {
				await this.newTableFile(null);
			},
		});

		this.addCommand({
			id: "nlt-add-column",
			name: "Add column",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "\\" }],
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					if (!checking) {
						this.app.workspace.trigger(EVENT_COLUMN_ADD, view.leaf);
					}
					return true;
				}
				return false;
			},
		});

		this.addCommand({
			id: "nlt-delete-column",
			name: "Delete column",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "Backspace" }],
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					if (!checking) {
						this.app.workspace.trigger(
							EVENT_COLUMN_DELETE,
							view.leaf
						);
					}
					return true;
				}
				return false;
			},
		});

		this.addCommand({
			id: "nlt-add-row",
			name: "Add row",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "Enter" }],
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					if (!checking)
						this.app.workspace.trigger(EVENT_ROW_ADD, view.leaf);
					return true;
				}
				return false;
			},
		});

		this.addCommand({
			id: "nlt-row-column",
			name: "Delete row",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "Backspace" }],
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					if (!checking) {
						this.app.workspace.trigger(EVENT_ROW_DELETE, view.leaf);
					}
					return true;
				}
				return false;
			},
		});

		this.addCommand({
			id: "nlt-export-markdown",
			name: "Export as markdown",
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					if (!checking) {
						this.app.workspace.trigger(
							EVENT_DOWNLOAD_MARKDOWN,
							view.leaf
						);
					}
					return true;
				}
				return false;
			},
		});

		this.addCommand({
			id: "nlt-export-csv",
			name: "Export as CSV",
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(NLTView);
				if (view) {
					if (!checking) {
						this.app.workspace.trigger(
							EVENT_DOWNLOAD_CSV,
							view.leaf
						);
					}
					return true;
				}
				return false;
			},
		});
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	/**
	 * Called on plugin unload.
	 * This can be when the plugin is disabled or Obsidian is closed.
	 */
	async onunload() {
		this.app.workspace.detachLeavesOfType(NOTION_LIKE_TABLES_VIEW);
	}
}
