"use client";

import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    const quickLinks = [
        { title: "Home", href: "/", icon: Home },
        { title: "About Us", href: "/about", icon: Search },
        { title: "Contact", href: "/contact", icon: Search },
    ];

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* 404 Display */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <motion.h1
                            className="text-9xl md:text-[12rem] font-bold"
                            style={{ color: colors.primary }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            404
                        </motion.h1>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            Page Not Found
                        </h2>
                        <p
                            className="text-lg md:text-xl max-w-[600px]"
                            style={{ color: colors.text.secondary }}
                        >
                            Looks like this page took an unexpected detour. The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                className="gap-2"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: colors.text.primary
                                }}
                                onClick={() => router.push("/")}
                            >
                                <Home className="h-4 w-4" />
                                Back to Home
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2"
                                style={{
                                    borderColor: colors.border.default,
                                    color: colors.text.secondary
                                }}
                                onClick={() => router.back()}
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Go Back
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="w-full pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div
                            className="p-6 rounded-xl"
                            style={{
                                backgroundColor: colors.background.secondary,
                                borderColor: colors.border.default,
                                borderWidth: '1px'
                            }}
                        >
                            <h3
                                className="text-lg font-semibold mb-4"
                                style={{ color: colors.text.primary }}
                            >
                                Popular Pages
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-3">
                                {quickLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <button
                                            onClick={() => router.push(link.href)}
                                            className="w-full p-3 rounded-lg text-left flex items-center gap-3 transition-all"
                                            style={{
                                                backgroundColor: colors.background.tertiary,
                                                borderColor: colors.border.default,
                                                borderWidth: '1px'
                                            }}
                                        >
                                            <div
                                                className="p-2 rounded-lg"
                                                style={{ backgroundColor: `${colors.primary}1A` }}
                                            >
                                                <link.icon
                                                    className="h-4 w-4"
                                                    style={{ color: colors.primary }}
                                                />
                                            </div>
                                            <span
                                                className="font-medium"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {link.title}
                                            </span>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
