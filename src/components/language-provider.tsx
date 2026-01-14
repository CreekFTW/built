"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, Translations } from "../../public/lang/en";
import { Language } from "../../public/lang/languages";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "built-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [translations, setTranslations] = useState<Translations>(en);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (savedLanguage && isValidLanguage(savedLanguage)) {
            setLanguageState(savedLanguage);
            if (savedLanguage !== "en") {
                loadTranslations(savedLanguage);
            }
        }
    }, []);

    const isValidLanguage = (lang: string): lang is Language => {
        return ["en", "es", "fr", "de", "pt", "zh", "ja", "ko", "ar", "ru"].includes(lang);
    };

    const loadTranslations = async (lang: Language) => {
        if (lang === "en") {
            setTranslations(en);
            return;
        }

        setIsLoading(true);
        try {
            const langModule = await import(`../../public/lang/${lang}.ts`);
            setTranslations(langModule[lang] || langModule.default || en);
        } catch (error) {
            console.warn(`Translation file for ${lang} not found, falling back to English`);
            setTranslations(en);
        } finally {
            setIsLoading(false);
        }
    };

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
        loadTranslations(lang);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations,
                isLoading,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
