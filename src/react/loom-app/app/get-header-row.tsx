import { Column } from "src/shared/loom-state/types/loom-state";
import HeaderCellContainer from "../header-cell-container";
import NewColumnButton from "../new-column-button";
import {
	ColumnAddClickHandler,
	ColumnChangeHandler,
	ColumnDeleteClickHandler,
	ColumnTypeClickHandler,
} from "./hooks/use-column/types";
import { TableRow } from "../table/types";
import { FrontMatterType } from "../../../shared/deserialize-frontmatter/types";
import { cellTypeToFrontMatterKeyTypes } from "../../../shared/deserialize-frontmatter/utils";

interface Props {
	allFrontMatterKeys: Map<FrontMatterType, string[]>;
	firstColumnId: string;
	lastColumnId: string;
	visibleColumns: Column[];
	numColumns: number;
	numSources: number;
	numFrozenColumns: number;
	resizingColumnId: string | null;
	onColumnChange: ColumnChangeHandler;
	onColumnDeleteClick: ColumnDeleteClickHandler;
	onColumnAddClick: ColumnAddClickHandler;
	onColumnTypeChange: ColumnTypeClickHandler;
	onFrozenColumnsChange: (value: number) => void;
}

export default function getHeaderRow({
	allFrontMatterKeys,
	firstColumnId,
	lastColumnId,
	visibleColumns,
	numColumns,
	numSources,
	numFrozenColumns,
	resizingColumnId,
	onColumnChange,
	onColumnDeleteClick,
	onColumnAddClick,
	onColumnTypeChange,
	onFrozenColumnsChange,
}: Props): TableRow {
	return {
		id: "header-row",
		cells: [
			{
				id: firstColumnId,
				content: <div className="dataloom-cell--left-corner" />,
			},
			...visibleColumns.map((column, i) => {
				const { id, type } = column;
				const frontmatterTypes = cellTypeToFrontMatterKeyTypes(type);
				let frontmatterKeys: string[] = [];
				frontmatterTypes.forEach((type) => {
					frontmatterKeys = frontmatterKeys.concat(
						allFrontMatterKeys.get(type) ?? []
					);
				});
				return {
					id,
					content: (
						<HeaderCellContainer
							key={id}
							index={i}
							column={column}
							frontmatterKeys={frontmatterKeys}
							numColumns={numColumns}
							numSources={numSources}
							numFrozenColumns={numFrozenColumns}
							resizingColumnId={resizingColumnId}
							onColumnChange={onColumnChange}
							onColumnDeleteClick={onColumnDeleteClick}
							onColumnTypeChange={onColumnTypeChange}
							onFrozenColumnsChange={onFrozenColumnsChange}
						/>
					),
				};
			}),
			{
				id: lastColumnId,
				content: <NewColumnButton onClick={onColumnAddClick} />,
			},
		],
	};
}
