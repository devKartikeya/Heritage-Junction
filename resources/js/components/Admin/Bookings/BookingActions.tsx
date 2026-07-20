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

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Booking Actions
          </h2>

          <p className="mt-2 text-zinc-500">
            Perform quick actions for this booking.
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold
                    ${booking.status === "pending"
              ? "bg-yellow-500/20 text-yellow-400"
              : booking.status === "confirmed"
                ? "bg-blue-500/20 text-blue-400"
                : booking.status === "paid"
                  ? "bg-green-500/20 text-green-400"
                  : booking.status === "completed"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-red-500/20 text-red-400"
            }`}
        >
          {booking.status.toUpperCase()}
        </span>

      </div>

      {/* Booking Actions */}
      <div className="mt-8">
        <h3 className="mb-5 text-lg font-semibold text-zinc-300">
          Booking Management
        </h3>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <button onClick={() =>
            router.patch(`/admin/bookings/${booking.id}/confirm`)
          } className="flex items-center justify-center gap-3 rounded-xl bg-indigo-600 p-4 font-semibold transition hover:bg-indigo-700">
            <BadgeCheck size={20} />
            Confirm Booking
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl bg-green-600 p-4 font-semibold transition hover:bg-green-700" onClick={() =>
            router.patch(`/admin/bookings/${booking.id}/paid`)
          }>
            <Wallet size={20} />
            Mark as Paid
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl bg-emerald-600 p-4 font-semibold transition hover:bg-emerald-700" onClick={() =>
            router.patch(`/admin/bookings/${booking.id}/complete`)
          }>
            <CircleCheckBig size={20} />
            Mark Completed
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl bg-red-600 p-4 font-semibold transition hover:bg-red-700" onClick={() => {
            if (
              confirm(
                "Cancel this booking?"
              )
            ) {
              router.patch(
                `/admin/bookings/${booking.id}/cancel`
              );
            }
          }}>
            <Ban size={20} />
            Cancel Booking
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl bg-zinc-700 p-4 font-semibold transition hover:bg-zinc-600" onClick={() => {
            if (
              confirm(
                "Delete this booking permanently?"
              )
            ) {
              router.delete(
                `/admin/bookings/${booking.id}`
              );
            }
          }}>
            <Trash2 size={20} />
            Delete Booking
          </button>

        </div>

      </div>

      {/* Communication */}

      <div className="mt-12">

        <h3 className="mb-5 text-lg font-semibold text-zinc-300">
          Customer Communication
        </h3>

        <div className="grid gap-7 book md:grid-cols-2 lg:grid-cols-3">

          <a
            href={`mailto:${booking.email}`}
            className="flex items-center justify-center gap-3 rounded-xl bg-cyan-600 p-4 font-semibold transition hover:bg-cyan-700"
          >
            <Mail size={20} />
            Send Email
          </a>

          <a
            href={`https://wa.me/91${booking.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl bg-green-600 p-4 font-semibold transition hover:bg-green-700"
          >
            <MessageCircle size={20} />
            WhatsApp Customer
          </a>

          <a
            href={`tel:${booking.phone}`}
            className="flex items-center justify-center gap-3 rounded-xl bg-purple-600 p-4 font-semibold transition hover:bg-purple-700"
          >
            <Phone size={20} />
            Call Customer
          </a>

        </div>

      </div>

    </div>
  );
}