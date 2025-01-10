import React, { ReactNode } from "react";

import styles from "./card.module.css";

type Props = {
    children:ReactNode
}

export default function CardComponent({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
