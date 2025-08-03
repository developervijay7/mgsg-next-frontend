import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSlider from "@/components/TeamSlider";
import TestimonialsSlider from "@/components/TestimonialSlider";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="relative bg-gray-900 text-white">
                {/* ✅ Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Construction Background"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 dark:from-gray-900/80 dark:to-gray-800/40"></div>
                </div>

                {/* ✅ Hero Content */}
                <div className="relative container mx-auto px-6 py-32 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Building <span className="text-blue-400">India’s Future</span> with Excellence
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
                        MGSG Construction Bharat Pvt Ltd is committed to delivering world-class infrastructure with innovation, quality, and integrity.
                    </p>

                    {/* ✅ Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            View Our Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-lg transition dark:bg-gray-100 dark:hover:bg-gray-300">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                    {/* ✅ Left: Image */}
                    <div className="md:w-1/2">
                        <img
                            src="/images/about-mgsg.jpg"
                            alt="About MGSG Construction"
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* ✅ Right: Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Over a Decade of <span className="text-blue-600 dark:text-blue-400">Engineering Excellence</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            MGSG Construction Bharat Pvt Ltd has been transforming skylines with
                            innovative designs, sustainable practices, and unmatched construction
                            quality. Our commitment to excellence has earned us a trusted reputation
                            in India’s infrastructure sector.
                        </p>

                        {/* ✅ Highlights (3 points) */}
                        <ul className="mb-6 text-gray-800 dark:text-gray-200 space-y-2">
                            <li>✅ ISO-certified Construction Practices</li>
                            <li>✅ Expertise in Residential, Commercial & Industrial Projects</li>
                            <li>✅ Strong focus on Sustainability & Safety</li>
                        </ul>

                        {/* ✅ Call to Action */}
                        <Link
                            href="/about"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
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

                    {/* ✅ Services Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Service Card */}
                        {[
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
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 flex flex-col items-center"
                            >
                                {/* ✅ Large Responsive Image */}
                                <div className="w-full max-w-[300px] aspect-square overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* ✅ Title */}
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>

                                {/* ✅ Description */}
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.desc}
                                </p>
                            </div>

                        ))}
                    </div>

                    {/* ✅ CTA */}
                    <div className="mt-10">
                        <Link
                            href="/services"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">

                    {/* ✅ Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                        Explore some of our most iconic construction projects that reflect our
                        commitment to quality, innovation, and sustainability.
                    </p>

                    {/* ✅ Projects Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Skyline Residency", img: "/images/project-1.png" },
                            { title: "Metro Business Hub", img: "/images/project-2.png" },
                            { title: "Industrial Park", img: "/images/project-3.png" },
                        ].map((project, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                                {/* Project Image */}
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
                                    <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
                                    <Link
                                        href="/projects"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ✅ CTA */}
                    <div className="mt-10">
                        <Link
                            href="/projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <TeamSlider />
           <TestimonialsSlider />
            <section className="relative bg-gray-900 text-white">
                {/* ✅ Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/another.png"
                        alt="Page Banner"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 dark:from-gray-900/80 dark:to-gray-800/40"></div>
                </div>

                {/* ✅ Content */}
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Ready to Start Your <span className="text-blue-400">Next Project?</span>
                    </h2>
                    <p className="text-lg md:text-xl mb-6 text-gray-200">
                        Let’s collaborate to bring your vision to life with MGSG Construction’s expertise and commitment.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition">
                        Contact Us Today
                    </Link>
                </div>
            </section>

        </>
    );
}
