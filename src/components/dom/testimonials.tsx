"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { colors } from "@/theme/colors";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Marcus Chen",
            role: "Owner",
            company: "Precision HVAC",
            content: "Before Built, we were drowning in missed calls and lost leads. Their AI phone system books service calls while we're on job sites, and the dispatcher dashboard they created cut our scheduling time from 2 hours to 15 minutes daily. We're booking 40% more jobs.",
            rating: 5
        },
        {
            name: "Jennifer Walsh",
            role: "Operations Manager",
            company: "Walsh Property Group",
            content: "We manage 200+ rental units and were using 4 different tools that didn't talk to each other. Built consolidated everything into one system - tenant portal, maintenance requests, rent tracking, vendor management. Our team actually enjoys using it, which says everything.",
            rating: 5
        },
        {
            name: "Aaron Patel",
            role: "Founder & CEO",
            company: "Streamline Dental Supply",
            content: "The custom pricing engine they built processes thousands of SKUs and gives our sales team instant quotes with proper margins. What used to take 20 minutes now takes 30 seconds. Our close rate went up 25% in the first quarter.",
            rating: 5
        },
        {
            name: "Rachel Kowalski",
            role: "Director of Sales",
            company: "Midwest Equipment Rentals",
            content: "Built integrated our inventory system with online booking and automated follow-ups. We capture rental requests 24/7 now, and the system automatically sends quotes and contracts. It's like having 3 extra salespeople, but they never sleep or take vacation.",
            rating: 5
        },
        {
            name: "Tom Hernandez",
            role: "Co-Founder",
            company: "Harbor Freight Logistics",
            content: "The route optimization tool they developed saves us 15-20 hours of driver time per week. Real-time tracking, proof of delivery, automatic customer notifications - our clients love the visibility and we love the fuel savings. Paid for itself in 6 weeks.",
            rating: 5
        },
        {
            name: "Kelly Morrison",
            role: "Managing Partner",
            company: "Morrison Law Firm",
            content: "Their client intake automation is incredible. New leads fill out a smart form, get scheduled automatically, receive reminder texts, and we have all their info organized before they walk in. We've cut no-shows by 60% and our front desk can focus on clients, not paperwork.",
            rating: 5
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
                            Client Success
                        </motion.div>
                        <h2
                            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
                            style={{ color: colors.text.primary }}
                        >
                            Trusted By Growing Businesses
                        </h2>
                        <p
                            className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl"
                            style={{ color: colors.text.secondary }}
                        >
                            Real results from real clients who transformed their operations with custom software and automation.
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
