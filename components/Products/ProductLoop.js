import Image from "next/image";
import React from "react";

const ProductLoop = ({ product }) => {
  const addToCart = (id) => {
    // Add logic here to handle adding the product to the cart
    console.log(`Added product with ID ${id} to the cart`);
  };
  return (
    <div key={product.id} className="bg-white p-4 rounded shadow flex flex-col">
      <div className={`max-w-[500px] mx-auto`}>
        <Image
          src={product.img}
          width="0"
          height="0"
          sizes="100vw"
          alt={product.name}
          className="w-full h-auto"
          placeholder="blur"
          blurDataURL={product.img}
        ></Image>
      </div>
      <div className="flex flex-col flex-1 justify-between items-center  mt-4">
        <div>
          <h2 className="text-lg leading-tight font-semibold mb-2">
            {product.name}
          </h2>
          <p className="text-gray-500">Price: ${product.price}</p>
        </div>
        <button
          // onClick={() => addToCart(product.id)}
          onClick={() => addToCart(product.id)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none mt-4 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductLoop;
