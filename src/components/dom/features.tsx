"use client";

import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { colors } from "@/theme/colors";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const Features = () => {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: Zap,
            title: t.features.items.fastDelivery.title,
            description: t.features.items.fastDelivery.description,
            highlight: t.features.items.fastDelivery.highlight
        },
        {
            icon: Shield,
            title: t.features.items.builtToLast.title,
            description: t.features.items.builtToLast.description,
            highlight: t.features.items.builtToLast.highlight
        },
        {
            icon: TrendingUp,
            title: t.features.items.driveRevenue.title,
            description: t.features.items.driveRevenue.description,
            highlight: t.features.items.driveRevenue.highlight
        },
        {
            icon: CheckCircle2,
            title: t.features.items.fullOwnership.title,
            description: t.features.items.fullOwnership.description,
            highlight: t.features.items.fullOwnership.highlight
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section
            className="w-full py-12 sm:py-16 md:py-20 lg:py-40"
            style={{ backgroundColor: colors.background.primary }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-3 sm:space-y-4">
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
                                {t.features.badge}
                            </motion.div>
                            <h2
                                className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
                                style={{ color: colors.text.primary }}
                            >
                                {t.features.title}
                            </h2>
                            <p
                                className="text-base sm:text-lg md:text-xl max-w-[600px]"
                                style={{ color: colors.text.secondary }}
                            >
                                {t.features.description}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-3 sm:gap-4 group"
                                variants={itemVariants}
                            >
                                <div className="shrink-0">
                                    <motion.div
                                        className="p-2 sm:p-3 rounded-lg"
                                        style={{
                                            backgroundColor: `${colors.primary}1A`,
                                            borderColor: colors.border.default,
                                            borderWidth: '1px'
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <benefit.icon
                                            className="h-5 w-5 sm:h-6 sm:w-6"
                                            style={{ color: colors.primary }}
                                        />
                                    </motion.div>
                                </div>
                                <div className="space-y-1 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                        <h3
                                            className="text-lg sm:text-xl font-semibold"
                                            style={{ color: colors.text.primary }}
                                        >
                                            {benefit.title}
                                        </h3>
                                        <span
                                            className="text-xs px-2 py-1 rounded-full font-medium w-fit"
                                            style={{
                                                backgroundColor: `${colors.primary}1A`,
                                                color: colors.primary
                                            }}
                                        >
                                            {benefit.highlight}
                                        </span>
                                    </div>
                                    <p
                                        className="text-sm sm:text-base"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
