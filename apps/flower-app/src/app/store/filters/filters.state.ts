export interface FiltersState {
  categories: string[];
  occasions: string[];
  searchTerm: string;
}

export const initialState: FiltersState = {
  categories: [],
  occasions: [],
  searchTerm: '',
};