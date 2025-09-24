import { createSelector } from "@reduxjs/toolkit";

export const selectProductsState = (state) => state.products.products;
export const selectFilter = (state) => state.products.filter;

export const selectFilteredProducts = createSelector(
	[selectProductsState, selectFilter],
	(products, filter) => {
		if (!filter || filter.trim() === "")
			return products;
		return products.filter((product) =>
			product.title.toLowerCase().includes(filter.toLowerCase())
		);
	}
);
