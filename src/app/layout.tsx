import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body className="flex h-dvh w-dvw flex-col px-16 py-4 md:px-24 md:py-6 lg:px-32 lg:py-8">
                {children}
            </body>
        </html>
    );
}
