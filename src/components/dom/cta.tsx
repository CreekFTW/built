"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { colors } from "@/theme/colors";
import { useRouter } from "next/navigation";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAnalytics } from "@/lib/analytics";

const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString() + suffix;
            }
        });

        return () => unsubscribe();
    }, [springValue, suffix]);

    return <div ref={ref}>0{suffix}</div>;
};

const CTA = () => {
    const router = useRouter();
    const { events } = useAnalytics();

    const handleGetInTouch = () => {
        events.ctaClick('Get in Touch', 'cta_section', '/contact');
        router.push("/contact");
    };

    const handleLearnMore = () => {
        events.ctaClick('Learn More', 'cta_section', '/about');
        router.push("/about");
    };

    return (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-40">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.background.tertiary} 100%)`,
                        borderColor: colors.border.emphasis,
                        borderWidth: '1px'
                    }}
                >
                    {/* Decorative Elements */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                        style={{ backgroundColor: colors.primary }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                        style={{ backgroundColor: colors.primary }}
                    ></div>

                    <div className="relative px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
                        <motion.div
                            className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="p-4 rounded-2xl"
                                style={{
                                    backgroundColor: `${colors.primary}1A`,
                                    borderColor: `${colors.primary}40`,
                                    borderWidth: '1px'
                                }}
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                            >
                                <Sparkles
                                    className="h-8 w-8"
                                    style={{ color: colors.primary }}
                                />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                className="space-y-3 sm:space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h2
                                    className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
                                    style={{ color: colors.text.primary }}
                                >
                                    Ready to Scale Your Business?
                                </h2>
                                <p
                                    className="text-base sm:text-lg md:text-xl max-w-2xl px-4"
                                    style={{ color: colors.text.secondary }}
                                >
                                    Let&apos;s build custom software and AI automations that drive revenue, eliminate manual work, and give you systems that scale. Start your project today.
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Button
                                    size="lg"
                                    className="gap-2 px-8"
                                    style={{
                                        backgroundColor: colors.primary,
                                        color: colors.text.primary
                                    }}
                                    onClick={handleGetInTouch}
                                >
                                    <MessageSquare className="h-5 w-5" />
                                    Get in Touch
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 px-8"
                                    style={{
                                        borderColor: colors.border.emphasis,
                                        color: colors.text.primary,
                                        backgroundColor: `${colors.background.primary}60`
                                    }}
                                    onClick={handleLearnMore}
                                >
                                    Learn More
                                </Button>
                            </motion.div>

                            {/* Stats or Social Proof */}
                            <motion.div
                                className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t w-full max-w-xl"
                                style={{ borderColor: colors.border.default }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="flex flex-col items-center">
                                    <div
                                        className="text-xl sm:text-2xl md:text-3xl font-bold"
                                        style={{ color: colors.primary }}
                                    >
                                        <AnimatedCounter value={100} suffix="+" />
                                    </div>
                                    <div
                                        className="text-xs sm:text-sm text-center"
                                        style={{ color: colors.text.tertiary }}
                                    >
                                        Solutions Built
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="text-xl sm:text-2xl md:text-3xl font-bold"
                                        style={{ color: colors.primary }}
                                    >
                                        <AnimatedCounter value={50} suffix="+" />
                                    </div>
                                    <div
                                        className="text-xs sm:text-sm text-center"
                                        style={{ color: colors.text.tertiary }}
                                    >
                                        Businesses Automated
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="text-xl sm:text-2xl md:text-3xl font-bold"
                                        style={{ color: colors.primary }}
                                    >
                                        24/7
                                    </div>
                                    <div
                                        className="text-xs sm:text-sm text-center"
                                        style={{ color: colors.text.tertiary }}
                                    >
                                        Support Available
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
