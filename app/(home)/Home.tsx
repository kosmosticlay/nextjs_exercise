"use client";

import styles from "./Home.module.css";
import { FaRegCalendar } from "react-icons/fa";
import Link from "next/link";

interface IListItem {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default function HomePage({
  initialLists,
}: {
  initialLists: IListItem[];
}) {
  return (
    <div>
      <form className={styles.filterForm}></form>
      <ul className={styles.categoryList}>
        {initialLists.map((item) => (
          <li
            id={item.list_name_encoded}
            key={item.list_name_encoded}
            className={styles.categoryItem}
            aria-label={item.display_name}
            title={item.display_name}
          >
            <Link
              className={styles.categoryCard}
              href={`/categoryList/${item.list_name_encoded}`}
            >
              <h2 className={styles.categoryName}>{item.display_name}</h2>
              <div className={styles.updateInfo}>
                <span
                  className={`${styles.updateRate} ${
                    item.updated === "WEEKLY" ? styles.weekly : styles.monthly
                  }`}
                >
                  {item.updated}
                </span>
                <span>
                  {item.newest_published_date}
                  <FaRegCalendar />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
