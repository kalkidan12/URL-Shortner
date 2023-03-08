import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createShortUrl, redirectToUrl } from "../../services/apiServices";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const addShortUrl = createAsyncThunk(
	"url/geturl",
	async (url, { rejectWithValue }) => {
		try {
			const { data } = await createShortUrl(
				`${SERVER_URL}/url/createshorturl`,
				url,
			);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
export const getShortUrl = createAsyncThunk(
	"url/geturl",
	async (shortid, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`${SERVER_URL}/url/${shortid}`);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
