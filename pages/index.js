import Layout from "../src/components/layout/layout";
import ProductsSection from "../src/components/productsSection/productsSection";
import { useState, useEffect } from "react";
export default function Home() {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setData(json.slice(0, 100));
      });
  }, []);
  return (
    <>
      <Layout>{data && <ProductsSection productsData={data} />}</Layout>
    </>
  );
}
