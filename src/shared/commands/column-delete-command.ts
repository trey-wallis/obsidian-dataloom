import { ColumnIdError } from "../table-state/table-error";
import {
	Column,
	TableState,
	HeaderCell,
	BodyCell,
	FooterCell,
	Tag,
	FilterRule,
} from "../table-state/types";
import TableStateCommand from "../table-state/table-state-command";
import {
	CommandUndoError,
	DeleteCommandArgumentsError,
} from "./command-errors";

export default class ColumnDeleteCommand implements TableStateCommand {
	columnId?: string;
	last?: boolean;

	deletedColumn?: { arrIndex: number; column: Column };
	deletedHeaderCells?: { arrIndex: number; cell: HeaderCell }[];
	deletedBodyCells?: { arrIndex: number; cell: BodyCell }[];
	deletedFooterCells?: { arrIndex: number; cell: FooterCell }[];
	deletedTags?: { arrIndex: number; tag: Tag }[];
	deletedFilterRules?: { arrIndex: number; rule: FilterRule }[];

	constructor(options: { id?: string; last?: boolean }) {
		const { id, last } = options;
		if (id === undefined && last === undefined)
			throw new DeleteCommandArgumentsError();

		this.columnId = id;
		this.last = last;
	}

	// original 0,1,2,3
	// delete column 0,2
	// insert first value 0,1,2
	// insert second value 0,1,2,3

	execute(prevState: TableState): TableState {
		const {
			columns,
			headerCells,
			bodyCells,
			footerCells,
			tags,
			filterRules,
		} = prevState.model;

		//Maintains at least 1 column in the table
		if (columns.length === 1) return prevState;

		let id = this.columnId;
		if (this.last) {
			id = columns[columns.length - 1].id;
		}

		const columnToDelete = columns.find((column) => column.id === id);
		if (!columnToDelete) throw new ColumnIdError(id!);
		this.deletedColumn = {
			arrIndex: columns.findIndex((column) => column.id === id),
			column: structuredClone(columnToDelete),
		};

		const headerCellsToDelete = headerCells.filter(
			(cell) => cell.columnId === id
		);
		this.deletedHeaderCells = headerCellsToDelete.map((cell) => ({
			arrIndex: headerCells.findIndex((c) => c.id === cell.id),
			cell: structuredClone(cell),
		}));

		const bodyCellsToDelete = bodyCells.filter(
			(cell) => cell.columnId === id
		);
		this.deletedBodyCells = bodyCellsToDelete.map((cell) => ({
			arrIndex: bodyCells.findIndex((c) => c.id === cell.id),
			cell: structuredClone(cell),
		}));

		const footerCellsToDelete = footerCells.filter(
			(cell) => cell.columnId === id
		);
		this.deletedFooterCells = footerCellsToDelete.map((cell) => ({
			arrIndex: footerCells.findIndex((c) => c.id === cell.id),
			cell: structuredClone(cell),
		}));

		const tagsToDelete = tags.filter((tag) => tag.columnId === id);
		this.deletedTags = tagsToDelete.map((tag) => ({
			arrIndex: tags.findIndex((t) => t.id === tag.id),
			tag: structuredClone(tag),
		}));

		const rulesToDelete = filterRules.filter(
			(rule) => rule.columnId === id
		);
		this.deletedFilterRules = rulesToDelete.map((rule) => ({
			arrIndex: filterRules.findIndex((r) => r.id === rule.id),
			rule: structuredClone(rule),
		}));

		return {
			...prevState,
			model: {
				...prevState.model,
				columns: columns.filter((column) => column.id !== id),
				headerCells: headerCells.filter((cell) => cell.columnId !== id),
				bodyCells: bodyCells.filter((cell) => cell.columnId !== id),
				footerCells: footerCells.filter((cell) => cell.columnId !== id),
				tags: tags.filter((tag) => tag.columnId !== id),
				filterRules: filterRules.filter((rule) => rule.columnId !== id),
			},
		};
	}

	undo(prevState: TableState): TableState {
		if (
			this.deletedColumn === undefined ||
			this.deletedBodyCells === undefined ||
			this.deletedFilterRules === undefined ||
			this.deletedFooterCells === undefined ||
			this.deletedHeaderCells === undefined ||
			this.deletedTags === undefined
		)
			throw new CommandUndoError();

		const {
			columns,
			headerCells,
			bodyCells,
			footerCells,
			tags,
			filterRules,
		} = prevState.model;

		const updatedColumns = [...columns];
		updatedColumns.splice(
			this.deletedColumn.arrIndex,
			0,
			this.deletedColumn.column
		);

		const updatedHeaderCells = [...headerCells];
		this.deletedHeaderCells.forEach((cell) => {
			updatedHeaderCells.splice(cell.arrIndex, 0, cell.cell);
		});

		const updatedBodyCells = [...bodyCells];
		this.deletedBodyCells.forEach((cell) => {
			updatedBodyCells.splice(cell.arrIndex, 0, cell.cell);
		});

		const updatedFooterCells = [...footerCells];
		this.deletedFooterCells.forEach((cell) => {
			updatedFooterCells.splice(cell.arrIndex, 0, cell.cell);
		});

		const updatedTags = [...tags];
		this.deletedTags.forEach((tag) => {
			updatedTags.splice(tag.arrIndex, 0, tag.tag);
		});

		const updatedFilterRules = [...filterRules];
		this.deletedFilterRules.forEach((rule) => {
			updatedFilterRules.splice(rule.arrIndex, 0, rule.rule);
		});

		return {
			...prevState,
			model: {
				...prevState.model,
				columns: updatedColumns,
				headerCells: updatedHeaderCells,
				bodyCells: updatedBodyCells,
				footerCells: updatedFooterCells,
				tags: updatedTags,
				filterRules: updatedFilterRules,
			},
		};
	}
}
