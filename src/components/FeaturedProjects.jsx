"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const projects = [
    { title: "Skyline Residency", img: "/images/project-1.png" },
    { title: "Metro Business Hub", img: "/images/project-2.png" },
    { title: "Industrial Park", img: "/images/project-3.png" },
];

export default function FeaturedProjectsSlider() {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">

                {/* ✅ Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    Explore some of our most iconic construction projects that reflect our
                    commitment to quality, innovation, and sustainability.
                </p>

                {/* ✅ Swiper Slider */}
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
                >
                    {projects.map((project, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">

                                {/* ✅ Background Image (No Blur) */}
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover scale-105"
                                />

                                {/* ✅ Frosted Glass Overlay */}
                                <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />

                                {/* ✅ Project Content with Glass Effect */}
                                <div className="relative z-10 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl p-8 rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg max-w-md mx-auto">
                                    <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-lg">{project.title}</h3>
                                    <Link
                                        href="/projects"
                                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ✅ CTA Button */}
                <div className="mt-10">
                    <Link
                        href="/projects"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                        View All Projects
                    </Link>
                </div>
            </div>

            {/* ✅ Frost Ice Background Glow */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/30 blur-3xl rounded-full"></div>
        </section>
    );
}
