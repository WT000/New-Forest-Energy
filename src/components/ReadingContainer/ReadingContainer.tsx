import React, { useEffect, useState } from "react";
import Reading from "../Reading/Reading";
import useInfiniteScroll, { ScrollDirectionBooleanState, ScrollDirection } from "react-easy-infinite-scroll-hook";
import Popup from "../Popup/Popup";
import ReadingPopup from "../layouts/ReadingPopupLayout/ReadingPopupLayout";
import Role from "../../lib/utils/roles";

function loadMore(setCurrentOffset: (number) => void, currentOffset: number, offset: number, data: []) {
    const startingIndex = currentOffset;
    const newOffset = currentOffset + offset-1;

    setCurrentOffset(newOffset);
    return data.slice(startingIndex, newOffset);
}



const createNext =
    ({
        setData,
        setCurrentOffset,
        offset,
        currentOffset,
        data,
    }: {
        setData: (v: React.SetStateAction<string[]>) => void;
        setCurrentOffset: (v: React.SetStateAction<number>) => void;
        offset: number;
        currentOffset: number;
        data: [];
    }) =>
    async () => {
        try {
            const rows = loadMore(setCurrentOffset, currentOffset, offset, data);

            setData((prev) => [...prev, ...rows]);
        } finally {
        }
    };

export interface ReadingContainertInterface {
    readings: any[];
}

export default function ReadingContainer(props: ReadingContainertInterface) {
    // Setdata SHOULD BE SETTING READING VALUES
    const { readings } = props;

    const [offset, setCurrentOffset] = useState(6);

    const [data, setData] = useState(readings ? readings.slice(0, 6) : []);
    const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
        up: false,
        down: true,
    });

    const ref = useInfiniteScroll<HTMLDivElement>({
        //@ts-ignore
        next: createNext({ setData, setCurrentOffset, offset: 6, currentOffset: offset, data: readings }),
        rowCount: readings.length,
        hasMore,
    });

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({
        creator: "",
        value: 0,
        image: "",
        createdAt: new Date(),
        createdAtStr: "",
    });

    return (
        <div>
            {popupVisible && (
                <Popup onClick={() => setPopupVisible(!popupVisible)}>
                    <ReadingPopup name={popupData.creator} role={Role.Guest} date={popupData.createdAt} distance={popupData.value} image={popupData.image} imgname={"Reading"}/>
                </Popup>
            )}
            <div
                ref={ref}
                className="List h-[35vh] overflow-y-auto flex flex-col"
            >
                {data.map((reading, index) => (
                    <Reading
                        key={index}
                        //@ts-ignore
                        creator={reading.user?.name ? reading.user.name : "Guest"}
                        //@ts-ignore
                        value={reading.value}
                        //@ts-ignore
                        image={reading.image}
                        //@ts-ignore
                        createdAt={new Date(reading.createdAt)}
                        onClick={() => {
                            setPopupVisible(!popupVisible);
                            setPopupData({
                                creator: reading.user?.name ? reading.user.name : "Guest",
                                value: reading.value,
                                image: reading.image,
                                createdAt: new Date(reading.createdAt),
                                createdAtStr: new Date(reading.createdAt).toLocaleString("en-GB", {hour12: true}),
                            })
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
