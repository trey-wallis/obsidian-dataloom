import React from "react";
import {
	addFocusVisibleClass,
	focusMenuElement,
	removeFocusVisibleClass,
} from "./focus-visible";
import { Menu, MenuLevel } from "./types";
import { menuFocusSelector } from "./utils";
import { useTableState } from "../table-state/useTableState";

interface ContextProps {
	openMenus: Menu[];
	openMenu: (menu: Menu) => void;
	closeTopLevelMenu: () => void;
}

const MenuContext = React.createContext<ContextProps | null>(null);

export const useMenuContext = () => {
	const value = React.useContext(MenuContext);
	if (value === null) {
		throw new Error(
			"useMenu() called without a <MenuProvider /> in the tree."
		);
	}

	return value;
};

interface Props {
	children: React.ReactNode;
}

export default function MenuProvider({ children }: Props) {
	const [openMenus, setOpenMenus] = React.useState<Menu[]>([]);
	const [tableState] = useTableState();

	const isMenuOpen = React.useCallback(() => {
		return openMenus.length !== 0;
	}, [openMenus]);

	const topLevelMenu = React.useCallback(() => {
		return openMenus.last();
	}, [openMenus]);

	const openMenu = React.useCallback(
		(menu: Menu) => {
			//A user can open a menu when no other menu is open or if the menu is a higher level
			//than the current one
			const canOpen =
				openMenus.find((m) => m.level < menu.level) ||
				openMenus.length === 0;

			if (!canOpen) return;

			setOpenMenus((prev) => [...prev, menu]);

			//When we close a menu, we add the focus class to the parent element.
			//If we then click on another menu, we will remove the focus class. Without this,
			//we will have 2 parent elements that are focused
			removeFocusVisibleClass();
		},
		[openMenus]
	);

	function closeTopLevelMenu() {
		setOpenMenus((prev) => prev.slice(0, prev.length - 1));
	}

	React.useEffect(() => {
		function handleClick(e: MouseEvent) {
			const target = e.target as HTMLElement;

			console.log("handleClick");

			if (isMenuOpen()) {
				const menu = topLevelMenu();
				if (!menu) throw new Error("Menu is open but no menu exists");

				const { id, level } = menu;

				//If we didn't click on the current menu then close the menu
				//and focus the parent
				if (!target.closest(menuFocusSelector(id))) {
					if (level === MenuLevel.ONE) {
						focusMenuElement(id);
						addFocusVisibleClass(id);
					}
					closeTopLevelMenu();
				}
			} else {
				removeFocusVisibleClass();
			}
		}

		function openMenuFromFocusedEl() {
			const focusedEl = document.activeElement as HTMLElement;
			if (focusedEl) {
				if (focusedEl.className.includes("NLT__focusable")) {
					const menuId = focusedEl.getAttribute("data-menu-id");
					if (menuId)
						setOpenMenus([
							{
								id: menuId,
								level: MenuLevel.ONE,
								shouldRequestOnClose: false,
							},
						]);
				}
			}
		}

		function handleEnterDown(e: KeyboardEvent) {
			console.log("handleEnterDown");
			const target = e.target as HTMLElement;
			console.log(target.getAttribute("menu-data-id"));
			if (target.getAttribute("data-menu-id") !== null) {
				//Prevents the event key from triggering the click event
				e.preventDefault();
			}

			//If a menu is open, then close the menu
			if (isMenuOpen()) {
				console.log("Menu is open");
				const menu = topLevelMenu();
				if (!menu) throw new Error("Menu is open but no menu exists");

				focusMenuElement(menu.id);
				addFocusVisibleClass(menu.id);
				closeTopLevelMenu();
			} else {
				console.log("Menu is not open");
				//Otherwise if we're focused on a focusable cell,
				//open the menu if the data-id exists
				openMenuFromFocusedEl();
				removeFocusVisibleClass();
			}
		}

		function handleTabDown(e: KeyboardEvent) {
			if (isMenuOpen()) {
				// Disallow the default event which will change focus to the next element
				e.preventDefault();
			} else {
				removeFocusVisibleClass();
			}
		}

		function handleArrowDown(e: KeyboardEvent) {
			if (!isMenuOpen()) {
				//Prevent scrolling the pane with the arrow keys
				e.preventDefault();

				//Only handle keys when the currentMenu isn't open
				let focusedEl = document.activeElement;
				if (focusedEl) {
					removeFocusVisibleClass();

					const tabbableEls =
						document.querySelectorAll(`.NLT__focusable`);

					const index = Array.from(tabbableEls).indexOf(focusedEl);
					switch (e.key) {
						case "ArrowUp": {
							//Normal number of columns in a row
							//Num columns + drag menu cell
							const numColumns =
								tableState.model.columns.length + 1;
							//The function row doesn't have a drag menu cell
							const numColumnsFunctionRow = numColumns - 1;

							//Handle very last row
							if (index === tabbableEls.length - 1) {
								focusedEl =
									tabbableEls[index - numColumnsFunctionRow];
							} else if (index - numColumns >= 0) {
								focusedEl = tabbableEls[index - numColumns];
								//Handle the last row
							}
							break;
						}
						case "ArrowLeft":
							if (index - 1 >= 0)
								focusedEl = tabbableEls[index - 1];
							break;
						case "ArrowRight":
							if (index + 1 < tabbableEls.length)
								focusedEl = tabbableEls[index + 1];
							break;
						case "ArrowDown":
							{
								//This is the "New Row" button
								const rowIndexEnd = tabbableEls.length - 1;

								//Normal number of columns in a row
								//Num columns + drag menu cell
								const numColumns =
									tableState.model.columns.length + 1;
								//The last row doesn't have a drag menu cell
								const numColumnsFunctionRow = numColumns - 1;
								//Handle until the last 2 rows
								if (index + numColumns <= rowIndexEnd - 1) {
									focusedEl = tabbableEls[index + numColumns];
									//Handle the function row
								} else if (
									index >=
										rowIndexEnd - numColumnsFunctionRow &&
									index <= rowIndexEnd
								) {
									focusedEl = tabbableEls[rowIndexEnd];
								}
							}
							break;
					}
					(focusedEl as HTMLElement).focus();
				}
			}
		}

		function handleKeyDown(e: KeyboardEvent) {
			switch (e.code) {
				case "Enter":
					handleEnterDown(e);
					break;
				case "Tab":
					handleTabDown(e);
					break;
				case "ArrowLeft":
				case "ArrowRight":
				case "ArrowUp":
				case "ArrowDown":
					handleArrowDown(e);
					break;
				default:
					if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
						return;
					openMenuFromFocusedEl();
					break;
			}
		}
		window.addEventListener("click", handleClick);
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("click", handleClick);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMenuOpen, openMenu, tableState.model.columns.length]);

	return (
		<MenuContext.Provider
			value={{ openMenus, openMenu, closeTopLevelMenu }}
		>
			{children}
		</MenuContext.Provider>
	);
}
