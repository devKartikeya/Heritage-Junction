import { Head, Link } from "@inertiajs/react";

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
  const badgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "confirmed":
        return "bg-blue-100 text-blue-700";

      case "paid":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <Head title="Booking Management"/>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-50">Bookings</h1>
          <p className="text-gray-500 mt-2">Manage customer bookings and reservations.</p>
        </div>
        <div className="bg-white shadow rounded-xl px-6 py-4">
          <p className="text-gray-500 text-sm">Total Bookings</p>
          <h2 className="text-3xl font-bold text-purple-600">{bookings.length}</h2>
        </div>
      </div>

      {/* Search */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search bookings..."
          className="w-full md:w-96 rounded-lg border border-gray-300 text-white px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto bg-black text-white rounded-xl shadow">

        <table className="min-w-full">
          <thead className="bg-gray-900 text-white">
            <tr className="text-left">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Package ID</th>
              <th className="px-6 py-4">Travel Date</th>
              {/* <th className="px-6 py-4">Travelers</th> */}
              {/* <th className="px-6 py-4">Vehicle</th> */}
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b hover:bg-gray-950 duration-100 transition"
              >
                <td className="px-6 py-5 font-semibold">
                  #{booking.id}
                </td>
                <td className="px-6 py-5">
                  <div>
                    <p className="font-semibold">
                      {booking.full_name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {booking.email}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">
                  #{booking.package.id}
                </td>

                <td className="px-6 py-5">
                  {new Date(
                    booking.start_date
                  ).toLocaleDateString()}
                </td>

                {/* <td className="px-6 py-5">
                  {booking.number_of_travelers}
                </td> */}

                {/* <td className="px-6 py-5">
                  {booking.pricing?.vehicle_name ?? "-"}
                </td> */}

                <td className="px-6 py-5 font-semibold text-green-600">
                  ₹{booking.total_cost}
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-2 rounded-full text-sm font-semibold ${badgeColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <Link
                    href={`/admin/bookings/${booking.id}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}