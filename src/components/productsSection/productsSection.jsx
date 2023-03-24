import styles from "./ProductsSection.module.css";
import Product from "./product/product";
export default function ProductsSection({ productsData }) {
  const { products } = styles;
  return (
    <div className={products}>
      {productsData.map((item) => (
        <Product key={item.id} productItem={item} badgeText="new" />
      ))}
    </div>
  );
}
