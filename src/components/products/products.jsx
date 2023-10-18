import { ProductCard } from "../product-card/product-card";
import styles from "./products.module.css";

export const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.products_header}>
        <h1 className={styles.title}>Shop The Latest</h1>
        <a className={styles.link} href="1">
          View all
        </a>
      </div>
      <ul className={styles.product_list}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </section>
  );
};
