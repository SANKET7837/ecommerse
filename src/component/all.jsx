import React, { useState } from "react";
import { Imgfatch } from "./imgfatch";
import { Left } from "./left";
import { Right } from "./right";



export const All = () => {
  const[img , setImg] = useState([])
  return (
<>
    <Imgfatch onimg={(data) =>setImg(data)}/>

    <div className="bg-gray-100 min-h-screen p-4  ">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
     
        <Left/>
       
        <main className="flex-1">
         
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
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src="footware.png"
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme footware
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>

              
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src="hoodi2.png"
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme hoodi
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p></div>
          </div>
          
        </main>
        <Right/>
      </div>
    </div>
    </>
  );
};
