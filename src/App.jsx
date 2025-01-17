import React from "react";
import { Body1 } from "./component/body1";
import { Header } from "./component/header";

import { About } from "./component/about";
import { All } from "./component/all";
import { Bag } from "./component/bag";
import { Drinkware } from "./component/drinkware";
import { Electronic } from "./component/electronic";
import { Faq } from "./component/faq";
import { Footer } from "./component/footer";
import { Footware } from "./component/footware";
import { Headwear } from "./component/headwear";
import { Home } from "./component/home";
import { Hoodi } from "./component/hoodi";
import { Left } from "./component/left";
import { Private } from "./component/private";
import { Return } from "./component/return";
import { Right } from "./component/right";
import { Shirts } from "./component/shirts";
import { Sticker } from "./component/sticker";
import { Tandcon } from "./component/tandcon";

import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Body1 />} />
					<Route path="/about" element={<About />} />
					<Route path="/tandcon" element={<Tandcon />} />
					<Route path="/private" element={<Private />} />
					<Route path="/return" element={<Return />} />
					<Route path="/all" element={<All />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shirts" element={<Shirts />} />
					<Route path="/bag" element={<Bag />} />
					<Route path="/drinkware" element={<Drinkware />} />
					<Route path="/footware" element={<Footware />} />
					<Route path="/electronic" element={<Electronic />} />
					<Route path="/headwear" element={<Headwear />} />
					<Route path="/hoodi" element={<Hoodi />} />
					<Route path="/left" element={<Left />} />
					<Route path="/right" element={<Right />} />
					<Route path="/sticker" element={<Sticker />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
