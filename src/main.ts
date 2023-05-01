import { Plugin, TFolder } from "obsidian";

import NLTSettingsTab from "./obsidian/NLTSettingsTab";

import { store } from "./services/redux/store";
import { setDarkMode, setDebugMode } from "./services/redux/globalSlice";
import { NLTView, NOTION_LIKE_TABLES_VIEW } from "./obsidian/NLTView";
import { TABLE_EXTENSION } from "./data/constants";
import { addColumn } from "./services/tableState/column";
import { addRow } from "./services/tableState/row";
import {
	deserializeTableState,
	serializeTableState,
} from "./data/tableStateIO";
import { createNewTableFile } from "./data/TableFile";

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
	focusedTableId: string | null = null;
	layoutChangeTime: number;

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
		this.registerCommands();
		this.registerEvents();

		this.app.workspace.onLayoutReady(() => {
			this.checkForDarkMode();
			this.checkForDebug();
		});
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

		const filePath = await createNewTableFile({
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
		store.dispatch(setDarkMode(this.hasDarkTheme()));
	}

	private hasDarkTheme = () => {
		const el = document.querySelector("body");
		if (el) {
			return el.className.includes("theme-dark");
		}
		return false;
	};

	registerEvents() {
		this.registerEvent(
			this.app.workspace.on("css-change", () => {
				this.checkForDarkMode();
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
						const data = view.getViewData();
						const tableState = deserializeTableState(data);
						const updatedState = addColumn(tableState);
						const serialized = serializeTableState(updatedState);
						view.setViewData(serialized, true);
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
					if (!checking) {
						const data = view.getViewData();
						const tableState = deserializeTableState(data);
						const updatedState = addRow(tableState);
						const serialized = serializeTableState(updatedState);
						view.setViewData(serialized, true);
					}
					return true;
				}
				return false;
			},
		});

		// this.addCommand({
		// 	id: "nlt-delete-last-row",
		// 	name: "Delete last row",
		// 	hotkeys: [{ modifiers: ["Mod", "Shift"], key: "Enter" }],
		// 	callback: async () => {},
		// });
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
