export interface IProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  title: string;
  price: number;
  rating: number;
}

interface IRating {
  count: number;
  rate: number;
}

export interface IFetchProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  title: string;
  price: number;
  rating: IRating;
}
