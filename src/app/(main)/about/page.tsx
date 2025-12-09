"use client";

import { colors } from "@/theme/colors";
import { Users, Target, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const values = [
        {
            icon: Target,
            title: "Outcome-Driven",
            description: "We're not selling code — we're selling results. More revenue, less manual work, faster customer response, and systems that replace inefficient processes."
        },
        {
            icon: Zap,
            title: "Built for Speed",
            description: "Modern tech stack, efficient workflows, and rapid deployment. We build fast, test thoroughly, and ship solutions that work from day one."
        },
        {
            icon: Users,
            title: "True Partnership",
            description: "Your dedicated tech team that understands your business. We're here for the long haul — building, maintaining, and scaling as you grow."
        },
        {
            icon: Award,
            title: "Enterprise Quality",
            description: "Premium software without the enterprise price tag. Clean code, secure architecture, and systems built to scale with your business."
        }
    ];

    const stats = [
        { label: "Custom Solutions", value: "100+" },
        { label: "Businesses Automated", value: "50+" },
        { label: "Uptime Guarantee", value: "99.9%" },
        { label: "Support Available", value: "24/7" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

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
                            About Us
                        </motion.div>
                        <motion.h1
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-3xl"
                            style={{ color: colors.text.primary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Your Digital Forge for Business Systems
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            We&apos;re a full-stack tech partner that builds custom software and automations to grow and streamline businesses. Walk in with chaos, walk out with systems that behave themselves.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="w-full py-16 lg:py-24"
                style={{ backgroundColor: colors.background.secondary }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="grid grid-cols-2 gap-8 md:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center space-y-2"
                                variants={itemVariants}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div
                                    className="text-4xl md:text-5xl font-bold"
                                    style={{ color: colors.primary }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm md:text-base"
                                    style={{ color: colors.text.secondary }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="w-full py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2
                                className="text-3xl font-bold tracking-tighter sm:text-4xl"
                                style={{ color: colors.text.primary }}
                            >
                                We Build Systems That Actually Work
                            </h2>
                            <p
                                className="text-base md:text-lg"
                                style={{ color: colors.text.secondary }}
                            >
                                Most businesses are held back by inefficient processes, missed opportunities, and manual work that shouldn&apos;t exist. We fix that. Built specializes in creating custom software, AI automations, and business systems that eliminate friction and unlock growth.
                            </p>
                            <p
                                className="text-base md:text-lg"
                                style={{ color: colors.text.secondary }}
                            >
                                Whether it&apos;s an AI phone agent that captures every lead, a custom dashboard that unifies your operations, or workflow automation that saves your team hours every day — we build solutions that pay for themselves and scale with your business.
                            </p>
                        </motion.div>
                        <motion.div
                            className="aspect-square rounded-xl overflow-hidden relative"
                            style={{
                                backgroundColor: colors.background.secondary,
                                borderColor: colors.border.default,
                                borderWidth: '1px'
                            }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-full h-full relative flex items-center justify-center p-8">
                                {/* Animated grid pattern */}
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 p-8">
                                    {Array.from({ length: 16 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="rounded-lg"
                                            style={{
                                                backgroundColor: `${colors.primary}${Math.floor(Math.random() * 3 + 1)}0`
                                            }}
                                            initial={{ scale: 0, rotate: 0 }}
                                            whileInView={{
                                                scale: 1,
                                                rotate: Math.random() > 0.5 ? 180 : -180
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: i * 0.05,
                                                ease: "easeOut"
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: `${colors.primary}50`,
                                                transition: { duration: 0.2 }
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Central icon */}
                                <motion.div
                                    className="relative z-10 p-8 rounded-2xl backdrop-blur-sm"
                                    style={{
                                        backgroundColor: `${colors.background.primary}CC`,
                                        borderColor: colors.primary,
                                        borderWidth: '2px'
                                    }}
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    whileHover={{ rotate: 360, scale: 1.05 }}
                                >
                                    <Zap
                                        className="h-20 w-20"
                                        style={{ color: colors.primary }}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section
                className="w-full py-16 lg:py-24"
                style={{ backgroundColor: colors.background.secondary }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center space-y-4 text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl"
                            style={{ color: colors.text.primary }}
                        >
                            How We Work
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            We&apos;re not just developers — we&apos;re your technical partner focused on delivering real business results.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4"
                                variants={itemVariants}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className="p-4 rounded-xl"
                                    style={{ backgroundColor: `${colors.primary}1A` }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <value.icon
                                        className="h-8 w-8"
                                        style={{ color: colors.primary }}
                                    />
                                </motion.div>
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: colors.text.primary }}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    className="text-sm"
                                    style={{ color: colors.text.secondary }}
                                >
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
