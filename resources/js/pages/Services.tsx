import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Navbar from "@/components/navbar";
import { Head, Link } from "@inertiajs/react";

const services = [
    {
        title: "Guided Heritage Tours",
        description:
            "Explore iconic sites like Varanasi’s ghats, Lucknow’s Nawabi quarters, and Ayodhya’s temples with expert local guides. Includes curated itineraries, transport, meals, and storytelling sessions that bring history to life.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOHLjS0OupsMcgz9hT9kBmwHKrr1F_2_8G3H1Gh1QuyJxNme2ZgvtKH8l&s=10",
        category: "Heritage",
    },
    {
        title: "Cultural Immersion Experiences",
        description:
            "Participate in Kathak dance workshops, classical music recitals, and artisan craft sessions. These hands-on experiences let you live the traditions, not just observe them.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjz1sRv4Y5VtlsqhyrAjKEZLpsdjKeJXFROiQmHjs7A&s=10",
        category: "Culture",
    },
    {
        title: "Festival & Event Packages",
        description:
            "Celebrate Holi in Mathura, Diwali in Ayodhya, or the grand Kumbh Mela. Safe, curated itineraries with priority access, local cuisine tastings, and photography support.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5itnnCwHxUnVYnCYTAoNVp7CHXV_-aWm1KWafBi9Jg6sZzllllSqubHk&s=10",
        category: "Festivals",
    },
    {
        title: "Heritage Stays",
        description:
            "Stay in restored havelis, palaces, and boutique hotels that blend modern comfort with historic charm. Includes curated dining, cultural evenings, and guided architecture tours.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eJVUlf1DVN23KHafeqPuzqZHprtS-y5YYU0p0HN9_Q&s=10",
        category: "Accommodation",
    },
    {
        title: "Community Engagement",
        description:
            "Support local communities through village tours, cooking sessions, and artisan markets. Every booking contributes to heritage preservation and sustainable livelihoods.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAr5vvAkbxA5ZgM3AoQNRRw18dRu9zwg5M5BOIT_p6fES3b5kH0A0nAW58&s=10",
        category: "Community",
    },
    {
        title: "Customized Travel Planning",
        description:
            "Tailor-made itineraries for solo travelers, families, and corporate groups. Flexible schedules, 24/7 support, and personalized recommendations ensure seamless journeys.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eGmYKremR_2S05x4vqcggK3jjH_DMrMTzqiRPTDBsyvFV0quSKpdVtFO&s=10",
        category: "Personalized",
    },
    {
        title: "Safety & Comfort",
        description:
            "Your safety is our priority. We provide secure transport, vetted accommodations, and on-ground support teams. Travel with peace of mind knowing every detail is taken care of.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMvLFYmBB5W6PbMUPgl8hxFTvI3HMera1zmS4dkfc3hK6tynUoAKu5Q4&s=10",
        category: "Travel Support",
    },
    {
        title: "Culinary Journeys",
        description:
            "Discover India’s diverse flavors through curated food trails, cooking classes, and authentic dining experiences. From street food to royal feasts, savor the essence of Indian cuisine.",
        image:
            "https://curlytales.com/wp-content/uploads/2020/09/Pahadi-dishes.jpg",
        category: "Cuisine",
    },
    {
        title: "Adventure & Nature Escapes",
        description:
            "Balance heritage with the thrill of nature. Trek Himalayan trails, raft in Rishikesh, or explore wildlife sanctuaries. Perfect for travelers seeking both culture and adventure.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        category: "Adventure",
    },
];

