import { createContext, useContext } from "react";
import { TechContext } from "./TechProvider";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const { user, setUser, loading, setLoading } = useContext(TechContext);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
