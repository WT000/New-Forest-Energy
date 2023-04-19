import Link from "next/link";
import ReadingPopup, { InsructionsPopup } from "../../layouts/ReadingPopupLayout/ReadingPopupLayout";
import Popup, { InstructionsPopup } from "../../Popup/Popup";
import React, { useEffect, useState } from "react";
import InstructionsLayout from "../../layouts/InstructionsLayout/InstructionsLayout";
import Tile, { TileType } from "../../Tile/Tile";

interface NavbarMenuItemProps {
  icon: React.ReactElement;
  text: string;
  path?: string;
  activePage: boolean;
}

export default function NavbarMenuItem(props: NavbarMenuItemProps) {
  const { icon, text, path, activePage } = props;

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
      <div>
        {popupVisible && (
          <InstructionsPopup onClick={() => setPopupVisible(!popupVisible)}>

            <Tile tileType={TileType.box} clickable={false}>

                <InstructionsLayout text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit magna a quam hendrerit, ut accumsan sem tempor. Phasellus mollis feugiat lectus non viverra. Pellentesque aliquet, lacus dignissim imperdiet suscipit, nisi sem egestas erat, vel consequat nisl leo eu tortor. Suspendisse tristique nibh fringilla porttitor tincidunt. Integer efficitur enim ut egestas tincidunt. Duis fermentum diam ut libero maximus dapibus. Phasellus ac nibh et justo lobortis tristique a sit amet massa. Aliquam euismod sapien non est bibendum tristique. Pellentesque vestibulum condimentum mauris, iaculis vestibulum dolor finibus id."} editable={false}></InstructionsLayout>
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
          <div className="md:col-span-1 md:m-auto md:pr-4">{icon}</div>
          <div className="hidden md:block md:col-span-2">{text}</div>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        href={path}
        className={`${textFormat} ${desktop} hover:text-black cursor-pointer transition ease-in-out hover:scale-105`}
        id={text}
      >
        <div className="md:col-span-1 md:m-auto md:pr-4">{icon}</div>
        <div className="hidden md:block md:col-span-2">{text}</div>
      </Link>
    );
  }
}
