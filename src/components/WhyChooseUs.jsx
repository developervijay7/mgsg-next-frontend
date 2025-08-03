"use client";
import { useEffect, useState, useRef } from "react";

const statsData = [
    { stat: 10, suffix: "+", label: "Years Experience", icon: "https://via.placeholder.com/60?text=⏳" },
    { stat: 150, suffix: "+", label: "Projects Completed", icon: "https://via.placeholder.com/60?text=🏗️" },
    { stat: 100, suffix: "+", label: "Happy Clients", icon: "https://via.placeholder.com/60?text=😊" },
    { stat: 50, suffix: "+", label: "Expert Engineers", icon: "https://via.placeholder.com/60?text=👷" },
];

export default function WhyChooseUs() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-6 text-center">
                {/* ✅ Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Why <span className="text-blue-600 dark:text-blue-400">Choose Us</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    At MGSG Construction, we pride ourselves on delivering quality, innovation,
                    and customer satisfaction in every project we undertake.
                </p>

                {/* ✅ Stats Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {statsData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl
                 border border-gray-200/50 dark:border-gray-700/30 shadow-md
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
                        >
                            {/* ✅ Decorative Gradient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent dark:from-blue-500/10 dark:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* ✅ Icon with Hover Animation */}
                            <div className="relative z-10 mb-4 flex justify-center">
                                <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-full shadow-inner
                        group-hover:scale-110 transition-transform duration-500">
                                    <img src={item.icon} alt={item.label} className="w-14 h-14" />
                                </div>
                            </div>

                            {/* ✅ Stat Number */}
                            <h3 className="relative z-10 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-1">
        <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow">
          {visible ? <Counter end={item.stat} suffix={item.suffix} /> : `0${item.suffix}`}
        </span>
                            </h3>

                            {/* ✅ Label */}
                            <p className="relative z-10 text-gray-600 dark:text-gray-300 text-lg font-medium mt-2">
                                {item.label}
                            </p>

                            {/* ✅ Subtle Glow on Hover */}
                            <div className="absolute -bottom-2 inset-x-4 h-1 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

/* ✅ Counter Component */
function Counter({ end, suffix }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500; // 1.5 seconds
        const stepTime = Math.max(Math.floor(duration / end), 20);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [end]);

    return <>{count}{suffix}</>;
}
