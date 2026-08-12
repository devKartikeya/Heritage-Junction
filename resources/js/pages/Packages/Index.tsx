import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import { Head, Link } from '@inertiajs/react'
import { useState } from 'react'
import {
    ArrowRight,
    CalendarDays,
    MapPin,
    RotateCcw,
    SlidersHorizontal,
    Sparkles,
    Wallet,
} from 'lucide-react'

type Package = {
    id: number
    title: string
    slug: string
    cover_image: string
    short_description: string
    duration_days: number
    duration_nights: number
    starting_city: string
    ending_city: string
    starting_price: string
}

const Index = ({ packages }: { packages: Package[] }) => {

    const [durationFilter, setDurationFilter] = useState<number | null>(null)
    const [priceFilter, setPriceFilter] = useState<number | null>(null)
    const [cityFilter, setCityFilter] = useState('')

    const filteredPackages = packages.filter((pkg) => {

        const matchesCity = cityFilter
            ? pkg.title.toLowerCase().includes(cityFilter.toLowerCase())
            : true

        const matchesDuration = durationFilter
            ? pkg.duration_days === durationFilter
            : true

        const matchesPrice = priceFilter
            ? parseInt(pkg.starting_price) <= priceFilter
            : true

        return matchesCity && matchesDuration && matchesPrice
    })

    const activeFilters =
        (cityFilter ? 1 : 0) +
        (durationFilter ? 1 : 0) +
        (priceFilter ? 1 : 0)

    const clearFilters = () => {
        setCityFilter('')
        setDurationFilter(null)
        setPriceFilter(null)
    }

    return (
        <div className="min-h-screen bg-[#fafafa] text-gray-900">

            <Head title="Packages" />

            <Navbar />

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gray-950">

                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />

                {/* Decorative glow */}
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />

                <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-6 py-20">

                    <div className="max-w-3xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-10 bg-red-500" />

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                                Curated Journeys
                            </span>

                        </div>

                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Discover Your
                            <span className="block text-red-400">
                                Next Journey
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                            Hand-crafted journeys through Uttar Pradesh's
                            heritage, spirituality, culture, and timeless
                            destinations.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-md">
                                <Sparkles size={16} className="text-red-400" />
                                Curated experiences
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-md">
                                <MapPin size={16} className="text-red-400" />
                                Uttar Pradesh
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =========================================================
                FILTER BAR
            ========================================================= */}

            <section className="relative z-20 -mt-8 px-6">

                <div className="mx-auto max-w-7xl">

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-200/60">

                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                    <SlidersHorizontal size={19} />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-gray-900">
                                        Find your journey
                                    </h2>

                                    <p className="text-xs text-gray-500">
                                        Refine packages by destination, duration or budget
                                    </p>
                                </div>

                            </div>

                            {activeFilters > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-red-500"
                                >
                                    <RotateCcw size={15} />
                                    Clear filters
                                </button>
                            )}

                        </div>


                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                            {/* Destination */}

                            <div>

                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Destination
                                </label>

                                <div className="relative">

                                    <MapPin
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <select
                                        value={cityFilter}
                                        onChange={(e) => setCityFilter(e.target.value)}
                                        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                    >
                                        <option value="">
                                            All Destinations
                                        </option>

                                         <option value="Agra">
                                            Agra
                                        </option>

                                        <option value="Ayodhya">
                                            Ayodhya
                                        </option>
                                        <option value="Varanasi">
                                            Varanasi
                                        </option>

                                        <option value="Firozabad">
                                            Firozabad
                                        </option>

                                        <option value="Naimisharanya">
                                            Naimisharanya
                                        </option>

                                        <option value="Dudhwa">
                                            Dudhwa
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* Duration */}

                            <div>

                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Duration
                                </label>

                                <div className="relative">

                                    <CalendarDays
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <select
                                        value={durationFilter ?? ''}
                                        onChange={(e) =>
                                            setDurationFilter(
                                                e.target.value
                                                    ? parseInt(e.target.value)
                                                    : null
                                            )
                                        }
                                        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                    >

                                        <option value="">
                                            All Durations
                                        </option>

                                        {[...new Set(packages.map((p) => p.duration_days))]
                                            .map((d) => (
                                                <option key={d} value={d}>
                                                    {d} Days
                                                </option>
                                            ))}

                                    </select>

                                </div>

                            </div>


                            {/* Price */}

                            <div>

                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Budget
                                </label>

                                <div className="relative">

                                    <Wallet
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <select
                                        value={priceFilter ?? ''}
                                        onChange={(e) =>
                                            setPriceFilter(
                                                e.target.value
                                                    ? parseInt(e.target.value)
                                                    : null
                                            )
                                        }
                                        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                    >

                                        <option value="">
                                            All Prices
                                        </option>

                                        <option value="10000">
                                            Up to ₹10,000
                                        </option>

                                        <option value="20000">
                                            Up to ₹20,000
                                        </option>

                                        <option value="50000">
                                            Up to ₹50,000
                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                PACKAGE CONTENT
            ========================================================= */}

            <main className="mx-auto max-w-7xl px-6 py-16">

                {/* Results heading */}

                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                            Explore
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                            Our Travel Packages
                        </h2>

                    </div>

                    <p className="text-sm text-gray-500">

                        Showing{' '}
                        <span className="font-semibold text-gray-900">
                            {filteredPackages.length}
                        </span>{' '}
                        {filteredPackages.length === 1
                            ? 'package'
                            : 'packages'}

                    </p>

                </div>


                {/* =====================================================
                    EMPTY STATE
                ===================================================== */}

                {filteredPackages.length === 0 ? (

                    <div className="rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center shadow-sm">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                            <MapPin size={28} />
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            No journeys found
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                            We couldn't find any packages matching your
                            current filters. Try broadening your search.
                        </p>

                        <button
                            onClick={clearFilters}
                            className="mt-6 cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                        >
                            Reset Filters
                        </button>

                    </div>

                ) : (

                    /* =================================================
                       PACKAGE GRID
                    ================================================= */

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {filteredPackages.map((pkg) => (

                            <article
                                key={pkg.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/70"
                            >

                                {/* Image */}

                                <div className="relative h-64 overflow-hidden">

                                    <img
                                        src={pkg.cover_image}
                                        alt={pkg.title}
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Image overlay */}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    {/* Duration badge */}

                                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">

                                        <CalendarDays size={14} />

                                        {pkg.duration_days} Days / {pkg.duration_nights} Nights

                                    </div>


                                    {/* Price */}

                                    <div className="absolute bottom-4 left-4">

                                        <p className="text-xs text-gray-200">
                                            Starting from
                                        </p>

                                        <p className="text-xl font-bold text-white">
                                            ₹{pkg.starting_price}
                                            <span className="ml-1 text-xs font-normal text-gray-300">
                                                / person
                                            </span>
                                        </p>

                                    </div>

                                </div>


                                {/* Card Content */}

                                <div className="flex flex-1 flex-col p-6">

                                    <h2 className="text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-red-500">
                                        {pkg.title}
                                    </h2>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                                        {pkg.short_description}
                                    </p>


                                    {/* Route */}

                                    <div className="mt-5 rounded-xl bg-gray-50 p-4">

                                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                            Journey Route
                                        </p>

                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">

                                            <span className="truncate">
                                                {pkg.starting_city}
                                            </span>

                                            <div className="flex flex-1 items-center gap-1">

                                                <span className="h-px flex-1 bg-gray-300" />

                                                <ArrowRight
                                                    size={15}
                                                    className="text-red-500"
                                                />

                                                <span className="h-px flex-1 bg-gray-300" />

                                            </div>

                                            <span className="truncate">
                                                {pkg.ending_city}
                                            </span>

                                        </div>

                                    </div>


                                    {/* CTA */}

                                    <div className="mt-auto pt-6">

                                        <Link
                                            href={`/packages/${pkg.slug}`}
                                            className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600"
                                        >

                                            View Package

                                            <ArrowRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover/button:translate-x-1"
                                            />

                                        </Link>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </main>

            <Footer />

        </div>
    )
}

export default Index