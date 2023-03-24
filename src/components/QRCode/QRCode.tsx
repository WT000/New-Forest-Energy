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
	const { text } = props;
	const { SVG } = useQRCode();

	return (
		<a href={text}>
			<SVG
				text={text}
				options={{
					margin: 0,
					width: 200,
					color: {
						dark: "#010599FF",
						light: "#FFBF60FF",
					},
				}}
			/>
		</a>
	);
}
