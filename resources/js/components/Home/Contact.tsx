import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id='contact' className="w-full bg-gray-100 py-16 px-6 bg-yellow-50">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 ">
                {/* Heading */}
                <h2 className="text-5xl font-bold text-center text-purple-600">
                    Get in Touch with Us
                </h2>
                <div className='flex flex-col gap-4'>
                    <p className='text-black text-center'>Ready to bring your vision to life? Contact us today, and let’s create something amazing together!</p>
                </div>
                <div className='flex flex-col md:flex-row gap-8 mx-auto items-center justify-center w-full'>
                    <div className="flex w-full md:w-1/2 flex-col md:flex-col justify-center gap-8 text-center p-4">
                    <h2 className='text-3xl md:text-4xl text-left font-bold text-red-500'>Quick Contact !</h2>
                        <a
                            href="mailto:yourmail@example.com"
                            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
                        >
                            <FaEnvelope className="text-2xl" /> info@heritagejunction.in
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                        >
                            <FaGithub className="text-2xl" /> GitHub
                        </a>
                        <a
                            href="https://youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
                        >
                            <FaYoutube className="text-2xl" /> YouTube
                        </a>
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition"
                        >
                            <FaFacebook className="text-2xl" /> Facebook
                        </a>
                        <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                        >
                            <FaTwitter className="text-2xl" /> Twitter
                        </a>
                        <a
                            href="https://linkedin.com/in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                        >
                            <FaLinkedin className="text-2xl" /> LinkedIn
                        </a>
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
                        >
                            <FaPhoneAlt className="text-2xl" /> +91 79053 58890
                        </a>
                    </div>
                    {/* Contact Form */}
                    <form className="bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6 w-full md:w-1/2 mx-auto">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                required
                                type="email"
                                placeholder="Your Email"
                                className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                required
                                rows="5"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-600 cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-purple-400 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Other Contact Options */}

                </div>
            </div>
        </section>
    )
}

export default Contact;