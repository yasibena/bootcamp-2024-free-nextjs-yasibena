import React from "react";

import FilterComponent from "./components/filter/filter.component";

import FiltersProvider from "./providers/filters/filters.provider";

import styles from "./page.module.css";
import ListComponent from "./components/list/list.component";
import ItemsProvider from "./providers/filters/items.provider";

const items = Array(100)
  .fill(null)
  .map((_, i) => ({ value: i + 1 }));

export default function page() {
  return (
    <FiltersProvider>
      <ItemsProvider items={items}>
        <div className={styles.page}>
          <div className={styles.filters}>
            <FilterComponent
              title="زوج یا فرد"
              options={[
                { key: "even", label: "زوج" },
                { key: "odd", label: "فرد" },
              ]}
            />
            <FilterComponent
              title="بخش پذیری"
              options={[
                { key: "three", label: "بخش پدیری بر 3" },
                { key: "five", label: "بخش پدیری بر 5" },
                { key: "seven", label: "بخش پدیری بر 7" },
              ]}
            />
          </div>
          <ListComponent />
        </div>
      </ItemsProvider>
    </FiltersProvider>
  );
}
