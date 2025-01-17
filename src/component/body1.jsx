import React, { useState } from "react";
import { Imgfatch } from "./imgfatch";

export const Body1 = () => {
	const [img, setImg] = useState([]);

	return (
		<>
			<Imgfatch onimg={(data) => setImg(data)} />

			<div className="flex flex-col md:flex-row items-start justify-between  px-8 gap-4 bg-gray-50">
				<div className="w-96 md:w-3/5 flex flex-col items-center shadow-lg p-6 bg-white rounded-lg">
					<img
						className="h-60 md:h-[28rem] w-auto object-contain "
						src="shirt1.png"
						alt="Acme Circles T-Shirt"
					/>
					<div className="text-center">
						<p className="text-xl font-bold text-gray-900">
							Acme Circles T-Shirt
						</p>
						<button
							type="button"
							className="bg-blue-500 mt-4 px-6  text-white font-medium rounded-full hover:bg-blue-600"
						>
							$20.00 USD
						</button>
					</div>
				</div>

				<div className="w-full md:w-2/5 flex flex-col gap-4">
					<div className="flex items-center shadow-lg  bg-white rounded-lg">
						<img
							className="h-36 md:h-[16rem] object-contain mr-4"
							src="bag1.png"
							alt="Acme Drawstring Bag"
						/>
						<div className="text-left">
							<p className="text-lg font-bold text-gray-900">
								Acme Drawstring Bag
							</p>
							<button
								type="button"
								className="bg-blue-500 mt-2 px-2 text-white font-medium rounded-full hover:bg-blue-600"
							>
								$12.00 USD
							</button>
						</div>
					</div>

					<div className="flex items-center shadow-lg p-4 bg-white rounded-lg">
						<img
							className="h-36 md:h-[16rem] object-contain mr-4"
							src="cup2.png"
							alt="Acme Cup"
						/>
						<div className="text-left">
							<p className="text-lg font-bold text-gray-900">Acme Cup</p>
							<button
								type="button"
								className="bg-blue-500 mt-2 px-4  text-white font-medium rounded-full hover:bg-blue-600"
							>
								$15.00 USD
							</button>
						</div>
					</div>
				</div>
			</div>

			<section className="flex flex-wrap justify-center gap-4 p-4">
				<div className="relative flex flex-col items-center bg-slate-400 rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/4">
					<img
						className="h-44 w-full object-contain rounded-lg mb-4"
						src="hoodi2.png"
						alt="hoodi"
					/>
					<p className="text-sm text-white font-semibold">ACME Hudi</p>
					<h3 className="bg-blue-500 rounded-md text-white px-2 py-1 mt-2">
						$20.00 USD
					</h3>
				</div>

				<div className="relative flex flex-col items-center bg-slate-400 rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/4">
					<img
						className="h-44 w-full object-contain rounded-lg mb-4"
						src="shirt2.png"
						alt="shirt"
					/>
					<p className="text-sm text-white font-semibold">ACME Shirt</p>
					<h3 className="bg-blue-500 rounded-lg text-white px-2 py-1 mt-2">
						$10.00 USD
					</h3>
				</div>

				<div className="relative flex flex-col items-center bg-slate-400 rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/4">
					<img
						className="h-44 w-full object-contain rounded-lg mb-4"
						src="cap2.png"
						alt="cap"
					/>
					<p className="text-sm text-white font-semibold">ACME Cap</p>
					<h3 className="bg-blue-500 rounded-lg text-white px-2 py-1 mt-2">
						$10.00 USD
					</h3>
				</div>

				<div className="relative flex flex-col items-center bg-slate-400 rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/4">
					<img
						className="h-44 w-full object-contain rounded-lg mb-4"
						src={img[5]?.image}
						alt="cup"
					/>
					<p className="text-sm text-white font-semibold">ACME Cup</p>
					<h3 className="bg-blue-500 rounded-lg text-white px-2 py-1 mt-2">
						$12.00 USD
					</h3>
				</div>

				<div className="relative flex flex-col items-center bg-slate-400 rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/4">
					<img
						className="h-44 w-full object-contain rounded-lg mb-4"
						src={img[4]?.image}
						alt="hudi"
					/>
					<p className="text-sm text-white font-semibold">ACME Hudi</p>
					<h3 className="bg-blue-500 rounded-lg text-white px-2 py-1 mt-2">
						$20.00 USD
					</h3>
				</div>
			</section>
		</>
	);
};
