"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { colors } from "@/theme/colors";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = t.testimonials.items.map((item) => ({
        ...item,
        rating: 5
    }));

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
        <section
        id="testimonials"
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
                            {t.testimonials.badge}
                        </motion.div>
                        <h2
                            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            {t.testimonials.title}
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            {t.testimonials.description}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Card
                                className="h-full hover:shadow-lg transition-all duration-300 group"
                                style={{
                                    backgroundColor: colors.background.tertiary,
                                    borderColor: colors.border.default
                                }}
                            >
                                <CardContent className="pt-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <Quote
                                            className="h-8 w-8 opacity-20"
                                            style={{ color: colors.primary }}
                                        />
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4 fill-current"
                                                    style={{ color: colors.primary }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <p
                                        className="text-base leading-relaxed"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    <div className="pt-4 border-t" style={{ borderColor: colors.border.default }}>
                                        <p
                                            className="font-semibold"
                                            style={{ color: colors.text.primary }}
                                        >
                                            {testimonial.name}
                                        </p>
                                        <p
                                            className="text-sm"
                                            style={{ color: colors.text.tertiary }}
                                        >
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
