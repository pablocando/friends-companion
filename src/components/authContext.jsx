import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = ({ username, email, role }) => {
    setIsLoggedIn(true);
    setUser({ username, email, role });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
         {" "}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
