"use client";

import { FilterType } from "@/types/filters.type";
import { Dispatch, PropsWithChildren, ReactElement, useReducer } from "react";
import {
  FilterAction,
  filterReducer,
} from "@/app/search/reducers/filters.reducer";
import { createContext } from "react";

type Value = {
  filters: FilterType;
  dispatchFilters: Dispatch<FilterAction>;
};

export const FiltersContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FilterType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filterReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
