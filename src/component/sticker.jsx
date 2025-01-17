import React, { useState } from "react";
import { Imgfatch } from "./imgfatch";



export const Sticker = () => {
  const[img , setImg] = useState([])
  return (
<>

    
        <Imgfatch onimg={(data) =>setImg(data)}/>
    
        <aside className="w-full md:w-1/4 bg-white shadow-md p-4 mb-4 md:mb-0 ">
    <h2 className="font-bold text-lg mb-4">Collections</h2>
    <ul className="space-y-2">
      <li>
        <a
          href="/"
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
          href="/hoodies"
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
  
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src="stic1.png"
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme sticker
              </h3>
              <p className="text-blue-500 font-bold">$45.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src="stick2.png"
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme sticker
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>
            </div>
            
          </div>
          </>
  )
   
}

