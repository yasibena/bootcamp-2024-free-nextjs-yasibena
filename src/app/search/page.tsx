import React from "react";

import styles from "./page.module.css";

import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button-component";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <CardComponent>
          <div className={styles.title}>زوج یا فرد</div>
          <div className={styles.buttons}>
            <FilterButtonComponent>زوج</FilterButtonComponent>
            <FilterButtonComponent>فرد</FilterButtonComponent>
          </div>
        </CardComponent>
      </div>
      <div className={styles.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  );
}
