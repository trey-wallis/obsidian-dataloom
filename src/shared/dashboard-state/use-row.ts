import { useLogger } from "../logger";
import { useTableState } from "./dashboard-state-context";
import RowAddCommand from "../commands/row-add-command";
import RowDeleteCommand from "../commands/row-delete-command";
import React from "react";

export const useRow = () => {
	const logger = useLogger();
	const { doCommand } = useTableState();

	const handleRowDeleteClick = React.useCallback(
		(rowId: string) => {
			logger("handleRowDeleteClick", {
				rowId,
			});
			doCommand(new RowDeleteCommand({ id: rowId }));
		},
		[doCommand, logger]
	);

	function handleNewRowClick() {
		logger("handleNewRowClick");
		doCommand(new RowAddCommand());
	}

	return {
		handleNewRowClick,
		handleRowDeleteClick,
	};
};
