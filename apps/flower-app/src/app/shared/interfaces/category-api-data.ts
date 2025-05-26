import { Category } from './category';

export interface CategoryApiData {
  message: string;
  metadata: Metadata;
  categories: Category[];
}
export interface Metadata {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

export interface CategoryApiRes {
  message: string;
  metadata: Metadata;
  categories: Category[];
}
