import React, { useEffect } from 'react';

export const Imgfatch = ({ onimg }) => {
  useEffect(() => {
    
    const fatchImages = async () => {
       
        const response = await fetch("https://fakestoreapi.com/products"); 
        const data = await response.json();
         {
          onimg(data);
         console.log(data)

        }
   
    };

    fatchImages();
  }, [onimg]);

  return null; 
};