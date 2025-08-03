import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
    title: "MGSG Construction Bharat Pvt Ltd",
    description: "Building India's Future with Excellence",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <head></head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
