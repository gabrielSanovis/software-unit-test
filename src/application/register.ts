import { User } from "../context/AuthContext";
import { isValidEmail } from "../utils/isValidEmail";

export const register = (users: User[], email: string, password: string): "invalid email structure" | "email exists or password short" | "success" => {
  if (isValidEmail(email)) return "invalid email structure";
  if (users.find((user) => user.email === email) || password.length < 8) {
    return "email exists or password short";
  }
  return "success";
};