import { Head, usePage, useForm } from '@inertiajs/react'
import Footer from "@/components/Footer"
import Navbar from '@/components/navbar'
import { useState } from "react"
import { ArrowBigLeft, Check, ShieldCheck, CalendarDays, Users, Car, Package } from 'lucide-react'

type User = {
  name: string
  email: string
}

type Pricing = {
  id: number
  vehicle_name: string
  per_person_cost: number
  total_cost: number
  minimum_persons: number
}

const Booking = ({
  user,
  packageId,
  pricings,
  pkg
}: {
  user: User
  packageId: number
  pricings: Pricing[]
  pkg: string
}) => {

  const [travelers, setTravelers] = useState<number>(0)
  const [selectedPricing, setSelectedPricing] = useState<number | null>(null)

  const chosen = pricings.find(p => p.id === selectedPricing)

  const calculatedTotal = chosen
    ? travelers * chosen.per_person_cost
    : 0

  const meetsRequirement = chosen
    ? travelers >= chosen.minimum_persons
    : true

  const { props } = usePage()
  const successMessage = props.flash?.success

  const form = useForm({
    packageTitle: pkg,
    packageID: packageId,
    name: user.name,
    email: user.email,
    phone: "",
    additionalEmail: "",
    additionalPhone: "",
    address: "",
    travelers: [],
    transport: "",
    startDate: "",
  })

  const handleTravelerChange = (
    index: number,
    field: string,
    value: any
  ) => {
    const updated: any = [...form.data.travelers]

    updated[index] = {
      ...updated[index],
      [field]: value
    }

    form.setData("travelers", updated)
  }

  return (
    <div className="min-h-screen bg-white text-black">

      <Head title="Book Your Journey" />

      <Navbar />

      {/* ================= SUCCESS MESSAGE ================= */}

      {successMessage && (
        <div className="max-w-6xl mx-auto px-5 pt-8">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                <Check className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-green-800">
                  Booking Submitted Successfully
                </h2>
                <p className="mt-1 text-sm leading-6 text-green-700">
                  {successMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= BACK BUTTON ================= */}

      <div className="max-w-7xl mx-auto px-5 pt-8">

        <a
          href="/packages"
          className="
            inline-flex items-center gap-2
            text-sm font-semibold
            text-gray-600
            transition
            hover:text-red-500
          "
        >
          <ArrowBigLeft size={18} />
          Back to Packages
        </a>

      </div>

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-5 pt-8 pb-12">

        <div className="text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Heritage Junction
          </p>

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            tracking-tight
            text-black
          ">
            Book Your Journey
          </h1>
          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            sm:text-base
            leading-7
            text-gray-500
          ">
            Complete your booking details below. Our travel executive
            will verify your request and contact you shortly after
            submission to confirm the final arrangements.
          </p>
        </div>
      </section>
      {/* ================= MAIN ================= */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <form
          onSubmit={(e) => {
            e.preventDefault()

            form.post("/booking", {
              forceFormData: true,
              onError: (errors) => console.log(errors),
            })
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,2fr)_380px]
            gap-8
            lg:gap-12
            items-start
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="space-y-5">
            {/* ================= PACKAGE ================= */}
            <div className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            ">
              <div className="flex items-center gap-3 mb-6">
                <div className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-pink-50
                  text-pink-500
                ">
                  <Package size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black">
                    Package Information
                  </h2>
                  <p className="text-xs text-gray-500">
                    Your selected travel package
                  </p>
                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Package
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    {pkg}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Package ID
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    #{packageId}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= PRIMARY CONTACT ================= */}
            <div className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            ">
              <SectionHeading
                title="Primary Contact"
                subtitle="Your registered account information"
              />
              <div className="space-y-5">
                <InputField
                  label="Full Name"
                  value={form.data.name}
                  readOnly
                />
                <InputField
                  label="Email Address"
                  type="email"
                  value={form.data.email}
                  readOnly
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  required
                  value={form.data.phone}
                  placeholder="Enter your phone number"
                  onChange={(e: any) =>
                    form.setData("phone", e.target.value)
                  }
                />
              </div>
            </div>

            {/* ================= SECONDARY CONTACT ================= */}
            <div className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            ">
              <SectionHeading
                title="Additional Contact"
                subtitle="Alternative contact information"
              />
              <div className="space-y-5">
                <InputField
                  label="Additional Phone"
                  type="tel"
                  required
                  value={form.data.additionalPhone}
                  placeholder="Enter an alternate phone number"
                  onChange={(e: any) =>
                    form.setData(
                      "additionalPhone",
                      e.target.value
                    )
                  }
                />
                <InputField
                  label="Additional Email"
                  type="email"
                  required
                  value={form.data.additionalEmail}
                  placeholder="Enter an alternate email"
                  onChange={(e: any) =>
                    form.setData(
                      "additionalEmail",
                      e.target.value
                    )
                  }
                />

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Address
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.data.address}
                    onChange={(e) =>
                      form.setData("address", e.target.value)
                    }
                    placeholder="Enter your full address"
                    className="
                      mt-2
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-black
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-pink-500
                      focus:ring-2
                      focus:ring-pink-100
                    "
                  />
                </div>
              </div>
            </div>

            {/* ================= TRAVELERS ================= */}
            <div className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            ">
              <SectionHeading
                title="Travellers"
                subtitle="Add details of everyone travelling"
              />

              <div className="mb-7">

                <label className="text-sm font-semibold text-gray-800">
                  Number of Travellers
                </label>
                <input
                  type="number"
                  value={travelers}
                  min={0}
                  onChange={(e) => {
                    const val =
                      parseInt(e.target.value) || 0
                    setTravelers(val)
                    form.setData(
                      "travelers",
                      Array.from(
                        { length: val },
                        (_, i) =>
                          form.data.travelers[i] ?? {
                            name: "",
                            aadhar: null,
                          }
                      )
                    )

                  }}
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-black
                    outline-none
                    transition
                    focus:border-pink-500
                    focus:ring-2
                    focus:ring-pink-100
                  "
                />

              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {Array.from({ length: travelers }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                        p-5
                        transition
                        hover:border-pink-200
                        hover:bg-pink-50/30
                      "
                    >

                      <div className="flex items-center gap-3 mb-5">

                        <div className="
                          flex h-9 w-9
                          items-center justify-center
                          rounded-full
                          bg-pink-100
                          text-sm
                          font-bold
                          text-pink-600
                        ">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">
                            Traveller {index + 1}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Aadhar document required
                          </p>
                        </div>
                      </div>
                      <input
                        placeholder="Traveller Name"
                        onChange={(e) =>
                          handleTravelerChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        className="
                          w-full
                          rounded-xl
                          border
                          border-gray-300
                          bg-white
                          px-4
                          py-3
                          text-sm
                          outline-none
                          transition
                          focus:border-pink-500
                          focus:ring-2
                          focus:ring-pink-100
                        "
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
                        className="
                          mt-4
                          w-full
                          text-xs
                          text-gray-500
                          file:mr-4
                          file:rounded-lg
                          file:border-0
                          file:bg-black
                          file:px-4
                          file:py-2
                          file:text-xs
                          file:font-semibold
                          file:text-white
                          file:cursor-pointer

                          hover:file:bg-pink-600
                        "
                      />

                    </div>
                  )
                )}
              </div>
            </div>

            {/* ================= TRANSPORTATION ================= */}
            <div className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            ">

              <SectionHeading
                title="Transportation"
                subtitle="Choose your preferred vehicle"
              />

              <div className="space-y-3">
                {pricings.map((pricing) => {
                  const active =
                    selectedPricing === pricing.id
                  return (
                    <label
                      key={pricing.id}
                      className={`
                        block
                        cursor-pointer
                        rounded-2xl
                        border
                        p-5
                        transition-all
                        duration-200

                        ${active
                          ? "border-pink-500 bg-pink-50 shadow-sm"
                          : "border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50/30"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        checked={active}
                        onChange={() => {
                          setSelectedPricing(
                            pricing.id
                          )

                          form.setData(
                            "transport",
                            pricing.id as any
                          )
                        }}
                      />

                      <div className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-4
                      ">
                        <div className="flex items-center gap-4">
                          <div className={`
                            flex h-10 w-10
                            items-center justify-center
                            rounded-xl
                            ${active
                              ? "bg-pink-500 text-white"
                              : "bg-gray-100 text-gray-500"
                            }
                          `}>
                            <Car size={19} />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">
                              {pricing.vehicle_name}
                            </h3>
                            <p className="mt-1 text-xs text-gray-500">
                              Minimum {pricing.minimum_persons} travellers
                            </p>
                          </div>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-lg font-black text-black">
                            ₹{pricing.per_person_cost}
                          </p>
                          <p className="text-xs text-gray-500">
                            per person
                          </p>
                        </div>
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>
            {/* ================= TRAVEL DATE ================= */}
            <div className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            ">
              <SectionHeading
                title="Travel Date"
                subtitle="When would you like to start your journey?"
              />

              <div className="relative">

                <CalendarDays
                  size={19}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-pink-500
                  "
                />
                <input
                  type="date"
                  required
                  value={form.data.startDate}
                  onChange={(e) =>
                    form.setData(
                      "startDate",
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    pl-12
                    text-sm
                    text-black
                    outline-none
                    transition
                    focus:border-pink-500
                    focus:ring-2
                    focus:ring-pink-100
                  "
                />

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT SIDEBAR — STICKY BOOKING SUMMARY
          ===================================================== */}

          <aside className="lg:sticky lg:top-6">
            <div className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-xl
            ">

              {/* Header */}
              <div className="border-b border-gray-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-black
                    text-white
                  ">
                    <Package size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-black">Booking Summary</h2>
                    <p className="text-xs text-gray-500">Review your journey</p>
                  </div>
                </div>
              </div>

              {/* Summary */}

              <div className="space-y-5 py-6">

                <SummaryRow
                  label="Package"
                  value={pkg}
                />

                <SummaryRow
                  label="Travellers"
                  value={travelers.toString()}
                  icon={<Users size={15} />}
                />

                <SummaryRow
                  label="Vehicle"
                  value={chosen?.vehicle_name ?? "-"}
                  icon={<Car size={15} />}
                />

                <SummaryRow
                  label="Price / Person"
                  value={`₹${chosen?.per_person_cost ?? 0}`}
                />

                <div className="border-t border-gray-100 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">
                      Total
                    </span>
                    <span className="text-2xl font-black text-black">
                      ₹{calculatedTotal}
                    </span>
                  </div>
                </div>

                {/* Minimum requirement */}

                {!meetsRequirement &&
                  selectedPricing && (

                    <div className="
                      rounded-xl
                      border
                      border-red-200
                      bg-red-50
                      p-4
                      text-sm
                      leading-5
                      text-red-700
                    ">
                      Minimum{" "}
                      <strong>
                        {chosen?.minimum_persons}
                      </strong>{" "}
                      travellers are required for{" "}
                      <strong>
                        {chosen?.vehicle_name}
                      </strong>.
                    </div>
                  )}

              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={!meetsRequirement}
                className={`
                  w-full
                  rounded-xl
                  py-4
                  text-sm
                  font-bold
                  transition-all
                  duration-200

                  ${meetsRequirement
                    ? `
                      bg-black
                      text-white
                      hover:bg-red-500
                      hover:shadow-lg
                      hover:shadow-red-200
                    `
                    : `
                      cursor-not-allowed
                      bg-gray-200
                      text-gray-400
                    `
                  }
                `}
              >
                {form.processing
                  ? "Submitting..."
                  : "Complete Booking →"
                }
              </button>

              {/* Trust */}
              <div className="
                mt-5
                flex
                items-start
                gap-3
                rounded-xl
                bg-gray-50
                p-4
              ">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-pink-500"
                />
                <p className="text-xs leading-5 text-gray-500">
                  Your booking request will be reviewed by
                  our travel executive. Final arrangements
                  and payment will be confirmed with you
                  after verification.
                </p>
              </div>
            </div>
          </aside>
        </form>
      </section>
      <Footer />
    </div>
  )
}


/* ============================================================
   REUSABLE UI COMPONENTS
============================================================ */

const SectionHeading = ({
  title,
  subtitle
}: {
  title: string
  subtitle: string
}) => {

  return (
    <div className="mb-7">
      <h2 className="
        text-lg
        font-black
        text-black
      ">
        {title}
      </h2>
      <p className="
        mt-1
        text-xs
        text-gray-500
      ">
        {subtitle}
      </p>
      <div className="
        mt-4
        h-px
        w-10
        bg-pink-500
      " />

    </div>

  )
}

/* ============================================================
   INPUT
============================================================ */

const InputField = ({
  label,
  type = "text",
  value,
  readOnly = false,
  required = false,
  placeholder,
  onChange
}: any) => {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          mt-2
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          text-sm
          outline-none
          transition

          ${readOnly
            ? "bg-gray-50 text-gray-500 cursor-default"
            : "bg-white text-black"
          }

          placeholder:text-gray-400

          focus:border-pink-500
          focus:ring-2
          focus:ring-pink-100
        `}
      />
    </div>
  )
}

/* ============================================================
   SUMMARY ROW
============================================================ */

const SummaryRow = ({
  label,
  value,
  icon
}: {
  label: string
  value: string
  icon?: React.ReactNode
}) => {

  return (
    <div className="flex items-start justify-between gap-5">
      <div className="flex items-center gap-2 text-gray-500">
        {icon && (
          <span className="text-pink-500">
            {icon}
          </span>
        )}
        <span className="text-xs font-medium">
          {label}
        </span>

      </div>

      <span className="
        max-w-[180px]
        text-right
        text-sm
        font-semibold
        text-gray-900
      ">
        {value}
      </span>
    </div>
  )
}

export default Booking