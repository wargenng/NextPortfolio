import { Fira_Code as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import NavBar from "./components/navbar";
import Bread from "./components/breadcrumb";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "woregin",
    description: "Wargen Guittap's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased flex items-start justify-center",
                    fontSans.variable
                )}
            >
                <div className="flex flex-col justify-center items-center w-full lg:w-8/12">
                    <NavBar />
                    <Bread />
                    {children}
                </div>
            </body>
        </html>
    );
}
