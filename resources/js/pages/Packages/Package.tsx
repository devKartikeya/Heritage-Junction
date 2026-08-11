import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/react'
import RouteMap from '../../components/Packages/RouteMap'
import Itinerary from '../../components/Packages/Itinerary'
import { Plus, Minus } from 'lucide-react'
import BookNow from '@/components/Packages/BookNow'
import Footer from '@/components/Footer'

type Destination = {
    id: number
    name: string
    slug: string
    short_description: string
    hero_image: string
    lat: number
    lng: number
    heritage_sites: []
}

type Faqs = {
    id: number,
    question: string,
    answer: string,
    category: string
}

export interface Inclusion {
    id: number
    package_id: number
    inclusion: string
    sort_order: number
    description: string
}

export interface Exclusion {
    id: number
    package_id: number
    exclusion: string
    sort_order: number
    description: string
}

type Pricing = {
    id: number
    package_id: number
    vehicle_name: string
    total_cost: number
    per_person_cost: number
    minimum_persons: number
    visit_order: 2
}

type Package = {
    id: number
    title: string
    slug: string
    cover_image: string
    short_description: string
    full_description: string
    duration_days: number
    duration_nights: number
    starting_city: string
    ending_city: string
    starting_price: string
    start_lat: number
    end_lat: number
    start_lng: number
    end_lng: number
    destinations: Destination[]
    itineraries: []
    pricings: Pricing[]
    inclusions: Inclusion[]
    exclusions: Exclusion[]
}

