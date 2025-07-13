import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Rajat Singh - Agents",
    description:
        "Find or create agents with custom knowledge, tools and personalities to help address your specific needs.",
    icons: {
        icon: "/static/assets/icons/ai.ico",
        apple: "/static/assets/icons/ai_256x256.ico",
    },
    openGraph: {
        siteName: "Rajat Singh",
        title: "Rajat Singh - Agents",
        description:
            "Find or create agents with custom knowledge, tools and personalities to help address your specific needs.",
        url: "https://app.khoj.dev/agents",
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
    return <>{children}</>;
}
