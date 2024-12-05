import { User } from "../context/AuthContext";

export const login = (users: User[], email: string, password: string): "invalid user" | "success" => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      return "success";
    }
    return "invalid user";
  };