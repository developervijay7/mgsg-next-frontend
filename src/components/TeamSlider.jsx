"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const teamMembers = [
    { name: "Mohit Goswami", role: "CEO & Founder", img: "https://via.placeholder.com/300x300?text=CEO" },
    { name: "Sonam Goswami", role: "Head Architect", img: "https://via.placeholder.com/300x300?text=Architect" },
    { name: "Ravi Patel", role: "Project Manager", img: "https://via.placeholder.com/300x300?text=Manager" },
    { name: "Sneha Kapoor", role: "Civil Engineer", img: "https://via.placeholder.com/300x300?text=Engineer" },
    { name: "Amit Verma", role: "Site Supervisor", img: "https://via.placeholder.com/300x300?text=Supervisor" },
    { name: "Priya Sharma", role: "Structural Engineer", img: "https://via.placeholder.com/300x300?text=Engineer" },
];

export default function TeamSlider() {
    const [current, setCurrent] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    // ✅ Dynamically detect how many cards fit on the screen
    useEffect(() => {
        const updateCards = () => {
            if (window.innerWidth < 640) setCardsPerView(1);
            else if (window.innerWidth < 1024) setCardsPerView(2);
            else if (window.innerWidth < 1280) setCardsPerView(3);
            else setCardsPerView(4);
        };
        updateCards();
        window.addEventListener("resize", updateCards);
        return () => window.removeEventListener("resize", updateCards);
    }, []);

    const maxIndex = teamMembers.length - cardsPerView;

    const nextSlide = () => setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
    const prevSlide = () => setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex));

    return (
        <section className="bg-white dark:bg-gray-900 py-16 relative">
            <div className="container mx-auto px-6 text-center">
                {/* ✅ Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Meet Our <span className="text-blue-600 dark:text-blue-400">Team</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Our experienced team works together to deliver exceptional results.
                </p>

                {/* ✅ Slider Wrapper */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: `-${current * (100 / cardsPerView)}%` }}
                        transition={{ type: "spring", stiffness: 70, damping: 18 }}
                        style={{ width: `${(teamMembers.length / cardsPerView) * 100}%` }}
                    >
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <motion.div
                                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition relative"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Glow Accent */}
                                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl"></div>

                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-md border-4 border-white dark:border-gray-700"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>

                                    {/* Socials */}
                                    <div className="flex justify-center gap-3 mt-3">
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">🌐</a>
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">💼</a>
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">📧</a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ✅ Navigation */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
                    >
                        ⬅
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
                    >
                        ➡
                    </button>
                </div>
            </div>

            {/* ✅ Background Accent */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 blur-[100px] rounded-full"></div>
        </section>
    );
}
