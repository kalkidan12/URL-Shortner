import axios from "axios";

export const createShortUrl = async (url, data) => {
	return await axios.post(url, data);
};
export const redirectToUrl = async (url) => {
	return await axios.get(url);
};
