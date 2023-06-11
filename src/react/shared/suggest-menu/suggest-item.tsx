import React from "react";

import { css } from "@emotion/react";
import Text from "src/react/shared/text";
import { nltEventSystem } from "src/shared/event-system/event-system";
import { VaultFile } from "src/obsidian-shim/development/vault-file";

interface Props {
	file: VaultFile | null;
	isHighlighted: boolean;
	isFileNameUnique: boolean;
	onItemClick: (item: VaultFile | null, isFileNameUnique: boolean) => void;
}

const SuggestItem = React.forwardRef<HTMLDivElement, Props>(
	function SuggestItem(
		{ file, isHighlighted, isFileNameUnique, onItemClick }: Props,
		ref
	) {
		const handleClick = React.useCallback(
			(e: React.MouseEvent) => {
				//Stop propagation so the menu doesn't remove the focus class
				e.stopPropagation();
				onItemClick(file, isFileNameUnique);
			},
			[file, isFileNameUnique, onItemClick]
		);

		React.useEffect(() => {
			function handleKeyDown(e: KeyboardEvent) {
				if (e.key === "Enter") onItemClick(file, isFileNameUnique);
			}

			if (isHighlighted)
				nltEventSystem.addEventListener("keydown", handleKeyDown, 1);

			return () =>
				nltEventSystem.removeEventListener("keydown", handleKeyDown);
		}, [isHighlighted, onItemClick, file, isFileNameUnique]);

		let name = "No match found";
		if (file) {
			if (file.extension === "md") {
				//The basename does not include an extension
				name = file.basename;
			} else {
				//The name includes an extension
				name = file.name;
			}
		}

		let path: string | null = null;
		if (file) {
			if (file.parent && file.parent.path !== "/") {
				path = file.parent.path + "/";
			}
		}

		return (
			<div
				tabIndex={0}
				className="NLT__suggest-item NLT__focusable"
				ref={ref}
				css={css`
					padding: 4px 6px;
					margin: 2px 0;
					background-color: ${isHighlighted
						? "var(--background-modifier-hover)"
						: "var(--background-primary)"};
					&:hover {
						background-color: var(--background-modifier-hover);
					}
				`}
				onClick={handleClick}
			>
				<Text
					variant="semibold"
					size="xs"
					value={name}
					maxWidth="275px"
				/>
				{path && <Text value={path} size="xs" />}
			</div>
		);
	}
);

export default SuggestItem;
