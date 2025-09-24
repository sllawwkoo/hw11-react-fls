import styles from "./ProductItem.module.scss";

function ProductItem({product}) {
	return (
		<div className={styles.product}>
			<span>{product.title}</span>
			<span>{`${product.price} ₴`}</span>
		</div>
	);
}

export default ProductItem;