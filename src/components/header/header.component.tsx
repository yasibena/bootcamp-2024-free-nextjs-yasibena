"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";
import clsx from "clsx";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathname === "/" && styles.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathname === "/search" && styles.active)}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
