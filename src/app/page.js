export default function Home() {
    return (
        <>
            <section className="relative bg-gray-900 text-white">
                {/* ✅ Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://via.placeholder.com/1600x800?text=MGSG+Construction+Site"
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
                        <a
                            href="/projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            View Our Projects
                        </a>
                        <a
                            href="/contact/Page"
                            className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-lg transition dark:bg-gray-100 dark:hover:bg-gray-300">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                    {/* ✅ Left: Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://via.placeholder.com/600x400?text=About+MGSG+Construction"
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
                        <a
                            href="/about"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            Learn More About Us
                        </a>
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
                                icon: "https://via.placeholder.com/100?text=🏠",
                            },
                            {
                                title: "Commercial Infrastructure",
                                desc: "Developing high-end commercial spaces to boost business growth.",
                                icon: "https://via.placeholder.com/100?text=🏢",
                            },
                            {
                                title: "Industrial Solutions",
                                desc: "Providing large-scale industrial construction with efficiency and safety.",
                                icon: "https://via.placeholder.com/100?text=🏭",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
                            >
                                <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ✅ CTA */}
                    <div className="mt-10">
                        <a
                            href="/services"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            Explore All Services
                        </a>
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
                            { title: "Skyline Residency", img: "https://via.placeholder.com/600x400?text=Project+1" },
                            { title: "Metro Business Hub", img: "https://via.placeholder.com/600x400?text=Project+2" },
                            { title: "Industrial Park", img: "https://via.placeholder.com/600x400?text=Project+3" },
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
                                    <a
                                        href="/projects"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ✅ CTA */}
                    <div className="mt-10">
                        <a
                            href="/projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center">

                    {/* ✅ Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Why <span className="text-blue-600 dark:text-blue-400">Choose Us</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        At MGSG Construction, we pride ourselves on delivering quality,
                        innovation, and customer satisfaction in every project we undertake.
                    </p>

                    {/* ✅ Stats Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { stat: "10+", label: "Years Experience", icon: "https://via.placeholder.com/60?text=⏳" },
                            { stat: "150+", label: "Projects Completed", icon: "https://via.placeholder.com/60?text=🏗️" },
                            { stat: "100+", label: "Happy Clients", icon: "https://via.placeholder.com/60?text=😊" },
                            { stat: "50+", label: "Expert Engineers", icon: "https://via.placeholder.com/60?text=👷" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <img src={item.icon} alt={item.label} className="mx-auto mb-3 w-14 h-14" />
                                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.stat}</h3>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">

                    {/* ✅ Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Meet Our <span className="text-blue-600 dark:text-blue-400">Team</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        Our experienced team of engineers, architects, and project managers
                        work together to deliver exceptional results on every project.
                    </p>

                    {/* ✅ Team Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: "Arun Mehta", role: "CEO & Founder", img: "https://via.placeholder.com/300x300?text=CEO" },
                            { name: "Priya Sharma", role: "Head Architect", img: "https://via.placeholder.com/300x300?text=Architect" },
                            { name: "Ravi Patel", role: "Project Manager", img: "https://via.placeholder.com/300x300?text=Manager" },
                            { name: "Sneha Kapoor", role: "Civil Engineer", img: "https://via.placeholder.com/300x300?text=Engineer" },
                        ].map((member, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
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
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center">

                    {/* ✅ Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        Our clients satisfaction is our top priority. Here’s what they have to
                        say about working with MGSG Construction.
                    </p>

                    {/* ✅ Testimonials Grid */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Rohit Verma",
                                role: "Real Estate Developer",
                                feedback: "MGSG Construction delivered our project ahead of schedule with outstanding quality. Truly a reliable partner!",
                                img: "https://via.placeholder.com/100?text=R",
                            },
                            {
                                name: "Ananya Singh",
                                role: "Business Owner",
                                feedback: "Professional, innovative, and efficient. Their team exceeded our expectations in every way.",
                                img: "https://via.placeholder.com/100?text=A",
                            },
                            {
                                name: "Vikram Desai",
                                role: "Industrial Client",
                                feedback: "Excellent service and attention to detail. Highly recommended for any industrial project.",
                                img: "https://via.placeholder.com/100?text=V",
                            },
                        ].map((client, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                            >
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
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative bg-gray-900 text-white">
                {/* ✅ Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://via.placeholder.com/1600x500?text=Let’s+Build+Together"
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
                    <a
                        href="/contact/Page"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition">
                        Page Us Today
                    </a>
                </div>
            </section>

        </>
    );
}
