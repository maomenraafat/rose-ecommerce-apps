export interface OccasionApiData {
  message: string
  metadata: Metadata
  occasions: OccasionDto[]
}

export interface Metadata {
  currentPage: number
  limit: number
  totalPages: number
  totalItems: number
}

export interface OccasionDto {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  isSuperAdmin: boolean
  productsCount: number
}

export interface OccasionRes {
  message: string;
  occasions: OccasionMini[]; 
}
export interface OccasionMini {
  name: string;
  image: string;
  _id: string;
  productsCount: number;
  isSuperAdmin: boolean;
}
