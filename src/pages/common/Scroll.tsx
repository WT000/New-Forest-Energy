import { useEffect, useState } from "react";

const Scroll = () => {
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=5`
				);
				const data = await res.json();
				setData((pre) => [...pre, ...data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [offset]);

	useEffect(() => {
		const handleScroll = (e) => {
			const scrollHeight = e.target.documentElement.scrollHeight;
			const currentHeight =
				e.target.documentElement.scrollTop + window.innerHeight;
			if (currentHeight + 1 >= scrollHeight) {
				setOffset(offset + 5);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [offset]);

	return (
		<div>
			<div className="product-list">
				{data &&
					data.map((product) => (
						<div className="product-item" key={product.id}>
							<img src={product.images[0]} alt="" />
							<div className="product-info">
								<h4 className="product-name">
									{product.title}
								</h4>
								<p className="product-price">{product.price}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Scroll;
