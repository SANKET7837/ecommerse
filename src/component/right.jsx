import React from "react";

export const Right = () => {
	return (
		<>
			<aside className="w-full md:w-52 bg-white shadow-md p-4 ml-2 md:mb-0">
				<h2 className="font-bold text-lg mb-4">Sort By</h2>
				<ul className="space-y-2">
					<li>
						<a
							href="/Relevance"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Relevance
						</a>
					</li>
					<li>
						<a
							href="/Trending"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Trending
						</a>
					</li>
					<li>
						<a
							href="/Latest arrivals"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Latest arrivals
						</a>
					</li>
					<li>
						<a
							href="/Price: Low to high"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Price: Low to high
						</a>
					</li>
					<li>
						<a
							href="/Price: High to low"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Price: High to low
						</a>
					</li>
				</ul>
			</aside>
		</>
	);
};
