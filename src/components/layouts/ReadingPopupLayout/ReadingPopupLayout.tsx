import Image from "next/image";


interface PopupProps {
  // delegateName: string;
  // delegateProfession: string;
  date: Date;
  // distance: number;
  // image: string;
  // name: string;
  // children: React.ReactNode;
}

export default function Popup(props: PopupProps) {
  const { date} = props;

  // var time = `${date.toLocaleTimeString("en-GB", {hour12: true})}`



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


    <p> hello {date.toLocaleTimeString("en-GB", {hour12: true, hour: "numeric", minute: "numeric"} )}</p>

    



        

        // <div className="relative  rounded-lg dark:bg-gray-700 ">
        //     <h3 className="text-xl font-semibold text-white dark:text-black pl-6">
        //         {delegateName} ({delegateProfession})
        //     </h3>

        //     <div className="flex items-start justify-between rounded-t dark:border-gray-600">
        //         <p className="text-s font-semibold text-white dark:text-black pt-1 pl-6">
        //         {dayMonthYear} at {time}
        //         </p>

        //         <p className="text-s font-semibold text-white dark:text-black pt-1 pr-6">
        //         {distance} kWh
        //         </p>
        //     </div>

        //     <div className="p-6 space-y-6">
        //         <Image
        //         className="rounded-[20px]"
        //         src={image}
        //         alt={name}
        //         width="783"
        //         height="636"
        //         unoptimized={true}
        //         />
        //         </div>

        //     </div>
        





  );
}
