import Link from "next/link";
import styles from "./Navigation.module.css";

/* icons */
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li title="Home" aria-label="Home">
          <Link href="/">
            <FaHome className={`${styles.icons} ${styles.homeIcon}`} />
          </Link>
        </li>
        <li title="About" aria-label="About">
          <Link href="/about">
            <FaUser className={`${styles.icons} ${styles.userIcon}`} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
