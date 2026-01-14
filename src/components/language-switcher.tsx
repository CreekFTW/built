"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./language-provider";
import { colors } from "@/theme/colors";
import { Language, languages } from "../../public/lang/languages";


export function LanguageSwitcher() {
    const { language, setLanguage, isLoading } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find((l) => l.code === language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageSelect = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                className="flex items-center gap-2 px-3 py-3 h-full rounded-lg transition-colors"
                style={{
                    backgroundColor: isOpen ? colors.background.secondary : "transparent",
                    color: colors.text.primary,
                }}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ backgroundColor: colors.background.secondary }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
            >
                <Globe className="h-4 w-4" style={{ color: colors.text.secondary }} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg overflow-hidden z-50"
                        style={{
                            backgroundColor: colors.background.secondary,
                            borderColor: colors.border.default,
                            borderWidth: "1px",
                        }}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                        <div className="py-2 max-h-80 overflow-y-auto">
                            {languages.map((lang) => (
                                <motion.button
                                    key={lang.code}
                                    className="w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors"
                                    style={{
                                        backgroundColor:
                                            language === lang.code
                                                ? `${colors.primary}1A`
                                                : "transparent",
                                        color: colors.text.primary,
                                    }}
                                    onClick={() => handleLanguageSelect(lang.code)}
                                    whileHover={{
                                        backgroundColor:
                                            language === lang.code
                                                ? `${colors.primary}26`
                                                : colors.background.tertiary,
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">{lang.flag}</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">
                                                {lang.nativeName}
                                            </span>
                                            <span
                                                className="text-xs"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                {lang.name}
                                            </span>
                                        </div>
                                    </div>
                                    {language === lang.code && (
                                        <Check
                                            className="h-4 w-4"
                                            style={{ color: colors.primary }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
