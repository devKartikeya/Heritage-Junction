import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
// import Navbar from '@/components/navbar'
import { Head, Link } from '@inertiajs/react'
import { useState } from 'react'

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
        const matchesDuration = durationFilter ? pkg.duration_days === durationFilter : true
        const matchesPrice = priceFilter ? parseInt(pkg.starting_price) <= priceFilter : true
        return matchesCity && matchesDuration && matchesPrice
    })


    return (
        <div className="bg-gray-50 min-h-screen">
            <Head title='Packages'/>
            <Navbar/>
            {/* Hero Banner */}
            <div className="relative w-full h-72 bg-gradient-to-r from-purple-700 to-indigo-600 flex items-center justify-center text-center text-white">
                <div className="px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Explore Our Travel Packages</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        Hand‑crafted journeys across India’s most iconic destinations. Choose your adventure and let us plan the rest.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="bg-blue-50 shadow-md rounded-lg p-4 flex flex-wrap gap-4 text-black">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">Destination</label>
                        <select
                            value={cityFilter}
                            onChange={(e) => setCityFilter(e.target.value)}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">All Destinations</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Ayodhya">Ayodhya</option>
                            <option value="Naimisharanya">Naimisharanya</option>
                            <option value="Dudhwa">Dudhwa</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">Duration</label>
                        <select
                            value={durationFilter ?? ''}
                            onChange={(e) => setDurationFilter(e.target.value ? parseInt(e.target.value) : null)}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">All Durations</option>
                            {[...new Set(packages.map((p) => p.duration_days))].map((d) => (
                                <option key={d} value={d}>{d} Days</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">Price</label>
                        <select
                            value={priceFilter ?? ''}
                            onChange={(e) => setPriceFilter(e.target.value ? parseInt(e.target.value) : null)}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">All Prices</option>
                            <option value="10000">Up to ₹10,000</option>
                            <option value="20000">Up to ₹20,000</option>
                            <option value="50000">Up to ₹50,000</option>
                        </select>
                    </div>

                    <button
                        onClick={() => { setCityFilter(''); setDurationFilter(null); setPriceFilter(null); }}
                        className="ml-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition hover:bg-red-500 hover:text-white cursor-pointer"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>


            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {filteredPackages.length === 0 ? (
                    <p className="text-gray-600 text-center">No packages match your filters.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
                            >
                                <img src={pkg.cover_image} alt={pkg.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-gray-900">{pkg.title}</h2>
                                    <p className="text-gray-700 text-sm mt-2 line-clamp-3">{pkg.short_description}</p>
                                    <div className="mt-4 space-y-1 text-sm text-gray-600">
                                        <p><span className="font-semibold">Duration:</span> {pkg.duration_days} Days / {pkg.duration_nights} Nights</p>
                                        <p><span className="font-semibold">Route:</span> {pkg.starting_city} → {pkg.ending_city}</p>
                                        <p><span className="font-semibold">From </span> ₹{pkg.starting_price} / person</p>
                                    </div>
                                    <div className="mt-auto pt-6">
                                        <Link
                                            href={`/packages/${pkg.slug}`}
                                            className="inline-block w-full bg-purple-600 text-white text-center px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Index