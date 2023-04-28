import Link from "next/link";
import { InstructionsPopup } from "../../Popup/Popup";
import React, { useEffect, useState } from "react";
import InstructionsLayout from "../../layouts/InstructionsLayout/InstructionsLayout";
import Tile, { TileType } from "../../Tile/Tile";

interface NavbarMenuItemProps {
  icon: React.ReactElement;
  text: string;
  path?: string;
  activePage: boolean;
  instructionstext?: string;
}

export default function NavbarMenuItem(props: NavbarMenuItemProps) {
  const { icon, text, path, activePage, instructionstext } = props;

  let textFormat = "text-black-500";
  if (activePage) {
    textFormat = "text-black";
  }

  const desktop =
    "md:grid md:grid-cols-3 md:mt-8 md:w-full md:justify-center md:pl-4";

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState({
    creator: "",
    value: 0,
    image: "",
    createdAt: new Date(),
    createdAtStr: "",
  });

  if (text == "Instructions") {
    return (
      <div >
        {popupVisible && (
          <InstructionsPopup onClick={() => setPopupVisible(!popupVisible)} >

            <Tile tileType={TileType.box} clickable={false} >

                <InstructionsLayout text={instructionstext} editable={false}></InstructionsLayout>
            </Tile>
          </InstructionsPopup>
        )}

        <div 
          
          className={`${textFormat} ${desktop} hover:text-black cursor-pointer transition ease-in-out hover:scale-105`}
          id={text}
          onClick={() => {
            setPopupVisible(!popupVisible);
            setPopupData({
              creator: "Guest",
              value: 4,
              image: "",
              createdAt: new Date(),
              createdAtStr: new Date().toLocaleString("en-GB", {
                hour12: true,
              }),
            });
          }}
        >
          <div className="md:col-span-1 md:m-auto md:pr-4" >{icon}</div>
          <div className="hidden md:block md:col-span-2" >{text}</div>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        href={path}
        className={`${textFormat} ${desktop} hover:text-black cursor-pointer transition ease-in-out hover:scale-105`}
        id={text} data-test="navbutton"
      >
        <div className="md:col-span-1 md:m-auto md:pr-4">{icon}</div>
        <div className="hidden md:block md:col-span-2">{text}</div>
      </Link>
    );
  }
}
