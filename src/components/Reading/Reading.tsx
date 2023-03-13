import {IoFlash} from "react-icons/io5";
import {MdArrowForwardIos} from "react-icons/md";

export interface ReadingComponentInterface {
    creator: string,
    kwhValue: number,
    image: string,
    createdAt: Date,
    onClick: () => void,
}

export default function Reading(props: ReadingComponentInterface) {
    const {creator, kwhValue, image, createdAt, onClick} = props;
    
    return (
        <div className="flex gap-x-4 w-full my-2 py-2 cursor-pointer" onClick={onClick}>
            <div className="flex justify-center items-center">
                {/* CHANGE TO CARD COMPONENT ONCE CREATED */}
                <div className="flex justify-center items-center w-12 h-12 rounded-lg  bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                    <IoFlash className="w-7 h-7"/>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <span className="inline-block w-44">
                    <p className="align-top font-semibold text-black truncate ...">{creator}</p>
                </span>
                <p className="text-sm text-black-500">{createdAt.toLocaleDateString("en-GB")} at {createdAt.toLocaleTimeString("en-GB", {hour12: true})}</p>
            </div>

            <div className="flex flex-col justify-center ml-auto">
                <div className="flex gap-x-6 justify-center ml">
                    <p className="hidden font-semibold text-xl leading-relaxed sm:inline-block">{kwhValue} kWh</p>
                    <div className="flex justify-center items-center">
                        <MdArrowForwardIos className="w-4.5 h-4.5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}