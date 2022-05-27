import React, { useContext, useState, useEffect } from "react";
import { DEBUG } from "src/app/constants";
import { useTableFocus } from "../FocusProvider";

interface IMenuContext {
	isMenuOpen?: (id: string) => boolean;
	openMenu?: (id: string, level: number) => void;
	closeMenu?: (id: string) => void;
	canOpenMenu?: (level: number) => boolean;
}

const MenuContext = React.createContext<IMenuContext>(null);

export const useMenu = (id: string, level: number) => {
	const { openMenu, closeMenu, isMenuOpen, canOpenMenu } =
		useContext(MenuContext);

	return {
		isMenuOpen: isMenuOpen(id),
		openMenu: () => openMenu(id, level),
		closeMenu: () => closeMenu(id),
		canOpenMenu,
	};
};

interface Props {
	children: React.ReactNode;
}

export default function MenuProvider({ children }: Props) {
	const [openMenus, setOpenMenus] = useState([]);
	const isFocused = useTableFocus();

	function canOpenMenu(level: number): boolean {
		if (openMenus.length === 0) return true;
		//If there is already a menu of that level open, do not allow us
		//to open another menu. We must close the current menu first.
		//This will allow us to provide Notion-like menu functionality
		if (openMenus.every((menu) => menu.level < level)) return true;
		return false;
	}

	function openMenu(id: string, level: number) {
		const menu = { id, level };
		if (DEBUG.MENU_PROVIDER.HANDLER) {
			console.log(`[MenuProvider]: openMenu("${id}", ${level})`);
		}
		setOpenMenus((prevState) => [...prevState, menu]);
	}

	function isMenuOpen(id: string): boolean {
		if (openMenus.find((menu) => menu.id === id)) return true;
		return false;
	}

	function closeAllMenus() {
		if (DEBUG.MENU_PROVIDER.HANDLER) {
			console.log("[MenuProvider]: closeAllMenus()");
		}
		setOpenMenus([]);
	}

	const closeMenu = (id: string) => {
		if (isMenuOpen(id)) {
			if (DEBUG.MENU_PROVIDER.HANDLER) {
				console.log(`[MenuProvider]: closeMenu(${id})`);
			}
			setOpenMenus((prevState) =>
				prevState.filter((menu) => menu.id !== id)
			);
		}
	};

	function handleClick(e: React.MouseEvent) {
		console.log("MENU PROVIDER CLICK");
		if (isFocused && openMenus.length !== 0) {
			if (e.target instanceof HTMLElement) {
				let el = e.target;
				//Search until we get an id
				while (el.id === "" && el.className !== "NLT__app") {
					el = el.parentElement;
				}
				//Close top level
				const topMenu = findTopMenu();
				if (el.id !== topMenu.id) closeMenu(topMenu.id);
			}
		}
	}

	function handleKeyUp(e: React.KeyboardEvent) {
		if (isFocused && openMenus.length !== 0) {
			//This will work with the last added menu
			if (e.key === "Enter") {
				const topMenu = findTopMenu();
				closeMenu(topMenu.id);
			}
		}
	}

	function findTopMenu() {
		//Find highest level
		let topMenu = openMenus[0];
		openMenus.forEach((menu) => {
			if (menu.level > topMenu.level) topMenu = menu;
		});
		return topMenu;
	}

	// useEffect(() => {
	// 	if (!isFocused) closeAllMenus();
	// }, [isFocused]);

	return (
		<div onClick={handleClick} onKeyUp={handleKeyUp}>
			<MenuContext.Provider
				value={{
					isMenuOpen,
					openMenu,
					closeMenu,
					canOpenMenu,
				}}
			>
				{children}
			</MenuContext.Provider>
		</div>
	);
}
