export default function Projects() {
    return (
        <main>
            {/* ✅ Section 1: Projects Intro */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Our <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore some of our landmark residential, commercial, and industrial
                        projects that showcase our commitment to excellence and innovation.
                    </p>
                </div>
            </section>
            {/* ✅ Section 2: Featured Projects */}
            <section className="bg-white dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Skyline Residences", desc: "A luxury residential complex redefining urban living.", img: "https://via.placeholder.com/400x300?text=Skyline" },
                            { title: "Tech Park Hub", desc: "State-of-the-art commercial office spaces for IT companies.", img: "https://via.placeholder.com/400x300?text=Tech+Park" },
                            { title: "Green Industrial Zone", desc: "Sustainable industrial facility with eco-friendly practices.", img: "https://via.placeholder.com/400x300?text=Industrial" },
                            { title: "City Mall Complex", desc: "Modern shopping complex with entertainment facilities.", img: "https://via.placeholder.com/400x300?text=Mall" },
                            { title: "Metro Station Expansion", desc: "Infrastructure project enhancing city connectivity.", img: "https://via.placeholder.com/400x300?text=Metro" },
                            { title: "Eco Villas Project", desc: "Luxury villas with green energy solutions.", img: "https://via.placeholder.com/400x300?text=Villas" },
                        ].map((proj, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-xl shadow hover:shadow-xl transition">
                                <img src={proj.img} alt={proj.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-semibold">{proj.title}</h3>
                                    <p className="text-sm">{proj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ✅ Section 3: Case Study Highlight */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left: Image */}
                    <div>
                        <img
                            src="https://via.placeholder.com/700x400?text=Case+Study+Project"
                            alt="Case Study"
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">Case Study: Skyline Residences</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            The Skyline Residences project aimed to provide luxury living spaces
                            with sustainable architecture and smart home technologies.
                            Delivered 3 months ahead of schedule, this project is now a city landmark.
                        </p>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                            <li>✅ 250+ luxury apartments</li>
                            <li>✅ Integrated green building technologies</li>
                            <li>✅ Completed ahead of timeline</li>
                        </ul>
                        <a href="/contact/Page" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition">
                            Start Your Project
                        </a>
                    </div>
                </div>
            </section>
            {/* ✅ Section 4: Final CTA */}
            <section className="relative bg-gray-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://via.placeholder.com/1600x500?text=Work+With+MGSG"
                        alt="Work With Us"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Want to Build Your Dream Project?
                    </h2>
                    <p className="text-lg mb-6 text-gray-200">
                        Partner with MGSG Construction for innovative, sustainable,
                        and high-quality construction solutions.
                    </p>
                    <a href="/contact/Page" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition">
                        Let's Work Together
                    </a>
                </div>
            </section>
        </main>
    );
}
