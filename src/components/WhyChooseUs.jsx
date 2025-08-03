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
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <img src={item.icon} alt={item.label} className="mx-auto mb-3 w-14 h-14" />
                            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                {visible ? <Counter end={item.stat} suffix={item.suffix} /> : `0${item.suffix}`}
                            </h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.label}</p>
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
