import { Link } from '@inertiajs/react'

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
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Banner */}
            <div className="relative w-full h-72 bg-gradient-to-r from-purple-700 to-indigo-600 flex items-center justify-center text-center text-white">
                <div className="px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Explore Our Travel Packages</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        Hand‑crafted journeys across India’s most iconic destinations. Choose your adventure and let us plan the rest.
                    </p>
                </div>
            </div>
            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {packages.length === 0 ? (
                    <p className="text-gray-600 text-center">No packages available at the moment.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
                            >
                                <img
                                    src={pkg.cover_image}
                                    alt={pkg.title}
                                    className="w-full h-48 object-cover"
                                />
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
        </div>
    )
}

export default Index