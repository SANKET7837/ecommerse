import React, { useState } from "react";

export const Left = () => {
	return (
		<>
			<aside className="w-full md:w-52 bg-white shadow-md p-4 mb-4 md:mb-0">
				<h2 className="font-bold text-lg mb-4">Collections</h2>
				<ul className="space-y-2">
					<li>
						<a
							href="/all"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							All
						</a>
					</li>
					<li>
						<a
							href="/bag"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Bags
						</a>
					</li>
					<li>
						<a
							href="/drinkware"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Drinkware
						</a>
					</li>
					<li>
						<a
							href="/electronic"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Electronics
						</a>
					</li>
					<li>
						<a
							href="/footware"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Footwear
						</a>
					</li>
					<li>
						<a
							href="/headwear"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Headwear
						</a>
					</li>
					<li>
						<a
							href="/hoodi"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Hoodies
						</a>
					</li>
					<li>
						<a
							href="/sticker"
							className="block text-gray-600 hover:text-blue-500 transition"
						>
							Stickers
						</a>
					</li>
				</ul>
			</aside>
		</>
	);
};
