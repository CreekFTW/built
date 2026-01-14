"use client";

import { Boxes, Bot, Database, Workflow, Users, Globe, Code, Plug } from "lucide-react";
import { colors } from "@/theme/colors";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const Solutions = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Boxes,
            title: t.solutions.items.customBusinessSystems.title,
            description: t.solutions.items.customBusinessSystems.description
        },
        {
            icon: Bot,
            title: t.solutions.items.aiPhoneAgents.title,
            description: t.solutions.items.aiPhoneAgents.description
        },
        {
            icon: Database,
            title: t.solutions.items.dataTools.title,
            description: t.solutions.items.dataTools.description
        },
        {
            icon: Workflow,
            title: t.solutions.items.automation.title,
            description: t.solutions.items.automation.description
        },
        {
            icon: Users,
            title: t.solutions.items.employeeManagement.title,
            description: t.solutions.items.employeeManagement.description
        },
        {
            icon: Globe,
            title: t.solutions.items.customWebsites.title,
            description: t.solutions.items.customWebsites.description
        },
        {
            icon: Code,
            title: t.solutions.items.customSoftware.title,
            description: t.solutions.items.customSoftware.description
        },
        {
            icon: Plug,
            title: t.solutions.items.apiIntegrations.title,
            description: t.solutions.items.apiIntegrations.description
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
            className="w-full py-12 sm:py-16 md:py-20 lg:py-40 "
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
                            {t.solutions.badge}
                        </motion.div>
                        <h2
                            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            {t.solutions.title}
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            {t.solutions.description}
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
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-full min-h-[300px]"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.div
                                className="relative h-full min-h-[300px] cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            >
                                {/* Front of card */}
                                <div
                                    className="absolute inset-0 rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center"
                                    style={{
                                        backgroundColor: colors.background.secondary,
                                        borderColor: colors.border.default,
                                        borderWidth: '1px',
                                        backfaceVisibility: "hidden",
                                    }}
                                >
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{ backgroundColor: colors.neutral[800] }}
                                    >
                                        <feature.icon
                                            className="h-12 w-12"
                                            style={{ color: colors.primary }}
                                        />
                                    </div>
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: colors.text.primary }}
                                    >
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Back of card */}
                                <div
                                    className="absolute inset-0 rounded-xl p-6 flex items-center justify-center"
                                    style={{
                                        backgroundColor: colors.background.secondary,
                                        borderColor: colors.border.emphasis,
                                        borderWidth: '1px',
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <p
                                        className="text-base leading-relaxed"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Solutions
