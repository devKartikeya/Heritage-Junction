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
        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-xl shadow-black/20">

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        Booking History
                    </h2>

                    <p className="mt-1.5 text-sm text-zinc-500">
                        All bookings made by this user.
                    </p>
                </div>

                <div className="inline-flex w-fit items-center rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2">
                    <span className="text-sm font-medium text-zinc-400">
                        {user.bookings.length} Booking(s)
                    </span>
                </div>

            </div>

            {/* Empty */}
            {user.bookings.length === 0 && (
                <div className="mt-8 flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/50 text-sm text-zinc-600">
                    No bookings found.
                </div>
            )}

            {/* List */}
            <div className="mt-7 space-y-3">

                {user.bookings.map((booking: any) => (

                    <div
                        key={booking.id}
                        className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700"
                    >

                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                            {/* Left */}
                            <div className="min-w-0 flex-1">

                                <div className="flex flex-wrap items-center gap-3">

                                    <h3 className="truncate text-lg font-semibold text-zinc-100">
                                        {booking.package.title}
                                    </h3>

                                    <span
                                        className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                                            booking.status === "Confirmed"
                                                ? "border-green-500/20 bg-green-500/10 text-green-400"
                                                : booking.status === "Pending"
                                                    ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                                                    : "border-red-500/20 bg-red-500/10 text-red-400"
                                        }`}
                                    >
                                        {booking.status}
                                    </span>

                                </div>

                                {/* Meta */}
                                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500">

                                    <div className="flex items-center gap-2">
                                        <CalendarDays
                                            size={15}
                                            className="text-zinc-600"
                                        />

                                        {new Date(
                                            booking.created_at
                                        ).toLocaleDateString()}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MapPinned
                                            size={15}
                                            className="text-zinc-600"
                                        />

                                        <span>
                                            {booking.package.starting_city}
                                            {" → "}
                                            {booking.package.ending_city}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1.5 font-semibold text-green-400">
                                        <IndianRupee size={15} />

                                        {Number(
                                            booking.total_cost
                                        ).toLocaleString()}
                                    </div>

                                </div>

                            </div>

                            {/* Right */}
                            <Link
                                href={`/admin/bookings/${booking.id}`}
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                            >
                                View Booking

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}