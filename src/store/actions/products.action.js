import { productsType } from "../types/products.types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsType;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filteredProducts = (id) => ({
  type: FILTERED_PRODUCTS,
  categoryId: id,
})