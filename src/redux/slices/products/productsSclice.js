import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/data/dataProducts";

export const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: products,
		filter: "",
	},
	reducers: {
		addProduct: (state, action) => {
			state.products.push({ id: Date.now(), ...action.payload });
		},
		filterProducts: (state, action) => {
			state.filter = action.payload;
		}
	},
});

export const { addProduct, filterProducts } = productsSlice.actions;

export default productsSlice.reducer;