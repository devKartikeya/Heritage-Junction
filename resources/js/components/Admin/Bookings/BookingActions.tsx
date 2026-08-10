import {
    BadgeCheck,
    Wallet,
    CircleCheckBig,
    Ban,
    Trash2,
    Mail,
    MessageCircle,
    Phone,
} from "lucide-react";
import { router } from "@inertiajs/react";

type Props = {
    booking: any;
};

export default function BookingActions({
    booking,
}: Props) {
    return (
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold tracking-tight text-white">
                            Booking Actions
                        </h2>

                        <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider
                                ${
                                    booking.status === "pending"
                                        ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                                        : booking.status === "confirmed"
                                            ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                                            : booking.status === "paid"
                                                ? "border-green-500/20 bg-green-500/10 text-green-400"
                                                : booking.status === "completed"
                                                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                                    : "border-red-500/20 bg-red-500/10 text-red-400"
                                }`}
                        >
                            {booking.status.toUpperCase()}
                        </span>
                    </div>

                    <p className="mt-2 text-sm text-zinc-500">
                        Manage the booking status and customer communication.
                    </p>
                </div>

            </div>


            {/* Booking Management */}
            <div className="mt-10">

                <div className="mb-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        Booking Management
                    </h3>

                    <p className="mt-1 text-sm text-zinc-600">
                        Update the current state of this reservation.
                    </p>
                </div>


                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {/* Confirm */}
                    <button
                        onClick={() =>
                            router.patch(
                                `/admin/bookings/${booking.id}/confirm`
                            )
                        }
                        className="group flex items-center gap-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4 text-left transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 transition group-hover:bg-indigo-500/20">
                            <BadgeCheck size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Confirm Booking
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Approve this reservation
                            </p>
                        </div>
                    </button>


                    {/* Paid */}
                    <button
                        onClick={() =>
                            router.patch(
                                `/admin/bookings/${booking.id}/paid`
                            )
                        }
                        className="group flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-left transition-all duration-200 hover:border-green-500/40 hover:bg-green-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-400 transition group-hover:bg-green-500/20">
                            <Wallet size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Mark as Paid
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Record payment received
                            </p>
                        </div>
                    </button>


                    {/* Complete */}
                    <button
                        onClick={() =>
                            router.patch(
                                `/admin/bookings/${booking.id}/complete`
                            )
                        }
                        className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-left transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 transition group-hover:bg-emerald-500/20">
                            <CircleCheckBig size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Mark Completed
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Finish this reservation
                            </p>
                        </div>
                    </button>


                    {/* Cancel */}
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
                        className="group flex items-center gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-left transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-400 transition group-hover:bg-red-500/20">
                            <Ban size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Cancel Booking
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Cancel this reservation
                            </p>
                        </div>
                    </button>


                    {/* Delete */}
                    <button
                        onClick={() => {
                            if (
                                confirm(
                                    "Delete this booking permanently?"
                                )
                            ) {
                                router.delete(
                                    `/admin/bookings/${booking.id}`
                                );
                            }
                        }}
                        className="group flex items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-left transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/5"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-zinc-500 transition group-hover:bg-red-500/10 group-hover:text-red-400">
                            <Trash2 size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Delete Booking
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Permanently remove booking
                            </p>
                        </div>
                    </button>

                </div>

            </div>


            {/* Divider */}
            <div className="my-10 h-px bg-zinc-800" />


            {/* Communication */}
            <div>

                <div className="mb-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        Customer Communication
                    </h3>

                    <p className="mt-1 text-sm text-zinc-600">
                        Contact the customer using their registered details.
                    </p>
                </div>


                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {/* Email */}
                    <a
                        href={`mailto:${booking.email}`}
                        className="group flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 transition group-hover:bg-cyan-500/20">
                            <Mail size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Send Email
                            </p>

                            <p className="mt-0.5 max-w-[180px] truncate text-xs text-zinc-500">
                                {booking.email}
                            </p>
                        </div>
                    </a>


                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/91${booking.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 transition-all duration-200 hover:border-green-500/40 hover:bg-green-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-400 transition group-hover:bg-green-500/20">
                            <MessageCircle size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                WhatsApp Customer
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                {booking.phone}
                            </p>
                        </div>
                    </a>


                    {/* Call */}
                    <a
                        href={`tel:${booking.phone}`}
                        className="group flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-500/15"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 transition group-hover:bg-purple-500/20">
                            <Phone size={21} />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                Call Customer
                            </p>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                {booking.phone}
                            </p>
                        </div>
                    </a>

                </div>

            </div>

        </div>
    );
}