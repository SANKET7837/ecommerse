import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-white border-t border-gray-200 ">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
				<div className="flex items-center mb-4 lg:mb-0">
					<img
						className="h-6 w-6 object-cover object-center"
						src="logo.png"
						alt="ACME Store Logo"
					/>
					<h1 className="ml-2 text-sm font-bold text-gray-800">ACME STORE</h1>
				</div>

				<nav className="text-gray-600 mb-4 lg:mb-0">
					<ul className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-6">
						<li>
							<a href="/home" className="hover:text-gray-800 ">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="hover:text-gray-800 ">
								About
							</a>
						</li>
						<li>
							<a href="/tandcon" className="hover:text-gray-800 ">
								Terms & Conditions
							</a>
						</li>
						<li>
							<a href="/return" className="hover:text-gray-800 ">
								Shipping & Return Policy
							</a>
						</li>
						<li>
							<a href="/private" className="hover:text-gray-800 ">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="/faq" className="hover:text-gray-800">
								FAQ
							</a>
						</li>
					</ul>
				</nav>

				<div>
					<button
						type="button"
						className="flex items-center px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 font-bold"
					>
						<span className="mr-2">#</span>
						Deploy
					</button>
				</div>
			</div>

			<div className="mt-6 text-center text-sm text-gray-500">
				<p>
					2023-2025 ACME, Inc. All rights reserved.{" "}
					<a href="#source" className="hover:underline">
						View the source
					</a>
				</p>
				<p className="mt-2">Created by # Vercel</p>
			</div>
		</footer>
	);
};
