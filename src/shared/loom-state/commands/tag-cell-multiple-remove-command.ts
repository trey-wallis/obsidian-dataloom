import LoomStateCommand from "./loom-state-command";
import {
	Cell,
	CellType,
	LoomState,
	MultiTagCell,
	Row,
} from "../types/loom-state";
import RowNotFoundError from "src/shared/error/row-not-found-error";
import { getCurrentDateTime } from "src/shared/date/utils";
import { mapCellsToColumn } from "../utils/column-utils";
import ColumnNotFoundError from "src/shared/error/column-not-found-error";

export default class TagCellMultipleRemoveCommand extends LoomStateCommand {
	private cellId: string;
	private tagIds: string[];

	private targetRowId: string;

	private originalLastEditedDateTime: string;
	private updatedLastEditedDateTime: string;

	private originalTagIds: string[];

	constructor(cellId: string, tagIds: string[]) {
		super(true);
		this.cellId = cellId;
		this.tagIds = tagIds;
	}

	execute(prevState: LoomState): LoomState {
		super.onExecute();

		const { columns, rows } = prevState.model;

		const row = rows.find((row) =>
			row.cells.find((cell) => cell.id === this.cellId)
		);
		if (!row) throw new RowNotFoundError();

		this.targetRowId = row.id;
		this.originalLastEditedDateTime = row.lastEditedDateTime;

		const cellsToColumn = mapCellsToColumn(columns, rows);
		const nextRows: Row[] = rows.map((row) => {
			const { cells } = row;
			const nextCells: Cell[] = cells.map((cell) => {
				const { id } = cell;

				if (id === this.cellId) {
					const column = cellsToColumn.get(cell.columnId);
					if (!column)
						throw new ColumnNotFoundError({
							id: cell.columnId,
						});

					const { type } = column;
					if (type === CellType.MULTI_TAG) {
						const { tagIds } = cell as MultiTagCell;
						this.originalTagIds = [...tagIds];

						const updatedTagIds = tagIds.filter(
							(id) => !this.tagIds.includes(id)
						);
						return {
							...cell,
							tagIds: updatedTagIds,
						};
					} else {
						throw new Error("Cell type is not multi tag.");
					}
				}
				return cell;
			});
			if (row.id === this.targetRowId) {
				const newEditedDateTime = getCurrentDateTime();
				this.updatedLastEditedDateTime = newEditedDateTime;
				return {
					...row,
					lastEditedDateTime: newEditedDateTime,
					cells: nextCells,
				};
			}
			return row;
		});

		return {
			...prevState,
			model: {
				...prevState.model,
				rows: nextRows,
			},
		};
	}

	undo(prevState: LoomState): LoomState {
		super.onUndo();
		const { columns, rows } = prevState.model;

		const cellsToColumn = mapCellsToColumn(columns, rows);
		const nextRows: Row[] = rows.map((row) => {
			const { cells } = row;
			const nextCells: Cell[] = cells.map((cell) => {
				const { id } = cell;
				if (id === this.cellId) {
					const column = cellsToColumn.get(cell.columnId);
					if (!column)
						throw new ColumnNotFoundError({
							id: cell.columnId,
						});

					const { type } = column;
					if (type === CellType.MULTI_TAG) {
						return {
							...cell,
							tagIds: this.originalTagIds,
						};
					} else {
						throw new Error("Cell type is not multi tag.");
					}
				}
				return cell;
			});
			if (row.id === this.targetRowId) {
				return {
					...row,
					lastEditedDateTime: this.originalLastEditedDateTime,
					cells: nextCells,
				};
			}
			return row;
		});

		return {
			...prevState,
			model: {
				...prevState.model,
				rows: nextRows,
			},
		};
	}

	redo(prevState: LoomState): LoomState {
		super.onRedo();

		const { columns, rows } = prevState.model;

		const cellsToColumn = mapCellsToColumn(columns, rows);
		const nextRows: Row[] = rows.map((row) => {
			const { cells } = row;
			const nextCells: Cell[] = cells.map((cell) => {
				const { id } = cell;
				if (id === this.cellId) {
					const column = cellsToColumn.get(cell.columnId);
					if (!column)
						throw new ColumnNotFoundError({
							id: cell.columnId,
						});

					const { type } = column;
					if (type === CellType.MULTI_TAG) {
						const { tagIds } = cell as MultiTagCell;
						const updatedTagIds = tagIds.filter(
							(id) => !this.tagIds.includes(id)
						);
						return {
							...cell,
							tagIds: updatedTagIds,
						};
					} else {
						throw new Error("Cell type is not multi tag.");
					}
				}
				return cell;
			});
			if (row.id === this.targetRowId) {
				return {
					...row,
					lastEditedDateTime: this.updatedLastEditedDateTime,
					cells: nextCells,
				};
			}
			return row;
		});

		return {
			...prevState,
			model: {
				...prevState.model,
				rows: nextRows,
			},
		};
	}
}
