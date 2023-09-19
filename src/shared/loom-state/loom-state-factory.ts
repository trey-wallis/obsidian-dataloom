import { randomColor } from "src/shared/color";
import {
	AspectRatio,
	BodyCell,
	BodyRow,
	Calculation,
	CellType,
	Column,
	CurrencyType,
	DateFormat,
	Filter,
	FilterCondition,
	FooterCell,
	FooterRow,
	HeaderCell,
	HeaderRow,
	PaddingSize,
	SortDir,
	LoomState,
	Tag,
	TextFilter,
	MultiTagFilter,
	TagFilter,
	CheckboxFilter,
	CheckboxFilterCondition,
	FileFilter,
} from "./types/loom-state";

import { v4 as uuidv4 } from "uuid";
import { CHECKBOX_MARKDOWN_UNCHECKED } from "src/shared/constants";
import { Color } from "src/shared/loom-state/types/loom-state";

export const createColumn = (options?: { cellType?: CellType }): Column => {
	const { cellType = CellType.TEXT } = options || {};
	return {
		id: uuidv4(),
		sortDir: SortDir.NONE,
		isVisible: true,
		width: "140px",
		type: cellType,
		numberPrefix: "",
		numberSuffix: "",
		numberSeparator: "",
		currencyType: CurrencyType.UNITED_STATES,
		dateFormat: DateFormat.MM_DD_YYYY,
		shouldWrapOverflow: true,
		tags: [],
		calculationType: Calculation.NONE,
		aspectRatio: AspectRatio.UNSET,
		horizontalPadding: PaddingSize.UNSET,
		verticalPadding: PaddingSize.UNSET,
	};
};

export const createHeaderRow = (): HeaderRow => {
	return {
		id: uuidv4(),
	};
};

export const createFooterRow = (): FooterRow => {
	return {
		id: uuidv4(),
	};
};

export const createBodyRow = (index: number): BodyRow => {
	const currentTime = Date.now();
	return {
		id: uuidv4(),
		index,
		creationTime: currentTime,
		lastEditedTime: currentTime,
	};
};

export const createHeaderCell = (
	columnId: string,
	rowId: string
): HeaderCell => {
	return {
		id: uuidv4(),
		columnId,
		rowId,
		markdown: "New Column",
	};
};

export const createBodyCell = (
	columnId: string,
	rowId: string,
	options: {
		cellType?: CellType;
		tagIds?: string[];
		markdown?: string;
		dateTime?: number | null;
	} = {}
): BodyCell => {
	const {
		cellType,
		tagIds = [],
		markdown = "",
		dateTime = null,
	} = options ?? {};
	return {
		id: uuidv4(),
		isExternalLink: false,
		columnId,
		rowId,
		dateTime,
		markdown:
			markdown === "" && cellType === CellType.CHECKBOX
				? CHECKBOX_MARKDOWN_UNCHECKED
				: markdown,
		tagIds,
	};
};

export const createTextFilter = (
	columnId: string,
	options?: {
		condition?: FilterCondition;
		isEnabled?: boolean;
		text?: string;
	}
): TextFilter => {
	const {
		condition = FilterCondition.IS,
		isEnabled = true,
		text = "",
	} = options || {};
	return {
		id: uuidv4(),
		columnId,
		type: CellType.TEXT,
		operator: "or",
		condition,
		text,
		isEnabled,
	};
};

export const createFileFilter = (
	columnId: string,
	options?: {
		condition?: FilterCondition;
		isEnabled?: boolean;
		text?: string;
	}
): FileFilter => {
	const {
		condition = FilterCondition.IS,
		isEnabled = true,
		text = "",
	} = options || {};
	return {
		id: uuidv4(),
		columnId,
		type: CellType.FILE,
		operator: "or",
		condition,
		text,
		isEnabled,
	};
};

export const createCheckboxFilter = (
	columnId: string,
	options?: {
		condition?: CheckboxFilterCondition;
		isEnabled?: boolean;
		text?: string;
	}
): CheckboxFilter => {
	const {
		condition = FilterCondition.IS,
		isEnabled = true,
		text = "",
	} = options || {};
	return {
		id: uuidv4(),
		columnId,
		type: CellType.CHECKBOX,
		operator: "or",
		condition,
		text,
		isEnabled,
	};
};

