// Styles
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/theme-provider";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
    );
}
