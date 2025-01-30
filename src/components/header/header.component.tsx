"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";
import clsx from "clsx";
import MingcuteDarkModeFill from "@/icons/MingcuteDarkMode";
import MingcuteLightModeFill from "@/icons/MingcuteLightMode";

export default function HeaderComponent() {
  const pathname = usePathname();

  const [lightMode, setLightMode] = useState(() => {
    if (typeof window !== "undefined") {
      return true;
    }

    const savedTheme = localStorage.getItem("lightMode");
    return savedTheme ? savedTheme === "true" : true;
  });

  const toggleMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (lightMode) {
        root.setAttribute("data-theme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
      }
      localStorage.setItem("lightMode", lightMode.toString());
    }
  }, [lightMode]);

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <div className={clsx(styles.toggleMode)} onClick={toggleMode}>
            {lightMode ? <MingcuteDarkModeFill /> : <MingcuteLightModeFill />}
          </div>
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
