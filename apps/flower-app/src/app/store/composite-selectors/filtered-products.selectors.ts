import { createSelector } from "@ngrx/store";
import { selectAllProducts } from "../products/products.selectors";
import { selectFilters } from "../filters/filters.selectors";

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectFilters,
  (products, f) =>
    products.filter((p) => {
      const catOk   = !f.categories.length || f.categories.includes(p.category);
      const occOk   = !f.occasions.length  || f.occasions.includes(p.occasion);
      const searchOk = !f.searchTerm || p.title.toLowerCase().includes(f.searchTerm.toLowerCase());
      return catOk && occOk && searchOk;
    })
);
