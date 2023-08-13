import React from "react";
import useSWR from "swr";
import ProductLoop from "@/components/Products/ProductLoop";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  const { data: products, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error fetching products</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

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
