import React, { createContext, useState, ReactNode } from 'react';
import { isValidEmail } from '../utils/isValidEmail';
import { register } from '../application/register';

export interface User {
  email: string;
  password: string;
}

interface AuthContextProps {
  registerNewUser: (email: string, password: string) => "invalid email structure" | "email exists or password short" | "success";
  login: (email: string, password: string) => boolean;
  loggedInUser: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const registerNewUser: AuthContextProps["registerNewUser"] = (email, password) => {
    const response = register(users, email, password);
    if (response === "success") {
      setUsers([...users, { email, password }]);
      return "success";
    }
    return response
  };


  const login = (email: string, password: string): boolean => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setLoggedInUser(user);
      return true;
    }
    return false;
  };


  return (
    <AuthContext.Provider value={{ registerNewUser, login, loggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
