import { rowUpdateLastEditedTime } from "./row-state-operations";
import { BodyCell, FooterCell, HeaderCell, TableState } from "./types";

export const cellUpdateHeader = (
	prevState: TableState,
	cellId: string,
	key: keyof HeaderCell,
	value: unknown
) => {
	const { headerCells } = prevState.model;
	return {
		...prevState,
		model: {
			...prevState.model,
			headerCells: headerCells.map((cell) => {
				if (cell.id === cellId) {
					return {
						...cell,
						[key as keyof BodyCell]: value,
					};
				}
				return cell;
			}),
		},
	};
};

export const cellUpdateBody = (
	prevState: TableState,
	cellId: string,
	rowId: string,
	key: keyof BodyCell,
	value: unknown
) => {
	const { bodyCells, bodyRows } = prevState.model;
	return {
		...prevState,
		model: {
			...prevState.model,
			bodyCells: bodyCells.map((cell) => {
				if (cell.id === cellId) {
					return {
						...cell,
						[key as keyof BodyCell]: value,
					};
				}
				return cell;
			}),
			bodyRows: rowUpdateLastEditedTime(bodyRows, rowId),
		},
	};
};

export const cellUpdateFooter = (
	prevState: TableState,
	cellId: string,
	key: keyof FooterCell,
	value: unknown
) => {
	const { footerCells } = prevState.model;
	return {
		...prevState,
		model: {
			...prevState.model,
			footerCells: footerCells.map((cell) => {
				if (cell.id === cellId) {
					return {
						...cell,
						[key as keyof FooterCell]: value,
					};
				}
				return cell;
			}),
		},
	};
};