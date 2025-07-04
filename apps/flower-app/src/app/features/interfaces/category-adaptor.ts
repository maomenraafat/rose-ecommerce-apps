import { CategoryApiData, CategoryRes } from "./categoryRes";

export interface CategoryAdaptor {
    adaptApiCategory(data: CategoryApiData): CategoryRes,
}
