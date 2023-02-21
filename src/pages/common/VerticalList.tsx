import { useState } from "react";
import useInfiniteScroll, {
	ScrollDirection,
	ScrollDirectionBooleanState,
} from "react-easy-infinite-scroll-hook";
import { createItems, createNext, getSourceUrl } from "../../utils";

const VerticalList = () => {
	const [data, setData] = useState(createItems());
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState<ScrollDirectionBooleanState>({
		up: false,
		down: true,
	});

	const ref = useInfiniteScroll<HTMLDivElement>({
		next: createNext({ setData, setLoading, offset: 50 }),
		rowCount: data.length,
		hasMore,
	});

	return (
		<div>
			<div>{typeof data.keys}</div>
			{
				<div
					ref={ref}
					className="List"
					style={{
						height: 500,
						overflowY: "auto",
					}}
				>
					{data.map((key) => (
						<div className="Row" key={key}>
							{key}
						</div>
					))}
				</div>
			}
		</div>
	);
};

export default VerticalList;
