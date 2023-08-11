import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const response = await axios.get(`${process.env.SITE_URL}/api/products`);
  const data = await response.data;
  return {
    props: {
      products: data,
    },
  };
}
