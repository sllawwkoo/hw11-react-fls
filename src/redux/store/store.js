import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/products/productsSclice";
import postsReducer from "../slices/posts/postsSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		posts: postsReducer,
	},
});

export default store;