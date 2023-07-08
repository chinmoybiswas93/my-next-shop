import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  const addToCart = (productId) => {
    // Add logic here to handle adding the product to the cart
    console.log(`Added product with ID ${productId} to the cart`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product Page</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <div className={`max-w-[400px] mx-auto`}>
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
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">Price: ${product.price}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
