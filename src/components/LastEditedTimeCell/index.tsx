import { dateTimeToString } from "src/services/string/conversion";

interface Props {
	time: number;
	useAutoWidth: boolean;
	shouldWrapOverflow: boolean;
}

export default function LastEditedTimeCell({
	time,
	useAutoWidth,
	shouldWrapOverflow,
}: Props) {
	let className = "NLT__last-edited-time-cell";

	if (useAutoWidth) {
		className += " NLT__auto-width";
	} else {
		if (shouldWrapOverflow) {
			className += " NLT__wrap-overflow";
		} else {
			className += " NLT__hidden-overflow";
		}
	}

	return <div className={className}>{dateTimeToString(time)}</div>;
}