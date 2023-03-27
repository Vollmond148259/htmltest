import Layout from "../src/components/layout/layout";
import ProductsSection from "../src/components/productsSection/productsSection";
import { useState } from "react";
import Pagination from "../src/components/paginationSection/pagination";
export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products: data.slice(0, 150),
    },
  };
};
const ITEMS_ON_PAGE = 10;
function countPages(array, itemsOnPage) {
  return Math.ceil(array.length / itemsOnPage);
}

export default function Home({ products }) {
  let countOfPages = countPages(products, ITEMS_ON_PAGE);
  let [page, setPage] = useState(1);
  return (
    <Layout>
      {products && (
        <ProductsSection
          productsData={products.slice(
            page * ITEMS_ON_PAGE - ITEMS_ON_PAGE,
            page * ITEMS_ON_PAGE
          )}
        />
      )}
      <Pagination page={page} limitPages={countOfPages} setPage={setPage} />
    </Layout>
  );
}
