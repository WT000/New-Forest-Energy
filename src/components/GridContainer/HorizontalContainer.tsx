import React, { useState } from "react";
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

			setData((prev) => [...prev, ...rows]);
		} finally {
		}
	};

export interface HorizontalContainertInterface {
	componentIterable: any[];
	hideScrollbar: boolean;
}

export default function HorizontalContainer(
	props: HorizontalContainertInterface
) {
	const {
		componentIterable: componentIterable,
		hideScrollbar: hideScrollbar,
	} = props;

	let scrollClass = "";
	if (hideScrollbar) {
		scrollClass = "flex overflow-x-scroll pb-10 scrollbar-hide";
	} else {
		scrollClass = "flex overflow-x-scroll pb-10";
	}

	const [offset, setCurrentOffset] = useState(6);

	const [data, setData] = useState(
		componentIterable ? componentIterable.slice(0, 12) : []
	);

	const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
		right: true,
		left: false,
	});

	const ref = useInfiniteScroll<HTMLDivElement>({
		next: createNext({
			setData,
			setCurrentOffset,
			offset: 6,
			currentOffset: offset,
			data: componentIterable,
		}),
		columnCount: componentIterable.length,
		hasMore,
	});

	const drag =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(drag); // Now we pass the reference to the useDraggable hook:

	const multiRef = useMergedRef(ref, drag);

	return (
		<div>
			<div className="flex flex-col bg-white m-auto p-auto">
				<div className={scrollClass} ref={multiRef} {...events}>
					<div className="flex flex-nowrap select-none">
						{data.map((component, index) => (
							<div className="inline-block px-3" key={index}>
								{component}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
