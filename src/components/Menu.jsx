import styles from "../styles/Menu.module.css";

export default function Menu({ dish: { tittel, pris } }) {
  return (
    <li className={styles.menuDish}>
      <span className={styles.title}>{tittel}</span>{" "}
      <span className={styles.price}>{pris}</span>
    </li>
  );
}
