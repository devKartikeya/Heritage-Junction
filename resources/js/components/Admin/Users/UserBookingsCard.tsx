import { Link } from "@inertiajs/react";
import {
    CalendarDays,
    IndianRupee,
    MapPinned,
    ArrowUpRight,
} from "lucide-react";

export default function UserBookingsCard({
    user,
}: {
    user: any;
}) {

    return (

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold">

                        Booking History

                    </h2>

                    <p className="mt-2 text-zinc-500">

                        All bookings made by this user.

                    </p>

                </div>

                <span className="rounded-xl bg-zinc-950 px-4 py-2 text-zinc-400">

                    {user.bookings.length} Booking(s)

                </span>

            </div>

            {/* Empty */}

            {user.bookings.length === 0 && (

                <div className="mt-10 rounded-2xl border border-dashed border-zinc-700 py-16 text-center text-zinc-500">

                    No bookings found.

                </div>

            )}

            {/* List */}

            <div className="mt-8 space-y-5">

                {user.bookings.map((booking: any) => (

                    <div
                        key={booking.id}
                        className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-purple-500"
                    >

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                            {/* Left */}

                            <div>

                                <div className="flex items-center gap-3">

                                    <h3 className="text-2xl font-bold">

                                        {booking.package.title}

                                    </h3>

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-semibold ${booking.status === "Confirmed"
                                                ? "bg-green-500/20 text-green-400"
                                                : booking.status === "Pending"
                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                    : "bg-red-500/20 text-red-400"
                                            }`}
                                    >

                                        {booking.status}

                                    </span>

                                </div>

                                <div className="mt-5 flex flex-wrap gap-6 text-sm text-zinc-400">

                                    <div className="flex items-center gap-2">

                                        <CalendarDays size={17} />

                                        {new Date(
                                            booking.created_at
                                        ).toLocaleDateString()}

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <MapPinned size={17} />

                                        {booking.package.starting_city}
                                        {" → "}
                                        {booking.package.ending_city}

                                    </div>

                                    <div className="flex items-center gap-2 font-semibold text-green-400">

                                        <IndianRupee size={17} />

                                        {Number(
                                            booking.total_cost
                                        ).toLocaleString()}

                                    </div>

                                </div>

                            </div>

                            {/* Right */}

                            <Link
                                href={`/admin/bookings/${booking.id}`}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700"
                            >

                                View Booking

                                <ArrowUpRight size={18} />

                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}