import { IoFootsteps } from "react-icons/io5";

interface InstructionsLayoutProps {
    text: string;
}

export default function InstructionsLayout(props: InstructionsLayoutProps) {
    const {text} = props;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-[94%] h-[90%] p-2">
                <div className="flex flex-row">
                    <div className="py-1 md:py-2 pr-6"><IoFootsteps size="32" /></div>
                    <div className="py-2 md:py-3 text-lg font-bold">Instructions</div>
                </div>
                <div className="pt-2 text-xs md:text-base">{text}</div>
            </div>
        </div>
    )
}