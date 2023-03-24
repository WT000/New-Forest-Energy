import React from "react";
import { useQRCode } from "next-qrcode";

interface QRCodeProp {
	text: string;
	width?: number;
	margin?: number;
	color?: {
		dark: string;
		light: string;
	};
}

export default function QRCode(props: QRCodeProp) {
	const { text, width, margin, color } = props;
	const { SVG } = useQRCode();

	return (
		<a href={text}>
			<SVG
				text={text}
				options={{
					margin: margin ? margin : 0,
					width: width ? width : 200,
					color: color
						? color
						: {
								dark: "#010599FF",
								light: "#FFBF60FF",
						  },
				}}
			/>
		</a>
	);
}
