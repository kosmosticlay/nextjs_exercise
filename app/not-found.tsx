"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/not-found.module.css";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.back();
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <img src="/images/error.gif" alt="404" />
      <h1>앗! 요청하신 페이지를 찾을 수 없어요!😫</h1>
      <p>3초 후, 자동으로 이전 페이지로 이동합니다~</p>
    </div>
  );
}
