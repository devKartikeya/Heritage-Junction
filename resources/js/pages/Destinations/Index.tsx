import Footer from '@/components/Footer'
import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'

const Index = () => {
  const { destinations }: any = usePage().props
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [budgetRange, setBudgetRange] = useState("")

  const states = [...new Set(destinations.map((d: any) => d.state))].filter(Boolean)
  const categories = [...new Set(destinations.map((d: any) => d.category))].filter(Boolean)

  const filteredDestinations = destinations.filter((destination: any) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesState = selectedState ? destination.state === selectedState : true
    const matchesCategory = selectedCategory ? destination.category === selectedCategory : true
    const matchesBudget =
      budgetRange === "low"
        ? destination.average_budget <= 5000
        : budgetRange === "mid"
        ? destination.average_budget > 5000 && destination.average_budget <= 15000
        : budgetRange === "high"
        ? destination.average_budget > 15000
        : true

    return matchesSearch && matchesState && matchesCategory && matchesBudget
  })

  return (
    <div className="bg-gray-50 min-h-screen text-black flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Explore Our Destinations</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Discover India’s timeless heritage, vibrant cities, and cultural treasures curated by Heritage Junction.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Aside Filter (full width on mobile, sidebar on desktop) */}
        <aside className="bg-white shadow-md rounded-lg p-6 space-y-6 md:col-span-1">
          <h2 className="text-xl font-bold text-purple-700 mb-4">Filter Destinations</h2>

          <div>
            <label className="block text-sm font-semibold mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name, state, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full cursor-pointer px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All States</option>
              {states.map((state: any) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 cursor-pointer py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Categories</option>
              {categories.map((cat: any) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Budget Range</label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full px-3 cursor-pointer py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Budgets</option>
              <option value="low">Up to ₹5,000</option>
              <option value="mid">₹5,001 - ₹15,000</option>
              <option value="high">Above ₹15,000</option>
            </select>
          </div>

          <button
            onClick={() => {
              setSearchTerm("")
              setSelectedState("")
              setSelectedCategory("")
              setBudgetRange("")
            }}
            className="w-full bg-gray-200 cursor-pointer text-gray-700 py-2 rounded hover:bg-gray-300 transition"
          >
            Clear Filters
          </button>
        </aside>

        {/* Destinations Grid (takes 3 columns on desktop, full width on mobile) */}
        <section className="md:col-span-3">
          {filteredDestinations.length === 0 ? (
            <p className="text-center text-gray-600">No destinations match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredDestinations.map((destination: any) => (
                <div
                  key={destination.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="relative h-56">
                    <img
                      src={destination.hero_image || 'https://via.placeholder.com/600x400'}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                      <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">{destination.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{destination.short_description}</p>

                    <div className="space-y-1 text-sm text-gray-700">
                      <p><span className="font-bold">State:</span> {destination.state}</p>
                      <p><span className="font-bold">Category:</span> {destination.category}</p>
                      <p><span className="font-bold">Best Time:</span> {destination.best_time}</p>
                      {/* <p><span className="font-bold">Average Budget:</span> ₹{destination.average_budget}</p> */}
                    </div>

                    <div className="mt-4">
                      <Link
                        href={`/destinations/${destination.slug}`}
                        className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index