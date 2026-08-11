import Footer from "@/components/Footer"
import { Head, Link } from "@inertiajs/react"

type Destination = {
    id: number
    name: string
    slug: string
    full_description: string
    hero_image: string
    banner_image: string
    best_time: string
    average_budget: number
    category: string
    state: string
}

type Item2 = {
    id: number
    destination_id: number
    name: string
    image_path: string
    description: string
    sort_order: number
}

export default function DestinationPage({
    destination,
}: {
    destination: Destination & {
        foods: Item2[]
        heritage_sites: Item2[]
    }
}) {
    const foods = destination.foods ?? []
    const heritageSites = destination.heritage_sites ?? []

    return (
        <div className="min-h-screen bg-[#fafafa] text-gray-900">

            <Head title={`${destination.name} | Heritage Junction`}>
                <meta
                    property="og:title"
                    name="description"
                    content={destination.full_description}
                />
            </Head>


            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative h-[520px] md:h-[620px] overflow-hidden">

                <img
                    src={destination.banner_image || destination.hero_image}
                    alt={`View of ${destination.name}`}
                    className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        scale-[1.01]
                    "
                />

                {/* Layered cinematic overlays */}
                <div className="absolute inset-0 bg-black/25" />

                <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/25
                    to-black/10
                " />

                {/* Hero content */}
                <div className="
                    relative z-10
                    h-full
                    max-w-7xl
                    mx-auto
                    px-6
                    flex
                    items-end
                    pb-16
                    md:pb-20
                ">

                    <div className="max-w-4xl text-white">

                        <div className="
                            inline-flex
                            items-center
                            gap-3
                            mb-5
                            text-xs
                            md:text-sm
                            uppercase
                            tracking-[0.3em]
                            font-semibold
                            text-white/80
                        ">
                            <span className="h-px w-10 bg-white/60" />
                            Destination Guide
                        </div>

                        <h1 className="
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                            lg:text-8xl
                            font-bold
                            tracking-tight
                            leading-[0.95]
                        ">
                            {destination.name}
                        </h1>

                        <p className="
                            mt-6
                            max-w-2xl
                            text-base
                            md:text-xl
                            text-white/85
                            leading-relaxed
                        ">
                            Experience the timeless charm of {destination.name},
                            where culture, history, and beauty converge.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                QUICK FACTS
            ========================================================= */}

            <section className="relative z-20 -mt-10 px-6">

                <div className="
                    max-w-6xl
                    mx-auto
                    rounded-3xl
                    bg-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                    border border-gray-100
                    p-6
                    md:p-8
                ">

                    <div className="
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        divide-x
                        divide-gray-200
                    ">

                        {/* State */}
                        <div className="px-4 md:px-6 first:pl-0">

                            <p className="
                                text-[11px]
                                uppercase
                                tracking-[0.2em]
                                font-semibold
                                text-gray-400
                            ">
                                Location
                            </p>

                            <p className="
                                mt-2
                                text-base
                                md:text-lg
                                font-semibold
                                text-gray-900
                            ">
                                {destination.state}
                            </p>

                        </div>


                        {/* Category */}
                        <div className="px-4 md:px-6">

                            <p className="
                                text-[11px]
                                uppercase
                                tracking-[0.2em]
                                font-semibold
                                text-gray-400
                            ">
                                Experience
                            </p>

                            <p className="
                                mt-2
                                text-base
                                md:text-lg
                                font-semibold
                                text-gray-900
                            ">
                                {destination.category}
                            </p>

                        </div>


                        {/* Best time */}
                        <div className="px-4 md:px-6">

                            <p className="
                                text-[11px]
                                uppercase
                                tracking-[0.2em]
                                font-semibold
                                text-gray-400
                            ">
                                Best Time
                            </p>

                            <p className="
                                mt-2
                                text-base
                                md:text-lg
                                font-semibold
                                text-gray-900
                            ">
                                {destination.best_time}
                            </p>

                        </div>


                        {/* Budget */}
                        <div className="px-4 md:px-6 pr-0">

                            <p className="
                                text-[11px]
                                uppercase
                                tracking-[0.2em]
                                font-semibold
                                text-gray-400
                            ">
                                Avg. Budget
                            </p>

                            <p className="
                                mt-2
                                text-base
                                md:text-lg
                                font-semibold
                                text-red-600
                            ">
                                ₹{destination.average_budget}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================
                MAIN CONTENT
            ========================================================= */}

            <main className="max-w-7xl mx-auto px-6">


                {/* =====================================================
                    ABOUT
                ===================================================== */}

                <section className="py-24 md:py-32">

                    <div className="
                        grid
                        lg:grid-cols-[0.7fr_1.3fr]
                        gap-12
                        lg:gap-24
                        items-start
                    ">

                        {/* Section label */}
                        <div>

                            <span className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                font-semibold
                                text-red-500
                            ">
                                Discover
                            </span>

                            <h2 className="
                                mt-4
                                text-4xl
                                md:text-5xl
                                font-bold
                                tracking-tight
                            ">
                                About {destination.name}
                            </h2>

                            <div className="
                                mt-6
                                h-1
                                w-16
                                rounded-full
                                bg-red-500
                            " />

                        </div>


                        {/* Story */}
                        <div>

                            <p className="
                                text-md
                                md:text-lg
                                leading-[1.7]
                                text-gray-600
                            ">
                                {destination.full_description}
                            </p>

                            <div className="
                                mt-10
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-4
                            ">

                                <div className="
                                    rounded-2xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                    p-5
                                ">
                                    <p className="text-xs uppercase tracking-widest text-gray-400">
                                        Destination
                                    </p>

                                    <p className="mt-2 font-semibold">
                                        {destination.name}
                                    </p>
                                </div>

                                <div className="
                                    rounded-2xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                    p-5
                                ">
                                    <p className="text-xs uppercase tracking-widest text-gray-400">
                                        Best Time
                                    </p>

                                    <p className="mt-2 font-semibold">
                                        {destination.best_time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* =====================================================
                    HERITAGE
                ===================================================== */}

                <section className="pb-24 md:pb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                font-semibold
                                text-purple-600
                            ">
                                Explore
                            </span>

                            <h2 className="
                                mt-3
                                text-4xl
                                md:text-5xl
                                font-bold
                                tracking-tight
                            ">
                                Heritage & Culture
                            </h2>
                        </div>
                        <p className="
                            max-w-md
                            text-gray-500
                            leading-relaxed
                        ">
                            Discover the places, architecture and stories
                            that give {destination.name} its identity.
                        </p>
                    </div>
                    {heritageSites.length === 0 ? (
                        <div className="
                            rounded-3xl
                            border
                            border-dashed
                            border-gray-300
                            p-12
                            text-center
                            text-gray-500
                        ">
                            No heritage sites listed for this destination.
                        </div>
                    ) : (
                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-3
                            gap-7
                        ">
                            {heritageSites.map((site) => (
                                <article
                                    key={site.id}
                                    className="
                                        group
                                        bg-white
                                        rounded-3xl
                                        overflow-hidden
                                        border
                                        border-gray-100
                                        shadow-sm
                                        hover:shadow-2xl
                                        hover:-translate-y-1
                                        transition-all
                                        duration-500
                                    "
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={site.image_path}
                                            alt={`View of ${site.name}`}
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-105
                                            "
                                        />
                                        <div className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/50
                                            to-transparent
                                        " />
                                    </div>
                                    <div className="p-7">
                                        <h3 className="
                                            text-xl
                                            font-bold
                                            text-gray-900
                                        ">
                                            {site.name}
                                        </h3>
                                        <p className="
                                            mt-3
                                            text-sm
                                            leading-7
                                            text-gray-600
                                        ">
                                            {site.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
                {/* =====================================================
                    FOOD
                ===================================================== */}
                <section className="pb-24 md:pb-32">

                    <div className="
                        rounded-[2.5rem]
                        bg-[#111111]
                        px-6
                        py-16
                        md:px-12
                        md:py-20
                    ">
                        <div className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-end
                            justify-between
                            gap-8
                            mb-12
                        ">
                            <div>
                                <span className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    font-semibold
                                    text-red-400
                                ">
                                    Taste the Destination
                                </span>
                                <h2 className="
                                    mt-3
                                    text-4xl
                                    md:text-5xl
                                    font-bold
                                    text-white
                                ">
                                    Local Flavours
                                </h2>
                            </div>
                            <p className="
                                max-w-md
                                text-gray-400
                                leading-relaxed
                            ">
                                No journey is complete without tasting
                                the flavours that tell a destination's story.
                            </p>
                        </div>
                        {foods.length === 0 ? (
                            <div className="
                                rounded-3xl
                                border
                                border-white/10
                                p-12
                                text-center
                                text-gray-400
                            ">
                                No local foods listed for this destination.
                            </div>
                        ) : (
                            <div className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                lg:grid-cols-3
                                gap-7
                            ">
                                {foods.map((food) => (
                                    <article
                                        key={food.id}
                                        className="
                                            group
                                            rounded-3xl
                                            overflow-hidden
                                            bg-white/5
                                            border
                                            border-white/10
                                            hover:bg-white/10
                                            transition-all
                                            duration-500
                                        "
                                    >
                                        <div className="
                                            relative
                                            h-60
                                            overflow-hidden
                                        ">
                                            <img
                                                src={food.image_path}
                                                alt={food.name}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    group-hover:scale-105
                                                "
                                            />
                                        </div>
                                        <div className="p-7">
                                            <h3 className="
                                                text-xl
                                                font-bold
                                                text-white
                                            ">
                                                {food.name}
                                            </h3>
                                            <p className="
                                                mt-3
                                                text-sm
                                                leading-7
                                                text-gray-400
                                            ">
                                                {food.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                {/* =====================================================
    CTA — PLAN YOUR JOURNEY
===================================================== */}
                <section className="pb-24 md:pb-32">

                    <div className="
        relative
        overflow-hidden
        rounded-[2rem]
        border border-gray-200
        bg-white
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
    ">
                        {/* Subtle background accent */}
                        <div className="
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-purple-100/70
            blur-3xl
        " />
                        <div className="
            absolute
            -left-32
            -bottom-32
            h-80
            w-80
            rounded-full
            bg-red-100/60
            blur-3xl
        " />
                        <div className="
            relative
            z-10
            px-6
            py-14
            sm:px-10
            sm:py-16
            md:px-16
            md:py-20
            lg:px-20
        ">
                            <div className="
                flex
                flex-col
                gap-10
                lg:flex-row
                lg:items-center
                lg:justify-between
            ">
                                {/* ================= LEFT CONTENT ================= */}
                                <div className="max-w-2xl">
                                    {/* Eyebrow */}
                                    <div className="
                        mb-4
                        flex
                        items-center
                        gap-3
                    ">
                                        <span className="
                            h-px
                            w-8
                            bg-red-500
                        " />
                                        <span className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-red-500
                        ">
                                            Plan Your Journey
                                        </span>
                                    </div>
                                    {/* Heading */}
                                    <h2 className="
                        text-3xl
                        font-bold
                        tracking-tight
                        text-gray-950
                        sm:text-4xl
                        lg:text-5xl
                        lg:leading-[1.1]
                    ">
                                        Ready to explore{" "}
                                        <span className="text-purple-600">
                                            {destination.name}
                                        </span>
                                        ?
                                    </h2>
                                    {/* Description */}
                                    <p className="
                        mt-5
                        max-w-xl
                        text-base
                        leading-7
                        text-gray-600
                        sm:text-lg
                    ">
                                        Turn your visit into a memorable experience.
                                        Explore our carefully designed travel packages
                                        and discover the best of {destination.name}.
                                    </p>
                                </div>
                                {/* ================= RIGHT ACTION ================= */}
                                <div className="
                    flex
                    flex-col
                    items-start
                    lg:items-end
                ">
                                    <Link
                                        href="/packages"
                                        className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            rounded-xl
                            bg-gray-950
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-gray-950/10
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-purple-600
                            hover:shadow-xl
                            hover:shadow-purple-600/20
                            sm:px-7
                            sm:py-4
                        "
                                    >
                                        Explore Travel Packages
                                        <span className="
                            text-lg
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        ">
                                            →
                                        </span>
                                    </Link>
                                    <span className="
                        mt-3
                        text-xs
                        text-gray-400
                    ">
                                        Discover journeys curated by Heritage Junction
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}