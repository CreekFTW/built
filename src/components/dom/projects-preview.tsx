"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { colors } from "@/theme/colors";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useLanguage } from "@/components/language-provider";

interface Project {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    stats: {
        label: string;
        value: string;
    }[];
}

/*
const projects: Project[] = [
    {
        id: 1,
        title: "AI Voice Agent System",
        description: "Intelligent phone agent powered by advanced AI that handles customer inquiries, schedules appointments, and processes orders with natural conversation flow. Reduced support costs by 70%.",
        videoUrl: "/videos/ai-caller.mp4",
        tags: ["AI", "Voice AI", "Python", "React"],
        liveUrl: "https://t.me/built",
        stats: [
            { label: "Calls Handled", value: "100K+" },
            { label: "Cost Savings", value: "70%" },
            { label: "Satisfaction", value: "4.8/5" }
        ]
    },
    {
        id: 2,
        title: "Car Scrapper Platform",
        description: "Advanced web scraping system that automatically extracts car listings from multiple sources, normalizes data, and provides real-time market insights. Built for scalability and accuracy.",
        videoUrl: "/videos/car-scrapper.mp4",
        tags: ["Python", "Web Scraping", "Data Processing", "API"],
        liveUrl: "https://t.me/built",
        githubUrl: "https://t.me/built",
        stats: [
            { label: "Listings Scraped", value: "500K+" },
            { label: "Accuracy", value: "99.5%" },
            { label: "Sources", value: "25+" }
        ]
    },
    {
        id: 3,
        title: "Team & Employee Management Software",
        description: "Comprehensive workforce management platform featuring employee scheduling, time tracking, performance analytics, and team collaboration tools. Streamlines HR operations and boosts team productivity.",
        videoUrl: "/videos/tasttyy-crm.mp4",
        tags: ["React", "Node.js", "TypeScript", "CRM"],
        liveUrl: "https://t.me/built",
        stats: [
            { label: "Active Users", value: "10K+" },
            { label: "Efficiency Gain", value: "45%" },
            { label: "Satisfaction", value: "4.9/5" }
        ]
    }
];
*/



const ProjectCard = ({ project, index, discussLabel }: { project: Project; index: number; discussLabel: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 0.9", "end 0.2"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [150, 0, 0, -100]);
    const videoY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, scale, y, transformPerspective: 1000 }}
            className="mb-32 last:mb-0 cursor-pointer"
            onClick={() => window.open(project.liveUrl || 'https://t.me/built', '_blank')}
        >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                {/* Video Section */}
                <motion.div
                    className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    style={{ y: videoY, rotateX }}
                    initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 50, damping: 20 }}
                    viewport={{ once: false, margin: "-150px", amount: 0.3 }}
                >
                    <div className="relative rounded-2xl overflow-hidden group">
                        <motion.div
                            className="relative aspect-video rounded-2xl overflow-hidden"
                            style={{
                                backgroundColor: colors.background.secondary,
                                border: `1px solid ${colors.border?.default || 'rgba(255,255,255,0.1)'}`
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.video
                                ref={videoRef}
                                src={project.videoUrl}
                                className="w-full h-full object-cover"
                                loop
                                muted
                                autoPlay
                                playsInline
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.5 }}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute -inset-1 rounded-2xl -z-10 blur-xl"
                            style={{
                                background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent.cyan})`
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.4 }}
                            whileHover={{ opacity: 0.8 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 20 }}
                    viewport={{ once: false, margin: "-150px", amount: 0.3 }}
                >
                    {/* Project Number */}
                    <motion.div className="flex items-center gap-3">
                        <motion.div className="text-6xl font-bold" style={{ color: colors.primary, opacity: 0.2 }}>
                            {String(index + 1).padStart(2, '0')}
                        </motion.div>
                        <motion.div className="h-px flex-1" style={{ backgroundColor: colors.border?.default || 'rgba(255,255,255,0.1)' }} />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: colors.text.primary }}>
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p className="text-lg leading-relaxed" style={{ color: colors.text.secondary }}>
                        {project.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, idx) => (
                            <motion.span key={idx} className="px-4 py-2 rounded-lg text-sm font-medium" style={{
                                backgroundColor: `${colors.primary}1A`,
                                color: colors.primary,
                                border: `1px solid ${colors.primary}33`
                            }}>
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Stats */}
                    {project.stats?.length > 0 && (
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {project.stats.map((stat, statIndex) => (
                                <div key={statIndex} className="text-center p-4 rounded-lg" style={{
                                    backgroundColor: colors.background.secondary,
                                    border: `1px solid ${colors.border?.default || 'rgba(255,255,255,0.1)'}`
                                }}>
                                    <div className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs" style={{ color: colors.text.tertiary }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Action Button */}
                    <div className="flex gap-4 pt-4">
                        <Button style={{ backgroundColor: colors.primary, color: colors.text.primary }} onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl || 'https://t.me/built', '_blank');
                        }}>
                            {discussLabel} <MessageCircle className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};


const projectVideos: Record<number, string> = {
    1: "ai-caller",
    2: "car-scrapper",
    3: "tasttyy-crm"
}

const ProjectsPreview = () => {
    const { t } = useLanguage();

    const projects: Project[] = Object.entries(t.projects.items).map(
        ([key, item], index) => ({
            id: index + 1,
            title: item.title,
            description: item.description,
            videoUrl: `/videos/${projectVideos[index + 1]}.mp4`,
            tags: item.tags, 
            liveUrl: "https://t.me/built",
            stats: item.stats
        })
    );

    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${colors.primary}15, transparent 50%)`
                }}
            />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    className="text-center mb-20 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block rounded-lg px-4 py-2 text-sm mb-4"
                        style={{
                            backgroundColor: colors.neutral[800],
                            color: colors.text.tertiary
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {t.projects.badge}
                    </motion.div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: colors.text.primary }}
                    >
                        {t.projects.title}
                    </h2>
                    <p
                        className="text-lg md:text-xl"
                        style={{ color: colors.text.secondary }}
                    >
                        {t.projects.description}
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} discussLabel={t.common.discussProject} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
