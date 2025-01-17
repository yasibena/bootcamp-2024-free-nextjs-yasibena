"use client";

import { ReactElement, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select.option.type";

const options: SelectOptionType[] = [
  { value: "rating", label: "بهترین" },
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "newst", label: "جدیدترین" },
  { value: "view", label: "پربازدیدترین" },
];

export default function SortComponent(): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0]
  );

  return (
    <SelectComponent
      floating
      title="مرتب‌سازی"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}
