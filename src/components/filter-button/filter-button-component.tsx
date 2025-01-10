import React, { ComponentProps } from "react";

import styles from "./filter-button.module.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
};

export default function FilterButtonComponent({
  className,
  children,
  isActive = false,
  ...otherProps
}: Props) {
  return (
    <button
      className={clsx(
        styles["filter-button"],
        isActive && styles.active,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
