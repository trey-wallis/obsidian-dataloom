import Button from "src/components/Button";
import Divider from "src/components/Divider";
import Icon from "src/components/Icon";
import Padding from "src/components/Padding";
import Stack from "src/components/Stack";

import { IconType } from "src/services/icon/types";

interface Props {
	title: string;
	children: React.ReactNode;
	onBackClick: () => void;
}

export default function Submenu({ title, children, onBackClick }: Props) {
	return (
		<>
			<Padding padding="md">
				<Stack spacing="md" isVertical>
					<Stack>
						<Button
							icon={<Icon type={IconType.KEYBOARD_BACKSPACE} />}
							onClick={() => onBackClick()}
						/>
						<div className="NLT__header-menu-title">{title}</div>
					</Stack>
					<Divider />
				</Stack>
			</Padding>
			<div>{children}</div>
		</>
	);
}
