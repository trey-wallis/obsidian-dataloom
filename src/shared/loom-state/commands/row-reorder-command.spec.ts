import RowReorderCommand from "./row-reorder-command";
import { createLoomState } from "../loom-state-factory";

describe("row-reorder-command", () => {
	it("moves the last row to the first row index when execute() is called", async () => {
		//Arrange
		const prevState = createLoomState(1, 3);
		const firstRow = prevState.model.rows[0].id;
		const lastRow = prevState.model.rows[2].id;
		const command = new RowReorderCommand(lastRow, firstRow);

		//Act
		const executeState = command.execute(prevState);

		//Assert
		expect(executeState.model.rows[0].id).toEqual(lastRow);
		expect(executeState.model.rows[1].id).toEqual(firstRow);
		expect(executeState.model.rows[2].id).toEqual(
			prevState.model.rows[1].id
		);
		expect(executeState.model.rows[0].index).toEqual(0);
		expect(executeState.model.rows[1].index).toEqual(1);
		expect(executeState.model.rows[2].index).toEqual(2);
	});
});
