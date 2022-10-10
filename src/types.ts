export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category_id: number;
}

export interface Category {
  id: number;
  name: string;
}
