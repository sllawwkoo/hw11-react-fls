import { useId, useState } from "react";
import styles from "./ProductForm.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/products/productsSclice";
import { useNavigate } from "react-router";
import frontRoutes from "@/router/frontRoutes";

function ProductForm() {
	const [value, setValue] = useState({
		title: "",
		price: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const myId1 = useId();
	const myId2 = useId();

	const isDisabled = !value.title || !value.price || parseInt(value.price) < 1;

	const handleClickChange = (e) => {
		const { name, value } = e.target;
		setValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleClickAddProduct = (e) => {
		e.preventDefault();
		const newProduct = {
			...value,
			id: Date.now(),
			title: value.title,
			price: parseInt(value.price),
		};
		dispatch(addProduct(newProduct));
		setValue(prevValue => ({
			...prevValue,
			title: "",
			price: "",
		}));
		navigate(frontRoutes.navigate.products);
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Додати новий товар</h1>
			<form
				onSubmit={handleClickAddProduct}
				className={styles.form}
			>
				<div className={styles.inputsBlock}>
					<div className={styles.inputLine}>
						<label htmlFor={myId1}>Введіть назву товару</label>
						<input
							id={myId1}
							type="text"
							name="title"
							placeholder="Введіть назву товару..."
							value={value.title}
							onChange={handleClickChange}
						/>
					</div>
					<div className={styles.inputLine}>
						<label htmlFor={myId2}>Введіть ціну товару</label>
						<input
							id={myId2}
							type="number"
							name="price"
							placeholder="Введіть ціну товару..."
							value={value.price}
							onChange={handleClickChange}
						/>
					</div>
				</div>
				<div className={styles.buttonsBlock}>
					<button
						type="submit"
						className={`${styles.button} ${isDisabled ? styles.disabled : ""}`}
						disabled={isDisabled}
					>
						Додати товар
					</button>
					<button
						type="button"
						className={styles.button}
						onClick={() => navigate(frontRoutes.navigate.products)}
					>
						Відмінити
					</button>
				</div>
			</form>
		</div>
	);
}

export default ProductForm;
