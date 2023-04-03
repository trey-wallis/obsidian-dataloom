import { useMemo } from "react";

import { TableModel, SortDir } from "src/services/tableState/types";
import Icon from "../Icon";
import { IconType } from "src/services/icon/types";

import { useAppSelector } from "src/services/redux/hooks";
import Stack from "../Stack";
import Button from "src/components/Button";

import { ColumnIdError } from "src/services/tableState/error";
import SearchBar from "./components/SearchBar";

import "./styles.css";

interface SortBubbleProps {
	sortDir: SortDir;
	markdown: string;
	isDarkMode: boolean;
	onRemoveClick: () => void;
}

const SortBubble = ({
	isDarkMode,
	sortDir,
	markdown,
	onRemoveClick,
}: SortBubbleProps) => {
	return (
		<div className="NLT__sort-bubble">
			<Stack spacing="sm">
				{sortDir === SortDir.ASC ? (
					<Icon icon={IconType.ARROW_UPWARD} />
				) : (
					<Icon icon={IconType.ARROW_DOWNWARD} />
				)}
				<span>{markdown}</span>
				<Button
					icon={<Icon icon={IconType.CLOSE} />}
					onClick={onRemoveClick}
				/>
			</Stack>
		</div>
	);
};

interface SortButtonListProps {
	bubbles: { sortDir: SortDir; markdown: string; columnId: string }[];
	onRemoveClick: (columnId: string) => void;
}

const SortBubbleList = ({ bubbles, onRemoveClick }: SortButtonListProps) => {
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
	return (
		<Stack spacing="sm">
			{bubbles.map((bubble, i) => (
				<SortBubble
					isDarkMode={isDarkMode}
					key={i}
					sortDir={bubble.sortDir}
					markdown={bubble.markdown}
					onRemoveClick={() => onRemoveClick(bubble.columnId)}
				/>
			))}
		</Stack>
	);
};

interface Props {
	model: TableModel;
	onSortRemoveClick: (columnId: string) => void;
}
export default function OptionBar({ model, onSortRemoveClick }: Props) {
	const bubbles = useMemo(() => {
		return model.cells
			.filter((c) => c.isHeader)
			.filter((c) => {
				const columnId = c.columnId;
				const column = model.columns.find((c) => c.id == columnId);
				if (!column) throw new ColumnIdError(columnId);
				return column.sortDir !== SortDir.NONE;
			})
			.map((c) => {
				const columnId = c.columnId;
				const column = model.columns.find((c) => c.id == columnId);
				if (!column) throw new ColumnIdError(columnId);
				return {
					columnId: c.columnId,
					markdown: c.markdown,
					sortDir: column.sortDir,
				};
			});
	}, [model]);

	return (
		<div className="NLT__option-bar">
			<SearchBar />
			<SortBubbleList
				bubbles={bubbles}
				onRemoveClick={onSortRemoveClick}
			/>
		</div>
	);
}
