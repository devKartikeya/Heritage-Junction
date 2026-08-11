import { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    ArrowUpRight,
    ChevronRight,
    Sparkles,
} from "lucide-react";

const ServiceCard = ({
    title,
    description,
    image,
    backInfo,
    backImage,
}: {
    title: string;
    description: string;
    image: string;
    backInfo: string;
    backImage?: string;
}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="group w-full h-[360px] [perspective:1400px] cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`
                    relative h-full w-full
                    transition-transform duration-700
                    ease-[cubic-bezier(0.4,0,0.2,1)]
                    [transform-style:preserve-3d]
                    ${
                        flipped
                            ? "[transform:rotateY(180deg)]"
                            : "group-hover:[transform:rotateY(180deg)]"
                    }
                `}
            >
                {/* =====================================================
                    FRONT
                ===================================================== */}
                <div
                    className="
                        absolute inset-0
                        overflow-hidden
                        rounded-[1.75rem]
                        border border-black/10
                        bg-zinc-900
                        shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]
                        [backface-visibility:hidden]
                    "
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                    {/* Top badge */}
                    <div className="absolute left-6 top-6 z-10">
                        <div
                            className="
                                inline-flex items-center gap-2
                                rounded-full
                                border border-white/20
                                bg-black/25
                                px-3.5 py-2
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-white
                                backdrop-blur-md
                            "
                        >
                            <Sparkles size={13} />
                            Heritage Junction
                        </div>
                    </div>

                    {/* Top right interaction indicator */}
                    <div
                        className="
                            absolute right-6 top-6 z-10
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            border border-white/20
                            bg-black/25
                            text-white
                            backdrop-blur-md
                            transition-all duration-300
                            group-hover:rotate-45
                        "
                    >
                        <ArrowUpRight size={18} />
                    </div>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                        <div className="mb-3 h-px w-10 bg-red-400 transition-all duration-500 group-hover:w-16" />

                        <h3
                            className="
                                text-2xl
                                font-bold
                                tracking-tight
                                text-white
                                sm:text-[1.7rem]
                            "
                        >
                            {title}
                        </h3>

                        <p
                            className="
                                mt-3
                                line-clamp-3
                                max-w-[95%]
                                text-sm
                                leading-6
                                text-white/75
                            "
                        >
                            {description}
                        </p>

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-white
                            "
                        >
                            <span>Explore service</span>

                            <ChevronRight
                                size={17}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </div>
                    </div>

                    {/* Border glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute inset-0
                            rounded-[1.75rem]
                            border border-white/10
                            transition-colors duration-300
                            group-hover:border-white/25
                        "
                    />
                </div>

                {/* =====================================================
                    BACK
                ===================================================== */}
                <div
                    className="
                        absolute inset-0
                        overflow-hidden
                        rounded-[1.75rem]
                        border border-white/10
                        bg-zinc-950
                        shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                    "
                    style={{
                        backgroundImage: backImage
                            ? `url(${backImage})`
                            : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: backImage
                            ? "transparent"
                            : "#09090b",
                    }}
                >
                    {/* Back overlays */}
                    <div className="absolute inset-0 bg-black/75" />

                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black/70 to-purple-950/60" />

                    {/* Decorative glow */}
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

                    <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

                    {/* Back content */}
                    <div
                        className="
                            relative z-10
                            flex h-full
                            flex-col
                            items-center
                            justify-center
                            px-7
                            text-center
                        "
                    >
                        {/* Icon */}
                        <div
                            className="
                                flex h-14 w-14
                                items-center justify-center
                                rounded-2xl
                                border border-red-400/30
                                bg-red-500/10
                                text-red-300
                                shadow-lg
                            "
                        >
                            <Sparkles size={22} />
                        </div>

                        <h3
                            className="
                                mt-6
                                text-2xl
                                font-bold
                                tracking-tight
                                text-white
                            "
                        >
                            {title}
                        </h3>

                        <div className="mt-4 h-px w-10 bg-red-400" />

                        <p
                            className="
                                mt-5
                                max-w-sm
                                text-xs
                                leading-6
                                text-white/70
                            "
                        >
                            {backInfo}
                        </p>

                        {/* Interaction hint */}
                        <div
                            className="
                                mt-7
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border border-white/10
                                bg-white/5
                                px-4 py-2
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-white/50
                            "
                        >
                            Click to return
                        </div>
                    </div>

                    <div className="absolute inset-0 rounded-[1.75rem] border border-white/10" />
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-white py-24 sm:py-28">
                {/* =====================================================
                    Background decoration
                ===================================================== */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-50/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    {/* =================================================
                        HEADING
                    ================================================= */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-red-500" />

                            <span
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    text-red-500
                                "
                            >
                                What We Offer
                            </span>

                            <span className="h-px w-8 bg-red-500" />
                        </div>

                        <h2
                            className="
                                text-4xl
                                font-bold
                                tracking-normal
                                text-zinc-950
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Journeys Beyond{" "}
                            <span className="text-red-500">
                                Ordinary
                            </span>
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-base
                                leading-7
                                text-zinc-500
                                sm:text-md
                            "
                        >
                            From heritage explorations to immersive
                            cultural experiences, every journey is
                            thoughtfully curated to connect you with
                            the soul of Uttar Pradesh.
                        </p>
                    </div>

                    {/* =================================================
                        SERVICE CARDS
                    ================================================= */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        <ServiceCard
                            title="Heritage Tours"
                            description="Explore iconic sites like Varanasi ghats, Lucknow’s Nawabi heritage, and Ayodhya’s spiritual landmarks with expert local guides."
                            image="https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop"
                            backInfo="Explore iconic heritage sites across Uttar Pradesh with knowledgeable local guides who bring history, architecture, traditions, and stories to life."
                            backImage="https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop"
                        />

                        <ServiceCard
                            title="Cultural Experiences"
                            description="Participate in classical music recitals, Kathak dance workshops, and traditional craft sessions led by local artisans."
                            image="https://images.unsplash.com/photo-1565970141927-d4591950032e?q=80&w=2070&auto=format&fit=crop"
                            backInfo="Step into the living traditions of Uttar Pradesh. Experience Kathak, traditional crafts, and authentic interactions with local artisans."
                            backImage="https://images.unsplash.com/photo-1565970141927-d4591950032e?q=80&w=2070&auto=format&fit=crop"
                        />

                        <ServiceCard
                            title="Festival Experiences"
                            description="Celebrate Holi in Mathura, Diwali in Ayodhya, or the grand Kumbh Mela with curated itineraries and safe arrangements."
                            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop"
                            backInfo="Celebrate India's most vibrant festivals. Experience the colours of Holi, lights of Diwali, and the spiritual grandeur of cultural gatherings."
                            backImage="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop"
                        />

                        <ServiceCard
                            title="Heritage Stays"
                            description="Stay in restored havelis, palaces, and boutique heritage hotels that blend comfort with cultural authenticity."
                            image="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop"
                            backInfo="Live like royalty in restored havelis, palaces, and boutique heritage hotels. Enjoy modern comfort while experiencing historic architecture, local cuisine, and cultural charm."
                            backImage="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop"
                        />
                    </div>

                    {/* =================================================
                        CTA
                    ================================================= */}
                    <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row">
                        <div>
                            <p className="text-sm font-semibold text-zinc-900">
                                Looking for something more personalized?
                            </p>

                            <p className="mt-1 text-sm text-zinc-500">
                                Let us create an experience around you.
                            </p>
                        </div>

                        <Link
                            href="/services"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border border-zinc-300
                                bg-white
                                px-6 py-3
                                text-sm
                                font-semibold
                                text-zinc-900
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-red-500
                                hover:text-red-500
                                hover:shadow-lg
                            "
                        >
                            Discover all services

                            <ArrowUpRight
                                size={17}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;