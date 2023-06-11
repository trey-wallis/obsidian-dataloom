import Papa from "papaparse";

import { tableStateToArray } from "./table-state-to-array";
import { TableState } from "../types";

export const exportToCSV = (tableState: TableState): string => {
	const arr = tableStateToArray(tableState);
	return Papa.unparse(arr);
};
