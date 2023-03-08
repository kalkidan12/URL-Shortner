import { createSlice } from "@reduxjs/toolkit";
import { addShortUrl, getShortUrl } from "./actions";

const initialState = {
	data: [],
	isLoading: false,
	isSuccess: false,
	errorMessage: "",
};

export const urlSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: {
		[addShortUrl.pending]: (state) => {
			state.isLoading = true;
		},
		[addShortUrl.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.data = payload;
		},
		[addShortUrl.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.errorMessage = payload;
		},
	},
});

export default urlSlice.reducer;
