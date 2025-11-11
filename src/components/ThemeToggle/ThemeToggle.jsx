import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { Sun, Moon, Zap } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        borderRadius: "50%",
        padding: "10px",
        backgroundColor: "var(--card-bg)",
        boxShadow: `0 0 15px var(--shadow-color)`,
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {theme === "light" && <Sun size={22} color="var(--accent-color)" />}
      {theme === "dark" && <Moon size={22} color="var(--accent-color)" />}
      {theme === "neon" && <Zap size={22} color="var(--accent-color)" />}
    </button>
  );
};

export default ThemeToggle;
