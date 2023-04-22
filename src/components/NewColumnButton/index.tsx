import { IconType } from "src/services/icon/types";
import Button from "../Button";
import Icon from "../Icon";

import "./styles.css";

interface Props {
	onClick: () => void;
}

export default function NewColumnButton({ onClick }: Props) {
	return (
		<div className="NLT__new-column">
			<Button
				icon={<Icon type={IconType.ADD} />}
				ariaLabel="New column"
				onClick={() => onClick()}
			/>
		</div>
	);
}