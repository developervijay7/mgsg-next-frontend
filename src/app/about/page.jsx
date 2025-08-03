export default function About() {
    return (
        <main>
            {/* ✅ Section 1: About Intro */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    {/* ✅ Left: Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            About <span className="text-blue-600 dark:text-blue-400">MGSG Construction</span>
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            MGSG Construction Bharat Pvt Ltd is committed to delivering
                            state-of-the-art infrastructure and real estate projects with
                            quality, safety, and sustainability at the core of every build.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            For over a decade, we have transformed skylines and created
                            landmarks across residential, commercial, and industrial sectors.
                            Our vision is to build not just structures, but long-lasting
                            relationships based on trust and excellence.
                        </p>
                        <a href="/contact/Page" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition">
                            Get in Touch
                        </a>
                    </div>

                    {/* ✅ Right: Image */}
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400?text=MGSG+Construction+Team"
                            alt="About MGSG"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
            {/* ✅ Section 2: Mission & Vision */}
            <section className="bg-white dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        Our <span className="text-blue-600 dark:text-blue-400">Mission</span> & <span className="text-blue-600 dark:text-blue-400">Vision</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* ✅ Mission Card */}
                        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow hover:shadow-lg transition">
                            <img
                                src="https://via.placeholder.com/80?text=🎯"
                                alt="Mission"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                To deliver world-class construction solutions that prioritize
                                innovation, sustainability, and client satisfaction, while
                                maintaining the highest standards of safety and quality.
                            </p>
                        </div>

                        {/* ✅ Vision Card */}
                        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow hover:shadow-lg transition">
                            <img
                                src="https://via.placeholder.com/80?text=👁️"
                                alt="Vision"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                To be recognized as India’s leading construction company, known
                                for creating landmark projects that shape the future of
                                infrastructure and uplift communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ✅ Section 3: Our Core Values */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        Our <span className="text-blue-600 dark:text-blue-400">Core Values</span>
                    </h2>

                    {/* Values Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Integrity",
                                desc: "We uphold honesty and transparency in every project we undertake.",
                                icon: "https://via.placeholder.com/60?text=🤝"
                            },
                            {
                                title: "Innovation",
                                desc: "We embrace new technologies and ideas to deliver cutting-edge solutions.",
                                icon: "https://via.placeholder.com/60?text=💡"
                            },
                            {
                                title: "Quality",
                                desc: "We adhere to the highest standards to ensure lasting excellence.",
                                icon: "https://via.placeholder.com/60?text=🏆"
                            },
                            {
                                title: "Sustainability",
                                desc: "We focus on eco-friendly practices to build a better future.",
                                icon: "https://via.placeholder.com/60?text=🌱"
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <img src={value.icon} alt={value.title} className="mx-auto mb-3 w-14 h-14" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ✅ Section 4: Our Journey (Timeline) */}
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
                        Our <span className="text-blue-600 dark:text-blue-400">Journey</span>
                    </h2>

                    {/* Timeline */}
                    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-6">
                        {[
                            {
                                year: "2012",
                                title: "Company Founded",
                                desc: "MGSG Construction Bharat Pvt Ltd was established with a vision to redefine India’s infrastructure sector."
                            },
                            {
                                year: "2015",
                                title: "First Major Residential Project",
                                desc: "Successfully delivered our first landmark residential complex, setting new benchmarks in quality."
                            },
                            {
                                year: "2018",
                                title: "Expansion into Commercial Sector",
                                desc: "We expanded our expertise to commercial infrastructure, completing several high-rise office spaces."
                            },
                            {
                                year: "2022",
                                title: "Sustainability Initiatives",
                                desc: "Introduced eco-friendly practices and green building technologies across all projects."
                            }
                        ].map((item, i) => (
                            <div key={i} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-2 -left-[7px]"></div>
                                <p className="text-blue-600 dark:text-blue-400 font-bold">{item.year}</p>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ✅ Section 5: Final CTA */}
            <section className="relative bg-gray-900 text-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://via.placeholder.com/1600x500?text=Join+Hands+With+MGSG"
                        alt="Join MGSG Construction"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 dark:from-gray-900/80 dark:to-gray-800/50"></div>
                </div>

                {/* Content */}
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Build the Future with <span className="text-blue-400">MGSG Construction</span>
                    </h2>
                    <p className="text-lg md:text-xl mb-6 text-gray-200">
                        Partner with us to create innovative, sustainable, and world-class
                        infrastructure projects that make a difference.
                    </p>
                    <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition">
                        Contact Us Now
                    </a>
                </div>
            </section>

        </main>
    );
}
