import Header from "../../components/Header";
import styles from "./about.module.css";
import Link from "next/link";

/* icons */
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div className={styles.titleWrapper}>
        <Link href={"/"} className={styles.backBtn}>
          <FaArrowLeft />
          {"Back"}
        </Link>
        <h1 className={styles.title}>About Me</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.profile}></div>
        <p className={styles.description}>늘 코딩이 어려운 코모입니다ㅠㅠ</p>
      </div>
    </div>
  );
}

/*
export default function About() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles}>아이고 힘들어 죽겠네</p>
    </div>
  );
}*/
