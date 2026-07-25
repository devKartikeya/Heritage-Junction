import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
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
    pricings
}: {
    booking: Booking;
    pricings: any
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
        <div className="min-h-screen bg-black text-white">
            <Head title={booking.full_name}/>
            <div className="max-w-7xl mx-auto px-8 py-10">
                <Link
                    href="/admin/bookings"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition"
                >
                    ← Back to Bookings
                </Link>
                <BookingHeader booking={booking} />
                <div className="grid lg:grid-cols-2 gap-8 mt-10">
                    <CustomerCard form={form} booking={booking.id} />
                    <PackageCard
                        booking={booking}
                        form={form}
                        pricings={pricings}
                    />
                </div>
                <TravelersSection
                    travelers={booking.travelers}
                />
                <PaymentSummary booking={booking} />
                <BookingTimeline booking={booking} />
                <BookingActions booking={booking} />
                <div className="mt-12 flex justify-end gap-4">

                    <Link
                        href="/admin/bookings"
                        className="rounded-xl border border-zinc-700 px-6 py-3 hover:bg-zinc-800"
                    >
                        Cancel
                    </Link>

                    <button
                        onClick={() =>
                            form.put(`/admin/bookings/${booking.id}`)
                        }
                        disabled={form.processing}
                        className="rounded-xl bg-purple-600 px-8 py-3 font-semibold hover:bg-purple-700 disabled:opacity-50"
                    >
                        {form.processing
                            ? "Saving..."
                            : "Save Changes"}
                    </button>

                </div>
            </div>
        </div>
    );
}