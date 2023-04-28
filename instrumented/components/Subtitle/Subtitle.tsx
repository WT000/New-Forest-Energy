interface SubtitleProps {
	text1: string;
	text2?: string;
	showbar: boolean;
}

export default function Subtitle(props: SubtitleProps) {
	const { text1, text2, showbar } = props;

	let bar = ""
	if(showbar) bar = "h-[0px] w-full mx-auto border-b-2 border-[#DCDCDD]" 

	return (
		<div className="">
			<div className="mb-4 flex">
				<div className="font-bold text-lg w-[80%]">{text1}</div>
				<div className="text-right text-black-500 text-sm w-[20%]">{text2}</div>
			</div>
			<div className={`${bar}`}></div>
		</div>
		
	);
	
}
