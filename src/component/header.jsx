import React from "react";

export const Header = () => {
	return (
		<header className="bg-gray-100 shadow-lg">
			<div className="container mx-auto flex flex-wrap items-center justify-between p-4">
				<div className="flex items-center mb-4 md:mb-0">
					<img
						className="h-10 w-10 object-cover object-center"
						src="logo.png"
						alt="ACME Store Logo"
					/>
					<h1 className="ml-2 text-lg md:text-xl font-bold text-gray-800">
						ACME STORE
					</h1>
				</div>

				<nav className="flex flex-wrap items-center space-x-4 md:space-x-6 mb-4 md:mb-0">
					<a href="/all" className="text-gray-600 hover:text-gray-900 text-sm">
						All
					</a>
					<a
						href="/shirts"
						className="text-gray-600 hover:text-gray-900 text-sm"
					>
						Shirts
					</a>
					<a
						href="/sticker"
						className="text-gray-600 hover:text-gray-900 text-sm"
					>
						Stickers
					</a>
				</nav>

				<div className="flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-2 mb-4 md:mb-0 w-full md:w-auto">
					<input
						type="text"
						placeholder="Search products..."
						className="w-full md:w-auto rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
					/>
					<button
						type="button"
						className="w-full md:w-auto bg-blue-500 px-4 py-2 text-sm text-white rounded-md hover:bg-blue-600"
					>
						Search
					</button>
				</div>

				<div className="ml-0 md:ml-4">
					<img
						className="h-8 w-8 md:h-10 md:w-10"
						src="addcart.png"
						alt="Shopping Cart"
					/>
				</div>
			</div>
		</header>
	);
};
