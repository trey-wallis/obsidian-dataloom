import Stack from "src/react/shared/stack";
import { ExportType } from "./types";

interface Props {
	value: ExportType;
	onChange: (value: ExportType) => void;
}

export default function ExportTypeSelect({ value, onChange }: Props) {
	return (
		<Stack isVertical spacing="xl">
			<label htmlFor="type-select">File Type</label>
			<select
				id="type-select"
				value={value}
				onChange={(e) => onChange(e.target.value as ExportType)}
			>
				{Object.values(ExportType).map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
		</Stack>
	);
}
