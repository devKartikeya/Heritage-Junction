import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import { Head, Link, usePage } from '@inertiajs/react'
import {
    Search,
    MapPin,
    CalendarDays,
    SlidersHorizontal,
    RotateCcw,
    ArrowUpRight,
    Sparkles,
    WalletCards,
} from 'lucide-react'
import { useState } from 'react'

const Index = () => {
    const { destinations }: any = usePage().props

    const [searchTerm, setSearchTerm] = useState("")
    const [selectedState, setSelectedState] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [budgetRange, setBudgetRange] = useState("")

    const states = [
        ...new Set(destinations.map((d: any) => d.state))
    ].filter(Boolean)

    const categories = [
        ...new Set(destinations.map((d: any) => d.category))
    ].filter(Boolean)

    const filteredDestinations = destinations.filter((destination: any) => {
        const matchesSearch =
            destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            destination.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
            destination.category.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesState = selectedState
            ? destination.state === selectedState
            : true

        const matchesCategory = selectedCategory
            ? destination.category === selectedCategory
            : true

        const matchesBudget =
            budgetRange === "low"
                ? destination.average_budget <= 5000
                : budgetRange === "mid"
                    ? destination.average_budget > 5000 &&
                      destination.average_budget <= 15000
                    : budgetRange === "high"
                        ? destination.average_budget > 15000
                        : true

        return (
            matchesSearch &&
            matchesState &&
            matchesCategory &&
            matchesBudget
        )
    })

    const clearFilters = () => {
        setSearchTerm("")
        setSelectedState("")
        setSelectedCategory("")
        setBudgetRange("")
    }

    const hasFilters =
        searchTerm ||
        selectedState ||
        selectedCategory ||
        budgetRange

    return (
        <div className="min-h-screen bg-[#fafafa] text-gray-900">

            <Head title="Explore Destinations" />

            <Navbar />

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden bg-black">

                {/* Decorative glow */}
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

                <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">

                    <div className="max-w-3xl">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm">

                            <Sparkles size={15} />

                            Discover Uttar Pradesh

                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">

                            Explore destinations
                            <span className="block text-purple-400">
                                worth remembering.
                            </span>

                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">

                            Discover timeless heritage, sacred cities,
                            vibrant culture, and unforgettable experiences
                            curated by Heritage Junction.

                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">


                    {/* =================================================
                        FILTER SIDEBAR
                    ================================================= */}

                    <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">

                        {/* Header */}

                        <div className="flex items-center justify-between">

                            <div>

                                <div className="flex items-center gap-2">

                                    <SlidersHorizontal
                                        size={18}
                                        className="text-purple-600"
                                    />

                                    <h2 className="font-bold text-gray-900">
                                        Filters
                                    </h2>

                                </div>

                                <p className="mt-1 text-xs text-gray-500">
                                    Refine your destination
                                </p>

                            </div>

                            {hasFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-1 text-xs font-semibold text-purple-600 transition hover:text-purple-800"
                                >
                                    <RotateCcw size={13} />
                                    Reset
                                </button>
                            )}

                        </div>


                        <div className="my-6 h-px bg-gray-100" />


                        {/* Search */}

                        <div>

                            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                                Search
                            </label>

                            <div className="relative">

                                <Search
                                    size={17}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-gray-200
                                        bg-gray-50
                                        py-3
                                        pl-10
                                        pr-4
                                        text-sm
                                        text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-purple-500
                                        focus:bg-white
                                        focus:ring-4
                                        focus:ring-purple-500/10
                                    "
                                />

                            </div>

                        </div>


                        {/* State */}

                        <div className="mt-6">

                            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                                State
                            </label>

                            <select
                                value={selectedState}
                                onChange={(e) =>
                                    setSelectedState(e.target.value)
                                }
                                className="
                                    w-full
                                    cursor-pointer
                                    appearance-none
                                    rounded-xl
                                    border border-gray-200
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-purple-500
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-purple-500/10
                                "
                            >

                                <option value="">
                                    All States
                                </option>

                                {states.map((state: any) => (
                                    <option
                                        key={state}
                                        value={state}
                                    >
                                        {state}
                                    </option>
                                ))}

                            </select>

                        </div>


                        {/* Category */}

                        <div className="mt-6">

                            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                                Category
                            </label>

                            <select
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                className="
                                    w-full
                                    cursor-pointer
                                    appearance-none
                                    rounded-xl
                                    border border-gray-200
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-purple-500
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-purple-500/10
                                "
                            >

                                <option value="">
                                    All Categories
                                </option>

                                {categories.map((cat: any) => (
                                    <option
                                        key={cat}
                                        value={cat}
                                    >
                                        {cat}
                                    </option>
                                ))}

                            </select>

                        </div>


                        {/* Budget */}

                        <div className="mt-6">

                            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                                Budget
                            </label>

                            <select
                                value={budgetRange}
                                onChange={(e) =>
                                    setBudgetRange(e.target.value)
                                }
                                className="
                                    w-full
                                    cursor-pointer
                                    appearance-none
                                    rounded-xl
                                    border border-gray-200
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-purple-500
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-purple-500/10
                                "
                            >

                                <option value="">
                                    All Budgets
                                </option>

                                <option value="low">
                                    Up to ₹5,000
                                </option>

                                <option value="mid">
                                    ₹5,001 – ₹15,000
                                </option>

                                <option value="high">
                                    Above ₹15,000
                                </option>

                            </select>

                        </div>


                        {/* Mobile/desktop reset */}

                        <button
                            onClick={clearFilters}
                            className="
                                mt-7
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-600
                                transition
                                hover:border-red-200
                                hover:bg-red-50
                                hover:text-red-600
                            "
                        >

                            <RotateCcw size={15} />

                            Clear All Filters

                        </button>

                    </aside>


                    {/* =================================================
                        DESTINATIONS
                    ================================================= */}

                    <section>

                        {/* Results header */}

                        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                                <p className="text-sm font-medium text-gray-500">
                                    Explore our collection
                                </p>

                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
                                    Destinations
                                </h2>

                            </div>

                            <div className="flex items-center gap-2">

                                <span className="rounded-full bg-purple-50 px-3 py-1.5 text-sm font-semibold text-purple-700">

                                    {filteredDestinations.length}

                                </span>

                                <span className="text-sm text-gray-500">
                                    destination
                                    {filteredDestinations.length !== 1
                                        ? "s"
                                        : ""}
                                </span>

                            </div>

                        </div>


                        {/* Active filters */}

                        {hasFilters && (
                            <div className="mb-6 flex flex-wrap items-center gap-2">

                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Active:
                                </span>

                                {searchTerm && (
                                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                        Search: {searchTerm}
                                    </span>
                                )}

                                {selectedState && (
                                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                                        {selectedState}
                                    </span>
                                )}

                                {selectedCategory && (
                                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                                        {selectedCategory}
                                    </span>
                                )}

                                {budgetRange && (
                                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                                        {budgetRange === "low"
                                            ? "Under ₹5,000"
                                            : budgetRange === "mid"
                                                ? "₹5,001 – ₹15,000"
                                                : "Above ₹15,000"}
                                    </span>
                                )}

                            </div>
                        )}


                        {/* Empty state */}

                        {filteredDestinations.length === 0 ? (

                            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 text-center">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">

                                    <Search size={28} />

                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-900">
                                    No destinations found
                                </h3>

                                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                                    We couldn't find any destinations matching
                                    your current filters. Try adjusting your
                                    search or clearing the filters.
                                </p>

                                <button
                                    onClick={clearFilters}
                                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
                                >

                                    <RotateCcw size={15} />

                                    Reset Filters

                                </button>

                            </div>

                        ) : (

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                                {filteredDestinations.map(
                                    (destination: any) => (

                                        <article
                                            key={destination.id}
                                            className="
                                                group
                                                overflow-hidden
                                                rounded-3xl
                                                border
                                                border-gray-200
                                                bg-white
                                                shadow-sm
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-gray-300
                                                hover:shadow-xl
                                            "
                                        >

                                            {/* Image */}

                                            <div className="relative h-64 overflow-hidden">

                                                <img
                                                    src={
                                                        destination.hero_image ||
                                                        'https://via.placeholder.com/600x400'
                                                    }
                                                    alt={destination.name}
                                                    className="
                                                        h-full
                                                        w-full
                                                        object-cover
                                                        transition-transform
                                                        duration-700
                                                        group-hover:scale-105
                                                    "
                                                />

                                                {/* Gradient */}

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                                                {/* Category */}

                                                <div className="absolute left-4 top-4">

                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">

                                                        <Sparkles size={12} />

                                                        {destination.category}

                                                    </span>

                                                </div>


                                                {/* Destination name */}

                                                <div className="absolute bottom-4 left-5 right-5">

                                                    <h3 className="text-2xl font-bold text-white">
                                                        {destination.name}
                                                    </h3>

                                                </div>

                                            </div>


                                            {/* Content */}

                                            <div className="p-5">

                                                <p className="line-clamp-3 text-sm leading-6 text-gray-600">

                                                    {destination.short_description}

                                                </p>


                                                {/* Meta */}

                                                <div className="mt-5 grid grid-cols-2 gap-3">

                                                    <div className="rounded-xl bg-gray-50 p-3">

                                                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">

                                                            <MapPin size={13} />

                                                            Location

                                                        </div>

                                                        <p className="mt-1 truncate text-sm font-semibold text-gray-800">

                                                            {destination.state}

                                                        </p>

                                                    </div>


                                                    <div className="rounded-xl bg-gray-50 p-3">

                                                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">

                                                            <CalendarDays size={13} />

                                                            Best Time

                                                        </div>

                                                        <p className="mt-1 truncate text-sm font-semibold text-gray-800">

                                                            {destination.best_time}

                                                        </p>

                                                    </div>

                                                </div>


                                                {/* Footer */}

                                                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

                                                    <div>

                                                        <p className="text-xs text-gray-400">
                                                            Starting experience
                                                        </p>

                                                        <p className="mt-0.5 flex items-center gap-1 text-sm font-bold text-gray-900">

                                                            <WalletCards size={14} />

                                                            ₹{Number(
                                                                destination.average_budget
                                                            ).toLocaleString("en-IN")}

                                                        </p>

                                                    </div>


                                                    <Link
                                                        href={`/destinations/${destination.slug}`}
                                                        className="
                                                            inline-flex
                                                            items-center
                                                            gap-2
                                                            rounded-xl
                                                            bg-gray-900
                                                            px-4
                                                            py-2.5
                                                            text-sm
                                                            font-semibold
                                                            text-white
                                                            transition
                                                            hover:bg-purple-600
                                                        "
                                                    >

                                                        Explore

                                                        <ArrowUpRight
                                                            size={16}
                                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                        />

                                                    </Link>

                                                </div>

                                            </div>

                                        </article>

                                    )
                                )}

                            </div>

                        )}

                    </section>

                </div>

            </main>

            <Footer />

        </div>
    )
}

export default Index