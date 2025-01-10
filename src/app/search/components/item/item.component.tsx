"use client"

import React from "react";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./item.module.css";

type Props = {
  item: number;
};

export default function ItemComponent({ item }: Props) {
  return <li className={styles.item}>{item}</li>;
}
