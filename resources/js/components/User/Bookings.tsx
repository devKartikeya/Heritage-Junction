import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { CalendarDays, Users, IndianRupee, Car, Stamp, Ban } from "lucide-react";
import { useState } from 'react';
import Modal from "@/components/User/Modal";
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';


type Booking = {
    id: number;
    start_date: string;
    total_cost: number;
    number_of_travelers: number;
    created_at: any;
    additional_email: string;
    additional_phone: string;
    full_name: string;
    email: string;
    phone: string;
    status: string;
    package: {
        id: number;
        duration_days: number;
        duration_nights: number;
        title: string;
        cover_image: string;
        starting_city: string;
        ending_city: string;
    };
    pricing: {
        vehicle_name: string;
    };
    travelers: []
};

const Bookings = ({ bookings }: { bookings: Booking[] }) => {
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    return (
        <div className="flex h-full flex-1 flex-col gap-6 p-6">
            <h1 className="text-3xl font-bold text-purple-700">My Bookings</h1>
            {bookings.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2">
                    {bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-blue-50a rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"

                        >

                            {/* Image Banner */}
                            <div className="relative h-40">
                                <img
                                    src={booking.package.cover_image}
                                    alt={`View of ${booking.package.title}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <h2 className="text-lg font-bold text-white text-center px-2">
                                        {booking.package.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Booking Details */}
                            <div className="p-4 space-y-2 text-gray-700">
                                <p className="flex items-center gap-2 text-sm">
                                    <CalendarDays className="w-4 h-4 text-purple-600" />
                                    <span className="font-semibold">{booking.start_date}</span>
                                </p>
                                <p className="flex items-center gap-2 text-sm">
                                    <Users className="w-4 h-4 text-purple-600" />
                                    <span className="font-semibold">{booking.number_of_travelers} Travelers</span>
                                </p>
                                <p className="flex items-center gap-2 text-sm">
                                    <IndianRupee className="w-4 h-4 text-purple-600" />
                                    <span className="font-semibold">₹{booking.total_cost}</span>
                                </p>
                                <p className="flex items-center gap-2 text-sm">
                                    <Stamp className="w-4 h-4 text-purple-600" />
                                    <span className="font-semibold"><span className='font-bold'>Status: </span>{booking.status}</span>
                                </p>

                                <button
                                    onClick={() => setSelectedBooking(booking)}
                                    className="mt-3 w-full cursor-pointer bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                >
                                    View Booking
                                </button>
                            </div>
                        </div>
                    ))}
                    <Modal open={!!selectedBooking} onClose={() => setSelectedBooking(null)}>
                        {selectedBooking && (
                            <div className="w-[700px] space-y-6"> {/* widened modal */}

                                {/* Header */}
                                <div className="flex items-center gap-4 border-b pb-4">
                                    <img
                                        src={selectedBooking.package.cover_image}
                                        alt={selectedBooking.package.title}
                                        className="w-28 h-28 rounded-lg object-cover"
                                    />
                                    <div>
                                        <h2 className="text-2xl font-bold text-purple-700">
                                            {selectedBooking.package.title}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            Package ID: {selectedBooking.package.id}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Duration: {selectedBooking.package.duration_days} Days / {selectedBooking.package.duration_nights} Nights
                                        </p>
                                    </div>
                                </div>

                                {/* Booking Info */}
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold">Booked On:</span> {new Date(selectedBooking.created_at).toLocaleDateString()}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold">Route:</span> {selectedBooking.package.starting_city} → {selectedBooking.package.ending_city}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <CalendarDays className="w-4 h-4 text-purple-600" />
                                        <span className="font-bold">Start Date:</span> {selectedBooking.start_date}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-600" />
                                        <span className="font-bold">Travelers:</span> {selectedBooking.number_of_travelers}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <IndianRupee className="w-4 h-4 text-purple-600" />
                                        <span className="font-bold">Total Cost:</span> ₹{selectedBooking.total_cost}
                                    </p>
                                    {selectedBooking.pricing && (
                                        <p className="flex items-center gap-2">
                                            <Car className="w-4 h-4 text-purple-600" />
                                            <span className="font-bold">Transport:</span> {selectedBooking.pricing.vehicle_name}
                                        </p>
                                    )}
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-1 text-sm text-gray-700">
                                    <h3 className="text-lg font-semibold text-purple-600">Contact Details</h3>
                                    <p><span className="font-bold">Name:</span> {selectedBooking.full_name}</p>
                                    <p><span className="font-bold">Email:</span> {selectedBooking.email}</p>
                                    <p><span className="font-bold">Phone:</span> {selectedBooking.phone}</p>
                                    {selectedBooking.additional_email && (
                                        <p><span className="font-bold">Additional Email:</span> {selectedBooking.additional_email}</p>
                                    )}
                                    {selectedBooking.additional_phone && (
                                        <p><span className="font-bold">Additional Phone:</span> {selectedBooking.additional_phone}</p>
                                    )}
                                </div>

                                {/* Travelers */}
                                <div>
                                    <h3 className="text-lg font-semibold text-purple-600 mb-1">Traveler Details</h3>
                                    <ul className="space-x-3 flex">
                                        {selectedBooking.travelers.map((t: any) => (
                                            <li key={t.id} className="flex items-center flex gap-3 text-sm text-gray-700">
                                                <span className="font-medium">{t.traveler_name}</span>
                                                {t.aadhar_path && (
                                                    <a
                                                        href={`/storage/${t.aadhar_path}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-purple-600 hover:underline text-xs"
                                                    >
                                                        View Aadhar |
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedBooking.status !== "cancelled" &&
                                    selectedBooking.status !== "completed" && (
                                        <button
                                            onClick={() => {
                                                if (confirm("Are you sure you want to cancel this booking?")) {
                                                    router.patch(
                                                        `/bookings/${selectedBooking.id}/cancel`
                                                    );
                                                }
                                            }}
                                            className="flex items-center gap-3 rounded-xl bg-red-600 px-2 py-2 font-semibold text-white transition justify-end hover:bg-red-700"
                                        >
                                            <Ban size={20} />
                                            Cancel Booking
                                        </button>
                                    )}
                            </div>

                        )}
                    </Modal>

                </div>
            ) : (
                <div className="relative min-h-[40vh] flex items-center justify-center rounded-xl  flex-col gap-5">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10" />
                    <p className="relative text-gray-600 font-medium flex flex-col gap-3">
                        You don’t have any bookings yet. Start your journey today!
                        <Link href={"/packages"} className='p-2 text-white bg-purple-500 rounded-xl hover:bg-purple-700 flex justify-center items-center w-1/3 mx-auto'>Start Now</Link>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Bookings