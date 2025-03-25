import { createContext, ReactNode, useState } from "react";

// Union type alias create
type ThemeType = "light" | "dark";

//Interface create
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

//create Context
export const ThemeContext = createContext<ThemeContextType>({
  //Default value
  theme: "light",
  toggleTheme: () => {},
});

//Context provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//# Best practice
//^1. Memoize the context value to prevent unnecessary re-renders:

// const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
// return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

//^ 2. Custom hook create - for context consumption
// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//       throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
//   };

// Then use it as consumer in child component:

// const { theme, toggleTheme } = useTheme();

//^ 3 Separate concerns - Keep context creation, provider, and types / Interface in separate files for larger apps (we can use export with everyone (e.g typeAlias, Interface))
