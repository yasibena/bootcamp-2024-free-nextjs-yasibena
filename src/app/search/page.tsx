import React from "react";

import styles from "./page.module.css";

import CardComponent from "@/components/card/card.component";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <CardComponent>
          <div className={styles.title}>زوج یا فرد</div>
          <button>زوج</button>
          <button>فرد</button>
        </CardComponent>
      </div>
      <div className={styles.results}>
        {items.map((item) => (
          <li key={item} className={item % 2 === 0 ? styles.active : ""}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
