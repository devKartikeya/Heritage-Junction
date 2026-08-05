import Footer from '@/components/Footer'
import About from '@/components/Home/About'
import Navbar from '@/components/navbar'
import { Head, Link } from '@inertiajs/react'

const Services = () => {
    return (
        <div className="bg-white text-black w-full min-h-screen overflow-x-hidden">
            <Head title='Our Services'/>
            <Navbar />
            {/* Page Header */}
            <div className="p-8 text-left w-2/3">
                <h1 className="text-4xl my-2 md:text-6xl lg:text-7xl font-bold text-purple-700">Heritage Junction - <span className='text-3xl md:text-5xl text-red-500'> Book your Journey</span></h1>
                <p className="my-8 text-lg md:text-xl max-w-5xl text-gray-900 text-left">
                    At Heritage Junction, we don’t just plan trips — we craft journeys that immerse you in India’s living heritage.
                    Our mission is to connect travelers with the soul of this nation: its sacred cities, vibrant festivals, timeless traditions, and warm communities.
                    Every experience is designed to be effortless, authentic, and unforgettable.
                </p>
            </div>

            <About />
            {/* Services Section */}
            <section className="px-6 md:px-12 py-12 bg-gray-50">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-12">What we Offer ?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Guided Heritage Tours */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOHLjS0OupsMcgz9hT9kBmwHKrr1F_2_8G3H1Gh1QuyJxNme2ZgvtKH8l&s=10" alt="Guided Tours" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-black mb-2">Guided Heritage Tours</h3>
                            <p className="text-gray-700 text-sm">
                                Explore iconic sites like Varanasi’s ghats, Lucknow’s Nawabi quarters, and Ayodhya’s temples with expert local guides.
                                Includes curated itineraries, transport, meals, and storytelling sessions that bring history to life.
                            </p>
                        </div>
                    </div>

                    {/* Cultural Immersion */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjz1sRv4Y5VtlsqhyrAjKEZLpsdjKeJXFROiQmHjs7A&s=10" alt="Cultural Immersion" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Cultural Immersion Experiences</h3>
                            <p className="text-gray-700 text-sm">
                                Participate in Kathak dance workshops, classical music recitals, and artisan craft sessions.
                                These hands‑on experiences let you live the traditions, not just observe them.
                            </p>
                        </div>
                    </div>

                    {/* Festival Packages */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5itnnCwHxUnVYnCYTAoNVp7CHXV_-aWm1KWafBi9Jg6sZzllllSqubHk&s=10" alt="Festival Packages" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Festival & Event Packages</h3>
                            <p className="text-gray-700 text-sm">
                                Celebrate Holi in Mathura, Diwali in Ayodhya, or the grand Kumbh Mela.
                                Safe, curated itineraries with priority access, local cuisine tastings, and photography support.
                            </p>
                        </div>
                    </div>

                    {/* Heritage Stays */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eJVUlf1DVN23KHafeqPuzqZHprtS-y5YYU0p0HN9_Q&s=10" alt="Heritage Stays" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Heritage Stays</h3>
                            <p className="text-gray-700 text-sm">
                                Stay in restored havelis, palaces, and boutique hotels that blend modern comfort with historic charm.
                                Includes curated dining, cultural evenings, and guided architecture tours.
                            </p>
                        </div>
                    </div>

                    {/* Community Engagement */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAr5vvAkbxA5ZgM3AoQNRRw18dRu9zwg5M5BOIT_p6fES3b5kH0A0nAW58&s=10" alt="Community Engagement" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Community Engagement</h3>
                            <p className="text-gray-700 text-sm">
                                Support local communities through village tours, cooking sessions, and artisan markets.
                                Every booking contributes to heritage preservation and sustainable livelihoods.
                            </p>
                        </div>
                    </div>

                    {/* Customized Travel Planning */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eGmYKremR_2S05x4vqcggK3jjH_DMrMTzqiRPTDBsyvFV0quSKpdVtFO&s=10" alt="Customized Travel" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Customized Travel Planning</h3>
                            <p className="text-gray-700 text-sm">
                                Tailor‑made itineraries for solo travelers, families, and corporate groups.
                                Flexible schedules, 24/7 support, and personalized recommendations ensure seamless journeys.
                            </p>
                        </div>
                    </div>

                    {/* Security & Comfort */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMvLFYmBB5W6PbMUPgl8hxFTvI3HMera1zmS4dkfc3hK6tynUoAKu5Q4&s=10" alt="Security Services" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Safety & Comfort</h3>
                            <p className="text-gray-700 text-sm">
                                Your safety is our priority. We provide secure transport, vetted accommodations, and on‑ground support teams.
                                Travel with peace of mind knowing every detail is taken care of.
                            </p>
                        </div>
                    </div>

                    {/* Culinary Experiences */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="https://curlytales.com/wp-content/uploads/2020/09/Pahadi-dishes.jpg" alt="Culinary Experiences" className="w-full h-56 object-cover object-center" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Culinary Journeys</h3>
                            <p className="text-gray-700 text-sm">
                                Discover India’s diverse flavors through curated food trails, cooking classes, and authentic dining experiences.
                                From street food to royal feasts, savor the essence of Indian cuisine.
                            </p>
                        </div>
                    </div>

                    {/* Adventure & Nature Escapes */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                            alt="Adventure & Nature"
                            className="w-full h-56 object-cover object-center"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mb-2">Adventure & Nature Escapes</h3>
                            <p className="text-gray-700 text-sm">
                                Balance heritage with the thrill of nature. Trek Himalayan trails, raft in Rishikesh,
                                or explore wildlife sanctuaries. Perfect for travelers seeking both culture and adventure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="text-center py-10 mb-5">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">Plan Your Journey</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                    Ready to explore Uttar Pradesh? Let Heritage Junction craft the perfect itinerary for you —
                    from guided tours and cultural immersion to comfortable stays and authentic dining.
                </p>
                <Link
                    href={`/packages`}
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
                >
                    Book Your Experience
                </Link>
            </section>
            <Footer />
        </div>
    )
}

export default Services