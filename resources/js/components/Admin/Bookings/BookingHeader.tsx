import StatusBadge from "./StatusBadge";
import { router } from "@inertiajs/react";

type Props = {
    booking: any;
};

export default function BookingHeader({
    booking,
}: Props) {
    return (
        <div className="mt-8">

            <div className="flex flex-col lg:flex-row justify-between gap-8">

                {/* Left */}

                <div>

                    <p className="uppercase tracking-[6px] text-sm text-purple-400 font-semibold">
                        Booking Details
                    </p>

                    <h1 className="mt-3 text-5xl font-bold">
                        Booking #{booking.id}
                    </h1>

                    <p className="mt-3 text-zinc-400 text-lg">
                        Package :
                        <span className="text-white font-semibold ml-2">
                            {booking.package.title}
                        </span>
                    </p>

                    <p className="mt-2 text-zinc-500">
                        Created on{" "}
                        {new Date(
                            booking.created_at
                        ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>

                </div>

                {/* Right */}

                <div className="flex flex-col items-start lg:items-end gap-5">

                    <StatusBadge
                        status={booking.status}
                    />

                    <div className="flex gap-3 flex-wrap">

                        <button
                            onClick={() =>
                                router.patch(`/admin/bookings/${booking.id}/confirm`)
                            } className="cursor-pointer px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold"
                        >
                            Confirm
                        </button>

                        <button
                            onClick={() =>
                                router.patch(`/admin/bookings/${booking.id}/paid`)
                            } className="cursor-pointer px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
                        >
                            Mark Paid
                        </button>

                        <button
                            onClick={() => {
                                if (
                                    confirm(
                                        "Cancel this booking?"
                                    )
                                ) {
                                    router.patch(
                                        `/admin/bookings/${booking.id}/cancel`
                                    );
                                }
                            }} className="cursor-pointer px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6 mt-10">

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                    <p className="text-zinc-500 uppercase text-xs tracking-widest">
                        Travelers
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        {booking.number_of_travelers}
                    </h2>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                    <p className="text-zinc-500 uppercase text-xs tracking-widest">
                        Travel Date
                    </p>

                    <h2 className="mt-3 text-2xl font-bold">
                        {new Date(
                            booking.start_date
                        ).toLocaleDateString("en-IN")}
                    </h2>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                    <p className="text-zinc-500 uppercase text-xs tracking-widest">
                        Total Amount
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-green-400">
                        ₹{booking.total_cost}
                    </h2>

                </div>

            </div>

        </div>
    );
}