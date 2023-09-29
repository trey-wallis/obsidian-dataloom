import { Cell, Column, Row } from "src/shared/loom-state/types/loom-state";
import { ColumnChangeHandler } from "./hooks/use-column/types";
import { TableRow } from "../table/types";
import FooterCellContainer from "../footer-cell-container";
import CellNotFoundError from "src/shared/error/cell-not-found-error";

interface Props {
	showCalculationRow: boolean;
	firstColumnId: string;
	lastColumnId: string;
	visibleColumns: Column[];
	rows: Row[];
	onColumnChange: ColumnChangeHandler;
}

export default function getFooterRow({
	showCalculationRow,
	firstColumnId,
	lastColumnId,
	visibleColumns,
	rows,
	onColumnChange,
}: Props): TableRow | undefined {
	if (!showCalculationRow) return undefined;
	return {
		cells: [
			{
				id: firstColumnId,
				content: <></>,
			},
			...visibleColumns.map((column) => {
				const {
					id: columnId,
					type,
					currencyType,
					dateFormat,
					numberFormat,
					width,
					tags,
					calculationType,
				} = column;

				const columnCells: Cell[] = rows.map((row) => {
					const { cells } = row;
					const cell = cells.find(
						(cell) => cell.columnId === columnId
					);
					if (!cell)
						throw new CellNotFoundError({
							columnId,
							rowId: row.id,
						});
					return cell;
				});

				return {
					id: columnId,
					content: (
						<FooterCellContainer
							columnId={columnId}
							columnTags={tags}
							numberFormat={numberFormat}
							currencyType={currencyType}
							dateFormat={dateFormat}
							columnCells={columnCells}
							rows={rows}
							calculationType={calculationType}
							width={width}
							cellType={type}
							onColumnChange={onColumnChange}
						/>
					),
				};
			}),
			{
				id: lastColumnId,
				content: <></>,
			},
		],
	};
}
