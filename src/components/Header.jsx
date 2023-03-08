import React from "react";

const Header = () => {
	return (
		<nav className="relative flex w-full flex-wrap items-center justify-between bg-blue-900 py-3  shadow-lg">
			<div className="flex w-full flex-wrap items-center justify-between px-6">
				<div>
					<p className="text-2xl font-bold text-white dark:text-dark">
						Short URL
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Header;
