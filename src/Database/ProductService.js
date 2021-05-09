import http from "./httpService";
import { apiProducts } from "../config.json";

function productUrl(id) {
  return `${apiProducts}/${id}`;
}

export function getProducts() {
  return http.get(apiProducts);
}

export function getProduct(productId) {
  console.log(productId);
  return http.get(productUrl(productId));
}

export function saveProduct(product) {
  console.log(product);
  if (product.id) {
    const body = { ...product };
    delete body.id;
    return http.put(productUrl(product.id), body);
  }
  return http.post(apiProducts, product);
}

export function deleteProduct(productId) {
  return http.delete(productUrl(productId));
}