const Services = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white text-zinc-900">
            <Head title="Our Services" />

            <Navbar />

            {/* =========================================================
                PAGE HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-zinc-950">
                {/* Background glow */}
                <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">

                    <div className="max-w-4xl">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-purple-500" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                                Heritage Junction
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="mt-7 text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
                            Travel beyond
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
                                the ordinary.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                            We don't just plan trips — we craft journeys that
                            immerse you in India's living heritage. From sacred
                            cities and timeless traditions to local flavors and
                            unforgettable experiences.
                        </p>

                        {/* Hero actions */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            <Link
                                href="/packages"
                                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-purple-500/20"
                            >
                                Explore Packages
                            </Link>

                            <Link
                                href="/#about"
                                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-zinc-500 hover:bg-white/10"
                            >
                                Discover Our Story
                            </Link>

                        </div>

                    </div>

                    {/* Bottom metadata */}
                    <div className="mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">

                        <div>
                            <p className="text-2xl font-bold text-white">
                                Heritage
                            </p>
                            <p className="mt-1 text-sm text-zinc-500">
                                Rooted in authentic culture
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-white">
                                Curated
                            </p>
                            <p className="mt-1 text-sm text-zinc-500">
                                Thoughtfully designed journeys
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-white">
                                Personal
                            </p>
                            <p className="mt-1 text-sm text-zinc-500">
                                Experiences made for you
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600">
                            How we travel
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                            Experiences designed
                            <br />
                            <span className="text-purple-600">
                                with meaning.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-2xl lg:justify-self-end">
                        <p className="text-lg leading-8 text-zinc-600">
                            At Heritage Junction, every journey begins with a
                            simple belief: the best travel experiences don't
                            merely show you a place — they help you understand
                            it.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-zinc-500">
                            Our experiences connect travelers with the people,
                            stories, traditions, food, architecture, and
                            landscapes that make every destination unique.
                        </p>
                    </div>

                </div>

            </section>

            {/* Existing About section */}
            <About />

            {/* =========================================================
                SERVICES
            ========================================================= */}

            <section className="bg-zinc-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    {/* Section heading */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-purple-600" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                                What We Offer
                            </span>

                            <span className="h-px w-10 bg-purple-600" />
                        </div>

                        <h2 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                            More than a trip.
                            <br />
                            <span className="text-red-600">
                                A complete experience.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
                            From heritage exploration and cultural immersion
                            to comfort, cuisine, and adventure — everything
                            you need for a meaningful journey.
                        </p>

                    </div>

                    {/* Services */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {services.map((service, index) => (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-2xl"
                            >

                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    {/* Category */}
                                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                                        {service.category}
                                    </span>

                                    {/* Number */}
                                    <span className="absolute bottom-5 right-5 text-sm font-bold text-white/70">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                                {/* Content */}
                                <div className="p-7">

                                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-purple-600">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
                                        Discover experience
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>

                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-purple-600 transition-transform duration-500 group-hover:scale-x-100" />

                            </article>
                        ))}

                    </div>

                </div>
            </section>

            {/* =========================================================
                WHY US STRIP
            ========================================================= */}

            <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-7xl">

                    <div className="rounded-[2rem] bg-zinc-950 px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-14">

                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div className="max-w-2xl">

                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                                    The Heritage Junction Difference
                                </span>

                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Thoughtful journeys.
                                    <br />
                                    <span className="text-zinc-400">
                                        Authentic experiences.
                                    </span>
                                </h2>

                                <p className="mt-5 leading-7 text-zinc-400">
                                    We combine local knowledge, carefully
                                    selected experiences, seamless planning,
                                    and genuine cultural connection to make
                                    your journey memorable for all the right
                                    reasons.
                                </p>

                            </div>

                            <Link
                                href="/packages"
                                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:text-white"
                            >
                                View Our Packages
                                <span className="ml-3">→</span>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-fuchsia-600 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-28">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-4xl text-center">

                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-100">
                        Your next story starts here
                    </span>

                    <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Ready to experience India differently?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-purple-100 sm:text-lg">
                        Let Heritage Junction craft a journey around the places,
                        traditions, flavors, and stories you want to experience.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                        <Link
                            href="/packages"
                            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-purple-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-50"
                        >
                            Explore Packages
                            <span className="ml-3">→</span>
                        </Link>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                        >
                            Talk to Us
                        </Link>

                    </div>

                </div>

            </section>

            <Footer />
        </div>
    );
};

export default Services;