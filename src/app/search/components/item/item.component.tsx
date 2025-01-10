"use client";

import React, { useContext, useMemo } from "react";

import clsx from "clsx";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";

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