export default function PackagePage({ pkg, booking_faqs, packages_faqs }: { pkg: Package, booking_faqs: Faqs[], packages_faqs: Faqs[] }) {
    const destinations = pkg.destinations ?? []
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    const faqs = [...packages_faqs, ...booking_faqs];

    const points = [
        { name: pkg.starting_city, lat: pkg.start_lat, lng: pkg.start_lng },
        ...pkg.destinations.map(d => ({ name: d.name, lat: d.lat, lng: d.lng })),
        { name: pkg.ending_city, lat: pkg.end_lat, lng: pkg.end_lng },
    ];

    return (
        <div className="bg-gray-50 text-black">
            <Head title={pkg.title}>
                <meta property="og:title" content={pkg.title} />
                <meta property="og:description" content={pkg.short_description} />
                <meta property="og:image" content={pkg.cover_image} />
            </Head>
            <BookNow id={pkg.id} />

            {/* Banner */}
            {/* ================= HERO ================= */}
            <section className="relative isolate min-h-[620px] overflow-hidden bg-black">

                <img
                    src={pkg.cover_image}
                    alt={pkg.title}
                    className="
            absolute inset-0
            h-full w-full
            object-cover
            scale-[1.02]
        "
                />

                {/* Cinematic overlay */}
                <div className="
        absolute inset-0
        bg-gradient-to-r
        from-black/80
        via-black/45
        to-black/20
    " />

                <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/70
        via-transparent
        to-black/20
    " />

                <div className="
        relative z-10
        mx-auto flex min-h-[620px]
        max-w-7xl items-end
        px-6 pb-16 pt-32
        lg:px-8
    ">

                    <div className="max-w-4xl text-white">

                        {/* Eyebrow */}
                        <div className="
                mb-5
                flex items-center gap-3
                text-sm font-semibold
                uppercase tracking-[0.25em]
                text-white/80
            ">
                            <span className="h-px w-10 bg-red-500" />
                            Heritage Junction
                        </div>

                        {/* Title */}
                        <h1 className="
                max-w-4xl
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-7xl
                leading-[1.05]
            ">
                            {pkg.title}
                        </h1>

                        {/* Description */}
                        <p className="
                mt-6
                max-w-2xl
                text-base leading-7
                text-white/80
                sm:text-lg
            ">
                            {pkg.short_description}
                        </p>

                        {/* Package snapshot */}
                        <div className="
                mt-8
                flex flex-wrap
                items-center gap-3
            ">

                            {/* Duration */}
                            <div className="
                    rounded-xl
                    border border-white/15
                    bg-white/10
                    px-4 py-3
                    backdrop-blur-md
                ">
                                <p className="text-xs uppercase tracking-wider text-white/60">
                                    Duration
                                </p>

                                <p className="mt-1 font-semibold">
                                    {pkg.duration_days} Days / {pkg.duration_nights} Nights
                                </p>
                            </div>

                            {/* Route */}
                            <div className="
                    rounded-xl
                    border border-white/15
                    bg-white/10
                    px-4 py-3
                    backdrop-blur-md
                ">
                                <p className="text-xs uppercase tracking-wider text-white/60">
                                    Route
                                </p>

                                <p className="mt-1 font-semibold">
                                    {pkg.starting_city} → {pkg.ending_city}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="
                    rounded-xl
                    border border-white/15
                    bg-white/10
                    px-4 py-3
                    backdrop-blur-md
                ">
                                <p className="text-xs uppercase tracking-wider text-white/60">
                                    Starting From
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    ₹{pkg.starting_price}
                                    <span className="ml-1 text-sm font-normal text-white/60">
                                        / person
                                    </span>
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-3">

                            <Link
                                href={`/booking/${pkg.id}`}
                                className="
                        inline-flex items-center justify-center
                        rounded-xl
                        bg-red-600
                        px-6 py-3.5
                        font-semibold text-white
                        shadow-lg shadow-black/20
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-red-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-500
                        focus:ring-offset-2
                        focus:ring-offset-black
                    "
                            >
                                Book This Journey
                                <span className="ml-2">→</span>
                            </Link>

                            <a
                                href="#itinerary"
                                className="
                        inline-flex items-center justify-center
                        rounded-xl
                        border border-white/25
                        bg-white/10
                        px-6 py-3.5
                        font-semibold text-white
                        backdrop-blur-md
                        transition-all duration-300
                        hover:bg-white/20
                    "
                            >
                                View Itinerary
                            </a>

                        </div>

                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                {/* About */}
                <section className="py-4">

                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">

                        <div>
                            <span className="
                text-sm font-semibold
                uppercase tracking-[0.25em]
                text-red-600
            ">
                                The Journey
                            </span>

                            <h2 className="
                mt-3
                text-3xl font-bold tracking-tight
                text-gray-950
                sm:text-4xl lg:text-5xl
            ">
                                More than a trip.
                                <br />
                                <span className="text-red-600">
                                    A story to experience.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-3xl">

                            <p className="
                text-sm leading-8
                text-gray-700
                sm:text-md
            ">
                                {pkg.full_description}
                            </p>

                            <div className="
                mt-8
                h-px w-full
                bg-gray-200
            " />

                            <div className="
                mt-6
                flex flex-wrap gap-x-10 gap-y-4
                text-sm
            ">

                                <div>
                                    <p className="text-gray-500">Departure</p>
                                    <p className="mt-1 font-semibold text-gray-900">
                                        {pkg.starting_city}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Arrival</p>
                                    <p className="mt-1 font-semibold text-gray-900">
                                        {pkg.ending_city}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Duration</p>
                                    <p className="mt-1 font-semibold text-gray-900">
                                        {pkg.duration_days} Days
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>

                {/* Route Section */}
                <section>

                    <div className="mb-8">
                        <span className="
            text-sm font-semibold
            uppercase tracking-[0.25em]
            text-red-600
        ">
                            Your Journey
                        </span>

                        <h2 className="
            mt-2 text-3xl font-bold
            tracking-tight text-gray-950
            sm:text-4xl
        ">
                            The Route
                        </h2>
                    </div>

                    <div className="
        overflow-hidden
        rounded-3xl
        border border-gray-200
        bg-white
        shadow-sm
    ">

                        <div className="
            flex flex-wrap
            items-center
            gap-y-5
            px-6 py-7
            md:px-10
        ">

                            <div className="flex items-center gap-3">
                                <span className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full bg-red-100
                    text-sm font-bold text-red-600
                ">
                                    01
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {pkg.starting_city}
                                </span>
                            </div>

                            {destinations.map((dest, index) => (
                                <React.Fragment key={dest.id}>

                                    <div className="
                        mx-3 hidden h-px
                        w-8 bg-gray-300
                        sm:block
                        lg:w-12
                    " />

                                    <div className="flex items-center gap-3">

                                        <span className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            bg-gray-100
                            text-sm font-bold
                            text-gray-500
                        ">
                                            {String(index + 2).padStart(2, '0')}
                                        </span>

                                        <span className="font-semibold text-gray-900">
                                            {dest.name}
                                        </span>

                                    </div>

                                </React.Fragment>
                            ))}

                            <div className="
                mx-3 hidden h-px
                w-8 bg-gray-300
                sm:block
                lg:w-12
            " />

                            <div className="flex items-center gap-3">

                                <span className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-red-100
                    text-sm font-bold
                    text-red-600
                ">
                                    {String(destinations.length + 2).padStart(2, '0')}
                                </span>

                                <span className="font-semibold text-gray-900">
                                    {pkg.ending_city}
                                </span>

                            </div>

                        </div>

                        {points.length > 0 && (
                            <div className="
                h-[420px]
                border-t border-gray-100
            ">
                                <RouteMap points={points} />
                            </div>
                        )}

                    </div>

                </section>

                {/* Quick Facts */}
                <section className="mt-16">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Quick Facts</h2>

                        <p className="mt-2 text-gray-600">
                            Everything you need to know at a glance before starting your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* LEFT — Quick Facts Card */}
                        <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-6 md:p-6
        ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* Duration */}
                                <div className="
    rounded-2xl
    border border-gray-200
    bg-white
    p-5
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-lg
">
                                    <p className="text-sm text-gray-500">
                                        Duration
                                    </p>

                                    <p className="mt-2 text-2xl font-bold text-gray-950">
                                        {pkg.duration_days} Days
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {pkg.duration_nights} Nights
                                    </p>
                                </div>


                                {/* Departure */}
                                <div className="
    rounded-2xl
    border border-gray-200
    bg-white
    p-5
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-lg
">
                                    <p className="text-sm text-gray-500">
                                        Departure
                                    </p>

                                    <p className="mt-2 text-2xl font-bold text-gray-950">
                                        {pkg.starting_city}
                                    </p>
                                </div>


                                {/* Destination */}
                                <div className="
                                        rounded-2xl
                                        border border-gray-200
                                        bg-white
                                        p-5
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                    ">
                                    <p className="text-sm text-gray-500">
                                        Destination
                                    </p>

                                    <p className="mt-2 text-2xl font-bold text-gray-950">
                                        {pkg.ending_city}
                                    </p>
                                </div>
                                {/* Price */}
                                <div className="
                                        rounded-2xl
                                        border border-gray-200
                                        bg-white
                                        p-5
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                    ">
                                    <p className="text-sm text-gray-500">
                                        Starting Price
                                    </p>

                                    <p className="mt-2 text-2xl font-bold text-gray-950">
                                        {pkg.starting_price}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        per person
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT — Image Card */}
                        <div className="
            relative
            min-h-[320px]
            lg:min-h-[360px]
            rounded-3xl
            overflow-hidden
            shadow-lg
            group
        ">
                            <img
                                src="https://img.magnific.com/free-photo/gloomy-landscape_1398-1182.jpg?semt=ais_test_b&w=740&q=80"
                                alt={`${pkg.title} travel experience`}
                                className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                "
                            />

                            {/* Image Overlay */}
                            <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
            " />

                            {/* Image Content */}
                            <div className="
                absolute
                bottom-0
                left-0
                right-0
                p-6 md:p-8
                text-white
            ">
                                <p className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-purple-200
                    font-semibold
                ">
                                    Your Journey Awaits
                                </p>

                                <h3 className="
                    mt-2
                    text-2xl md:text-3xl
                    font-bold
                ">
                                    {pkg.title}
                                </h3>

                                <p className="
                    mt-2
                    text-sm md:text-base
                    text-gray-200
                    max-w-lg
                ">
                                    Discover unforgettable places, timeless heritage,
                                    and experiences crafted specially for you.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Destinations Covered */}
                <section>
                    <h2 className="text-3xl font-semibold text-purple-700 mb-6">Destinations Covered</h2>
                    {destinations.length === 0 ? (
                        <p className="text-gray-600">No destinations linked to this package yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {destinations.map((dest) => (
                                <div
                                    key={dest.id}
                                    className="
        group
        overflow-hidden
        rounded-2xl
        border border-gray-200
        bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
    "
                                >
                                    <div className="relative h-60 overflow-hidden">

                                        <img
                                            src={dest.hero_image}
                                            alt={dest.name}
                                            className="
                h-full w-full
                object-cover
                transition-transform duration-700
                group-hover:scale-105
            "
                                        />

                                        <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
        " />

                                        <div className="
            absolute bottom-4 left-5
            text-white
        ">
                                            <p className="
                text-xs font-semibold
                uppercase tracking-[0.2em]
                text-white/70
            ">
                                                Destination
                                            </p>

                                            <h3 className="
                mt-1 text-2xl font-bold
            ">
                                                {dest.name}
                                            </h3>
                                        </div>

                                    </div>

                                    <div className="p-5">

                                        <p className="
            line-clamp-3
            text-sm leading-6
            text-gray-600
        ">
                                            {dest.short_description}
                                        </p>

                                        <Link
                                            href={`/destinations/${dest.slug}`}
                                            className="
                mt-5 inline-flex
                items-center gap-2
                text-sm font-semibold
                text-red-600
                transition
                hover:text-red-700
            "
                                        >
                                            Explore destination
                                            <span className="transition-transform group-hover:translate-x-1">
                                                →
                                            </span>
                                        </Link>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Heritage Sites Covered */}
                <section>
                    <h2 className="text-3xl font-semibold text-purple-700 mb-6">Heritage Sites Covered</h2>

                    {destinations.length === 0 ? (
                        <p className="text-gray-600">No destinations linked to this package yet.</p>
                    ) : (
                        <div className="space-y-10">
                            {destinations.map((dest) => (
                                <div key={dest.id}>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        {dest.name}
                                    </h3>

                                    {dest.heritage_sites && dest.heritage_sites.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            {dest.heritage_sites.map((site: any) => (
                                                <div
                                                    key={site.id}
                                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                                >
                                                    <img
                                                        src={site.image_path}
                                                        alt={site.name}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                    <div className="p-4">
                                                        <h4 className="text-lg font-semibold text-gray-900">
                                                            {site.name}
                                                        </h4>
                                                        <p className="text-gray-700 text-sm mt-2">
                                                            {site.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">
                                            No heritage sites listed for {dest.name}.
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>


                {/* Itinerary */}
                <section id="itinerary">
                    <Itinerary
                        itineraries={pkg.itineraries ?? []}
                        starting_city={pkg.starting_city}
                        ending_city={pkg.ending_city}
                    />
                </section>

                {/* ================= INCLUSIONS & EXCLUSIONS ================= */}
                <section className="relative py-10 md:py-16">

                    {/* Section Header */}
                    <div className="max-w-3xl mb-10 md:mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-10 bg-red-500" />

                            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                                Package Details
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                            What's Included & What's Not
                        </h2>

                        <p className="mt-4 text-base md:text-lg leading-7 text-gray-600 max-w-2xl">
                            Know exactly what your package covers before you begin your journey.
                            No surprises — just a clear understanding of what's included.
                        </p>
                    </div>


                    {/* Inclusion / Exclusion Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* ================= INCLUDED ================= */}
                        <div className="
            relative
            overflow-hidden
            rounded-3xl
            border border-emerald-100
            bg-white
            shadow-sm
            transition-all duration-300
            hover:shadow-lg
        ">

                            {/* Top Accent */}
                            <div className="h-1.5 bg-emerald-500" />

                            <div className="p-6 md:p-8">

                                {/* Header */}
                                <div className="flex items-start gap-4 pb-6 border-b border-gray-100">

                                    <div className="
                        flex-shrink-0
                        w-12 h-12
                        rounded-2xl
                        bg-emerald-50
                        text-emerald-600
                        flex items-center justify-center
                    ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                            What's Included
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Everything covered by your package
                                        </p>
                                    </div>

                                </div>


                                {/* Items */}
                                {pkg.inclusions.length === 0 ? (

                                    <div className="py-8 text-center">
                                        <p className="text-sm text-gray-500">
                                            No inclusions listed for this package yet.
                                        </p>
                                    </div>

                                ) : (

                                    <ul className="mt-6 space-y-5">

                                        {pkg.inclusions
                                            .sort((a, b) => a.sort_order - b.sort_order)
                                            .map((item) => (

                                                <li
                                                    key={item.id}
                                                    className="
                                        flex items-start gap-4
                                        group
                                    "
                                                >

                                                    {/* Check */}
                                                    <span className="
                                        flex-shrink-0
                                        mt-0.5
                                        w-7 h-7
                                        rounded-full
                                        bg-emerald-50
                                        text-emerald-600
                                        flex items-center justify-center
                                        transition-all duration-300
                                        group-hover:bg-emerald-500
                                        group-hover:text-white
                                    ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2.5}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </span>

                                                    <div className="min-w-0">

                                                        <p className="
                                            font-semibold
                                            text-gray-900
                                            leading-6
                                        ">
                                                            {item.inclusion}
                                                        </p>

                                                        {item.description && (
                                                            <p className="
                                                mt-1.5
                                                text-sm
                                                leading-6
                                                text-gray-500
                                            ">
                                                                {item.description}
                                                            </p>
                                                        )}

                                                    </div>

                                                </li>

                                            ))}

                                    </ul>

                                )}

                            </div>
                        </div>


                        {/* ================= EXCLUDED ================= */}
                        <div className="
            relative
            overflow-hidden
            rounded-3xl
            border border-red-100
            bg-white
            shadow-sm
            transition-all duration-300
            hover:shadow-lg
        ">

                            {/* Top Accent */}
                            <div className="h-1.5 bg-red-500" />

                            <div className="p-6 md:p-8">

                                {/* Header */}
                                <div className="flex items-start gap-4 pb-6 border-b border-gray-100">

                                    <div className="
                        flex-shrink-0
                        w-12 h-12
                        rounded-2xl
                        bg-red-50
                        text-red-500
                        flex items-center justify-center
                    ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                            What's Not Included
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Additional expenses to keep in mind
                                        </p>
                                    </div>

                                </div>


                                {/* Items */}
                                {pkg.exclusions.length === 0 ? (

                                    <div className="py-8 text-center">
                                        <p className="text-sm text-gray-500">
                                            No exclusions listed for this package yet.
                                        </p>
                                    </div>

                                ) : (

                                    <ul className="mt-6 space-y-5">

                                        {pkg.exclusions
                                            .sort((a, b) => a.sort_order - b.sort_order)
                                            .map((item) => (

                                                <li
                                                    key={item.id}
                                                    className="
                                        flex items-start gap-4
                                        group
                                    "
                                                >

                                                    {/* Cross */}
                                                    <span className="
                                        flex-shrink-0
                                        mt-0.5
                                        w-7 h-7
                                        rounded-full
                                        bg-red-50
                                        text-red-500
                                        flex items-center justify-center
                                        transition-all duration-300
                                        group-hover:bg-red-500
                                        group-hover:text-white
                                    ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </span>

                                                    <div className="min-w-0">

                                                        <p className="
                                            font-semibold
                                            text-gray-900
                                            leading-6
                                        ">
                                                            {item.exclusion}
                                                        </p>

                                                        {item.description && (
                                                            <p className="
                                                mt-1.5
                                                text-sm
                                                leading-6
                                                text-gray-500
                                            ">
                                                                {item.description}
                                                            </p>
                                                        )}

                                                    </div>

                                                </li>

                                            ))}

                                    </ul>

                                )}

                            </div>
                        </div>

                    </div>


                    {/* Small reassurance */}
                    <div className="
        mt-6
        flex items-start gap-3
        rounded-2xl
        border border-gray-200
        bg-gray-50
        px-5 py-4
        text-sm text-gray-600
    ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5 w-5 h-5 flex-shrink-0 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
                            />
                        </svg>

                        <p className="leading-6">
                            Package inclusions and exclusions may vary depending on the
                            selected itinerary, vehicle, accommodation, or travel requirements.
                        </p>
                    </div>

                </section>
                {/* ================= PACKAGE PRICING ================= */}
                <section className="relative py-10 md:py-16">

                    {/* Section Header */}
                    <div className="max-w-3xl mb-10 md:mb-12">

                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-10 bg-red-500" />

                            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                                Choose Your Ride
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                            Package Pricing
                        </h2>

                        <p className="mt-4 text-base md:text-lg leading-7 text-gray-600 max-w-2xl">
                            Select the vehicle option that best fits your group.
                            Pricing is calculated per person based on the minimum group size.
                        </p>

                    </div>


                    {/* Pricing Cards */}
                    {pkg.pricings && pkg.pricings.length > 0 ? (

                        <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-7
        ">

                            {pkg.pricings
                                .sort((a, b) => a.visit_order - b.visit_order)
                                .map((pricing) => (

                                    <div
                                        key={pricing.id}
                                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border border-gray-200
                            bg-white
                            shadow-sm
                            transition-all duration-300
                            hover:-translate-y-1.5
                            hover:border-red-200
                            hover:shadow-xl
                        "
                                    >

                                        {/* Top Accent */}
                                        <div className="
                            h-1.5
                            bg-gradient-to-r
                            from-red-500
                            via-red-400
                            to-orange-400
                        " />


                                        <div className="p-6 md:p-7">

                                            {/* ================= VEHICLE HEADER ================= */}
                                            <div className="
                                flex
                                items-center
                                justify-between
                                gap-4
                                pb-6
                                border-b border-gray-100
                            ">

                                                <div className="min-w-0">

                                                    <p className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-gray-400
                                    ">
                                                        Vehicle
                                                    </p>

                                                    <h3 className="
                                        mt-2
                                        text-xl md:text-2xl
                                        font-bold
                                        text-gray-900
                                        truncate
                                    ">
                                                        {pricing.vehicle_name}
                                                    </h3>

                                                </div>


                                                {/* Vehicle Icon */}
                                                <div className="
                                    flex-shrink-0
                                    w-12 h-12
                                    rounded-2xl
                                    bg-red-50
                                    text-red-500
                                    flex
                                    items-center
                                    justify-center
                                    text-xl
                                    transition-transform duration-300
                                    group-hover:scale-105
                                ">
                                                    🚐
                                                </div>

                                            </div>


                                            {/* ================= MAIN PRICE ================= */}
                                            <div className="py-7">

                                                <p className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-gray-400
                                ">
                                                    Starting from
                                                </p>

                                                <div className="
                                    mt-2
                                    flex
                                    items-baseline
                                    gap-2
                                ">

                                                    <span className="
                                        text-4xl md:text-5xl
                                        font-bold
                                        tracking-tight
                                        text-gray-900
                                    ">
                                                        ₹{pricing.per_person_cost}
                                                    </span>

                                                    <span className="text-sm text-gray-500">
                                                        / person
                                                    </span>

                                                </div>

                                                <p className="mt-2 text-sm text-gray-500">
                                                    Based on a minimum group of{" "}
                                                    <span className="font-semibold text-gray-700">
                                                        {pricing.minimum_persons} travelers
                                                    </span>
                                                </p>

                                            </div>


                                            {/* ================= PRICE DETAILS ================= */}
                                            <div className="
                                rounded-2xl
                                border border-gray-100
                                bg-gray-50
                                divide-y divide-gray-100
                            ">

                                                {/* Total */}
                                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    px-4 py-4
                                ">

                                                    <div>
                                                        <p className="text-sm font-medium text-gray-600">
                                                            Total Package Cost
                                                        </p>

                                                        <p className="mt-0.5 text-xs text-gray-400">
                                                            Minimum group size
                                                        </p>
                                                    </div>

                                                    <span className="
                                        font-bold
                                        text-gray-900
                                    ">
                                                        ₹{pricing.total_cost}
                                                    </span>

                                                </div>


                                                {/* Minimum Persons */}
                                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    px-4 py-4
                                ">

                                                    <span className="text-sm font-medium text-gray-600">
                                                        Minimum Travelers
                                                    </span>

                                                    <span className="
                                        inline-flex
                                        items-center
                                        rounded-full
                                        bg-white
                                        border border-gray-200
                                        px-3 py-1
                                        text-sm
                                        font-semibold
                                        text-gray-800
                                    ">
                                                        {pricing.minimum_persons} Pax
                                                    </span>

                                                </div>

                                            </div>


                                            {/* ================= GROUP INFO ================= */}
                                            <div className="
                                mt-5
                                flex
                                items-start
                                gap-3
                                rounded-2xl
                                bg-red-50
                                px-4 py-4
                            ">

                                                <div className="
                                    flex-shrink-0
                                    w-8 h-8
                                    rounded-full
                                    bg-white
                                    text-red-500
                                    flex items-center justify-center
                                ">
                                                    ✓
                                                </div>

                                                <div>
                                                    <p className="
                                        text-sm
                                        font-semibold
                                        text-gray-900
                                    ">
                                                        Ideal for groups
                                                    </p>

                                                    <p className="
                                        mt-0.5
                                        text-xs
                                        leading-5
                                        text-gray-600
                                    ">
                                                        Suitable for{" "}
                                                        <span className="font-semibold">
                                                            {pricing.minimum_persons} or more
                                                        </span>{" "}
                                                        travelers.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                        </div>

                    ) : (

                        /* ================= EMPTY STATE ================= */
                        <div className="
            rounded-3xl
            border border-gray-200
            bg-white
            px-6 py-12
            text-center
            shadow-sm
        ">

                            <div className="
                mx-auto
                w-12 h-12
                rounded-2xl
                bg-gray-100
                flex items-center justify-center
                text-gray-400
                text-xl
            ">
                                ₹
                            </div>

                            <h3 className="
                mt-4
                text-lg
                font-semibold
                text-gray-900
            ">
                                Pricing information unavailable
                            </h3>

                            <p className="
                mt-2
                text-sm
                text-gray-500
                max-w-md
                mx-auto
            ">
                                Pricing details for this package haven't been added yet.
                                Please contact our team for current rates.
                            </p>

                        </div>

                    )}

                </section>

                {/* FAQs */}
                {/* ================= FAQs ================= */}
                <section className="relative py-10 md:py-16">

                    {/* Section Header */}
                    <div className="max-w-3xl mb-10 md:mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-10 bg-red-500" />

                            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                                Need to know
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-4 text-base md:text-lg leading-7 text-gray-600 max-w-2xl">
                            Everything you need to know before booking your journey.
                            If you still have questions, our team is always here to help.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="max-w-4xl space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openFAQ === index

                            return (
                                <div
                                    key={faq.id}
                                    className={`
                        group overflow-hidden rounded-2xl
                        border transition-all duration-300
                        ${isOpen
                                            ? 'border-red-200 bg-white shadow-md'
                                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                        }
                    `}
                                >

                                    {/* Question */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFAQ(isOpen ? null : index)
                                        }
                                        aria-expanded={isOpen}
                                        className="
                            w-full
                            flex items-center justify-between
                            gap-6
                            px-5 py-5
                            md:px-7 md:py-6
                            text-left
                            cursor-pointer
                        "
                                    >

                                        <div className="flex items-start gap-4">

                                            {/* Number */}
                                            <span
                                                className={`
                                    hidden sm:flex
                                    flex-shrink-0
                                    items-center justify-center
                                    w-8 h-8
                                    rounded-lg
                                    text-xs font-bold
                                    transition-all duration-300
                                    ${isOpen
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-red-500'
                                                    }
                                `}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <h3
                                                className={`
                                    text-base md:text-lg
                                    font-semibold
                                    leading-6
                                    transition-colors duration-300
                                    ${isOpen
                                                        ? 'text-red-600'
                                                        : 'text-gray-900 group-hover:text-red-600'
                                                    }
                                `}
                                            >
                                                {faq.question}
                                            </h3>

                                        </div>

                                        {/* Plus / Minus */}
                                        <div
                                            className={`
                                flex-shrink-0
                                flex items-center justify-center
                                w-9 h-9
                                rounded-full
                                border
                                transition-all duration-300
                                ${isOpen
                                                    ? 'rotate-0 border-red-500 bg-red-500 text-white'
                                                    : 'border-gray-200 bg-gray-50 text-gray-500 group-hover:border-red-200 group-hover:text-red-500'
                                                }
                            `}
                                        >
                                            {isOpen ? (
                                                <Minus size={18} strokeWidth={2} />
                                            ) : (
                                                <Plus size={18} strokeWidth={2} />
                                            )}
                                        </div>

                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`
                            grid transition-all duration-300 ease-in-out
                            ${isOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                            }
                        `}
                                    >
                                        <div className="overflow-hidden">

                                            <div className="mx-5 md:mx-7 border-t border-gray-100">
                                                <div className="py-5 md:py-6 pl-0 sm:pl-12">

                                                    <p className="
                                        text-sm md:text-base
                                        leading-7
                                        text-gray-600
                                        max-w-3xl
                                    ">
                                                        {faq.answer}
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                    {/* Bottom Help */}
                    <div className="
        mt-10
        max-w-4xl
        rounded-2xl
        border border-gray-200
        bg-white
        px-5 py-5
        md:px-7 md:py-6
        flex flex-col sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
    ">

                        <div>
                            <p className="font-semibold text-gray-900">
                                Still have questions?
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Our travel team can help you plan your journey.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="
                inline-flex items-center justify-center
                gap-2
                rounded-xl
                bg-gray-900
                px-5 py-3
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:bg-red-600
                hover:shadow-lg
                whitespace-nowrap
            "
                        >
                            Contact Us
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                    </div>

                </section>

           {/* ================= FINAL CTA ================= */}
<section className="relative overflow-hidden rounded-[2rem] bg-gray-950">

    {/* Background Image */}
    <div className="absolute inset-0">
        <img
            src={pkg.cover_image}
            alt=""
            className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
    </div>

    {/* Decorative Elements */}
    <div className="
        absolute
        -right-32
        -top-32
        h-80 w-80
        rounded-full
        border border-white/10
    " />

    <div className="
        absolute
        -right-20
        -top-20
        h-56 w-56
        rounded-full
        border border-white/5
    " />

    {/* Content */}
    <div className="
        relative
        px-6 py-14
        sm:px-10 sm:py-16
        lg:px-16 lg:py-20
    ">

        <div className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
        ">

            {/* LEFT */}
            <div className="max-w-2xl">

                {/* Eyebrow */}
                <div className="flex items-center gap-3">

                    <span className="
                        h-px
                        w-10
                        bg-red-500
                    " />

                    <span className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-red-400
                    ">
                        Ready when you are
                    </span>

                </div>


                {/* Heading */}
                <h2 className="
                    mt-5
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                ">
                    Your journey to{" "}
                    <span className="text-red-400">
                        {pkg.title}
                    </span>{" "}
                    starts here.
                </h2>


                {/* Description */}
                <p className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-7
                    text-gray-400
                    sm:text-lg
                ">
                    Everything is planned.
                    All that's left is to choose your dates
                    and start the journey.
                </p>


                {/* Quick Info */}
                <div className="
                    mt-7
                    flex
                    flex-wrap
                    gap-x-6
                    gap-y-3
                    text-sm
                    text-gray-400
                ">

                    <div className="flex items-center gap-2">
                        <span className="text-red-400">●</span>
                        {pkg.duration_days} Days / {pkg.duration_nights} Nights
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-red-400">●</span>
                        {pkg.starting_city} → {pkg.ending_city}
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-red-400">●</span>
                        From ₹{pkg.starting_price} / person
                    </div>

                </div>

            </div>


            {/* RIGHT — ACTION */}
            <div className="
                flex
                shrink-0
                flex-col
                items-start
                lg:items-end
            ">

                <p className="
                    mb-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-gray-500
                ">
                    Start planning your trip
                </p>

                <Link
                    href={`/booking/${pkg.id}`}
                    className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-red-600
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        shadow-xl
                        shadow-red-950/30
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-red-500
                        hover:shadow-2xl
                        hover:shadow-red-950/40
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-400
                        focus:ring-offset-2
                        focus:ring-offset-gray-950
                    "
                >

                    <span>
                        Book This Journey
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

                <p className="
                    mt-3
                    text-xs
                    text-gray-500
                ">
                    Secure your experience with Heritage Junction
                </p>

            </div>

        </div>

    </div>

</section>
            </div>
            <Footer />
        </div>
    )
}