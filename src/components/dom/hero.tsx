"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, TrendingUp, CheckCircle, Calendar } from "lucide-react";
import { colors } from "@/theme/colors";
import { useRouter } from "next/navigation";
import ShootingStarsBackground from "@/components/dom/shooting-stars-background";
import { motion } from "framer-motion";

const Hero = () => {
    const router = useRouter()

    const stats = [
        {
            icon: Zap,
            value: "2-4 Weeks",
            label: "Average Launch Time",
            delay: 0.6
        },
        {
            icon: Clock,
            value: "70%+",
            label: "Time Saved on Manual Work",
            delay: 0.7
        },
        {
            icon: TrendingUp,
            value: "10x",
            label: "ROI in First Year",
            delay: 0.8
        },
        {
            icon: CheckCircle,
            value: "100%",
            label: "Code Ownership",
            delay: 0.9
        }
    ];

    return (
        <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-40 overflow-hidden">
            <ShootingStarsBackground />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
                    <motion.div
                        className="space-y-4 max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
                            Custom Software & AI Solutions
                        </motion.div>
                        <motion.h1
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2"
                            style={{ color: colors.text.primary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Build Systems That Scale Your Business
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl px-4"
                            style={{ color: colors.text.secondary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Full-stack tech partner building custom software and automations to grow and streamline your business. Replace manual work, capture every lead, and get systems that behave themselves.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            className="gap-2"
                            style={{
                                backgroundColor: colors.primary,
                                color: colors.text.primary
                            }}
                            onClick={() => router.push("/setup-meeting")}
                        >
                            <Calendar className="h-4 w-4" />
                            Book a Call
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="gap-2"
                            style={{
                                borderColor: colors.border.emphasis,
                                color: colors.text.primary,
                                backgroundColor: `${colors.background.primary}60`
                            }}
                            onClick={() => router.push("/contact#contact-form")}
                        >
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </motion.div>
                    <motion.div
                        className="w-full max-w-5xl mt-8 sm:mt-12"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="relative p-3 sm:p-4 md:p-6 rounded-xl"
                                    style={{
                                        backgroundColor: colors.background.secondary,
                                        borderColor: colors.border.default,
                                        borderWidth: '1px'
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: stat.delay }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                                        <div
                                            className="p-2 sm:p-3 rounded-lg"
                                            style={{
                                                backgroundColor: `${colors.primary}1A`
                                            }}
                                        >
                                            <stat.icon
                                                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                style={{ color: colors.primary }}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div
                                                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div
                                                className="text-xs sm:text-sm"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
