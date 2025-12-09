"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, Bot, Database, Workflow, Users, Globe, Code, Plug } from "lucide-react";
import { colors } from "@/theme/colors";
import { motion } from "framer-motion";

const Solutions = () => {
    const features = [
        {
            icon: Boxes,
            title: "Custom Business Systems",
            description: "Purpose-built internal software that replaces spreadsheets, manual workflows, and inefficient tools. Unified dashboards, CRMs, inventory management, and reporting suites."
        },
        {
            icon: Bot,
            title: "AI Phone Call Agents",
            description: "Intelligent voice bots trained on your business that answer calls, book appointments, qualify leads, and handle FAQs — 24/7 lead capture with CRM integration."
        },
        {
            icon: Database,
            title: "Data Tools & Custom Scrapers",
            description: "Private, automated tools for competitive insights, lead generation, pricing intelligence, and daily reports. Get the data you need without the noise."
        },
        {
            icon: Workflow,
            title: "Automation & AI Workflows",
            description: "Automate repetitive tasks and connect all your tools into one seamless ecosystem. Save time, reduce errors, and scale without hiring more people."
        },
        {
            icon: Users,
            title: "Employee Management Systems",
            description: "Custom internal platforms with time tracking, task assignment, performance dashboards, automated reminders, and payroll export to keep teams accountable."
        },
        {
            icon: Globe,
            title: "Custom Websites",
            description: "Clean, fast, modern websites designed to convert. SEO-ready builds with lead capture, booking integrations, and seamless connection to your automations."
        },
        {
            icon: Code,
            title: "Fully Custom Software",
            description: "Complete software products built from scratch for unique visions. SaaS platforms, customer portals, dashboards, marketplaces, and mobile apps — scalable and secure."
        },
        {
            icon: Plug,
            title: "API & System Integrations",
            description: "Connect your tools seamlessly with custom API integrations. Sync data between platforms, automate workflows, and eliminate duplicate data entry across your tech stack."
        }
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
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section
            id="solutions"
            className="w-full py-12 sm:py-16 md:py-20 lg:py-40"
            style={{ backgroundColor: colors.background.secondary }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-2 px-4">
                        <motion.div
                            className="inline-block rounded-lg px-3 py-1 text-xs sm:text-sm"
                            style={{
                                backgroundColor: colors.neutral[800],
                                color: colors.text.tertiary
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            Services
                        </motion.div>
                        <h2
                            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            Solutions Built for Growth
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            From AI-powered automations to fully custom software — we build systems that drive revenue, eliminate manual work, and scale with your business.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card
                                className="h-full hover:shadow-lg transition-shadow group"
                                style={{
                                    backgroundColor: colors.background.tertiary,
                                    borderColor: colors.border.default
                                }}
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className="p-2 rounded-lg"
                                            style={{ backgroundColor: `${colors.primary}1A` }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <feature.icon
                                                className="h-6 w-6"
                                                style={{ color: colors.primary }}
                                            />
                                        </motion.div>
                                        <CardTitle
                                            className="text-xl"
                                            style={{ color: colors.text.primary }}
                                        >
                                            {feature.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription
                                        className="text-base"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Solutions
