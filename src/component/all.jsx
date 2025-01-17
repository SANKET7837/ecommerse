import React, { useState } from "react";
import { Imgfatch } from "./imgfatch";



export const All = () => {
  const[img , setImg] = useState([])
  return (
<>
    <Imgfatch onimg={(data) =>setImg(data)}/>

    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
     
        <aside className="w-full md:w-1/4 bg-white shadow-md p-4 mb-4 md:mb-0">
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

            <li>
              <a
                href="/shirts"
                className="block text-gray-600 hover:text-blue-500 transition"
              >
                shirts
              </a>
            </li>
          </ul>
        </aside>

       
        <main className="flex-1">
          <div className="flex justify-end mb-4">
           
            <select >
              <option>Relevance</option>
              <option>Trending</option>
              <option>Latest arrivals</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[6]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Slip-On Shoes
              </h3>
              <p className="text-blue-500 font-bold">$45.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src="shirt1.png"
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Circles T-Shirt
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[0]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Drawstring Bag
              </h3>
              <p className="text-blue-500 font-bold">$12.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-cover mb-4"
                src={img[12]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Keyboard
              </h3>
              <p className="text-blue-500 font-bold">$150.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[3]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Prism T-Shirt
              </h3>
              <p className="text-blue-500 font-bold">$25.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[15]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme T-Shirt
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
};
