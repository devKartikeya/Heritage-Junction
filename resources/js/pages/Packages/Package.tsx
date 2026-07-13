import QuickFactCard from './QuickFactCard'
import React, { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react'
import RouteMap from './RouteMap'
import Itinerary from './Itinerary'

type Destination = {
    id: number
    name: string
    slug: string
    short_description: string
    hero_image: string
}

// Inclusions table type
export interface Inclusion {
    id: number
    package_id: number
    inclusion: string
    sort_order: number
}

// Exclusions table type
export interface Exclusion {
    id: number
    package_id: number
    exclusion: string
    sort_order: number
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
    destinations: Destination[]
    itineraries: []
    inclusions: Inclusion[]
    exclusions: Exclusion[]
}

export default function PackagePage({ pkg }: { pkg: Package }) {
    const destinations = pkg.destinations ?? []

    const [points, setPoints] = useState([]);

    async function getCoordinates(city: string) {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
        )
        const data = await response.json()
        if (data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
            }
        }
        return null
    }

    useEffect(() => {
        async function fetchCoords() {
            const start = await getCoordinates(pkg.starting_city)
            const end = await getCoordinates(pkg.ending_city)
            const dests = await Promise.all(
                pkg.destinations.map(async (d) => {
                    const coords = await getCoordinates(d.name)
                    return { ...d, ...coords }
                })
            )
            setPoints([start, ...dests, end].filter(Boolean))
        }
        fetchCoords()
    }, [pkg]);


    return (
        <div className="bg-gray-50 text-black">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">1. Route</h2>

                    {/* Route Text */}
                    <div className="bg-white rounded-xl shadow-lg px-6 py-8 text-center">
                        {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">Journey Flow</h3> */}
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
                <section>
                    <h2 className="text-3xl font-bold text-green-700 mb-8">Quick Facts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
                        {/* Duration */}
                        <QuickFactCard
                            icon={
                                <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            }
                            title="Duration"
                            value={`${pkg.duration_days} Days / ${pkg.duration_nights} Nights`}
                        />

                        {/* Departure */}
                        <QuickFactCard
                            icon={
                                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            }
                            title="Departure"
                            value={pkg.starting_city}
                        />

                        {/* Destination */}
                        <QuickFactCard
                            icon={
                                <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7 7-7m0 14l7-7-7-7" />
                                    </svg>
                                </div>
                            }
                            title="Destination"
                            value={pkg.ending_city}
                        />

                        {/* Price */}
                        <QuickFactCard
                            icon={
                                <div className="bg-yellow-100 text-yellow-600 rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3h6c0-1.657-1.343-3-3-3zM12 14c1.657 0 3-1.343 3-3H9c0 1.657 1.343 3 3 3z" />
                                    </svg>
                                </div>
                            }
                            title="Starting Price"
                            value={`₹${pkg.starting_price} / person`}
                        />
                    </div>
                </section>

                {/* Destinations Covered */}
                <section>
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">3. Destinations Covered</h2>
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

                {/* Itinerary Placeholder */}
                <section>
                    {/* <p className="text-gray-600">Detailed itinerary will be available soon.</p> */}
                    <Itinerary itineraries={pkg.itineraries ?? []} starting_city={pkg.starting_city} ending_city={pkg.ending_city} />
                </section>

                {/* Inclusions */}
                <section>
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6">5. What’s Included</h2>
                    {pkg.inclusions.length === 0 ? (
                        <p className="text-gray-600">No inclusions listed for this package yet.</p>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pkg.inclusions
                                .sort((a, b) => a.sort_order - b.sort_order)
                                .map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                                            ✓
                                        </div>
                                        <span className="text-gray-800">{item.inclusion}</span>
                                    </li>
                                ))}
                        </ul>
                    )}
                </section>

                {/* Exclusions */}
                <section>
                    <h2 className="text-3xl font-bold text-red-700 mb-6">6. What’s Not Included</h2>
                    {pkg.exclusions.length === 0 ? (
                        <p className="text-gray-600">No exclusions listed for this package yet.</p>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pkg.exclusions
                                .sort((a, b) => a.sort_order - b.sort_order)
                                .map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                                            ✗
                                        </div>
                                        <span className="text-gray-800">{item.exclusion}</span>
                                    </li>
                                ))}
                        </ul>
                    )}
                </section>


                {/* FAQs Placeholder */}
                <section>
                    <h2 className="text-3xl font-bold text-purple-700 mb-6">7. FAQs</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Q: How do I book this package?</h3>
                            <p className="text-gray-700">You can book directly through our website or contact our support team.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Q: Can I customize the itinerary?</h3>
                            <p className="text-gray-700">Yes, customization options are available. Reach out to us for details.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-3xl font-bold text-purple-700 mb-4">Plan Your Journey</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Ready to explore {pkg.title}? Let Heritage Junction craft the perfect itinerary for you —
                        from guided tours and cultural immersion to comfortable stays and authentic dining.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
                    >
                        Book Your Experience
                    </Link>
                </section>
            </div>
        </div>
    )
}