import React, { useState } from "react";
import { Imgfatch } from "./imgfatch";
import { Left } from "./left";
import { Right } from "./right";



export const Electronic = () => {
  const[img , setImg] = useState([])
  return (
<>
    <Imgfatch onimg={(data) =>setImg(data)}/>

    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
     
        <Left/>
       
        <main className="flex-1">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[8]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Slip-On bag
              </h3>
              <p className="text-blue-500 font-bold">$45.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[9]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Circles bag
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[10]?.image}
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
                src={img[11]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme bag
              </h3>
              <p className="text-blue-500 font-bold">$150.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[8]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme Prism bag
              </h3>
              <p className="text-blue-500 font-bold">$25.00 USD</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[9]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme bag
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>

            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[10]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme bag
              </h3>
              <p className="text-blue-500 font-bold">$20.00 USD</p>

              
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                className="h-40 w-full object-contain mb-4"
                src={img[9]?.image}
                alt="Product"
              />
              <h3 className="text-gray-700 font-semibold text-lg mb-2">
                Acme bag
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
