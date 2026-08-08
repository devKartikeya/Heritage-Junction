import QuickFactCard from '../../components/Packages/QuickFactCard'
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
            <div className="relative w-full h-96">
                <img
                    src={pkg.cover_image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">{pkg.title}</h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl">{pkg.short_description}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                {/* About */}
                <section>
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-6">About This Package</h2>
                    <p className="text-gray-800 leading-relaxed text-lg">{pkg.full_description}</p>
                </section>

                {/* Route Section */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-4">Route</h2>

                    {/* Route Text */}
                    <div className="bg-white rounded-xl shadow-lg px-6 py-8 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
                            {/* Starting City */}
                            <span className="text-red-600">{pkg.starting_city}</span>
                            <span className="text-purple-600">→</span>

                            {/* Destinations */}
                            {destinations.map((dest, idx) => (
                                <React.Fragment key={dest.id}>
                                    <span className="hover:text-red-700 transition">{dest.name}</span>
                                    {idx < destinations.length - 1 && (
                                        <span className="text-purple-600">→</span>
                                    )}
                                </React.Fragment>
                            ))}

                            {/* Ending City */}
                            <span className="text-purple-600">→</span>
                            <span className="text-red-600">{pkg.ending_city}</span>
                        </div>
                    </div>

                    {/* Route Map */}
                    {points.length > 0 && (
                        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <RouteMap points={points} />
                        </div>
                    )}
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
                    border border-purple-100
                    bg-purple-50/50
                    p-5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                ">
                                    <div className="flex items-start gap-4">

                                        <div className="
                            bg-purple-100
                            text-purple-600
                            rounded-xl
                            w-20 h-20
                            flex-shrink-0
                            flex items-center justify-center
                        ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Duration
                                            </p>
                                            <p className="mt-1 font-bold text-gray-900">
                                                {pkg.duration_days} Days
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {pkg.duration_nights} Nights
                                            </p>
                                        </div>

                                    </div>
                                </div>


                                {/* Departure */}
                                <div className="
                    rounded-2xl
                    border border-blue-100
                    bg-blue-50/50
                    p-5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                ">
                                    <div className="flex items-start gap-4">

                                        <div className="
                            bg-blue-100
                            text-blue-600
                            rounded-xl
                            w-20 h-20
                            flex-shrink-0
                            flex items-center justify-center
                        ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h14M12 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">
                                                Departure
                                            </p>

                                            <p className="mt-1 text-lg font-bold text-gray-900">
                                                {pkg.starting_city}
                                            </p>
                                        </div>

                                    </div>
                                </div>


                                {/* Destination */}
                                <div className="
                    rounded-2xl
                    border border-indigo-100
                    bg-indigo-50/50
                    p-5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                ">
                                    <div className="flex items-start gap-4">

                                        <div className="
                            bg-indigo-100
                            text-indigo-600
                            rounded-xl
                            w-20 h-20
                            flex-shrink-0
                            flex items-center justify-center
                        ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 19l-7-7 7-7m0 14l7-7-7-7"
                                                />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Destination
                                            </p>

                                            <p className="mt-1 text-lg font-bold text-gray-900">
                                                {pkg.ending_city}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                {/* Price */}
                                <div className="
                    rounded-2xl
                    border border-yellow-100
                    bg-yellow-50/60
                    p-5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                ">
                                    <div className="flex items-start gap-4">

                                        <div className="
                            bg-yellow-100
                            text-yellow-600
                            rounded-xl
                            w-20 h-20
                            flex-shrink-0
                            flex items-center justify-center
                        ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8c-1.657 0-3 1.343-3 3h6c0-1.657-1.343-3-3-3zM12 14c1.657 0 3-1.343 3-3H9c0 1.657 1.343 3 3 3z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Starting Price
                                            </p>
                                            <p className="mt-1 text-xl font-bold text-purple-700">₹{pkg.starting_price}
                                            </p>
                                            <p className="text-sm text-gray-500">per person
                                            </p>
                                        </div>
                                    </div>
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
                                <div key={dest.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={dest.hero_image}
                                        alt={dest.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="text-lg font-semibold text-gray-900">{dest.name}</h4>
                                        <p className="text-gray-700 text-sm mt-2">{dest.short_description}</p>
                                        <Link
                                            href={`/destinations/${dest.slug}`}
                                            className="inline-block mt-3 text-purple-600 hover:underline text-sm font-medium"
                                        >
                                            View Destination
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
                <section>
                    <Itinerary itineraries={pkg.itineraries ?? []} starting_city={pkg.starting_city} ending_city={pkg.ending_city} />
                </section>

                {/* ================= INCLUSIONS & EXCLUSIONS ================= */}
                <section className="space-y-6">

                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                            What's Included & What's Not
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Everything you need to know about what's covered in your package.
                        </p>
                    </div>


                    <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        border
        border-gray-900
        rounded-2xl
        overflow-hidden
        shadow-sm
        bg-white
    ">

                        {/* ================= INCLUDED ================= */}
                        <div className="p-6 md:p-8">

                            {/* Header */}
                            <div className="
                flex items-center gap-3
                pb-4
                mb-5
                border-b border-gray-900
            ">
                                <div className="
                    w-9 h-9
                    rounded-full
                    bg-green-100
                    text-green-600
                    flex items-center justify-center
                    font-bold
                ">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        What's Included
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Covered in your package
                                    </p>
                                </div>
                            </div>


                            {pkg.inclusions.length === 0 ? (

                                <p className="text-gray-500 text-sm">
                                    No inclusions listed for this package yet.
                                </p>

                            ) : (

                                <ul className="space-y-4">

                                    {pkg.inclusions
                                        .sort((a, b) => a.sort_order - b.sort_order)
                                        .map((item) => (

                                            <li
                                                key={item.id}
                                                className="flex gap-3"
                                            >

                                                <span className="
                                    flex-shrink-0
                                    w-6 h-6
                                    rounded-full
                                    bg-green-100
                                    text-green-600
                                    flex items-center justify-center
                                    text-sm
                                    font-bold
                                ">
                                                    ✓
                                                </span>

                                                <div>
                                                    <p className="
                                        text-gray-900
                                        font-semibold
                                    ">
                                                        {item.inclusion}
                                                    </p>

                                                    {item.description && (
                                                        <p className="
                                            mt-1
                                            text-sm
                                            text-gray-500
                                            leading-relaxed
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
                        {/* ================= EXCLUDED ================= */}
                        <div className="
            p-6 md:p-8
            border-t
            md:border-t-0
            md:border-l
            border-gray-900
        ">
                            {/* Header */}
                            <div className="
                flex items-center gap-3
                pb-4
                mb-5
                border-b border-gray-900
            ">
                                <div className="
                    w-9 h-9
                    rounded-full
                    bg-red-100
                    text-red-600
                    flex items-center justify-center
                    font-bold
                ">
                                    ✕
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        What's Not Included
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Additional expenses to consider
                                    </p>
                                </div>
                            </div>


                            {pkg.exclusions.length === 0 ? (

                                <p className="text-gray-500 text-sm">
                                    No exclusions listed for this package yet.
                                </p>

                            ) : (
                                <ul className="space-y-4">

                                    {pkg.exclusions
                                        .sort((a, b) => a.sort_order - b.sort_order)
                                        .map((item) => (

                                            <li
                                                key={item.id}
                                                className="flex gap-3"
                                            >

                                                <span className="
                                    flex-shrink-0
                                    w-6 h-6
                                    rounded-full
                                    bg-red-100
                                    text-red-600
                                    flex items-center justify-center
                                    text-sm
                                    font-bold
                                ">
                                                    ✕
                                                </span>

                                                <div>
                                                    <p className="
                                        text-gray-900
                                        font-semibold
                                    ">
                                                        {item.exclusion}
                                                    </p>

                                                    {item.description && (
                                                        <p className="
                                            mt-1
                                            text-sm
                                            text-gray-500
                                            leading-relaxed
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
                </section>
                {/* Package Pricing */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-purple-700">
                            8. Package Pricing
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Choose the vehicle option that best suits your group.
                        </p>
                    </div>

                    {pkg.pricings && pkg.pricings.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pkg.pricings
                                .sort((a, b) => a.visit_order - b.visit_order)
                                .map((pricing) => (
                                    <div
                                        key={pricing.id}
                                        className="
                            group relative overflow-hidden
                            rounded-2xl border border-purple-100
                            bg-white
                            shadow-md
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-xl
                            hover:border-purple-300
                        "
                                    >
                                        {/* Top Accent */}
                                        <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-500" />

                                        <div className="p-6">
                                            {/* Vehicle */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                        Vehicle Type
                                                    </p>

                                                    <h3 className="mt-1 text-2xl font-bold text-gray-900">
                                                        {pricing.vehicle_name}
                                                    </h3>
                                                </div>

                                                <div
                                                    className="
                                        w-12 h-12 rounded-full
                                        bg-purple-100
                                        flex items-center justify-center
                                        text-2xl
                                    "
                                                >
                                                    🚐
                                                </div>
                                            </div>

                                            {/* Pricing */}
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                                    <span className="text-gray-600">
                                                        Total Cost
                                                    </span>

                                                    <span className="font-bold text-gray-900">
                                                        ₹{pricing.total_cost}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                                    <span className="text-gray-600">
                                                        Per Person
                                                    </span>

                                                    <span className="text-xl font-bold text-purple-600">
                                                        ₹{pricing.per_person_cost}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">
                                                        Minimum Persons
                                                    </span>

                                                    <span className="font-semibold text-gray-900">
                                                        {pricing.minimum_persons} Pax
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bottom Info */}
                                            <div className="mt-6 rounded-xl bg-purple-50 p-4">
                                                <p className="text-sm text-purple-800">
                                                    Suitable for groups of{" "}
                                                    <span className="font-bold">
                                                        {pricing.minimum_persons} or more
                                                    </span>{" "}
                                                    travelers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
                            <p className="text-gray-600">
                                No pricing details available for this package yet.
                            </p>
                        </div>
                    )}
                </section>

                {/* FAQs */}
                <section className="py-8">
                    <div className="mb-8">
                        <h2 className="text-4xl font-semibold text-purple-500">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-3 text-gray-600 max-w-2xl">
                            Everything you need to know before booking your journey with us.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {faqs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            return (
                                <div
                                    key={faq.id}
                                    className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFAQ(isOpen ? null : index)
                                        }
                                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {faq.question}
                                        </h3>

                                        <div className="transition-all duration-300 hover:scale-110">
                                            {isOpen ? (
                                                <Minus size={22} className="text-purple-600 cursor-pointer" />
                                            ) : (
                                                <Plus size={22} className="text-purple-600 cursor-pointer" />
                                            )}
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen
                                            ? "max-h-96 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-6 pb-6 border-t border-gray-100">
                                            <p className="pt-4 leading-7 text-gray-700">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Plan Your Journey</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Ready to explore {pkg.title}? Let Heritage Junction craft the perfect itinerary for you —
                        from guided tours and cultural immersion to comfortable stays and authentic dining.
                    </p>
                    <Link
                        href={`/booking/${pkg.id}`}
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
                    >
                        Book Your Experience
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    )
}