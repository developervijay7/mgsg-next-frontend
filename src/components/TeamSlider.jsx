"use client";
import { useState } from "react";
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
    const visibleCards = 4; // number of cards to show on XL
    const maxIndex = teamMembers.length - visibleCards;

    const nextSlide = () => setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
    const prevSlide = () => setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex));

    return (
        <section className="bg-white dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6 text-center">
                {/* ✅ Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Meet Our <span className="text-blue-600 dark:text-blue-400">Team</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Our experienced team of engineers, architects, and project managers work together to deliver exceptional results.
                </p>

                {/* ✅ Slider Container */}
                <div className="relative overflow-hidden">
                    {/* ✅ Slider Track */}
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: `-${current * 25}%` }} // shifts by 25% per slide
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    >
                        {teamMembers.map((member, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                            >
                                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-md"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>

                                    {/* ✅ Social Icons */}
                                    <div className="flex justify-center gap-3 mt-3">
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">🌐</a>
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">💼</a>
                                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">📧</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* ✅ Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-300"
                    >
                        ⬅
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-300"
                    >
                        ➡
                    </button>
                </div>
            </div>
        </section>
    );
}
