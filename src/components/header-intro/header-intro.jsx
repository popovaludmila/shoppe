import styles from "./header-intro.module.css";
import bg from "../../images/general/main_img_1.png";

export const HeaderIntro = () => {
  return (
    <div className={styles.slider}>
      <img
        className={styles.img}
        src={bg}
        alt="Gold big hoops"
        width="100%"
        height="100%"
      />
      <div className={styles.content}>
        <p className={styles.product_name}>Gold big hoops </p>
        <span className={styles.price}>$ 68,00</span>
        <a className={`${styles.link} button`} href="1">
          View product
        </a>
      </div>
      <p className={styles.slider_toggels}>
        <button className={styles.slider_toggle}></button>
        <button className={styles.slider_toggle}></button>
        <button className={styles.slider_toggle}></button>
        <button className={styles.slider_toggle}></button>
        <button className={styles.slider_toggle}></button>
      </p>
    </div>
  );
};
