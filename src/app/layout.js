import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Script from "next/script"; // you can still keep this for custom styles if needed

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
    title: "MGSG Construction Bharat Pvt Ltd",
    description: "Building India's Future with Excellence",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <head>
            {/* ✅ TailwindCSS Play CDN */}
            <Script
                src="https://cdn.tailwindcss.com"
                strategy="beforeInteractive"
            />

            {/* ✅ Dark Mode Config */}
            <Script id="tailwind-config" strategy="beforeInteractive">
                {`
      tailwind.config = {
        darkMode: 'class',
      }
    `}
            </Script>
        </head>


        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 mt-8 border-t dark:border-gray-700">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} MGSG Construction Bharat Pvt Ltd. All rights reserved.
            </p>
        </footer>
        </body>
        </html>
    );
}
