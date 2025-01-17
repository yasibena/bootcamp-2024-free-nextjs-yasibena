export type BookModel = {
  id: string;
  name: string;
  image: string;
  year: number;
  category: string[] | undefined[] | undefined ;
  genre?: string | undefined | undefined[];
  format: string;
  author: string;
  price: string;
  inStock: boolean;
  brief: string;
  rating: number;
  amount: number;
  totalVotes: number;
};
