import React, { useState } from "react";
import Reading from "../Reading/Reading";
import useInfiniteScroll, {
	ScrollDirectionBooleanState,
	ScrollDirection,
} from "react-easy-infinite-scroll-hook";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import useMergedRef from "@react-hook/merged-ref";

function loadMore(
	setCurrentOffset: (number) => void,
	currentOffset: number,
	offset: number,
	data: []
) {
	const startingIndex = currentOffset;
	const newOffset = currentOffset + offset - 1;

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
			const rows = loadMore(
				setCurrentOffset,
				currentOffset,
				offset,
				data
			);

			setData((prev) => [...prev, ...rows]);
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
		next: createNext({
			setData,
			setCurrentOffset,
			offset: 6,
			currentOffset: offset,
			data: readings,
		}),
		rowCount: readings.length,
		hasMore,
	});

	const drag =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(drag); // Now we pass the reference to the useDraggable hook:

	const multiRef = useMergedRef(ref, drag);

	return (
		<div>
			<div
				ref={multiRef}
				{...events}
				className="List bg-white-100 h-[35vh] w-[60vw] overflow-y-auto flex flex-col" // scrollbar-hide select-none"
			>
				{data.map((reading, index) => (
					<Reading
						key={index}
						//@ts-ignore
						creator={
							reading.user?.name ? reading.user.name : "Guest"
						}
						//@ts-ignore
						kwhValue={reading.value}
						//@ts-ignore
						image={reading.image}
						//@ts-ignore
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
