import { Metadata } from "next";
import ContactClient from "../../../components/dom/contact-client";

export const metadata: Metadata = {
    title: "Built - Contact Us",
    description: "Get in touch with our team to discuss custom software, AI automations, and business systems. We're here to help streamline your operations and scale your business.",
    keywords: ["contact", "custom software", "AI automation", "business consultation", "tech partner", "software development"],
    authors: [{ name: "Built" }],
    openGraph: {
        title: "Built - Contact Us",
        description: "Get in touch with our team to discuss custom software, AI automations, and business systems. We're here to help streamline your operations and scale your business.",
        type: "website",
        locale: "en_US",
        siteName: "Built",
    },
    twitter: {
        card: "summary_large_image",
        title: "Built - Contact Us",
        description: "Get in touch to discuss custom software, AI automations, and business systems. We're here to help streamline your operations.",
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

export default function Contact() {
    return <ContactClient />;
}
