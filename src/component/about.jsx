import React from 'react';

export const About = () => {
  return (
    <div className="px-6 py-8">
      
      <h1 className="font-sans text-4xl font-bold text-gray-900 mb-6">About</h1>

     
      <p className="font-sans text-lg text-gray-700 mb-6 leading-relaxed">
        This website is built with <a href="#" className="text-blue-500 hover:underline">Next.js Commerce</a>, which is an ecommerce template for creating a headless Shopify storefront.
      </p>

    
      <div className="mb-6">
        <p className="font-sans text-lg font-semibold text-gray-800 mb-4">
          Support for real-world commerce features including:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-sans text-gray-700 text-base">
          <li>Out of stocks</li>
          <li>Order history</li>
          <li>Order status</li>
          <li>Cross variant / option availability (aka. Amazon style)</li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Hidden products</a>
          </li>
          <li>
            Dynamically driven content and features via Shopify (i.e., collections, menus, pages, etc.)
          </li>
          <li>
            Seamless and secure checkout via <a href="#" className="text-blue-500 hover:underline">Shopify Checkout</a>
          </li>
          <li>And more!</li>
        </ul>
      </div>

      
      <div>
        <p className="font-sans text-lg font-semibold text-gray-800 mb-4">
          This template also allows us to highlight newer Next.js features including:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-sans text-gray-700 text-base">
          <li>Next.js App Router</li>
          <li>Optimized for SEO using Next.js's Metadata</li>
          <li>React Server Components (RSCs) and Suspense</li>
          <li>Server Actions for mutations</li>
          <li>Edge runtime</li>
          <li>New Next.js 13 fetching and caching paradigms</li>
          <li>Dynamic OG images</li>
          <li>Styling with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};
