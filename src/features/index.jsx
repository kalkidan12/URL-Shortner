import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./url/urlSlice";

export const store = configureStore({
	reducer: {
		user: urlReducer,
	},
});
