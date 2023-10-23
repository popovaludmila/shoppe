import styles from "./header-nav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={styles.menu}>
          <button className={styles.menu_toggle} type="button">
            <span className={styles.toggle_item}></span>
          </button>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <a href="2">Shop</a>
            </li>
            <li className={styles.menu_item}>
              <a href="2">Blog</a>
            </li>
            <li className={styles.menu_item}>
              <a href="2">Our Story</a>
            </li>
          </ul>
    </nav>
  )
}
