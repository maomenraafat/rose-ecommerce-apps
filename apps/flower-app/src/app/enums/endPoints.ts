export const API_EndPoints = {
  Categories: {
    All: `/api/v1/categories`,
    ById: (id: string) => `/api/v1/categories/${id}`
  },
  Products: {
    All: `/api/v1/products`,
    ById: (id: string) => `/api/v1/categories/${id}`
  },
  Occasions: {
    All: `/api/v1/occasions`,
    ById: (id: string) => `/api/v1/categories/${id}`
  },

}
