const About = () => {
    return (
        <section className="w-full px-6 py-16 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left - About Content */}
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-black">
                        Who We Are
                    </span>

                    <h2 className="mt-3 text-4xl md:text-5xl font-bold text-red-600">
                        About Us
                    </h2>

                    <div className="mt-8 space-y-6 text-gray-600 leading-7 text-lg">
                        <p>
                            At Heritage Junction, we don’t just plan trips—we
                            orchestrate experiences that transform how you see
                            the world. Born from a deep-rooted love for India’s
                            staggering diversity, we’ve spent over a decade
                            weaving together the threads of this nation’s soul:
                            its snow-capped Himalayan peaks, sun-kissed coastal
                            villages, whispering desert dunes, and bustling
                            metropolitan hearts.
                        </p>
                        <p>
                            Our journey began with a simple belief: travel
                            should be as profound as it is effortless. Whether
                            you’re a solo wanderer tracing Buddhist trails in
                            Sarnath, a family marveling at Rajasthan’s forts,
                            or a corporate team bonding in Kerala’s backwaters,
                            we craft journeys that leave footprints on your
                            heart—not just your passport.
                        </p>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="relative">
                    {/* Decorative background */}
                    <div className="absolute -inset-4 rounded-[2rem] bg-purple-100/60 -z-10 rotate-3" />

                    <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                        <img
                            src="/images.jpg"
                            alt="Heritage Junction travel experience"
                            className="w-full h-[450px] md:h-[550px] object-cover"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;