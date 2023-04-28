import { useEffect, useState } from "react";
import {IoFlash} from "react-icons/io5";
import {MdArrowForwardIos} from "react-icons/md";
import Card from "../Card/Card";
import { CardType } from "../Card/Card";

export interface ReadingComponentInterface {
    creator: string,
    value: number,
    image: string,
    createdAt: Date,
    onClick: () => void,
}

export default function Reading(props: ReadingComponentInterface) {
    const {creator, value, image, createdAt, onClick} = props;

    const [createdAtV, setCreatedAtV] = useState(createdAt.toLocaleDateString("en-GB"));
    useEffect(()=> {
        setCreatedAtV(createdAt.toLocaleString("en-GB", {hour12: true}))
    }, [createdAtV]);
    
    return (
        <div className="flex gap-x-4 w-full my-2 py-2 cursor-pointer" onClick={() => onClick()} data-test="instructionsbutton" >
            <div className="flex justify-center items-center" >
                <Card cardType={CardType.icon}>
                    <IoFlash className="w-5 h-5"/>
                </Card>
            </div>

            <div className="flex flex-col justify-center">
                <span className="inline-block w-44">
                    <p className="align-top font-semibold text-black truncate ...">{creator}</p>
                </span>
                <p className="text-sm text-black-500"> {createdAtV}</p>
            </div>

            <div className="flex flex-col justify-center ml-auto">
                <div className="flex gap-x-6 justify-center ml">
                    <p className="hidden font-semibold text-xl leading-relaxed sm:inline-block">{value} kWh</p>
                    <div className="flex justify-center items-center">
                        <MdArrowForwardIos className="w-4.5 h-4.5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}