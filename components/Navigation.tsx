import Link from "next/link";
import styles from "./Navigation.module.css";
/* icons */
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li title="Home" aria-label="Home">
          <Link href="/">
            <FaHome className={styles.icons} />
          </Link>
        </li>
        <li title="About" aria-label="About">
          <Link href="/about">
            <FaBook className={styles.icons} />
          </Link>
        </li>
      </ul>
      <div title="Search" aria-label="Search">
        <FaSearch className={styles.icons} />
      </div>
    </nav>
  );
}
