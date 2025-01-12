export type BookModel = {
  id: string;
  name: string;
  image: string;
  year: number;
  categories: string[];
  author: string;
  price: number;
  inStock: boolean;
  brief: string;
  rating: number;
  amount: number;
  totalVotes: number;
};
