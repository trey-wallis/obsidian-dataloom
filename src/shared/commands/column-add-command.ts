import {
	BodyCell,
	Column,
	FooterCell,
	HeaderCell,
	DashboardState,
} from "../types";
import {
	createBodyCell,
	createColumn,
	createFooterCell,
	createHeaderCell,
} from "src/data/table-state-factory";
import DashboardStateCommand from "../dashboard-state/table-state-command";

export default class ColumnAddCommand extends DashboardStateCommand {
	private addedColumn: Column;
	private addedHeaderCells: HeaderCell[];
	private addedBodyCells: BodyCell[];
	private addedFooterCells: FooterCell[];

	execute(prevState: DashboardState): DashboardState {
		super.onExecute();

		const {
			headerCells,
			bodyCells,
			footerCells,
			columns,
			headerRows,
			bodyRows,
			footerRows,
		} = prevState.model;

		this.addedColumn = createColumn();

		this.addedHeaderCells = headerRows.map((row) =>
			createHeaderCell(this.addedColumn.id, row.id)
		);

		this.addedBodyCells = bodyRows.map((row) =>
			createBodyCell(this.addedColumn.id, row.id)
		);

		this.addedFooterCells = footerRows.map((row) =>
			createFooterCell(this.addedColumn.id, row.id)
		);

		return {
			...prevState,
			model: {
				...prevState.model,
				columns: [...columns, this.addedColumn],
				headerCells: [...headerCells, ...this.addedHeaderCells],
				bodyCells: [...bodyCells, ...this.addedBodyCells],
				footerCells: [...footerCells, ...this.addedFooterCells],
			},
		};
	}

	redo(prevState: DashboardState): DashboardState {
		super.onRedo();

		const { headerCells, bodyCells, footerCells, columns } =
			prevState.model;

		return {
			...prevState,
			model: {
				...prevState.model,
				columns: [...columns, this.addedColumn],
				headerCells: [...headerCells, ...this.addedHeaderCells],
				bodyCells: [...bodyCells, ...this.addedBodyCells],
				footerCells: [...footerCells, ...this.addedFooterCells],
			},
		};
	}

	undo(prevState: DashboardState): DashboardState {
		super.onUndo();

		const { columns, headerCells, bodyCells, footerCells } =
			prevState.model;

		const { id } = this.addedColumn;
		return {
			...prevState,
			model: {
				...prevState.model,
				columns: columns.filter((column) => column.id !== id),
				headerCells: headerCells.filter((cell) => cell.columnId !== id),
				bodyCells: bodyCells.filter((cell) => cell.columnId !== id),
				footerCells: footerCells.filter((cell) => cell.columnId !== id),
			},
		};
	}
}
