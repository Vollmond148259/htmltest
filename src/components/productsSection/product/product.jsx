import styles from "./Product.module.css";
import Image from "next/image";
import Badge from "../../../elements/productSection/badge/badgeElement";
import Button from "../../../elements/productSection/button/button";
export default function Product({ productItem, badgeText }) {
  const { title, url, albumId } = productItem;
  const { product, productInfo, productAction } = styles;
  return (
    <div className={product}>
      <Badge x="180px" y="8px" text={badgeText}></Badge>
      <Image src={url} width={250} height={250} priority alt={albumId} />
      <div className={productInfo}>
        <h4>{title}</h4>
        <h5>brand</h5>
        <div className={productAction}>
          <Button status="default" size="medium">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
