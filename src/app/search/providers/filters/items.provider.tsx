"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ItemType } from "@/types/item.type";
import { FilterContext } from "./filters.provider";

type ContextValue = {
  filteredItems: ItemType[];
};

export const ItemsContext = createContext<ContextValue>({
  filteredItems: [],
});

type Props = PropsWithChildren & {
  items: ItemType[];
};

export default function ItemsProvider({ children, items }: Props) {
  const { filters } = useContext(FilterContext);

  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);

  const isActive = useCallback(
    (item: ItemType): boolean => {
      if (filters.even && item.value % 2 === 0) {
        return true;
      }
      if (filters.odd && item.value % 2 === 1) {
        return true;
      }
      if (filters.three && item.value % 3 === 0) {
        return true;
      }
      if (filters.five && item.value % 5 === 0) {
        return true;
      }
      return !!(filters.seven && item.value % 7 === 0);
    },
    [filters]
  );

  useEffect(() => {
    setFilteredItems(items.filter(isActive));
  }, [isActive, items]);

  return (
    <ItemsContext.Provider value={{ filteredItems }}>
      {children}
    </ItemsContext.Provider>
  );
}
