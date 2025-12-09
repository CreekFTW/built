"use client";

import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Terms() {
    const keyPoints = [
        {
            icon: FileText,
            title: "Service Agreement",
            description: "Terms governing the use of our custom software development and AI automation services."
        },
        {
            icon: Shield,
            title: "Client Protection",
            description: "Your rights, code ownership, data security, and intellectual property agreements."
        },
        {
            icon: ExternalLink,
            title: "Full Documentation",
            description: "Complete terms of service available via external link for detailed review."
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full py-20 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center space-y-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block rounded-lg px-3 py-1 text-sm"
                            style={{
                                backgroundColor: colors.neutral[800],
                                color: colors.text.tertiary
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            Legal
                        </motion.div>
                        <motion.h1
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-3xl"
                            style={{ color: colors.text.primary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Terms of Service
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Clear, straightforward terms that protect both you and us. Review our complete terms of service documentation below.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Key Points Section */}
            <section
                className="w-full py-16 lg:py-24"
                style={{ backgroundColor: colors.background.secondary }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="grid gap-8 md:grid-cols-3 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {keyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl"
                                style={{
                                    backgroundColor: colors.background.tertiary,
                                    borderColor: colors.border.default,
                                    borderWidth: '1px'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className="p-3 rounded-lg"
                                    style={{ backgroundColor: `${colors.primary}1A` }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <point.icon
                                        className="h-6 w-6"
                                        style={{ color: colors.primary }}
                                    />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: colors.text.primary }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p
                                        className="text-sm"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-4">
                            <h2
                                className="text-3xl font-bold tracking-tighter sm:text-4xl"
                                style={{ color: colors.text.primary }}
                            >
                                Review Our Full Terms
                            </h2>
                            <p
                                className="text-base md:text-lg"
                                style={{ color: colors.text.secondary }}
                            >
                                Our complete terms of service document covers all aspects of our working relationship, from project scope and deliverables to payment terms and intellectual property rights.
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="gap-2"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: colors.text.primary
                                }}
                                onClick={() => window.open(process.env.NEXT_PUBLIC_TERMS_URL, "_blank")}
                            >
                                View Full Terms of Service
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </motion.div>
                        <p
                            className="text-sm"
                            style={{ color: colors.text.tertiary }}
                        >
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
