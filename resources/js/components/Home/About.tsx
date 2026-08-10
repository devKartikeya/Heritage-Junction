const About = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">

                {/* LEFT — About Content */}
                <div className="relative">

                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-purple-600" />

                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-black">
                            Who We Are
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-5 text-4xl font-bold tracking-tight text-red-500 sm:text-5xl lg:text-6xl">
                        About{" "}
                        <span className="bg-gradient-to-r from-red-600 to-fuchsia-700 bg-clip-text text-transparent">
                            Us
                        </span>
                    </h2>

                    {/* Accent */}
                    <div className="mt-6 h-1 w-16 rounded-full bg-purple-600" />

                    {/* Content */}
                    <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-zinc-600 sm:text-lg">

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

                        <p className="border-l-2 border-purple-200 pl-5">
                            Our journey began with a simple belief: travel
                            should be as profound as it is effortless. Whether
                            you’re a solo wanderer tracing Buddhist trails in
                            Sarnath, a family marveling at Rajasthan’s forts,
                            or a corporate team bonding in Kerala’s backwaters,
                            we craft journeys that leave footprints on your
                            heart—not just your passport.
                        </p>

                    </div>

                    {/* Small credibility line */}
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <div className="h-10 w-px bg-zinc-200" />

                        <div>
                            <p className="text-2xl font-bold text-zinc-900">
                                India
                            </p>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Our Home
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT — Image */}
                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

                    {/* Decorative background */}
                    <div
                        className="
                            absolute
                            -inset-4
                            rounded-[2rem]
                            bg-purple-100/70
                            rotate-3
                            transition-transform
                            duration-700
                            hover:rotate-2
                        "
                    />

                    {/* Secondary border */}
                    <div
                        className="
                            absolute
                            -inset-2
                            rounded-[2rem]
                            border
                            border-purple-200/70
                            -rotate-2
                        "
                    />

                    {/* Image */}
                    <div className="group relative overflow-hidden rounded-[2rem] bg-zinc-100 shadow-2xl">

                        <img
                            src="/images.jpg"
                            alt="Heritage Junction travel experience"
                            className="
                                h-[430px]
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:scale-105
                                md:h-[540px]
                            "
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Floating badge */}
                        <div
                            className="
                                absolute
                                bottom-6
                                left-6
                                rounded-2xl
                                border
                                border-white/20
                                bg-black/40
                                px-5
                                py-4
                                text-white
                                shadow-xl
                                backdrop-blur-md
                            "
                        >
                            <p className="text-2xl font-bold">
                                10+
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                                Years of Journey
                            </p>
                        </div>

                    </div>

                    {/* Small decorative dot */}
                    <div className="absolute -bottom-5 -right-5 hidden h-20 w-20 rounded-full border border-purple-200 sm:block" />

                </div>

            </div>
        </section>
    );
};

export default About;