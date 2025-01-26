"use client";

import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteSearch3Line from "@/icons/MingcuteSearch3Line";

import styles from "./global-search-box.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useContext, useEffect, useState } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

export default function GlobalSearchBoxComponent() {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, dispatchFilters } = useContext(FiltersContext);

  const [query, setQuery] = useState<string>("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      } else {
        dispatchFilters({
          type: "removed_filter",
          key: "query",
        });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (pathname !== "/seach") {
      return;
    }

    const filterQuery = filters.query || "";
    setQuery(filterQuery);

    const href = filterQuery ? `/seach/?query=${filterQuery}` : "/search";
    router.replace(href);
  }, [filters, pathname, router]);

  return (
    <form className={styles["global-search-box"]} onSubmit={formSubmitHandler}>
      <div className={styles.prefix}>
        <MingcuteSearch3Line />
      </div>
      <input
        name="query"
        type="text"
        placeholder="نام کتاب، موضوع، نویسنده، ناشر و ..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </form>
  );
}
