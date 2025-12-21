"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { colors } from "@/theme/colors";
import { ExternalLink, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    stats?: {
        label: string;
        value: string;
    }[];
}

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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
            style={{ 
                opacity, 
                scale, 
                y,
                transformPerspective: 1000
            }}
            className="mb-32 last:mb-0 cursor-pointer"
            onClick={() => window.open('https://t.me/built', '_blank')}
        >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                {/* Video Section */}
                <motion.div
                    className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    style={{ y: videoY, rotateX }}
                    initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.1,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                    }}
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
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                    }}
                    viewport={{ once: false, margin: "-150px", amount: 0.3 }}
                >
                    {/* Project Number */}
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <motion.div
                            className="text-6xl font-bold"
                            style={{ 
                                color: colors.primary,
                                opacity: 0.2
                            }}
                            whileInView={{ 
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </motion.div>
                        <motion.div 
                            className="h-px flex-1" 
                            style={{ backgroundColor: colors.border?.default || 'rgba(255,255,255,0.1)' }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.8 }}
                        />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold"
                        style={{ color: colors.text.primary }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                        className="text-lg leading-relaxed"
                        style={{ color: colors.text.secondary }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        {project.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        {project.tags.map((tag, tagIndex) => (
                            <motion.span
                                key={tagIndex}
                                className="px-4 py-2 rounded-lg text-sm font-medium"
                                style={{
                                    backgroundColor: `${colors.primary}1A`,
                                    color: colors.primary,
                                    border: `1px solid ${colors.primary}33`
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: 0.6 + (tagIndex * 0.1),
                                    type: "spring",
                                    stiffness: 200
                                }}
                                viewport={{ once: false, amount: 0.8 }}
                                whileHover={{ 
                                    scale: 1.1,
                                    backgroundColor: colors.primary,
                                    color: colors.text.primary,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Stats */}
                    {project.stats && (
                        <motion.div 
                            className="grid grid-cols-3 gap-4 pt-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: false, amount: 0.8 }}
                        >
                            {project.stats.map((stat, statIndex) => (
                                <motion.div
                                    key={statIndex}
                                    className="text-center p-4 rounded-lg"
                                    style={{
                                        backgroundColor: colors.background.secondary,
                                        border: `1px solid ${colors.border?.default || 'rgba(255,255,255,0.1)'}`
                                    }}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.7 + (statIndex * 0.1),
                                        type: "spring",
                                        stiffness: 150
                                    }}
                                    viewport={{ once: false, amount: 0.8 }}
                                    whileHover={{ 
                                        y: -8, 
                                        scale: 1.05,
                                        borderColor: colors.primary,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div 
                                        className="text-2xl font-bold mb-1"
                                        style={{ color: colors.primary }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div 
                                        className="text-xs"
                                        style={{ color: colors.text.tertiary }}
                                    >
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div 
                        className="flex gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                className="gap-2"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: colors.text.primary
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open('https://t.me/built', '_blank');
                                }}
                            >
                                Discuss Project
                                <MessageCircle className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const ProjectsPreview = () => {
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
                        Our Work
                    </motion.div>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: colors.text.primary }}
                    >
                        Projects That Drive Results
                    </h2>
                    <p 
                        className="text-lg md:text-xl"
                        style={{ color: colors.text.secondary }}
                    >
                        Real systems solving real problems. Each project is custom-built to scale businesses and eliminate manual work.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
