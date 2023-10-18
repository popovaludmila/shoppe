import styles from "./product-card.module.css";
import img from "../../images/products/earring.png";

export const ProductCard = () => {
  return (
    <li className={styles.item}>
      <div className={styles.img_content}>
        <img className={styles.img} src={img} alt="" width="377" height="380" />
        <button className={styles.btn}>Add to cart</button>
      </div>
      <p className={styles.name}>Lira earrings</p>
      <span className={styles.price}>$ 20,00</span>
    </li>
  );
};
