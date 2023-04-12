import Image from "next/image";
import { useEffect, useState } from "react";

import Role from "../../../lib/utils/roles"






interface ReadingPopupProps {
  name: string;
  role: Role;
  date: Date;
  kwh: number;
  image: string;
  imgname: string;
}

export default function ReadingPopup(props: ReadingPopupProps) {
  const { name, role, date, kwh, image, imgname} = props;



  const [createdAtV, setCreatedAtV] = useState("e ");

  useEffect(()=> {
      setCreatedAtV(date.toLocaleTimeString("en-GB", {hour12: true, month:"long", day: "numeric", hour:"numeric", minute: "numeric"}))
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



    



        

        <div className="relative  rounded-lg dark:bg-gray-700 ">
            <h3 className="text-xl font-semibold text-white pl-6">
                {name} ({role})
            </h3>

            <div className="flex items-start justify-between rounded-t dark:border-gray-600">
                <p className="text-s font-semibold text-white pt-1 pl-6">
                {createdAtV}
                </p>

                <p className="text-s font-semibold text-white pt-1 pr-6">
                {kwh} kWh
                </p>
            </div>

            <div className="p-6 space-y-6">
                <Image
                className="rounded-[20px]"
                src={image}
                alt={imgname}
                width="783"
                height="636"
                unoptimized={true}
                />
                </div>

            </div>
        





  );
}
