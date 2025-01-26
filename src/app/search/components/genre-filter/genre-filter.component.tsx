"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function GenreFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "genre", value });
  };

  return (
    <RadioFilterComponent
      title=" ژانر"
      name="gender"
      options={[
        { value: "حماسی", label: "حماسی" },
        { value: "عاشقانه", label: "عاشقانه" },
        { value: "سوررئالیسم", label: "سوررئالیسم" },
        { value: "عاشقانه-سیاسی", label: "عاشقانه-سیاسی" },
        { value: "عرفانی", label: "عرفانی" },
        { value: "کودکانه", label: "کودکانه" },
      ]}
      value={filters?.genre}
      onChange={changeHandler}
    />
  );
}
