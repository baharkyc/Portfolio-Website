import { useLanguage } from "../context/LanguageContext";
import { Globe, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function LanguageMenu() {
    const { language, toggleLanguage, isLoading } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (lang) => {
        toggleLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="language-menu relative">
            <button
                onClick={handleToggle}
                disabled={isLoading}
                className="flex items-center p-2 rounded-full-100 dark:hover:bg-gray-800 disabled:opacity-20 transition-all"
                aria-label="Toggle language"
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-text-grey " />
                ) : (
                    <>
                        <Globe className="w-5 h-5 text-text-grey" />
                        <span className="ml-2 text-sm font-medium text-text-grey">
                            {language.toUpperCase()}
                        </span>
                    </>
                )}
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-16 bg-light-bg rounded-md shadow-lg z-50">
                    <button
                        onClick={() => handleLanguageChange('tr')}
                        className=" w-full text-left px-4 py-2 text-sm text-text-grey  hover:bg-dark-bg "
                    >
                        TR
                    </button>
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className="block w-full text-left px-4 py-2 text-sm text-text-grey  hover:bg-dark-bg"
                    >
                        EN
                    </button>
                </div>
            )}
        </div>
    );
}