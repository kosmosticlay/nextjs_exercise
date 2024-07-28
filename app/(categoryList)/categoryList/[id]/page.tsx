"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CATEGORY_API_URL } from "../../../contants";

/* styles */
import styles from "./categoryList.module.css";

/* icons */
import { FaArrowLeft } from "react-icons/fa";

interface IBuyLink {
  name: string;
  url: string;
}

interface IBookItem {
  author: string;
  book_image: string;
  buy_links: IBuyLink[];
  description: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  title: string;
}

async function getBookList(category: string) {
  const response = await fetch(`${CATEGORY_API_URL}/${category}`);
  const json = await response.json();
  return json;
}

export default function CategoryList({ params }) {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const path = usePathname().slice(14);
  const title = path.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  const numOfBooks = category?.num_results;
  const books = category?.results.books;

  useEffect(() => {
    const loadCategory = async () => {
      const categoryData = await getBookList(path);
      setCategory(categoryData);
      setIsLoading(false);
    };
    loadCategory();
  }, [path]);

  return isLoading ? (
    <div className={styles.loading}>
      정보를 로딩중입니다! 조금만 기다려주세요!😉
    </div>
  ) : (
    <div>
      <div className={styles.categoryHeader}>
        <Link href={"/"} className={styles.backBtn}>
          <FaArrowLeft />
          {"Back"}
        </Link>
        <h1 className={styles.categoryName}>
          {title} {numOfBooks ? `(${numOfBooks} books)` : null}
        </h1>
      </div>

      <ul className={styles.bookList}>
        {books?.map((bookItem: IBookItem, index: number) => (
          <li
            className={styles.bookItem}
            id={bookItem.primary_isbn13}
            key={bookItem.primary_isbn13}
          >
            <div className={styles.bookItem_left}>
              <div className={styles.rank}>
                {`#${index + 1}`}
                <div>
                  {bookItem.rank > bookItem.rank_last_week ? (
                    <div
                      className={`${styles.rank_change} ${styles.rank_higher}`}
                    >
                      <div>▲</div>
                      <span>{`+${
                        bookItem.rank - bookItem.rank_last_week
                      }`}</span>
                    </div>
                  ) : bookItem.rank === bookItem.rank_last_week ? (
                    "-"
                  ) : (
                    <div
                      className={`${styles.rank_change} ${styles.rank_lower}`}
                    >
                      <div>▼</div>
                      <span>{`${
                        bookItem.rank - bookItem.rank_last_week
                      }`}</span>
                    </div>
                  )}
                </div>
              </div>
              <img src={`${bookItem.book_image}`} alt="Book Image" />
            </div>
            <div className={styles.bookItem_right}>
              <h2>{bookItem.title}</h2>
              <div>
                <span>
                  {bookItem.author ? `Written by ${bookItem.author}` : null}
                </span>
                <span>
                  {bookItem.publisher
                    ? `Published by ${bookItem.publisher}`
                    : null}
                </span>
                <p className={styles.description}>
                  {bookItem.description
                    ? `"${
                        bookItem.description.length > 150
                          ? bookItem.description.slice(0, 147) + "..."
                          : bookItem.description
                      }"`
                    : null}
                </p>
                <div className={styles.buyLinkList}>
                  <Link
                    title="Amazon"
                    aria-label="Amazon"
                    className={`${styles.buyLink} ${styles.buyLink_amazon}`}
                    href={
                      bookItem.buy_links.find((link) => link.name === "Amazon")
                        ?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  ></Link>
                  <Link
                    title="Apple Books"
                    aria-label="Apple Books"
                    className={`${styles.buyLink} ${styles.buyLink_appleBooks}`}
                    href={
                      bookItem.buy_links.find(
                        (link) => link.name === "Apple Books"
                      )?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  ></Link>
                  <Link
                    title="Barnes and Noble"
                    aria-label="Barnes and Noble"
                    className={`${styles.buyLink} ${styles.buyLink_barnes}`}
                    href={
                      bookItem.buy_links.find(
                        (link) => link.name === "Barnes and Noble"
                      )?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  ></Link>
                  <Link
                    title="Books A Million"
                    aria-label="Books A Million"
                    className={`${styles.buyLink} ${styles.buyLink_booksAMillion}`}
                    href={
                      bookItem.buy_links.find(
                        (link) => link.name === "Books-A-Million"
                      )?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  ></Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
