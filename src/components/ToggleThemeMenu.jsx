import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ToggleThemeMenu() {

    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-gray-300" />
            ) : (
            <Moon className="w-5 h-5 text-gray-600" />
            )}
        </button>
    )
}