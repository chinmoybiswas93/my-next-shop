import Banner from "@/components/Banner/Banner";
import axios from "axios";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      {/* Render your products here */}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    );
    const products = response.data;
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
