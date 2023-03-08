import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { config } from "../config/config";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { addShortUrl, getShortUrl } from "../features/url/actions";
import axios from "axios";
import { Link } from "react-router-dom";
const HomePage = () => {
	const [showCopy, setShowCopy] = useState(false);
	const [copied, setCopied] = useState(false);
	const [url, setUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [shortId, setShortId] = useState("");
	const [fullUrl, setFullUrl] = useState("");

	const rediretToUrl = async (e) => {
		e.preventDefault();
		try {
			window.location.replace(fullUrl);
		} catch (error) {}
	};
	const createShortUrl = async (e) => {
		e.preventDefault();
		try {
			if (url) {
				let response = await axios.post(
					`http://localhost:5000/api/url/createshorturl`,
					{
						url,
					},
				);
				setShowCopy(true);
				setShortId(response.data.shortid);
				setShortUrl(response.data.shortUrl);
				setFullUrl(response.data.url);
			} else {
				setShowCopy(false);
				setShortUrl("please provide valid url!");
			}
		} catch (error) {
			setShowCopy(false);
			setShortUrl("uable to generate the link, try again!");
		}
	};
	return (
		<div className="mx-auto h-screen bg-slate-50">
			<Header />
			<div className="relative top-[60px] mx-auto w-1/2 flex flex-col p-6 border border-gray-200 rounded-lg shadow">
				<div className="flex flex-col items-center mx-auto">
					<p className="mx-auto text-2xl text-dark-900 dark:text-dark my-2">
						Paste the URL to be shortened
					</p>

					<div className="w-full text-center">
						<form action="#">
							<div className="max-w-md mx-auto p-1 pr-0 flex items-center">
								<input
									onChange={(e) => setUrl(e.target.value)}
									type="text"
									placeholder="add your link here"
									className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
								/>
								<button
									onClick={(e) => createShortUrl(e)}
									type="submit"
									className="bg-blue-800 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3"
								>
									shorten URL
								</button>
							</div>
						</form>
					</div>
					{shortUrl && (
						<div className="w-full text-center">
							<p className="mx-auto text-2xl text-dark-900 dark:text-dark my-2">
								Your shortened URL
							</p>
							<div className="max-w-md mx-auto p-1 pr-0 flex items-center">
								<span
									onClick={(e) => rediretToUrl(e)}
									className="cursor-pointer flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
								>
									<a rel="noreferrer" href={fullUrl} target="_blank">
										{shortUrl}
									</a>
								</span>
								{showCopy && (
									<CopyToClipboard
										text={shortUrl}
										onCopy={() => setCopied(true)}
									>
										<button className="bg-yellow-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-yellow-500 p-3">
											{copied ? "copied" : "copy"}
										</button>
									</CopyToClipboard>
								)}
							</div>
						</div>
					)}
					<p className="mx-auto text-md text-dark-900 dark:text-dark my-4">
						ShortURL is a free service to shorten URLs and create short links.
						ShortURL allows to reduce long links from Instagram, Facebook,
						YouTube, Twitter, Linked In and sites with authority on the
						Internet. Just paste the long URL and click the Shorten URL button.
						On the next step, copy the shortened URL and share it on websites.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
