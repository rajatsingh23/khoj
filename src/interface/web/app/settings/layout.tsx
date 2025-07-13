import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ChatwootWidget } from "../components/chatWoot/ChatwootWidget";

export const metadata: Metadata = {
    title: "Rajat Singh - Settings",
    description: "Configure Rajat to get personalized, deeper assistance.",
    icons: {
        icon: "/static/assets/icons/ai.ico",
        apple: "/static/assets/icons/ai_256x256.ico",
    },
    openGraph: {
        siteName: "Rajat Singh",
        title: "Rajat Singh - Settings",
        description: "Setup, configure, and personalize Khoj, your AI research assistant.",
        url: "https://app.khoj.dev/settings",
        type: "website",
        images: [
            {
                url: "https://assets.khoj.dev/khoj_hero.png",
                width: 940,
                height: 525,
            },
            {
                url: "https://assets.khoj.dev/ai_256x256.ico",
                width: 256,
                height: 256,
            },
        ],
    },
};

export default function ChildLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <Toaster />
            <ChatwootWidget />
        </>
    );
}
