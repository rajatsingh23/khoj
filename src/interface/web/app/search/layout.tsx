import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
    title: "Rajat Singh - Search",
    description:
        "Find anything in documents you've shared with Rajat using natural language queries.",
    icons: {
        icon: "/assets/icons/ai.ico",
        apple: "/assets/icons/ai_256x256.ico",
    },
    openGraph: {
        siteName: "Rajat Singh",
        title: "Rajat Singh - Search",
        description: "Your Second Brain.",
        url: "https://app.khoj.dev/search",
        type: "website",
        images: [
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
