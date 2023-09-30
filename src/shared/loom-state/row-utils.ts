import CellNotFoundError from "../error/cell-not-found-error";
import { CellType, Column, Row } from "./types/loom-state";

export const filterUniqueRows = (columns: Column[], rows: Row[]) => {
	const uniqueValues: string[] = [];

	// Filter the array to include only objects with unique content values
	return rows.filter((row) => {
		if (row.sourceId === null) return true;

		const { cells } = row;
		for (const column of columns) {
			const { id, type } = column;
			if (type !== CellType.SOURCE_FILE) continue;
			const cell = cells.find((cell) => cell.columnId === id);
			if (!cell) throw new CellNotFoundError({ columnId: id });

			const { content } = cell;
			console.log(content);
			if (!uniqueValues.includes(content)) {
				uniqueValues.push(content);
				return true;
			}
			console.log("False");
			return false;
		}
	});
};
