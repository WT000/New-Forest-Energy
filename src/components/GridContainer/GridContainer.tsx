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
import { ReadingComponentInterface } from "../Reading/Reading";

function loadMore(
	setCurrentOffset: (number) => void,
	currentOffset: number,
	offset: number,
	data: any[]
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
		data: any[];
	}) =>
	async () => {
		try {
			const rows = loadMore(
				setCurrentOffset,
				currentOffset,
				offset,
				data
			);

			// @ts-ignore
			setData((prev) => [...prev, ...rows]);
		} finally {
		}
	};

export interface GridContainertInterface {
	readings: any[];
}

export default function GridContainer(props: GridContainertInterface) {
	// Setdata SHOULD BE SETTING READING VALUES
	let { readings } = props;

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

	return (
		<div>
			<div
				className="grid grid-cols-4 gap-7 overflow-y-scroll h-48"
				ref={ref}
			>
				{data.map((reading, index) => (
					<div className="text-2xl border-solid" key={index}>
						<Tile
							tileType={TileType.home}
							children={reading.image}
							clickable={true}
						></Tile>
						<p>{index}</p>
					</div>
				))}
			</div>
		</div>
	);
}
