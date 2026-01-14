"use client";

import { colors } from "@/theme/colors";
import ContactForm from "./contact-form";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function ContactClient() {
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: Mail,
            title: t.contact.info.email.title,
            detail: t.contact.info.email.detail,
            description: t.contact.info.email.description
        },
        {
            icon: Phone,
            title: t.contact.info.responseTime.title,
            detail: t.contact.info.responseTime.detail,
            description: t.contact.info.responseTime.description
        },
        {
            icon: MapPin,
            title: t.contact.info.availability.title,
            detail: t.contact.info.availability.detail,
            description: t.contact.info.availability.description
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
                            {t.contact.badge}
                        </motion.div>
                        <motion.h1
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-3xl"
                            style={{ color: colors.text.primary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t.contact.title}
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-[700px] md:text-xl"
                            style={{ color: colors.text.secondary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {t.contact.description}
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link href="/setup-meeting">
                                <motion.button
                                    className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 justify-center"
                                    style={{
                                        backgroundColor: colors.primary,
                                        color: 'white'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Calendar className="h-5 w-5" />
                                    {t.common.bookACall}
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>



            {/* Contact Form Section */}
            <section id="contact-form" className="w-full py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left Column - Info */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-4">
                                <h2
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl"
                                    style={{ color: colors.text.primary }}
                                >
                                    {t.contact.formSection.title}
                                </h2>
                                <p
                                    className="text-base md:text-lg"
                                    style={{ color: colors.text.secondary }}
                                >
                                    {t.contact.formSection.description}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: colors.text.primary }}
                                >
                                    {t.contact.formSection.whatWeDiscuss}
                                </h3>
                                <motion.ul
                                    className="space-y-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {t.contact.formSection.discussionItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center gap-2"
                                            style={{ color: colors.text.secondary }}
                                            variants={itemVariants}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <motion.div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: colors.primary }}
                                                whileHover={{ scale: 1.5 }}
                                            ></motion.div>
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section
                className="w-full py-16 lg:py-24"
                style={{ backgroundColor: colors.background.secondary }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="grid gap-8 md:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl"
                                style={{
                                    backgroundColor: colors.background.tertiary,
                                    borderColor: colors.border.default,
                                    borderWidth: '1px'
                                }}
                                variants={itemVariants}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <motion.div
                                    className="p-3 rounded-lg"
                                    style={{ backgroundColor: `${colors.primary}1A` }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <info.icon
                                        className="h-6 w-6"
                                        style={{ color: colors.primary }}
                                    />
                                </motion.div>
                                <div className="space-y-1">
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: colors.text.primary }}
                                    >
                                        {info.title}
                                    </h3>
                                    <p
                                        className="text-lg font-medium"
                                        style={{ color: colors.primary }}
                                    >
                                        {info.detail}
                                    </p>
                                    <p
                                        className="text-sm"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        {info.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
