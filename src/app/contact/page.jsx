export default function Page() {
    return (
        <main>
            {/* ✅ Section 1: Page Intro */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Let’s discuss how MGSG Construction can bring
                        your vision to life. Reach out to us via phone, email, or the form below.
                    </p>
                </div>
            </section>
            {/* ✅ Section 2: Page Details & Form */}
            <section className="bg-white dark:bg-gray-800 py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">

                    {/* Left: Page Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            MGSG Construction Bharat Pvt Ltd<br />
                            Gomti Nagar Extension, Lucknow, Uttar Pradesh
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">📞 +91 98765 43210</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">✉️ info@mgsgconstruction.in</p>
                        <p className="text-gray-700 dark:text-gray-300">⏰ Mon – Sat: 9:00 AM – 6:00 PM</p>
                    </div>

                    {/* Right: Page Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Send Us a Message</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" />
                            <textarea rows="4" placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"></textarea>
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/* ✅ Section 3: Google Map Embed */}
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Location</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">Visit our office in Lucknow</p>
                    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.453177!2d80.9857!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be30bbaaa5a8d%3A0x7fcefd!2sGomti%20Nagar%20Lucknow!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
