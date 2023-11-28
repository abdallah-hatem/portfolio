"use client";
import { createContext, useContext, useState } from "react";

// 1. create a context with ThemeState and initialize it to null
const ThemeContext = createContext();

const useTheme = () => {
  // 2. use the useContext hook
  const context = useContext(ThemeContext);

  // 3. Make sure it's not null!
  if (!context) {
    throw new Error("Please use ThemeProvider in parent component");
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default useTheme;
