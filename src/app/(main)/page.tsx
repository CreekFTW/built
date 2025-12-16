import Hero from "@/components/dom/hero";
import CTA from "../../components/dom/cta";
import FAQ from "../../components/dom/faqs";
import Solutions from "../../components/dom/solutions";
import Features from "../../components/dom/features";
import Testimonials from "../../components/dom/testimonials";
import ProjectsPreview from "../../components/dom/projects-preview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Built - Custom Software & AI Automation Solutions",
    description: "Full-stack tech partner building custom business systems, AI phone agents, automations, and software to drive revenue and eliminate manual work. Scale your business with systems that behave themselves.",
    keywords: ["custom software", "AI automation", "business systems", "AI phone agents", "workflow automation", "custom development", "SaaS development", "business automation"],
    authors: [{ name: "Built" }],
    openGraph: {
        title: "Built - Custom Software & AI Automation Solutions",
        description: "Full-stack tech partner building custom business systems, AI phone agents, and automations to drive revenue and eliminate manual work.",
        type: "website",
        locale: "en_US",
        siteName: "Built",
    },
    twitter: {
        card: "summary_large_image",
        title: "Built - Custom Software & AI Automation",
        description: "Build systems that scale your business. Custom software, AI automations, and business systems that drive revenue.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function Home() {
    return (
        <div className="py-10">
            <Hero />
            <Solutions />
            <Features />
            <ProjectsPreview />
            <Testimonials />
            <CTA />
            <FAQ />
        </div>
    );
}
