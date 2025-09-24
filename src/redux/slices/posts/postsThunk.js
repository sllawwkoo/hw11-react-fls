import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "@/services/postsAPI";

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await postsAPI.fetchAllPosts();
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);