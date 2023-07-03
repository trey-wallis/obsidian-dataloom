import React from "react";

import Menu from "src/react/shared/menu";
import { SuggestList } from "../../shared/suggest-list";
import { VaultFile } from "src/obsidian-shim/build/vault-file";

interface Props {
	id: string;
	isOpen: boolean;
	top: number;
	left: number;
	filterValue: string;
	onItemClick: (item: VaultFile | null) => void;
}

const SuggestMenu = React.forwardRef<HTMLDivElement, Props>(
	function SuggestMenu(
		{ id, isOpen, top, left, filterValue, onItemClick }: Props,
		ref
	) {
		return (
			<Menu
				id={id}
				isOpen={isOpen}
				top={top}
				left={left}
				ref={ref}
				width={275}
			>
				<SuggestList
					filterValue={filterValue}
					onItemClick={onItemClick}
				/>
			</Menu>
		);
	}
);

export default SuggestMenu;
