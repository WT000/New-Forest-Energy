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
		<div className="w-full h-[400px] md:w-[500px] md:h-[500px] bg-white-100 flex items-center justify-center m-auto rounded-[20px]">
			<a href={text}>
				<SVG
					text={text}
					options={{
						margin: margin ? margin : 0,
						width: width ? width : 300,
						color: color
							? color
							: {
									dark: "#000000",
									light: "#FFFFFF",
							},
					}}
				/>
			</a>
		</div>
	);
}
