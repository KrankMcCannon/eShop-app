import http from "./httpService";
import { apiCategories } from "../config.json";

export function getCategories() {
  return http.get(apiCategories);
  // const genres = data.json();
  // return genres;
}
