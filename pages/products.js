import React, { useEffect, useState } from "react";
import ProductLoop from "@/components/Products/ProductLoop";

const ProductPage = ({ products }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product Page</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductLoop key={index} product={product}></ProductLoop>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