export const createTagFilter = (
	columnId: string,
	options?: {
		condition?:
			| FilterCondition.IS
			| FilterCondition.IS_NOT
			| FilterCondition.IS_EMPTY
			| FilterCondition.IS_NOT_EMPTY;
		tagId?: string;
		isEnabled?: boolean;
	}
): TagFilter => {
	const {
		condition = FilterCondition.IS,
		isEnabled = true,
		tagId = "",
	} = options || {};
	return {
		id: uuidv4(),
		columnId,
		type: CellType.TAG,
		operator: "or",
		condition,
		tagId,
		isEnabled,
	};
};

export const createMultiTagFilter = (
	columnId: string,
	options?: {
		condition?:
			| FilterCondition.CONTAINS
			| FilterCondition.DOES_NOT_CONTAIN
			| FilterCondition.IS_EMPTY
			| FilterCondition.IS_NOT_EMPTY;
		tagIds?: string[];
		isEnabled?: boolean;
	}
): MultiTagFilter => {
	const {
		condition = FilterCondition.CONTAINS,
		isEnabled = true,
		tagIds = [],
	} = options || {};
	return {
		id: uuidv4(),
		columnId,
		type: CellType.MULTI_TAG,
		operator: "or",
		condition,
		tagIds,
		isEnabled,
	};
};

export const createFooterCell = (
	columnId: string,
	rowId: string
): FooterCell => {
	return {
		id: uuidv4(),
		columnId,
		rowId,
	};
};

export const createTag = (
	markdown: string,
	options?: { color?: Color }
): Tag => {
	const { color = randomColor() } = options || {};
	return {
		id: uuidv4(),
		markdown: markdown,
		color,
	};
};

export const createTestLoomState = (
	numColumns: number,
	numRows: number,
	options?: {
		cellType?: CellType;
	}
): LoomState => {
	return createGenericLoomState(numColumns, numRows, {
		cellType: options?.cellType,
	});
};

export const createLoomState = (
	pluginVersion: string,
	defaultFrozenColumnCount: number
): LoomState => {
	return createGenericLoomState(1, 1, {
		pluginVersion,
		defaultFrozenColumnCount,
	});
};

const createGenericLoomState = (
	numColumns: number,
	numRows: number,
	options?: {
		cellType?: CellType;
		pluginVersion?: string;
		defaultFrozenColumnCount?: number;
	}
): LoomState => {
	const {
		cellType,
		pluginVersion = "1.0.0",
		defaultFrozenColumnCount = 1,
	} = options || {};
	//Create columns
	const columns: Column[] = [];
	for (let i = 0; i < numColumns; i++)
		columns.push(createColumn({ cellType }));

	//Create headers
	const headerRows: HeaderRow[] = [];
	headerRows.push(createHeaderRow());

	const headerCells: HeaderCell[] = [];

	for (let x = 0; x < numColumns; x++) {
		headerCells.push(createHeaderCell(columns[x].id, headerRows[0].id));
	}

	//Create body
	const bodyRows: BodyRow[] = [];
	for (let i = 0; i < numRows; i++) bodyRows.push(createBodyRow(i));

	const bodyCells: BodyCell[] = [];
	for (let y = 0; y < numRows; y++) {
		for (let x = 0; x < numColumns; x++) {
			bodyCells.push(createBodyCell(columns[x].id, bodyRows[y].id));
		}
	}

	//Create footers
	const footerRows: FooterRow[] = [];
	footerRows.push(createFooterRow());
	footerRows.push(createFooterRow());

	const footerCells: FooterCell[] = [];

	for (let y = 0; y < 2; y++) {
		for (let x = 0; x < numColumns; x++) {
			footerCells.push(createFooterCell(columns[x].id, footerRows[y].id));
		}
	}

	const filters: Filter[] = [];

	return {
		model: {
			columns,
			headerRows,
			bodyRows,
			footerRows,
			headerCells,
			bodyCells,
			footerCells,
			filters,
			settings: {
				numFrozenColumns: defaultFrozenColumnCount,
			},
		},
		pluginVersion,
	};
};
