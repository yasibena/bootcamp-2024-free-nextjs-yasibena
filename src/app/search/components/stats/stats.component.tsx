"use client";

import { ReactElement, useContext } from "react";



import styles from "./stats.module.css";
import { BooksContext } from "../../providers/books/books.provider";

export default function StatsComponent(): ReactElement {
  const { filteredBooks } = useContext(BooksContext);

  return (
    <div className={styles.stats}>
      {filteredBooks.length.toLocaleString()} نتیجه
    </div>
  );
}
