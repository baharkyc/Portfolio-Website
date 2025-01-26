import { useLanguage } from "../context/LanguageContext";
import { Globe, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function LanguageMenu() {
    const { language, toggleLanguage, isLoading } = useLanguage();
    const { theme } = useTheme();

    return (
        <button
            onClick={toggleLanguage}
            disabled={isLoading}
            className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 transition-all"
            aria-label="Toggle language"
            >
            {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-gray-600 dark:text-gray-300" />
            ) : (
            <>
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className={`ml-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
                {language.toUpperCase()}
                </span>
            </>
            )}
        </button>
    )
}