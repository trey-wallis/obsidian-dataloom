import { css } from "@emotion/react";
import { useRenderMarkdown } from "src/obsidian-shim/development/render-utils";
import { appendOrReplaceFirstChild } from "src/shared/render/utils";
import { useOverflow } from "src/shared/spacing/hooks";

interface Props {
	shouldWrapOverflow: boolean;
	markdown: string;
}

export default function FileCell({ markdown, shouldWrapOverflow }: Props) {
	const { containerRef, renderRef } = useRenderMarkdown(markdown, false);

	const overflowStyle = useOverflow(shouldWrapOverflow);

	return (
		<div className="NLT__file-cell" css={overflowStyle}>
			<div
				css={css`
					p {
						margin: 0;
						text-align: left;
					}
				`}
				ref={(node) => {
					containerRef.current = node;
					appendOrReplaceFirstChild(node, renderRef.current);
				}}
			/>
		</div>
	);
}
