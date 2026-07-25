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

// type Item = {
//     id: number
//     destination_id: number
//     title: string
//     image_path: string
//     description: string
//     sort_order: number
// }

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
        <div className="bg-gray-50 text-black">
            <Head
                title={`${destination.name} | Heritage Junction`}
            >
                <meta
                property="og:title"
                    name="description"
                    content={destination.full_description}
                />
            </Head>
            {/* Banner Section */}
            <div className="relative w-full h-96">
                <img
                    src={destination.banner_image || destination.hero_image}
                    alt={`View of ${destination.name}`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">{destination.name}</h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl">
                        Experience the timeless charm of {destination.name}, where culture, history, and beauty converge.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                {/* About Section */}
                <section>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-6">
                        About {destination.name}
                    </h2>
                    <p className="text-gray-800 leading-relaxed text-lg">{destination.full_description}</p>

                    <div className="mt-6 space-y-2 text-md text-gray-800">
                        <p><span className="font-bold">State:</span> {destination.state}</p>
                        <p><span className="font-bold">Category:</span> {destination.category}</p>
                        <p><span className="font-bold">Best Time to Visit:</span> {destination.best_time}</p>
                        <p><span className="font-bold">Average Budget:</span> ₹{destination.average_budget}</p>
                    </div>
                </section>

                {/* Why Visit Section */}
                <section>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-purple-700 mb-8">
                        Why Visit {destination.name}?
                    </h2>

                    {/* Heritage Sites */}
                    <div className="mb-12">
                        <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">Heritage & Cultural Sites</h3>
                        {heritageSites.length === 0 ? (
                            <p className="text-gray-600">No heritage sites listed for this destination.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {heritageSites.map((site) => (
                                    <div key={site.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img
                                            src={site.image_path}
                                            alt={`View of ${site.name}`}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="text-lg font-semibold text-gray-900">{site.name}</h4>
                                            <p className="text-gray-700 text-sm mt-2">{site.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Local Food */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4">Local Food</h3>
                        {foods.length === 0 ? (
                            <p className="text-gray-600">No local foods listed for this destination.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {foods.map((food) => (
                                    <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img
                                            src={`View of ${food.image_path}`}
                                            alt={food.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h4 className="text-lg font-semibold text-gray-900">{food.name}</h4>
                                            <p className="text-gray-700 text-sm mt-2">{food.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-3xl font-bold text-purple-700 mb-4">Plan Your Journey</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Ready to explore {destination.name}? Let Heritage Junction craft the perfect itinerary for you —
                        from guided tours and cultural immersion to comfortable stays and authentic dining.
                    </p>
                    <Link
                        href={"/packages"}
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