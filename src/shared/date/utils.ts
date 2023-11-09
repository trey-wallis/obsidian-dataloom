import {
	DateFormat,
	DateFormatSeparator,
} from "../loom-state/types/loom-state";

export const getDateFormatString = (
	format: DateFormat,
	separator: DateFormatSeparator
) => {
	switch (format) {
		case DateFormat.MM_DD_YYYY:
			return `MM${separator}DD${separator}YYYY`;
		case DateFormat.DD_MM_YYYY:
			return `DD${separator}MM${separator}YYYY`;
		case DateFormat.YYYY_MM_DD:
			return `YYYY${separator}MM${separator}DD`;
		default:
			throw new Error("Date format not supported.");
	}
};

export const getCurrentDateTime = () => {
	return new Date().toISOString();
};
