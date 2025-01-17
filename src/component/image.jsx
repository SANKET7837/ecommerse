import React, { useEffect } from "react";

export const Imgfatc = ({ onimg }) => {
	useEffect(() => {
		const fatchImages = async () => {
			const response = await fetch("https://fakestoreapi.com/carts/5");
			const data = await response.json();
			onimg(data);
			console.log(data);
		};

		fatchImages();
	}, [onimg]);

	return null;
};
