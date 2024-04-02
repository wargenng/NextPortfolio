import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "woregin",
    description: "Wargen Guittap's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col items-center w-screen h-screen mt-12">
                    {children}
                </div>
            </body>
        </html>
    );
}
