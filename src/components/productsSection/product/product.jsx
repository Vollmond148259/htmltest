import styles from "./Product.module.css";
import Image from "next/image";
import Badge from "../../../elements/productSection/badge/badgeElement";
import Button from "../../../elements/productSection/button/button";
export default function Product({ productItem, badgeText, num }) {
  const { title, url, albumId, id } = productItem;
  const { product, productInfo, productAction, productInfoTitle } = styles;

  return (
    <div className={product}>
      <div>{id}</div>
      <Badge x="180px" y="8px" text={badgeText}></Badge>
      <Image src={url} width={250} height={250} priority alt={title} />
      <div className={productInfo}>
        <div className={productInfoTitle}>
          <h4>{title}</h4>
        </div>
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
