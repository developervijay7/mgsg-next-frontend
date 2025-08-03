"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Rohit Verma",
        role: "Real Estate Developer",
        feedback:
            "MGSG Construction delivered our project ahead of schedule with outstanding quality. Truly a reliable partner!",
        img: "https://via.placeholder.com/100?text=R",
    },
    {
        name: "Ananya Singh",
        role: "Business Owner",
        feedback:
            "Professional, innovative, and efficient. Their team exceeded our expectations in every way.",
        img: "https://via.placeholder.com/100?text=A",
    },
    {
        name: "Vikram Desai",
        role: "Industrial Client",
        feedback:
            "Excellent service and attention to detail. Highly recommended for any industrial project.",
        img: "https://via.placeholder.com/100?text=V",
    },
    {
        name: "Kiran Mehta",
        role: "Hotel Owner",
        feedback:
            "From planning to execution, MGSG Construction handled everything perfectly. A trustworthy team!",
        img: "https://via.placeholder.com/100?text=K",
    },
];

export default function TestimonialsSlider() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-6 text-center">
                {/* ✅ Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Our clients’ satisfaction is our top priority. Here’s what they have to say about working with MGSG Construction.
                </p>

                {/* ✅ Swiper Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {testimonials.map((client, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
                                <img
                                    src={client.img}
                                    alt={client.name}
                                    className="w-20 h-20 rounded-full object-cover shadow mb-4"
                                />
                                <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                                    “{client.feedback}”
                                </p>
                                <h4 className="font-semibold text-gray-900 dark:text-white">{client.name}</h4>
                                <span className="text-blue-600 dark:text-blue-400 text-sm">{client.role}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
