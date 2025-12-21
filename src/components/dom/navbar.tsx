"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface INavigationItems {
    title: string;
    description: string;
    href?: string
    items?: ISubNavigationItem[]
}

interface ISubNavigationItem {
    title: string;
    href: string;
}

export const Navbar = () => {
    const router = useRouter();
    const navigationItems: INavigationItems[] = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Solutions",
            href: "/#solutions",
            description: "",
        },
        {
            title: "Testimonials",
            href: "/#testimonials",
            description: "",
        },
        {
            title: "FAQ",
            href: "/#faq",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background border-b border-border">
            <div className="container relative mx-auto min-h-16 sm:min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 sm:px-6 md:px-10 2xl:px-0">
                <div className="flex lg:justify-center">
                    <Link href="/" className="font-semibold text-lg sm:text-base">Built</Link>
                </div>
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className="h-6" onClick={() => router.push(item.href!)}>{item.title}</Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="w-[450px]! p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10" onClick={() => router.push("/contact#contact-form")}>
                                                            Get started
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button variant="ghost" className="hidden md:inline" onClick={() => router.push(`/about`)}>
                        About Us
                    </Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button variant="outline" className="hidden md:inline" onClick={() => router.push(`/contact`)}>Contact Us</Button>
                    <Button variant="ghost" size="icon" className="hidden md:flex md:justify-center pr-0.5" onClick={() => window.open('https://t.me/built', '_blank')}>
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" size="sm" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="absolute top-16 sm:top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 px-6 sm:px-8 md:px-12 container gap-6 sm:gap-8 max-h-[calc(100vh-4rem)] overflow-y-auto"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                {navigationItems.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                                    >
                                        <div className="flex flex-col gap-2">
                                            {item.href ? (
                                                <Link
                                                    href={item.href}
                                                    className="flex justify-between items-center hover:text-primary transition-colors"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-lg">{item.title}</span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                                </Link>
                                            ) : (
                                                <p className="text-lg">{item.title}</p>
                                            )}
                                            {item.items &&
                                                item.items.map((subItem, subIndex) => (
                                                    <motion.div
                                                        key={subItem.title}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.2, delay: (index * 0.1) + (subIndex * 0.05) + 0.1 }}
                                                    >
                                                        <Link
                                                            href={subItem.href}
                                                            className="flex justify-between items-center hover:text-primary transition-colors"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="text-muted-foreground">
                                                                {subItem.title}
                                                            </span>
                                                            <MoveRight className="w-4 h-4 stroke-1" />
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </motion.div>
                                ))}
                                <motion.div
                                    className="border-t pt-4 flex flex-col gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
                                >
                                    <Link
                                        href={`${process.env.NEXT_PUBLIC_ROOT}/about`}
                                        className="flex justify-between items-center hover:text-primary transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="text-lg">About Us</span>
                                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                    </Link>
                                    <Link
                                        href={`${process.env.NEXT_PUBLIC_ROOT}/contact`}
                                        className="flex justify-between items-center hover:text-primary transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="text-lg">Contact Us</span>
                                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                    </Link>
                                    <a
                                        href="https://t.me/built"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-between items-center hover:text-primary transition-colors hover:pointer-events-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="text-lg">Telegram</span>
                                        <Send className="w-4 h-4 stroke-1 text-muted-foreground" />
                                    </a>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};