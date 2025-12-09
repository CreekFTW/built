"use client";

import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Lock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function Security() {
    const keyPoints = [
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-level encryption, secure authentication, and industry-standard security protocols across all systems we build."
        },
        {
            icon: Lock,
            title: "Data Protection",
            description: "Your data is encrypted at rest and in transit. We implement strict access controls and regular security audits."
        },
        {
            icon: AlertTriangle,
            title: "Vulnerability Management",
            description: "Proactive monitoring, regular penetration testing, and rapid response to security threats and vulnerabilities."
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
                            Security Policy
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Security isn&apos;t an afterthought — it&apos;s built into every line of code. Learn how we protect your business-critical systems and data.
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
                                Review Our Full Security Policy
                            </h2>
                            <p
                                className="text-base md:text-lg"
                                style={{ color: colors.text.secondary }}
                            >
                                Our comprehensive security documentation covers our development practices, infrastructure security, compliance standards, incident response procedures, and data protection measures.
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
                                onClick={() => window.open(process.env.NEXT_PUBLIC_SECURITY_URL, "_blank")}
                            >
                                View Full Security Policy
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
