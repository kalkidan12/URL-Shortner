import React from "react";

const HomePage = () => {
	return (
		<div className="mx-auto h-screen bg-slate-50">
			<nav class="relative flex w-full flex-wrap items-center justify-between bg-blue-900 py-3  shadow-lg">
				<div class="flex w-full flex-wrap items-center justify-between px-6">
					<div>
						<p className="text-2xl font-bold text-white dark:text-dark">
							Short URL
						</p>
					</div>
				</div>
			</nav>
			<div className="relative top-[40px] mx-auto felx text-center"></div>
			<div className="relative top-[60px] mx-auto w-1/2 flex flex-col p-6 border border-gray-200 rounded-lg shadow">
				<div className="flex flex-col items-center mx-auto">
					<p className="mx-auto text-2xl text-dark-900 dark:text-dark my-2">
						Paste the URL to be shortened
					</p>

					<div className="w-full text-center">
						<form action="#">
							<div className="max-w-md mx-auto p-1 pr-0 flex items-center">
								<input
									type="email"
									placeholder="add your link here"
									className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
								/>
								<button
									type="submit"
									className="bg-blue-800 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3"
								>
									shorten URL
								</button>
							</div>
						</form>
					</div>
					<div className="w-full text-center">
						<p className="mx-auto text-2xl text-dark-900 dark:text-dark my-2">
							Your shortened URL
						</p>
						<div className="max-w-md mx-auto p-1 pr-0 flex items-center">
							<span className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none">
								shotened link here
							</span>
							<button
								type="submit"
								className="bg-yellow-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-yellow-500 p-3"
							>
								copy
							</button>
						</div>
					</div>
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
