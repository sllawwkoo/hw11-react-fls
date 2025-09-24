import { useId, useState } from "react";
import styles from "./ProductsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "@/redux/slices/products/productsSclice";
import { useNavigate } from "react-router";
import frontRoutes from "@/router/frontRoutes";
import { selectFilteredProducts } from "@/redux/slices/products/productsSelector";
import ProductItem from "../components/ProductItem/ProductItem";

function ProductsPage() {
	const [value, setValue] = useState("");
	const myId = useId();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleClickChange = (e) => {
		setValue(e.target.value);
		dispatch(filterProducts(e.target.value));
	};

	const filteredProductsList = useSelector(selectFilteredProducts)

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Товари</h1>
			<div className={styles.buttonLine}>
				<button
					className={styles.button}
					onClick={() => navigate(frontRoutes.pages.products.add)}
				>
					Додати товар
				</button>
			</div>
			<div className={styles.inputLine}>
				<label htmlFor={myId}>Пошук товару</label>
				<input
					id={myId}
					type="text"
					placeholder="Введіть назву товару..."
					value={value}
					onChange={handleClickChange}
				/>
			</div>
			<div className={styles.headerTable}>
				<span>Назва</span>
				<span>Ціна</span>
			</div>
			<div className={styles.table}>
				{filteredProductsList.length ? (
					filteredProductsList.map((product) => (
						<ProductItem product={product} key={product.id} />
					))
				) : (
					<p className={styles.notFound}>Товарів не знайдено</p>
				)}
			</div>
		</div>
	);
}

export default ProductsPage;
