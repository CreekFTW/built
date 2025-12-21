import Script from "next/script";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsPageview } from "@/components/analytics-pageview";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";

// Styles
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
    variable: "--font-mono",
    subsets: ["latin"],
    display: "swap",
});


export const metadata: Metadata = {
    title: "Built - Custom Software & AI Automation Solutions",
    description: "Full-stack tech partner building custom business systems, AI phone agents, automations, and software to drive revenue and eliminate manual work. Scale your business with systems that behave themselves.",
    keywords: ["custom software", "AI automation", "business systems", "AI phone agents", "workflow automation", "custom development", "SaaS development", "business automation"],
    authors: [{ name: "Built" }],
    verification: {
        google: 'c5mggXtUtDnvlLOXOrUTlsRgzLoG2g6eo4t5CQwlXo8',
    },
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


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <body
                className={`${plusJakarta.variable} ${firaCode.variable} font-sans antialiased dark`}
                suppressHydrationWarning
            >
                {/* Google Analytics 4 - Only loads in production */}
                {GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production' && (
                    <>
                        <Script
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                        />
                        <Script
                            id="google-analytics"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${GA_MEASUREMENT_ID}', {
                                        page_path: window.location.pathname,
                                        send_page_view: true
                                    });
                                `,
                            }}
                        />
                    </>
                )}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    forcedTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <AnalyticsPageview />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
