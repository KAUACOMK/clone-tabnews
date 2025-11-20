import styles from "../styles/TelaEmConstrucao.module.css";

export default function Pagina() {
  return (
    <div className={styles.backgroundblueParent}>
      <div className={`${styles.layer} ${styles.gradient}`} />
      <h1 className={`${styles.layer} ${styles.construcao}`}>
        Em Construção...!
      </h1>
    </div>
  );
}
