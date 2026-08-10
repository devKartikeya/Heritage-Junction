import StatusBadge from "./StatusBadge";
import { router } from "@inertiajs/react";
import {
    CalendarDays,
    CheckCircle2,
    CreditCard,
    Users,
    XCircle,
} from "lucide-react";

type Props = {
    booking: any;
};

export default function BookingHeader({
    booking,
}: Props) {
    return (
        <div>
            {/* Header */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                {/* Left */}
                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />

                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                            Booking Details
                        </p>
                    </div>

                    <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                        Booking{" "}
                        <span className="text-zinc-500">
                            #{booking.id}
                        </span>
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                        <span className="text-zinc-500">
                            Package
                        </span>

                        <span className="font-semibold text-zinc-200">
                            {booking.package.title}
                        </span>

                        <span className="hidden text-zinc-700 sm:block">
                            •
                        </span>

                        <span className="text-zinc-500">
                            Created{" "}
                            {new Date(
                                booking.created_at
                            ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-start gap-5 lg:items-end">

                    <StatusBadge
                        status={booking.status}
                    />

                    <div className="flex flex-wrap gap-2">

                        <button
                            onClick={() =>
                                router.patch(
                                    `/admin/bookings/${booking.id}/confirm`
                                )
                            }
                            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2.5 text-sm font-semibold text-green-400 transition hover:border-green-500/40 hover:bg-green-500/20"
                        >
                            <CheckCircle2 size={17} />
                            Confirm
                        </button>

                        <button
                            onClick={() =>
                                router.patch(
                                    `/admin/bookings/${booking.id}/paid`
                                )
                            }
                            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition hover:border-blue-500/40 hover:bg-blue-500/20"
                        >
                            <CreditCard size={17} />
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
                            }}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition hover:border-red-500/40 hover:bg-red-500/20"
                        >
                            <XCircle size={17} />
                            Cancel
                        </button>

                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">

                {/* Travelers */}
                <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 transition hover:border-zinc-700 hover:bg-zinc-900">
                    <div className="flex items-start justify-between">

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Travelers
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight">
                                {booking.number_of_travelers}
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                Registered travelers
                            </p>
                        </div>

                        <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
                            <Users size={20} />
                        </div>
                    </div>
                </div>

                {/* Travel Date */}
                <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 transition hover:border-zinc-700 hover:bg-zinc-900">
                    <div className="flex items-start justify-between">

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Travel Date
                            </p>

                            <h2 className="mt-3 text-2xl font-bold tracking-tight">
                                {new Date(
                                    booking.start_date
                                ).toLocaleDateString("en-IN")}
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                Scheduled departure
                            </p>
                        </div>

                        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                            <CalendarDays size={20} />
                        </div>
                    </div>
                </div>

                {/* Total Amount */}
                <div className="group rounded-2xl border border-green-500/10 bg-green-500/[0.03] p-5 transition hover:border-green-500/20 hover:bg-green-500/[0.06]">
                    <div className="flex items-start justify-between">

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Total Amount
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-green-400">
                                ₹{booking.total_cost}
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                Booking value
                            </p>
                        </div>

                        <div className="rounded-xl bg-green-500/10 p-3 text-green-400">
                            <CreditCard size={20} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}