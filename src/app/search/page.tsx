import React from "react";

import FilterComponent from "./components/filter/filter.component";

import FiltersProvider from "./providers/filters/filters.components";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function page() {
  return (
    <FiltersProvider>
      <div className={styles.page}>
        <div className={styles.filters}>
          <FilterComponent
            title="زوج یا فرد"
            options={[
              { value: "even", label: "زوج" },
              { value: "odd", label: "فرد" },
            ]}
          />
          <FilterComponent
            title="بخش پذیری"
            options={[
              { value: "three", label: "بخش پدیری بر 3" },
              { value: "five", label: "بخش پدیری بر 5" },
              { value: "seven", label: "بخش پدیری بر 7" },
            ]}
          />
        </div>
        <div className={styles.results}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </div>
    </FiltersProvider>
  );
}
