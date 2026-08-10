import { Head, Link } from "@inertiajs/react";
import {
  CalendarDays,
  ChevronRight,
  Mail,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

type Booking = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  number_of_travelers: number;
  start_date: string;
  total_cost: string;
  status: string;

  package: {
    id: number;
    title: string;
  };

  pricing: {
    id: number;
    vehicle_name: string;
  } | null;

  user: {
    id: number;
    name: string;
  };
};

export default function Index({
  bookings,
}: {
  bookings: Booking[];
}) {
  const [search, setSearch] = useState("");

  const badgeStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "border-yellow-500/20 bg-yellow-500/10 text-yellow-400";

      case "confirmed":
        return "border-blue-500/20 bg-blue-500/10 text-blue-400";

      case "paid":
        return "border-green-500/20 bg-green-500/10 text-green-400";

      case "cancelled":
        return "border-red-500/20 bg-red-500/10 text-red-400";

      default:
        return "border-zinc-700 bg-zinc-800 text-zinc-400";
    }
  };

  const filteredBookings = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return bookings;
    }

    return bookings.filter((booking) => {
      return (
        booking.full_name
          .toLowerCase()
          .includes(query) ||
        booking.email
          .toLowerCase()
          .includes(query) ||
        booking.package.title
          .toLowerCase()
          .includes(query) ||
        booking.status
          .toLowerCase()
          .includes(query) ||
        String(booking.id).includes(query)
      );
    });
  }, [bookings, search]);

  return (
    <div className="min-h-screen bg-black px-6 py-8 text-white md:px-8">

      <Head title="Booking Management" />

      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>Admin</span>
              <ChevronRight size={14} />
              <span className="text-zinc-300">
                Bookings
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              Bookings
            </h1>

            <p className="mt-2 text-zinc-500">
              Manage customer bookings and reservations.
            </p>
          </div>

          {/* Total */}
          <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20">
              <CalendarDays
                size={21}
                className="text-purple-400"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Total Bookings
              </p>

              <p className="mt-1 text-2xl font-bold">
                {bookings.length}
              </p>
            </div>

          </div>

        </div>

        {/* Search / Toolbar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="relative w-full sm:max-w-md">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search bookings..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
            />

          </div>

          <div className="text-sm text-zinc-500">
            Showing{" "}
            <span className="font-medium text-zinc-300">
              {filteredBookings.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-zinc-300">
              {bookings.length}
            </span>{" "}
            bookings
          </div>

        </div>

        {/* Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="border-b border-zinc-800 bg-zinc-950">

                <tr className="text-left">

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Booking
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Package
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Travel Date
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-zinc-800">

                {filteredBookings.map((booking) => (

                  <tr
                    key={booking.id}
                    className="group transition-colors hover:bg-zinc-950/70"
                  >

                    {/* Booking */}
                    <td className="whitespace-nowrap px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-xs font-bold text-purple-400">
                          #
                        </div>

                        <div>
                          <p className="font-semibold text-zinc-200">
                            {booking.id}
                          </p>

                          <p className="mt-0.5 text-xs text-zinc-600">
                            Booking ID
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Customer */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-zinc-300 ring-1 ring-zinc-700">
                          {booking.full_name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0">

                          <p className="font-semibold text-zinc-200">
                            {booking.full_name}
                          </p>

                          <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">

                            <Mail size={12} />

                            <span className="max-w-[220px] truncate">
                              {booking.email}
                            </span>

                          </div>

                        </div>

                      </div>

                    </td>

                    {/* Package */}
                    <td className="px-6 py-5">

                      <div>
                        <p className="font-medium text-zinc-300">
                          {booking.package.title}
                        </p>

                        <p className="mt-1 text-xs text-zinc-600">
                          Package #{booking.package.id}
                        </p>
                      </div>

                    </td>

                    {/* Travel Date */}
                    <td className="whitespace-nowrap px-6 py-5">

                      <div className="flex items-center gap-2">

                        <CalendarDays
                          size={16}
                          className="text-zinc-500"
                        />

                        <span className="text-sm text-zinc-300">
                          {new Date(
                            booking.start_date
                          ).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>

                      </div>

                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap px-6 py-5">

                      <p className="font-semibold text-green-400">
                        ₹{booking.total_cost}
                      </p>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold capitalize ${badgeStyle(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>

                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">

                      <Link
                        href={`/admin/bookings/${booking.id}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                      >
                        View
                        <ChevronRight size={15} />
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Empty State */}
          {filteredBookings.length === 0 && (

            <div className="border-t border-zinc-800 px-6 py-16 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                <Users
                  size={22}
                  className="text-zinc-500"
                />
              </div>

              <h3 className="mt-4 font-semibold text-zinc-300">
                No bookings found
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Try changing your search query.
              </p>

            </div>

          )}

        </div>

      </div>
    </div>
  );
}