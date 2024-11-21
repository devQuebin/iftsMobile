import React, { createContext, useState, useContext } from "react";

type User = {
  username: string;
  password: string;
};

type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([
    { username: "admin", password: "password" },
  ]);
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Estado para el usuario actual

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
