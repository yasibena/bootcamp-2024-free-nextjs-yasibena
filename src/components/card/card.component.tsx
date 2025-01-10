import React from "react";

import styles from "./card.module.css";

export default function CardComponent({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
