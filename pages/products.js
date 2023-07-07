import AddProductForm from "@/components/AddProductForm";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-xl text-green-500 text-center">
          Hello Ecommerce {products.length}
          <br />
          <Link href={'/'}>Home</Link>
        </h1>
      </div>
    </>
  );
}
