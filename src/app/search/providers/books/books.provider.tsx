"use client"

import { BookModel } from "@/types/models/book.models";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

type ContextValue = {
  filteredBooks: BookModel[];
};

export const BooksContext = createContext<ContextValue>({
  filteredBooks: [],
});

type Props = PropsWithChildren & {
  books: BookModel[];
};

export default function BooksProvider({ children, books }: Props) {
  const { filters } = useContext(FiltersContext);

  const [filteredBooks, setFilteredBooks] = useState<BookModel[]>([]);

  const isVisible = useCallback(
    (book: BookModel): boolean => {
      return (
        doesBookInclude(book, filters.query) &&
        doesInclude(book?.category, filters.category) &&
        doesInclude(book?.genre, filters.genre) &&
        doesInclude(book.format, filters.format) &&
        doesInclude(book.price, filters.price)
      );
    },
    [filters]
  );

  useEffect(() => {
    setFilteredBooks(books.filter(isVisible));
  }, [isVisible, books]);

  return (
    <BooksContext.Provider value={{ filteredBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

function doesBookInclude(book: BookModel, query?: string): boolean {
  if (!query) {
    return true;
  }
  return doesSomeInclude([book.name, book.brief, book.author], query);
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }
  return items.some((item) => doesInclude(item, query));
}

function doesInclude(
  item: string | undefined[] | undefined | string[],
  query?: string
): boolean {
  if (!query) {
    return true;
  }

  if (typeof item == "string") {
    return item?.toLowerCase().includes(query.toLowerCase());
  } else if (Array.isArray(item)) {
    return item.some((eachItem) =>
      eachItem?.toLowerCase().includes(query.toLowerCase())
    );
  }

  return false;
}
