import { useContext } from "react";
import { ThemeContext } from "./ContextStore";

const Consumer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "red",
        }}
      >
        value
      </div>
      <button onClick={toggleTheme}>change Theme</button>
    </>
  );
};

export default Consumer;
