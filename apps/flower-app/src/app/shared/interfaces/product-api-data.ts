import { Product } from './product';

export interface ProductApiData {
  message: string;
  metadata: Metadata;
  products: Product[];
}

export interface Metadata {
  currentPage: number;
  totalPages: number;
  limit: number;
  totalItems: number;
}

export interface ProductApiRes {
  message: string;
  metadata: Metadata;
  products: Product[];
}
