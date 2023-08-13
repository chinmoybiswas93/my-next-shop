import React from "react";
import useSWR from "swr";
import Banner from "@/components/Banner/Banner";
import ProductLoop from "@/components/Products/ProductLoop";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: products, error } = useSWR(`/api/products`, fetcher);

  return (
    <>
      <Banner />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Product Page</h1>
        <div className="grid grid-cols-4 gap-4">
          {error && <div>Error fetching products</div>}
          {!error && !products && <div>Loading...</div>}
          {products &&
            products.map((product, index) => (
              <ProductLoop key={index} product={product}></ProductLoop>
            ))}
        </div>
      </div>
    </>
  );
}
