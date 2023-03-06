import React, { useState } from "react";
import Grid from "../Grid/Grid";
import useInfiniteScroll, {
	ScrollDirectionBooleanState,
	ScrollDirection,
} from "react-easy-infinite-scroll-hook";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import useMergedRef from "@react-hook/merged-ref";
import Tile from "../Tile/Tile";
import { TileType } from "../Tile/Tile";

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

export interface HorizontalContainertInterface {
	readings: [];
}

export default function GridContainer(props: HorizontalContainertInterface) {
	// Setdata SHOULD BE SETTING READING VALUES
	const { readings } = props;

	const [offset, setCurrentOffset] = useState(6);

	const [data, setData] = useState(readings ? readings.slice(0, 12) : []);

	const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
		right: true,
		left: false,
	});

	const ref = useInfiniteScroll<HTMLDivElement>({
		next: createNext({
			setData,
			setCurrentOffset,
			offset: 4,
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
			<div className="flex flex-col bg-white m-auto p-auto">
				<h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
					Horizontal
				</h1>
				<div
					className="flex overflow-x-scroll pb-10" // scrollbar-hide"
					ref={multiRef}
					{...events}
				>
					<div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
						{data.map((reading, index) => (
							<div class="inline-block px-3">
								<Tile
									key={index}
									tileType={TileType.home}
									children={reading.image}
									clickable={true}
								></Tile>
								<p>{index}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
