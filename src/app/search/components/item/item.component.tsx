"use client";

import React from "react";

import styles from "./item.module.css";
import { ItemType } from "@/types/item.type";


type Props = {
  item: ItemType;
};

export default function ItemComponent({ item }: Props) {

  return (
    <li className={styles.item}>{item.value}</li>
  );
}
