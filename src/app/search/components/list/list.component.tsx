"use client";

import { useContext } from "react";
import styles from "./list.module.css";

import ItemComponent from "@/app/search/components/item/item.component";
import { ItemsContext } from "../../providers/filters/items.provider";

// const items = Array(100)
//   .fill(null)
//   .map((_, i) => i + 1);

export default function ListComponent() {
  const { filteredItems } = useContext(ItemsContext);

  return (
    <ul className={styles.list}>
      {filteredItems.map((item) => (
        <ItemComponent key={item.value} item={item} />
      ))}
    </ul>
  );
}
