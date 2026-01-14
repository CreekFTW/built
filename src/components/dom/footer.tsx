"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export const Footer = () => {
    const { t } = useLanguage();

    const navigationItems = [
        {
            title: t.footer.sections.platform.title,
            description: "Features for connecting, monitoring & managing devices",
            items: [
                {
                    title: t.footer.sections.platform.items.solutions,
                    href: "/#solutions",
                },
                {
                    title: t.footer.sections.platform.items.testimonials,
                    href: "/#testimonials",
                },
                {
                    title: t.footer.sections.platform.items.faq,
                    href: "/#faq",
                },
            ],
        },
        {
            title: t.footer.sections.company.title,
            description: "Learn more about our mission & team",
            items: [
                {
                    title: t.footer.sections.company.items.about,
                    href: "/about",
                },
                {
                    title: t.footer.sections.company.items.careers,
                    href: "/careers",
                },
                {
                    title: t.footer.sections.company.items.contact,
                    href: "/contact",
                },
            ],
        },
        {
            title: t.footer.sections.legal.title,
            description: "Policies & terms governing use of our platform",
            items: [
                {
                    title: t.footer.sections.legal.items.terms,
                    href: "/terms",
                },
                {
                    title: t.footer.sections.legal.items.privacy,
                    href: "/privacy",
                },
                {
                    title: t.footer.sections.legal.items.security,
                    href: "/security",
                },
                {
                    title: t.footer.sections.legal.items.sla,
                    href: "/sla",
                },
            ],
        },
    ];

    return (
        <div className="py-12 sm:py-16 md:py-20 lg:py-40 bg-foreground text-background px-4 sm:px-6 md:px-10 lg:px-20 2xl:px-0">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start lg:items-center">
                    <div className="flex gap-6 sm:gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                {t.common.companyName}
                            </h2>
                            <p className="text-base sm:text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                {t.common.tagline}
                            </p>
                        </div>
                        <div className="flex gap-12 sm:gap-20 flex-row">
                            <div className="flex flex-col text-sm sm:text-base max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                <Link href="/terms">{t.footer.termsOfService}</Link>
                                <Link href="/privacy">{t.footer.privacyPolicy}</Link>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link
                                href="https://www.linkedin.com/company/built-tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-background/75 hover:text-background transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="text-sm sm:text-base">{t.footer.followLinkedIn}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-start">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-sm sm:text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg sm:text-xl font-medium">{item.title}</p>
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-background/75">
                                                    {subItem.title}
                                                </span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};