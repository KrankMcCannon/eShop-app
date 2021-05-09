import http from "./httpService";
import { apiUsers } from "../config.json";

export function register(user) {
  return http.post(apiUsers, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
