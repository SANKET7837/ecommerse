import React from 'react';
import {Header} from './component/header';
import {Body1} from './component/body1';

import {Footer} from './component/footer';
import {About} from './component/about';
import {Tandcon} from './component/tandcon';
import {Private} from './component/private';
import {All} from './component/all';
import {Faq} from './component/faq';
import {Return} from './component/return';
import {Home} from './component/home';
import {Shirts} from './component/shirts';
import {Bag} from './component/bag';
import {Drinkware} from './component/drinkware';
import {Footware} from './component/footware';
import {Electronic} from './component/electronic';
import {Headwear} from './component/headwear';
import {Hoodi} from './component/hoodi';
import {Left} from './component/left';
import {Right} from './component/right';
import {Sticker} from './component/sticker';









import { BrowserRouter, Routes, Route } from "react-router";


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
    <Footer/>
  </BrowserRouter>

 
  


  </>
  );
};

export default App;

