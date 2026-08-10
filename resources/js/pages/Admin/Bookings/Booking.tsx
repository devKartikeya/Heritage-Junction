import { Head, Link, useForm } from "@inertiajs/react";

import BookingHeader from "@/components/Admin/Bookings/BookingHeader";
import CustomerCard from "@/components/Admin/Bookings/CustomerCard";
import PackageCard from "@/components/Admin/Bookings/PackageCard";
import TravelersSection from "@/components/Admin/Bookings/TravelersSection";
import PaymentSummary from "@/components/Admin/Bookings/PaymentSummary";
import BookingTimeline from "@/components/Admin/Bookings/BookingTimeline";
import BookingActions from "@/components/Admin/Bookings/BookingActions";

type Traveler = {
    id: number;
    traveler_name: string;
    aadhar_path: string;
};

type Booking = {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    additional_email: string | null;
    additional_phone: string | null;
    address: string;
    start_date: string;
    number_of_travelers: number;
    per_person_cost: string;
    total_cost: string;
    status: string;
    created_at: string;

    package: {
        id: number;
        title: string;
    };

    pricing: {
        id: number;
        vehicle_name: string;
    } | null;

    travelers: Traveler[];
};

export default function Booking({
    booking,
    pricings,
}: {
    booking: Booking;
    pricings: any;
}) {
    const form = useForm({
        full_name: booking.full_name,
        email: booking.email,
        phone: booking.phone,
        additional_email: booking.additional_email ?? "",
        additional_phone: booking.additional_phone ?? "",
        address: booking.address,
        start_date: booking.start_date,
        pricing_id: booking.pricing?.id ?? "",
        status: booking.status,
    });

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Head title={`Booking #${booking.id}`} />

            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

                {/* -------------------------------------------------- */}
                {/* Top Navigation */}
                {/* -------------------------------------------------- */}

                <div className="mb-8">
                    <Link
                        href="/admin/bookings"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-white"
                    >
                        <span className="transition-transform group-hover:-translate-x-1">
                            ←
                        </span>

                        Back to Bookings
                    </Link>
                </div>

                {/* -------------------------------------------------- */}
                {/* Booking Header */}
                {/* -------------------------------------------------- */}

                <BookingHeader booking={booking} />

                {/* -------------------------------------------------- */}
                {/* Main Content */}
                {/* -------------------------------------------------- */}

                <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">

                    {/* ================= LEFT ================= */}

                    <div className="min-w-0 space-y-6">

                        {/* Customer */}

                        {/* <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1 shadow-2xl shadow-black/20"> */}
                            <CustomerCard form={form} booking={booking.id}/>
                        {/* </div> */}

                        {/* Package */}
                            <PackageCard
                                booking={booking}
                                pricings={pricings}
                                form={form}
                            />

                        {/* Travelers */}
                            <TravelersSection travelers={booking.travelers}/>

                    </div>

                    {/* ================= RIGHT ================= */}

                </div>

                {/* -------------------------------------------------- */}
                {/* Booking Actions */}
                {/* -------------------------------------------------- */}

                    <BookingActions
                        booking={booking}
                    />

                {/* -------------------------------------------------- */}
                {/* Edit Booking */}
                {/* -------------------------------------------------- */}

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] shadow-2xl shadow-black/20">

                    {/* Section Header */}

                    {/* Form */}
                    {/* Footer Actions */}

                    <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] bg-black/20 px-6 py-5 sm:flex-row sm:items-center sm:justify-end sm:px-8">

                        <Link
                            href="/admin/bookings"
                            className="inline-flex items-center justify-center rounded-xl border border-white/[0.09] px-5 py-2.5 text-sm font-medium text-zinc-400 transition hover:border-white/[0.15] hover:bg-white/[0.04] hover:text-white"
                        >
                            Cancel
                        </Link>

                        <button
                            onClick={() =>
                                form.put(
                                    `/admin/bookings/${booking.id}`
                                )
                            }
                            disabled={form.processing}
                            className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/10 transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {form.processing
                                ? "Saving..."
                                : "Save Changes"}
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}