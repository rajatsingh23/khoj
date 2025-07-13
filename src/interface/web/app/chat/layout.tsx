import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Rajat Singh - Chat",
    description:
        "Ask anything. Research answers from across the internet and your documents, draft messages, summarize documents, generate paintings and chat with personal agents.",
    icons: {
        icon: "/static/assets/icons/ai.ico",
        apple: "/static/assets/icons/ai_256x256.ico",
    },
    openGraph: {
        siteName: "Rajat Singh",
        title: "Rajat Singh - Chat",
        description:
            "Ask anything. Research answers from across the internet and your documents, draft messages, summarize documents, generate paintings and chat with personal agents.",
        url: "https://app.khoj.dev/chat",
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
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.EXCALIDRAW_ASSET_PATH = 'https://assets.khoj.dev/@excalidraw/excalidraw/dist/';`,
                }}
            />
        </>
    );
}
