"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
    {
        title: "Residential Projects",
        desc: "Building modern and sustainable homes with unmatched quality.",
        icon: "/images/service-1.jpg",
    },
    {
        title: "Commercial Infrastructure",
        desc: "Developing high-end commercial spaces to boost business growth.",
        icon: "/images/service-2.jpg",
    },
    {
        title: "Industrial Solutions",
        desc: "Providing large-scale industrial construction with efficiency and safety.",
        icon: "/images/service-3.jpg",
    },
];

export default function ServicesSlider() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-6 text-center">
                {/* ✅ Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Our <span className="text-blue-600 dark:text-blue-400">Services</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    MGSG Construction offers a wide range of engineering and construction
                    solutions tailored to meet the needs of residential, commercial, and
                    industrial clients.
                </p>

                {/* ✅ Services Swiper Slider */}
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="pb-10"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 flex flex-col items-center">
                                <div className="w-full max-w-[300px] aspect-square overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.desc}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ✅ CTA */}
                <div className="mt-10">
                    <Link
                        href="/services"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
                    >
                        Explore All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
