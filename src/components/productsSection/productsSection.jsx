import styles from "./ProductsSection.module.css";
import Product from "./product/product";
export default function ProductsSection({ productsData }) {
  const { products } = styles;
  return (
    <ul className={products}>
      {productsData.map((item) => (
        <li key={item.id}>
          <Product productItem={item} badgeText="new" />
        </li>
      ))}
    </ul>
  );
}
