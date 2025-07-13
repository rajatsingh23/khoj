import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

import "../globals.css";

export const metadata: Metadata = {
    title: "Rajat Singh - Automations",
    description:
        "Use Rajat Automations to get tailored research and event based notifications directly in your inbox.",
    icons: {
        icon: "/static/assets/icons/ai.ico",
        apple: "/static/assets/icons/ai_256x256.ico",
    },
    openGraph: {
        siteName: "Rajat Singh",
        title: "Rajat Singh - Automations",
        description:
            "Use Rajat Automations to get tailored research and event based notifications directly in your inbox.",
        url: "https://app.khoj.dev/automations",
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
        </>
    );
}
