import { Head, usePage } from '@inertiajs/react'
import Footer from "@/components/Footer";
import { useState } from "react"
import { useForm } from "@inertiajs/react";
import Navbar from '@/components/navbar';

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
  const { props } = usePage()
  const successMessage = props.flash?.success

  console.log(props.flash);

  const form = useForm({
    packageTitle: pkg,
    packageID: packageId,
    name: user.name,
    email: user.email,
    phone: "",
    additionalEmail: "",
    additionalPhone: "",
    address: "",
    travelers: [], // array of { name, aadhar },
    transport: "",
    startDate: "",
  });

  const handleTravelerChange = (index: number, field: string, value: any) => {
    const updated: any = [...form.data.travelers]
    updated[index] = { ...updated[index], [field]: value }
    form.setData("travelers", updated)
  }


  return (
    <div
      id="booking"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white"
    >
      <Head title="Book Now"/>
      <Navbar/>
      {/* Success */}
      {successMessage && (
        <div className="max-w-6xl mx-auto pt-8">
          <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-5 text-green-300 shadow-lg">
            <h2 className="text-xl font-bold">🎉 Booking Submitted</h2>
            <p className="mt-1">
              {successMessage}
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-13 pb-10">
        <div className="text-center">
          <h1 className="text-5xl mt-1 md:text-7xl font-black tracking-tight">
            Book Your Journey
          </h1>
          <p className="mt-6 text-2xl text-purple-300 font-semibold">
            {pkg}
          </p>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
            Complete your booking in just a few minutes.
            Our travel executive will verify your booking
            and contact you shortly after submission.
          </p>

        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <form
          onSubmit={(e) => {
            e.preventDefault()

            form.post("/booking", {
              forceFormData: true,
              onError: (errors) => console.log(errors),
            })
          }}
          className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start"
        >

          {/* LEFT */}
          <div className="space-y-2">

            {/* Package Summary */}
            <div className="rounded-3xl  backdrop-blur-xl shadow-2xl p-5">

              <h2 className="text-2xl font-bold text-purple-300">
                Package Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="text-sm text-gray-400">
                    Package
                  </p>
                  <p className="text-xl font-semibold mt-2">
                    {pkg}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    Package ID
                  </p>
                  <p className="text-xl font-semibold mt-2">
                    #{packageId}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Contact */}

            <div className="rounded-3xl backdrop-blur-xl shadow-xl p-4">
              <h2 className="text-xl font-bold text-purple-300 mb-8">
                Primary Contact
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-300">
                    Full Name
                  </label>
                  <input
                    readOnly
                    value={form.data.name}
                    className="w-full mt-2 rounded-xl text-sm border border-white/10 bg-black/20 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm">Email </label>
                  <input
                    readOnly
                    value={form.data.email}
                    className="w-full mt-2 rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">  Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={form.data.phone}
                    onChange={(e) =>
                      form.setData("phone", e.target.value)
                    }
                    placeholder="Enter phone number"
                    className="w-full mt-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 focus:border-purple-500 outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Secondary */}

            <div className="rounded-3xl  backdrop-blur-xl shadow-xl p-4">

              <h2 className="text-xl font-bold text-purple-300 mb-8">Secondary Contact</h2>

              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-300">
                    Additional Phone
                  </label>
                  <input
                    required
                    value={form.data.additionalPhone}
                    onChange={(e) =>
                      form.setData("additionalPhone", e.target.value)
                    }
                    className="w-full mt-2 rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3 focus:border-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">
                    Additional Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.data.additionalEmail}
                    onChange={(e) =>
                      form.setData("additionalEmail", e.target.value)
                    }
                    className="w-full mt-2 rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3 focus:border-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300"> Address</label>
                  <textarea
                    rows={4}
                    required
                    value={form.data.address}
                    onChange={(e) =>
                      form.setData("address", e.target.value)
                    }
                    className="w-full mt-2 rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3 resize-none focus:border-purple-500 outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Travellers */}

            <div className="rounded-3xl  backdrop-blur-xl shadow-xl p-4">
              <h2 className="text-xl font-bold text-purple-300">Travellers</h2>
              <div className="mt-8">
                <label className="text-sm text-gray-300"> Number of Travellers
                </label>
                <input
                  type="number"
                  value={travelers}
                  min={0}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0
                    setTravelers(val)
                    form.setData(
                      "travelers",
                      Array.from(
                        { length: val },
                        (_, i) =>
                          form.data.travelers[i] ??
                          {
                            name: "",
                            aadhar: null,
                          }
                      )
                    )

                  }}
                  className="w-full mt-2 rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">

                {Array.from({ length: travelers }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-purple-500/20 bg-black/20 p-6 hover:border-purple-500 transition"
                  >

                    <h3 className="text-lg font-semibold text-purple-300 mb-5"> Traveller {index + 1} <span className='text-white text-sm'>- Upload your Aadhar</span> </h3>

                    <input
                      placeholder="Traveller Name"
                      onChange={(e) =>
                        handleTravelerChange(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3"
                    />
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) =>
                        handleTravelerChange(
                          index,
                          "aadhar",
                          e.target.files?.[0]
                        )
                      }
                      className="mt-4 w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-purple-600 file:px-4 file:py-2 file:text-white hover:file:bg-purple-700"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Transportation */}
            <div className="rounded-3xl  backdrop-blur-xl shadow-xl p-4">
              <h2 className="text-xl font-bold text-purple-300 mb-8">
                Transportation
              </h2>
              <div className="grid gap-3">
                {pricings.map((pricing) => {
                  const active = selectedPricing === pricing.id
                  return (
                    <label
                      key={pricing.id}
                      className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${active
                        ? "border-purple-500 bg-purple-500/20 shadow-xl"
                        : "border-white/10 bg-black/20 hover:border-purple-400"
                        }`}
                    >

                      <input
                        type="radio"
                        className="hidden"
                        checked={active}
                        onChange={() => {
                          setSelectedPricing(pricing.id)
                          form.setData("transport", pricing.id as any)
                        }}
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">
                            {pricing.vehicle_name}
                          </h3>
                          <p className="text-gray-400 mt-2">Minimum {pricing.minimum_persons} Travellers</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-purple-300">
                            ₹{pricing.per_person_cost}
                          </p>
                          <p className="text-gray-400 text-sm">
                            per person
                          </p>
                        </div>
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>
            {/* Trip Date */}
            <div className="rounded-3xl  backdrop-blur-xl shadow-xl p-4">
              <h2 className="text-xl font-bold text-purple-300 mb-6">
                Travel Date
              </h2>
              <input
                type="date"
                required
                value={form.data.startDate}
                onChange={(e) =>
                  form.setData("startDate", e.target.value)
                }
                className="w-full rounded-xl border text-sm border-white/10 bg-black/20 px-4 py-3"
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <aside className="sticky top-8">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-6 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-purple-300">
                  Booking Summary
                </h2>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">
                    Package
                  </span>
                  <span className="font-semibold text-right">
                    {pkg}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">
                    Travellers
                  </span>
                  <span>
                    {travelers}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">
                    Vehicle
                  </span>
                  <span>
                    {chosen?.vehicle_name ?? "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">
                    Price / Person
                  </span>
                  <span>
                    ₹{chosen?.per_person_cost ?? 0}
                  </span>
                </div>
                <hr className="border-white/10" />
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-white">
                    ₹{calculatedTotal}
                  </span>
                </div>
                {!meetsRequirement && selectedPricing && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-red-300">
                    Minimum {chosen?.minimum_persons} travellers are required for{" "}
                    {chosen?.vehicle_name}.
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={!meetsRequirement}
                className={`w-full rounded-xl py-4 text-lg font-semibold transition-all duration-300 ${meetsRequirement
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] hover:shadow-xl"
                  : "bg-gray-700 cursor-not-allowed"
                  }`}
              >
                Complete Booking →
              </button>
            </div>
          </aside>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Booking