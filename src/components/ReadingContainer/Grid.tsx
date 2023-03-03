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

export interface GridContainertInterface {
	readings: [];
}

export default function GridContainer(props: GridContainertInterface) {
	// Setdata SHOULD BE SETTING READING VALUES
	const { readings } = props;

	const [offset, setCurrentOffset] = useState(6);

	function createGrid(data) {
		const cols = 3;
		const rows = 2;
		var matrix = [],
			i,
			k;

		for (i = 0, k = -1; i < data.length; i++) {
			if (i % 4 === 0) {
				k++;
				matrix[k] = [];
			}

			matrix[k].push(data[i]);
		}
		console.log(matrix);
		return matrix;
	}

	const [data, setData] = useState(readings ? readings.slice(0, 17) : []);

	const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
		up: false,
		down: true,
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

	return (
		<div>
			<div
				className="grid grid-cols-4 gap-4 overflow-y-scroll h-32 scrollbar-hide"
				ref={ref}
			>
				{data.map((reading, index) => (
					<div class="text-2xl">
						{" "}
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
					</div>
				))}
			</div>
		</div>
	);
}
