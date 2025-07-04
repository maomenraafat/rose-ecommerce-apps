export interface CategoryApiData {
  message: string;
  metadata: Metadata;
  categories: CategoryDto[]; 
}
export interface Metadata {
  currentPage: number
  limit: number
  totalPages: number
  totalItems: number
}
export interface CategoryDto {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
}



export interface CategoryRes {
  message: string;
  categories: CategoryMini[];
}
export interface CategoryMini {
  name: string;
  image: string;
  _id: string;
  productsCount: number;
  isSuperAdmin: boolean;
}