import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { CalendarDays, Users, IndianRupee, Car } from "lucide-react";

type Booking = {
    id: number;
    start_date: string;
    total_cost: number;
    number_of_travelers: number;
    package: {
        title: string;
        cover_image: string;
    };
    pricing: {
        vehicle_name: string;
    }
};

export default function Dashboard({ bookings }: { bookings: Booking[] }) {
    console.log(bookings[0]);
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <h1 className="text-3xl font-bold text-purple-700">My Bookings</h1>

                {bookings.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2">
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image Banner */}
                                <div className="relative h-40">
                                    <img
                                        src={booking.package.cover_image}
                                        alt={booking.package.title}
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
                                    {/* <p className="flex items-center gap-2 text-sm">
                                        <Car className="w-4 h-4 text-purple-600" />
                                        <span className="font-semibold">{booking.pricing?.vehicle_name}</span>
                                    </p> */}

                                    <p className="flex items-center gap-2 text-sm">
                                        <Users className="w-4 h-4 text-purple-600" />
                                        <span className="font-semibold">{booking.number_of_travelers} Travelers</span>
                                    </p>
                                    <p className="flex items-center gap-2 text-sm">
                                        <IndianRupee className="w-4 h-4 text-purple-600" />
                                        <span className="font-semibold">₹{booking.total_cost}</span>
                                    </p>

                                    <button className="mt-3 w-full cursor-pointer bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                                        View Booking
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className="relative min-h-[40vh] flex items-center justify-center rounded-xl border border-gray-300 bg-gray-50">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10" />
                        <p className="relative text-gray-600 font-medium">
                            You don’t have any bookings yet. Start your journey today!
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};