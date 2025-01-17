import React from "react";

export const Addcart = () => {
    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl w-full">

        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1">
            <div className="relative flex justify-center items-center">
              <img
                src="shirt1.png"
                alt="Acme Prism T-Shirt"
                className="w-full max-w-md object-contain"
              />
             
              <div className="absolute bottom-2 flex justify-center gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  &lt;
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  &gt;
                </button>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
             
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-orange-600 font-semibold text-lg mt-2">$25.00 USD</p>

            
            <div className="mt-6">
              <p className="font-medium mb-2">SIZE</p>
              <div className="flex gap-3">
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  XS
                </button>
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  S
                </button>
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  M
                </button>
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  L
                </button>
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  XL
                </button>
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  XXL
                </button>
                <button className="py-2 px-4 rounded-md border bg-gray-100 hover:bg-blue-100">
                  XXXL
                </button>
              </div>
            </div>

         
            <p className="text-sm text-gray-600 mt-4">
              70% combed ringspun cotton / 50% polyester jersey tee.
            </p>

           
            <div className="mt-6 flex gap-4 items-center">
              <button className="w-12 h-12 bg-gray-200 rounded-full text-lg font-bold flex items-center justify-center">
                +
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};