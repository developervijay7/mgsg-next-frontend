"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-2 space-x-6">
                {/* Logo / Brand */}
                <Link href="/" className="dark:text-white">
                    <img
                        src="/logo.svg"
                        alt="MGSG Construction Logo"
                        className="h-[100px] w-auto"
                    />
                </Link>


                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Dark Mode Toggle (desktop) */}
                <button
                    className="hidden md:block p-2 ml-4 rounded bg-gray-200 dark:bg-gray-700"
                    onClick={() => setDarkMode(!darkMode) || document.documentElement.classList.toggle("dark")}
                >
                    🌓
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md transition hover:scale-105"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {menuOpen ? (
                            // Close (X) Icon
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            // Hamburger Icon
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 space-y-2 border-t dark:border-gray-700">
                    {["Home","About","Services","Projects","Contact"].map((item, i) => (
                        <Link
                            key={i}
                            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2"
                        >
                            {item}
                        </Link>
                    ))}

                    {/* Dark Mode Toggle (mobile) */}
                    <button
                        className="p-2 ml-4 rounded bg-gray-200 dark:bg-gray-700"
                        onClick={() => setDarkMode(!darkMode) || document.documentElement.classList.toggle("dark")}
                    >
                        🌓
                    </button>
                </div>
            )}
        </header>
    );
}
