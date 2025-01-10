"use client";

import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { FiltersType } from "../../types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey]
  ) => void;
  removeFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
  clearAll: () => void;
};

export const FilterContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
  clearAll: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilter = useCallback(
    <TKey extends keyof FiltersType>(
      key: TKey,
      value: FiltersType[TKey]
    ): void => {
      setFilters((old) => ({ ...old, [key]: value }));
    },
    []
  );

  const removeFilter = useCallback(
    <TKey extends keyof FiltersType>(key: TKey): void => {
      setFilters((old) => {
        const clone = { ...old };
        delete clone[key];
        return clone;
      });
    },
    []
  );

  const clearAll = useCallback((): void => {
    setFilters({});
  }, []);

  return (
    <FilterContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAll }}
    >
      {children}
    </FilterContext.Provider>
  );
}
