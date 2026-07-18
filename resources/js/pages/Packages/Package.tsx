import QuickFactCard from './QuickFactCard'
import React, { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react'
import RouteMap from './RouteMap'
import Itinerary from './Itinerary'
import { Plus, Minus } from 'lucide-react'

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
    console.log(pkg.id);

    console.log(packages_faqs);
    console.log(Array.isArray(packages_faqs));
    const faqs = [...packages_faqs, ...booking_faqs];

    const points = [
        { name: pkg.starting_city, lat: pkg.start_lat, lng: pkg.start_lng },
        ...pkg.destinations.map(d => ({ name: d.name, lat: d.lat, lng: d.lng })),
        { name: pkg.ending_city, lat: pkg.end_lat, lng: pkg.end_lng },
    ];

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

                {/* Heritage Sites Covered */}
                <section>
                    <h2 className="text-3xl font-bold text-teal-700 mb-6">4. Heritage Sites Covered</h2>

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
                                        className="flex flex-col gap-2 bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                                                ✓
                                            </div>
                                            <span className="text-gray-900 font-semibold">{item.inclusion}</span>
                                        </div>
                                        {item.description && (
                                            <p className="text-gray-700 text-sm ml-9">{item.description}</p>
                                        )}
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
                                        className="flex flex-col gap-2 bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                                                ✗
                                            </div>
                                            <span className="text-gray-900 font-semibold">{item.exclusion}</span>
                                        </div>
                                        {item.description && (
                                            <p className="text-gray-700 text-sm ml-9">{item.description}</p>
                                        )}
                                    </li>
                                ))}
                        </ul>
                    )}
                </section>


                {/* Package Pricing */}
                <section>
                    <h2 className="text-3xl font-bold text-orange-700 mb-6">8. Package Pricing</h2>

                    {pkg.pricings && pkg.pricings.length > 0 ? (
                        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                            <table className="min-w-full border border-gray-200 text-gray-800">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Vehicle Type</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Total Cost</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Per Person Cost</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Minimum Persons</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pkg.pricings
                                        .sort((a, b) => a.visit_order - b.visit_order)
                                        .map((pricing) => (
                                            <tr key={pricing.id} className="border-t">
                                                <td className="px-6 py-4">{pricing.vehicle_name}</td>
                                                <td className="px-6 py-4">₹{pricing.total_cost}</td>
                                                <td className="px-6 py-4">₹{pricing.per_person_cost}</td>
                                                <td className="px-6 py-4">{pricing.minimum_persons}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-600">No pricing details available for this package yet.</p>
                    )}
                </section>

                {/* FAQs */}
                <section className="py-8">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-purple-500">
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
                    <h2 className="text-3xl font-bold text-purple-700 mb-4">Plan Your Journey</h2>
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
        </div>
    )
}