import {
    FaEnvelope,
    FaPhoneAlt,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-14">

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Get in Touch with Us
                    </h2>

                    <p className="mt-4 text-base md:text-md font-semibold text-gray-400 max-w-2xl mx-auto">
                        Have a question or planning your next journey?
                        Get in touch with us and we'll be happy to help.
                    </p>

                </div>


                {/* ================= MAIN CONTENT ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">


                    {/* ================= CONTACT INFORMATION ================= */}
                    <div className="lg:pt-4">

                        <h3 className="text-2xl font-bold text-black mb-3">
                            Quick Contact
                        </h3>

                        <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                            Whether you have a question about our packages,
                            destinations, bookings, or anything else,
                            our team is here to help.
                        </p>


                        {/* Email */}
                        <a
                            href="mailto:info@heritagejunction.in"
                            className="
                                flex items-center gap-4
                                py-4
                                text-black
                                hover:text-pink-500
                                transition-colors
                                group
                            "
                        >
                            <span
                                className="
                                    w-11 h-11
                                    rounded-xl
                                    border border-gray-300
                                    flex items-center justify-center
                                    group-hover:border-pink-400
                                    group-hover:text-pink-500
                                    transition-colors
                                "
                            >
                                <FaEnvelope />
                            </span>

                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                                    Email
                                </p>

                                <p className="font-semibold">
                                    info@heritagejunction.in
                                </p>
                            </div>
                        </a>


                        {/* Phone */}
                        <a
                            href="tel:+917905358890"
                            className="
                                flex items-center gap-4
                                py-4
                                text-black
                                hover:text-pink-500
                                transition-colors
                                group
                            "
                        >
                            <span
                                className="
                                    w-11 h-11
                                    rounded-xl
                                    border border-gray-300
                                    flex items-center justify-center
                                    group-hover:border-pink-400
                                    group-hover:text-pink-500
                                    transition-colors
                                "
                            >
                                <FaPhoneAlt />
                            </span>

                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                                    Phone
                                </p>

                                <p className="font-semibold">
                                    +91 79053 58890
                                </p>
                            </div>
                        </a>


                        {/* Social Links */}
                        <div className="mt-8">

                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">
                                Follow Us
                            </p>

                            <div className="flex flex-wrap gap-3">

                                <a
                                    href="#"
                                    aria-label="GitHub"
                                    className="
                                        w-10 h-10
                                        rounded-lg
                                        border border-gray-300
                                        flex items-center justify-center
                                        text-gray-600
                                        hover:text-black
                                        hover:border-pink-400
                                        transition-all
                                    "
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="
                                        w-10 h-10
                                        rounded-lg
                                        border border-gray-300
                                        flex items-center justify-center
                                        text-gray-600
                                        hover:text-red-500
                                        hover:border-red-400
                                        transition-all
                                    "
                                >
                                    <FaYoutube />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="
                                        w-10 h-10
                                        rounded-lg
                                        border border-gray-300
                                        flex items-center justify-center
                                        text-gray-600
                                        hover:text-blue-500
                                        hover:border-blue-400
                                        transition-all
                                    "
                                >
                                    <FaFacebook />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Twitter"
                                    className="
                                        w-10 h-10
                                        rounded-lg
                                        border border-gray-300
                                        flex items-center justify-center
                                        text-gray-600
                                        hover:text-black
                                        hover:border-black
                                        transition-all
                                    "
                                >
                                    <FaTwitter />
                                </a>

                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="
                                        w-10 h-10
                                        rounded-lg
                                        border border-gray-300
                                        flex items-center justify-center
                                        text-gray-600
                                        hover:text-blue-500
                                        hover:border-blue-400
                                        transition-all
                                    "
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ================= CONTACT FORM ================= */}
                    <div>
                        <form
                            className="
                                w-full
                                max-w-xl
                                mx-auto
                                space-y-7
                            "
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="
                                        block
                                        text-base
                                        font-semibold
                                        text-black
                                        mb-2
                                    "
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="
                                        w-full
                                        h-11
                                        px-3
                                        rounded-xl
                                        border
                                        border-gray-300
                                        bg-white
                                        text-black
                                        placeholder:text-gray-400
                                        outline-none
                                        transition-all
                                        text-sm
                                        focus:border-black
                                        focus:ring-2
                                        focus:ring-gray-200
                                    "
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="
                                        block
                                        text-base
                                        font-semibold
                                        text-black
                                        mb-2
                                    "
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    required
                                    className="
                                        w-full
                                        h-11
                                        text-sm
                                        px-3
                                        rounded-xl
                                        border
                                        border-gray-300
                                        bg-white
                                        text-black
                                        placeholder:text-gray-400
                                        outline-none
                                        transition-all
                                        focus:border-black
                                        focus:ring-2
                                        focus:ring-gray-200
                                    "
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="
                                        block
                                        text-base
                                        font-semibold
                                        text-black
                                        mb-2
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us how we can help..."
                                    required
                                    className="
                                        w-full
                                        px-3
                                        py-2
                                        text-sm
                                        rounded-xl
                                        border
                                        border-gray-300
                                        bg-white
                                        text-black
                                        placeholder:text-gray-400
                                        outline-none
                                        resize-none
                                        transition-all
                                        focus:border-black
                                        focus:ring-2
                                        focus:ring-gray-200
                                    "
                                />
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="
                                    w-full
                                    h-12
                                    rounded-xl
                                    bg-black
                                    text-white
                                    font-semibold
                                    text-base
                                    shadow-sm
                                    transition-all
                                    hover:bg-gray-800
                                    cursor-pointer
                                    hover:shadow-md
                                    active:scale-[0.99]
                                "
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact