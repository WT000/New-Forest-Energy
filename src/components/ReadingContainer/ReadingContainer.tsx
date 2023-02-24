import React, { useState } from "react";
import Reading from "../Reading/Reading";
import useInfiniteScroll, { ScrollDirectionBooleanState, ScrollDirection } from "react-easy-infinite-scroll-hook";

function loadMore(setCurrentOffset: (number) => void, currentOffset: number, offset: number, data: []) {
    const startingIndex = currentOffset;
    const newOffset = currentOffset + offset;

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

            setData((prev) => [...rows, ...prev]);
        } finally {
        }
    };

export interface ReadingContainertInterface {
    readings: [];
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
        next: createNext({ setData, setCurrentOffset, offset: 6, currentOffset: offset, data: readings }),
        rowCount: readings.length,
        hasMore,
    });

    return (
        <div>
            <div
                ref={ref}
                className="List bg-white-100"
                style={{
                    height: "35vh",
                    width: "60vw",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {data.map((reading, index) => (
                    <Reading
                        key={index}
                        creator={reading.user?.name ? reading.user.name : "Guest"}
                        kwhValue={reading.value}
                        image={reading.image}
                        createdAt={new Date(reading.createdAt)}
                        onClick={() => {
                            console.log("click");
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
