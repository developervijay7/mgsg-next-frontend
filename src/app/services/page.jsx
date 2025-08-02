export default function Services() {
    return (
        <main>
            {/* ✅ Section 1: Services Intro */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Our <span className="text-blue-600 dark:text-blue-400">Services</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        MGSG Construction Bharat Pvt Ltd offers end-to-end construction
                        solutions across residential, commercial, and industrial sectors,
                        ensuring quality, innovation, and timely delivery.
                    </p>
                </div>
            </section>
            {/* ✅ Section 2: Services Grid */}
            <section className="bg-white dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Residential Construction", desc: "Custom homes and apartments built with precision and sustainability.", icon: "https://via.placeholder.com/80?text=🏠" },
                            { title: "Commercial Buildings", desc: "High-rise offices, malls, and complexes designed for growth.", icon: "https://via.placeholder.com/80?text=🏢" },
                            { title: "Industrial Projects", desc: "Large-scale industrial structures ensuring efficiency and safety.", icon: "https://via.placeholder.com/80?text=🏭" },
                            { title: "Renovation & Remodeling", desc: "Transforming spaces with modern design and top-quality materials.", icon: "https://via.placeholder.com/80?text=🔨" },
                            { title: "Infrastructure Development", desc: "Roads, bridges, and urban infrastructure to support communities.", icon: "https://via.placeholder.com/80?text=🛣️" },
                            { title: "Consultancy Services", desc: "Expert advice and project management for seamless execution.", icon: "https://via.placeholder.com/80?text=📋" },
                        ].map((service, i) => (
                            <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                                <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ✅ Section 3: How We Work */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        How <span className="text-blue-600 dark:text-blue-400">We Work</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "We understand your needs and project requirements." },
                            { step: "02", title: "Planning", desc: "Our experts create a strategic and efficient plan." },
                            { step: "03", title: "Execution", desc: "We build with precision, quality, and timely delivery." },
                            { step: "04", title: "Handover", desc: "The project is delivered exceeding expectations." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-3">{item.step}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ✅ Section 4: Final CTA */}
            <section className="relative bg-gray-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://via.placeholder.com/1600x500?text=Start+Your+Project+Today"
                        alt="Request a Quote"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Let’s Build Something Great Together
                    </h2>
                    <p className="text-lg mb-6 text-gray-200">
                        Get in touch with us to discuss your upcoming project. Our experts
                        are ready to assist you.
                    </p>
                    <a href="/contact/Page" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition">
                        Request a Quote
                    </a>
                </div>
            </section>
        </main>
    );
}
