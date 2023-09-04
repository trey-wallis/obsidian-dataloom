import React from "react";

import Papa from "papaparse";

import DataTypeSelect from "./data-type-select";
import Stepper from "../shared/stepper";
import DataSourceSelect from "./data-source-select";
import UploadData from "./upload-data";

import { LoomState } from "src/shared/loom-state/types";
import { Step } from "../shared/stepper/types";
import {
	ImportColumn,
	DataSource,
	DataType,
	StepType,
	ColumnMatch,
} from "./types";

import MatchColumns from "./match-columns";

import {
	parseMarkdownTableIntoTokens,
	tableTokensToArr,
	validateMarkdownTable,
} from "./table-utils";

import CellNotFoundError from "src/shared/error/cell-not-found-error";
import { useMenuOperations } from "../shared/menu/hooks";
import "./styles.css";

interface Props {
	state: LoomState;
	onStateChange: (value: LoomState) => void;
}

export default function ImportApp({ state, onStateChange }: Props) {
	const { onCloseAll } = useMenuOperations();

	//Step 1
	const [dataSource, setDataSource] = React.useState(DataSource.UNSELECTED);

	//Step 2
	const [dataType, setDataType] = React.useState(DataType.UNSELECTED);

	//Step 3
	const [fileName, setFileName] = React.useState<string | null>(null);
	const [rawData, setRawData] = React.useState("");
	const [data, setData] = React.useState<string[][]>([]);
	const [errorText, setErrorText] = React.useState<string | null>(null);

	//Step 4
	const [enabledColumnIndices, setEnabledColumnIndices] = React.useState<
		number[]
	>([]);
	const [toggleColumns, setToggleColumns] = React.useState(false);
	const [columnMatches, setColumnMatches] = React.useState<ColumnMatch[]>([]);

	function handleColumnToggle(index: number) {
		setEnabledColumnIndices((prevState) => {
			if (prevState.includes(index)) {
				return prevState.filter((i) => i !== index);
			} else {
				return [...prevState, index];
			}
		});
	}

	function handleDataTypeChange(value: DataType) {
		setDataType(value);
		resetSubsequentSteps(StepType.DATA_TYPE);
	}

	function handleDataSourceChange(value: DataSource) {
		setDataSource(value);
		resetSubsequentSteps(StepType.DATA_SOURCE);
	}

	function handleRawDataChange(rawData: string, fileName?: string) {
		setRawData(rawData);
		if (fileName !== undefined) {
			setFileName(fileName);
		}
	}

	function handleAllColumnsToggle() {
		if (toggleColumns) {
			setEnabledColumnIndices(data[0].map((_, i) => i));
		} else {
			setEnabledColumnIndices([]);
		}
		setToggleColumns((prevState) => !prevState);
	}

	function handleColumnMatch(index: number, columnId: string) {
		setColumnMatches((prevState) => {
			const filtered = prevState.filter((match) => match.index !== index);
			const newState = [...filtered, { index, columnId }];
			return newState;
		});
	}

	/**
	 * Resets the previous steps to their initial state.
	 * @param currentIndex
	 */
	function resetSubsequentSteps(currentType: StepType) {
		if (currentType !== StepType.DATA_SOURCE) {
			setDataSource(DataSource.UNSELECTED);
		}
		if (currentType !== StepType.UPLOAD_DATA) {
			setRawData("");
			setErrorText(null);
			setFileName(null);
			setData([]);
		}
		if (currentType !== StepType.MATCH_COLUMNS) {
			setEnabledColumnIndices([]);
			setToggleColumns(false);
			setColumnMatches([]);
		}
	}

	const columns: ImportColumn[] = [
		...state.model.columns.map((column) => {
			const { id, type } = column;
			const cell = state.model.headerCells.find((c) => c.columnId === id);
			if (!cell)
				throw new CellNotFoundError({
					columnId: id,
				});
			const { markdown } = cell;
			return {
				id,
				name: markdown,
				type,
			};
		}),
	];

	const steps: Step[] = [
		{
			title: "Select data type",
			content: (
				<DataTypeSelect
					value={dataType}
					onChange={handleDataTypeChange}
				/>
			),
			canContinue: dataType !== DataType.UNSELECTED,
		},
		{
			title: "Select data source",
			content: (
				<DataSourceSelect
					value={dataSource}
					onChange={handleDataSourceChange}
				/>
			),
			canContinue: dataSource !== DataSource.UNSELECTED,
		},
		{
			title: "Upload data",
			content: (
				<UploadData
					source={dataSource}
					fileName={fileName}
					dataType={dataType}
					errorText={errorText}
					rawData={rawData}
					onRawDataChange={handleRawDataChange}
				/>
			),
			canContinue: rawData !== "",
			onContinue: () => {
				if (dataType === DataType.CSV) {
					const { data, errors } = Papa.parse(rawData);
					const parsedArr = data as string[][];
					if (errors.length > 0) {
						setErrorText(errors[0].message);
						return false;
					}
					setData(parsedArr);
					setEnabledColumnIndices(parsedArr[0].map((_, i) => i));
				} else if (dataType === DataType.MARKDOWN) {
					try {
						const tokens = parseMarkdownTableIntoTokens(rawData);
						validateMarkdownTable(tokens);
						const parsedArr = tableTokensToArr(tokens);
						setData(parsedArr);
						setEnabledColumnIndices(parsedArr[0].map((_, i) => i));
					} catch (err: unknown) {
						setErrorText((err as Error).message);
						return false;
					}
				}
				return true;
			},
		},
		{
			title: "Match columns",
			content: (
				<MatchColumns
					data={data}
					columnMatches={columnMatches}
					columns={columns}
					enabledColumnIndices={enabledColumnIndices}
					onColumnToggle={handleColumnToggle}
					onAllColumnsToggle={handleAllColumnsToggle}
					onColumnMatch={handleColumnMatch}
				/>
			),
			canContinue: columnMatches.length === enabledColumnIndices.length,
		},
	];

	function handleModalClick(e: React.MouseEvent) {
		e.stopPropagation();
		onCloseAll();
	}

	function handleFinishClick() {}

	return (
		<div className="dataloom-import-app" onClick={handleModalClick}>
			<Stepper steps={steps} onFinishClick={handleFinishClick} />
		</div>
	);
}
