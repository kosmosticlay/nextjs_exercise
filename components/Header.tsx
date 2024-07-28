import styles from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <Navigation />
      <article className={styles.article}>
        <h1>Newyork BestSellers</h1>
      </article>
    </header>
  );
}
