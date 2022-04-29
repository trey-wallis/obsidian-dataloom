import React from "react";
import { SORT } from "src/app/components/HeaderMenu/constants";
import { v4 as uuidv4 } from "uuid";

import { CELL_TYPE } from "../../constants";

export interface AppData {
	updateTime: number;
	headers: Header[];
	rows: Row[];
	cells: Cell[];
	tags: Tag[];
}
export interface ErrorData {
	columnIds: number[];
}

export const instanceOfErrorData = (object: any): object is ErrorData => {
	return "columnIds" in object;
};
export interface NltSettings {
	appData: { [filePath: string]: { [tableId: string]: AppData } };
}

export const DEFAULT_SETTINGS: NltSettings = {
	appData: {},
};
export interface Header {
	id: string;
	content: string;
	sortName: string;
	width: string;
	type: string;
}
export interface TableHeader extends Header {
	component: React.ReactNode;
}

export interface Row {
	id: string;
	creationTime: number;
}

export interface TableRow extends Row {
	component: React.ReactNode;
}
export interface Cell {
	id: string;
	rowId: string;
	headerId: string;
	content: string;
	type: string;
	expectedType: string | null;
}

export interface Tag {
	id: string;
	headerId: string;
	content: string;
	color: string;
	selected: string[];
}

export const initialHeader = (content: string): Header => {
	return {
		id: uuidv4(),
		content,
		sortName: SORT.DEFAULT.name,
		width: "100px",
		type: CELL_TYPE.TEXT,
	};
};

export const initialRow = (id: string, creationTime: number): Row => {
	return {
		id,
		creationTime,
	};
};

export const initialCell = (
	id: string,
	rowId: string,
	headerId: string,
	type: string,
	content: string,
	expectedType: string | null = null
): Cell => {
	return {
		id,
		rowId,
		headerId,
		type,
		content,
		expectedType,
	};
};

export const initialTag = (
	headerId: string,
	cellId: string,
	content: string,
	color: string
): Tag => {
	return {
		id: uuidv4(),
		headerId,
		content,
		color,
		selected: [cellId],
	};
};

export const initialHeaderMenuState = {
	left: 0,
	top: 0,
	id: "",
	index: 0,
	content: "",
	type: CELL_TYPE.TEXT,
};
