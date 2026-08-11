import { Link } from '@inertiajs/react'

const destinations = [
    {
        name: 'Ayodhya',
        category: 'Spiritual Heritage',
        description:
            'Discover sacred landmarks, timeless traditions and the spiritual heart of Uttar Pradesh.',
        image: '/ram-lalla-4k-wallpaper-scaled-1.webp',
        slug: 'ayodhya',
        size: 'large',
    },
    {
        name: 'Varanasi',
        category: 'Culture & Heritage',
        description:
            'Experience ancient ghats, living traditions and the timeless rhythm of the Ganges.',
        image: '/Cultural-heritage-of-Uttar-Pradesh-Varanasi.webp',
        slug: 'varanasi',
        size: 'normal',
    },
    {
        name: 'Lucknow',
        category: 'Royal Heritage',
        description:
            'Walk through Nawabi architecture, refined cuisine and the elegant culture of Lucknow.',
        image: '/taj-mahal-agra-uttar-pradesh-city-1-hero.jpg',
        slug: 'lucknow',
        size: 'normal',
    },
    {
        name: 'Vrindavan',
        category: 'Culture & Spirituality',
        description:
            'Immerse yourself in vibrant traditions, temples and the spiritual charm of Braj.',
        image: '/panoramic-of-vrindavan-uttar-pradesh-india.webp',
        slug: 'vrindavan',
        size: 'normal',
    },
]

const FeaturedDestinations = () => {
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="
                pointer-events-none
                absolute
                -left-40
                top-20
                h-96
                w-96
                rounded-full
                bg-purple-100/50
                blur-3xl
            " />

            <div className="
                pointer-events-none
                absolute
                -right-40
                bottom-10
                h-96
                w-96
                rounded-full
                bg-red-100/40
                blur-3xl
            " />


            <div className="relative mx-auto max-w-7xl px-6">

                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div className="max-w-2xl">

                        <span className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-red-500
                        ">
                            Explore Uttar Pradesh
                        </span>

                        <h2 className="
                            mt-4
                            text-4xl
                            font-bold
                            tracking-tight
                            text-gray-950
                            sm:text-5xl
                            lg:text-6xl
                        ">
                            Places worth
                            <span className="text-red-600">
                                {' '}experiencing.
                            </span>
                        </h2>

                        <p className="
                            mt-5
                            max-w-xl
                            text-base
                            leading-7
                            text-gray-600
                            md:text-lg
                        ">
                            From sacred cities and ancient ghats to royal
                            architecture and living traditions, discover
                            destinations that tell the story of Uttar Pradesh.
                        </p>

                    </div>


                    {/* Desktop View All */}

                    <Link
                        href="/destinations"
                        className="
                            group
                            hidden
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-gray-900
                            transition-colors
                            hover:text-red-600
                            md:inline-flex
                        "
                    >
                        <span>
                            View all destinations
                        </span>

                        <span className="
                            text-lg
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        ">
                            →
                        </span>
                    </Link>

                </div>


                {/* =================================================
                    DESTINATION GRID
                ================================================= */}

                {/* =================================================
    DESTINATION GRID
================================================= */}

                <div
                    className="
        grid
        grid-cols-1
        gap-5
        md:grid-cols-2
        lg:grid-cols-4
    "
                >
                    {destinations.map((destination, index) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className={`
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                bg-gray-900
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-2xl

                h-[320px]

                ${index === 0
                                    ? `
                            md:col-span-2
                            md:h-[400px]

                            lg:col-span-2
                            lg:row-span-2
                            lg:h-[520px]
                        `
                                    : `
                            lg:h-[250px]
                        `
                                }
            `}
                        >
                            {/* Image */}

                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                "
                            />

                            {/* Gradient */}

                            <div
                                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/25
                    to-black/5
                    transition-all
                    duration-500
                    group-hover:from-black/90
                    group-hover:via-black/35
                "
                            />

                            {/* Top Category */}

                            <div
                                className="
                    absolute
                    left-5
                    top-5
                    z-10
                "
                            >
                                <span
                                    className="
                        inline-flex
                        rounded-full
                        border
                        border-white/20
                        bg-black/20
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white
                        backdrop-blur-md
                    "
                                >
                                    {destination.category}
                                </span>
                            </div>

                            {/* Arrow */}

                            <div
                                className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    group-hover:bg-white
                    group-hover:text-gray-900
                "
                            >
                                ↗
                            </div>

                            {/* Content */}

                            <div
                                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-6
                    md:p-7
                "
                            >
                                <h3
                                    className={`
                        font-bold
                        tracking-tight
                        text-white

                        ${index === 0
                                            ? "text-3xl md:text-4xl"
                                            : "text-2xl"
                                        }
                    `}
                                >
                                    {destination.name}
                                </h3>

                                <p
                                    className="
                        mt-2
                        max-w-md
                        text-sm
                        leading-6
                        text-white/75
                        transition-colors
                        duration-500
                        group-hover:text-white/90
                    "
                                >
                                    {destination.description}
                                </p>

                                <div
                                    className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-white
                    "
                                >
                                    <span>
                                        Explore destination
                                    </span>

                                    <span
                                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                    >
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>


                {/* =================================================
                    MOBILE VIEW ALL
                ================================================= */}

                <div className="mt-10 text-center md:hidden">

                    <Link
                        href="/destinations"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            px-6
                            py-3
                            text-sm
                            font-semibold
                            text-gray-900
                            shadow-sm
                            transition-all
                            duration-300
                            hover:border-gray-300
                            hover:shadow-md
                        "
                    >
                        View all destinations

                        <span>
                            →
                        </span>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default FeaturedDestinations