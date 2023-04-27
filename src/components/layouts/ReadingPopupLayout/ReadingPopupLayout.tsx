import Image from "next/image";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";

interface ReadingPopupProps {
    name: string;
    date: Date;
    kwh: number;
    image: string;
    imgname: string;
    showDelete: boolean;
    deleteMethod?: () => void;
}

interface InsructionsPopupProps {
    text: string;
}

export default function ReadingPopup(props: ReadingPopupProps) {
    const { name, date, kwh, image, imgname, deleteMethod, showDelete } = props;

    const [createdAtV, setCreatedAtV] = useState("e ");

    useEffect(() => {
        setCreatedAtV(
            date.toLocaleTimeString("en-GB", { hour12: true, month: "long", day: "numeric", hour: "numeric", minute: "numeric" })
        );
    });

    // var hourValue = date.getHours();
    // var prefix = "";

    // if(hourValue >= 12){
    //   prefix = "PM";
    // } else {
    //   prefix = "AM";
    // }

    // time = time + prefix

    // var dayMonthYear = `${date.getDate()} ${date.toLocaleString("default", {
    //   month: "long",
    // })} ${date.getFullYear()}`;

    // var dateValue = date.getDay
    // if(dateValue ){

    // }

    return (
        <div className="relative  rounded-lg ">
            <h3 className="text-xl font-semibold text-white pl-6">{name}</h3>

            <div className="flex items-start justify-between rounded-t border-gray-600">
                <p className="font-semibold text-white pt-1 pl-6">{createdAtV}</p>

                <div className="flex pt-1 pr-6 items-center space-x-8">
                    <p className="font-semibold text-white ">{kwh} kWh</p>

                    {showDelete && deleteMethod &&
                    <IoTrashBin onClick={deleteMethod} className="text-white hover:text-black-500 cursor-pointer h-6 w-6" />}
                </div>

            </div>

            {image && image !== "Image" && 
            <div className="p-6 space-y-6">
                <Image className="rounded-[20px]" src={image} alt={imgname} width="783" height="636" unoptimized={true} />
            </div>
            }
        </div>
    );
}



