import Footer from "@/components/Footer";
import { useState } from "react"

type User = { name: string; email: string }
type Pricing = {
  id: number
  vehicle_name: string
  per_person_cost: number
  total_cost: number
  minimum_persons: number
}

const Booking = ({ user, packageId, pricings, pkg }: { user: User; packageId: number; pricings: Pricing[], pkg: string }) => {
  const [travelers, setTravelers] = useState<number>(0)
  const [selectedPricing, setSelectedPricing] = useState<number | null>(null)

  const chosen = pricings.find(p => p.id === selectedPricing)
  const calculatedTotal = chosen ? travelers * chosen.per_person_cost : 0
  const meetsRequirement = chosen ? travelers >= chosen.minimum_persons : true

  console.log(pkg);

  return (
    <div id="booking" className="min-w-screen min-h-screen overflow-x-hidden [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <section className="w-full p-10 h-full flex flex-col">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            Book your Journey
          </h1>
          <h2 className="mt-3 text-lg text-gray-300">
            You are just one step away from experiencing the adventure of a lifetime.
          </h2>
        </header>

        <form className="text-white p-8 rounded-xl shadow-lg max-w-4xl space-y-12 backdrop-blur">

          {/* Section 1: Package Info */}
          <div className="space-y-6 text-white">
            <h2 className="text-xl font-bold text-purple-300  border-b border-gray-600 pb-2">Package Information</h2>
            <label htmlFor="packageID" className="my-3">Package ID</label>
            <input
              type="text"
              id="packageID"
              name="packageID"
              readOnly
              defaultValue={packageId}
              className="w-full border text-white border-gray-500 rounded-lg mt-3 px-4 py-2 bg-transparent"
            />
            <label htmlFor="packageTitle" className="my-3">Package Name</label>
            <input
              type="text"
              id="packageTitle"
              name="packageTitle"
              readOnly
              defaultValue={pkg}
              className="w-full border text-white border-gray-500 rounded-lg mt-3 px-4 py-2 bg-transparent"
            />
          </div>

          {/* Section 2: Primary Contact */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-purple-300 border-b border-gray-600 pb-2">Primary Contact</h2>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              readOnly
              defaultValue={user.name}
              className="w-full border mt-3 text-white border-gray-500 rounded-lg px-4 py-2 bg-transparent"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              readOnly
              defaultValue={user.email}
              className="w-full border text-white mt-3 border-gray-500 rounded-lg px-4 py-2 bg-transparent"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full border text-white mt-3 border-gray-500 rounded-lg px-4 py-2 bg-transparent"
            />
          </div>

          {/* Section 3: Secondary Contact */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-purple-300 border-b border-gray-600 pb-2">Secondary Contact</h2>
            <label htmlFor="additionalPhone">Additional Phone Number</label>
            <input
              type="tel"
              id="additionalPhone"
              name="additionalPhone"
              required
              placeholder="Enter an alternate phone number"
              className="w-full border text-white mt-3 border-gray-500 rounded-lg px-4 py-2 bg-transparent"
            />
            <label htmlFor="additionalEmail">Additional Email</label>
            <input
              type="email"
              id="additionalEmail"
              name="additionalEmail"
              required
              placeholder="Enter an alternate email"
              className="w-full border text-white mt-3 border-gray-500 rounded-lg px-4 py-2 bg-transparent"
            />
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              placeholder="Enter your full address"
              className="w-full border text-white mt-3 border-gray-500 rounded-lg px-4 py-2 bg-transparent resize-none"
            />
          </div>

          {/* Section 4: Travelers */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-purple-300 border-b border-gray-600 pb-2">Travelers</h2>
            <label htmlFor="travelers">Number of Travelers</label>
            <input
              type="number"
              id="travelers"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value) || 0)}
              className="w-full border border-gray-500 rounded-lg mt-3 px-4 py-2 bg-transparent text-white"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: travelers }).map((_, index) => (
                <div key={index} className="border border-gray-600 rounded-lg p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-purple-300">Traveler {index + 1}</h3>
                  <input
                    type="text"
                    placeholder={`Name for traveler ${index + 1}`}
                    className="w-full border text-white border-gray-500 rounded-lg px-4 py-2 bg-transparent"
                  />
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-full border text-white border-gray-500 rounded-lg px-4 py-2 bg-transparent file:cursor-pointer file:rounded-md file:border-0 file:bg-purple-600 file:px-3 file:py-1 file:text-white hover:file:bg-purple-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Transportation */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-purple-300 border-b border-gray-600 pb-2">Transportation</h2>
            <select
              id="transport"
              required
              value={selectedPricing ?? ""}
              onChange={(e) => setSelectedPricing(parseInt(e.target.value))}
              className="w-full border border-gray-500 rounded-lg px-4 py-2 bg-transparent text-white"
            >
              <option value="" disabled>Select an option</option>
              {pricings.map((pricing) => (
                <option key={pricing.id} value={pricing.id} className="text-black">
                  {pricing.vehicle_name} — ₹{pricing.per_person_cost} per person (min {pricing.minimum_persons} pax)
                </option>
              ))}
            </select>

            {selectedPricing && (
              <div className="mt-4 p-4 border border-gray-600 rounded-lg">
                <p className="text-purple-300 font-semibold">Per Person Cost: ₹{chosen?.per_person_cost}</p>
                <p className="text-purple-300 font-semibold">Total Cost ({travelers} travelers): ₹{calculatedTotal}</p>
                {!meetsRequirement && (
                  <p className="text-red-400 font-semibold">
                    ⚠ Minimum {chosen?.minimum_persons} travelers required for {chosen?.vehicle_name}.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Section 6: Trip Dates */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-purple-300 border-b border-gray-600 pb-2">Trip Dates</h2>
            <label htmlFor="startDate">Trip Start Date</label>
            <input
              type="date"
              required
              id="startDate"
              name="startDate"
              className="w-full border mt-3 border-gray-500 rounded-lg text-white px-4 py-2 bg-transparent"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!meetsRequirement}
            className={`w-full cursor-pointer px-6 py-3 rounded-lg shadow transition 
              ${meetsRequirement
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"}`}
          >
            Continue
          </button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Booking
