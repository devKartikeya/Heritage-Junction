import { Head, Link } from "@inertiajs/react";

type Stats = {
    bookings: number;
    packages: number;
    destinations: number;
    users: number;
};

type Booking = {
    id: number;
    full_name: string;
    start_date: string;
    package: {
        title: string;
    };
};

export default function Dashboard({
    stats,
    recentBookings,
}: {
    stats: Stats;
    recentBookings: Booking[];
}) {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="space-y-10 p-4">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <p className="mt-2 text-gray-500">
                        Welcome back! Here's what's happening at Heritage Junction.
                    </p>
                </div>
                {/* Statistics */}
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        title="Total Bookings"
                        value={stats.bookings}
                        color="bg-blue-500"
                    />
                    <StatCard
                        title="Packages"
                        value={stats.packages}
                        color="bg-green-500"
                    />
                    <StatCard
                        title="Destinations"
                        value={stats.destinations}
                        color="bg-purple-500"
                    />
                    <StatCard
                        title="Users"
                        value={stats.users}
                        color="bg-orange-500"
                    />
                </div>

                {/* Quick Actions */}
                <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-neutral-900">

                    <h2 className="text-xl font-semibold">Quick Actions</h2>
                    <div className="mt-6 flex flex-wrap gap-6">
                        <Link
                            href="/admin/bookings"
                            className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                        >
                            Manage Bookings
                        </Link>
                        <Link
                            href="/admin/packages"
                            className="rounded-lg bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
                        >
                            Manage Packages
                        </Link>
                        <Link
                            href="/admin/destinations"
                            className="rounded-lg bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-700"
                        >
                            Manage Destinations
                        </Link>
                        <Link
                            href="/admin/users"
                            className="rounded-lg bg-pink-600 px-5 py-3 text-white transition hover:bg-pink-700"
                        >
                            Manage Users
                        </Link>
                        <Link
                            href="/admin/faqs"
                            className="rounded-lg bg-orange-600 px-5 py-3 text-white transition hover:bg-orange-700"
                        >
                            Manage FAQs
                        </Link>
                    </div>
                </div>

                {/* Recent Bookings */}

                <div className="rounded-xl border bg-white shadow-sm dark:bg-neutral-900">
                    <div className="border-b px-6 py-4">
                        <h2 className="text-xl font-semibold">Recent Bookings</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50 dark:bg-neutral-800">
                                <tr>
                                    <th className="px-6 py-3 text-left">Customer
                                    </th>
                                    <th className="px-6 py-3 text-left">Package
                                    </th>
                                    <th className="px-6 py-3 text-left">Travel Date
                                    </th>
                                    <th className="px-6 py-3 text-right">Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {recentBookings.map((booking) => (
                                    <tr
                                        key={booking.id}
                                        className="border-t"
                                    >
                                        <td className="px-6 py-4 font-medium">
                                            {booking.full_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking.package.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking.start_date}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={`/admin/bookings/${booking.id}`}
                                                className="font-medium text-blue-600 hover:underline"
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
            </div>
        </>
    );
}

function StatCard({
    title,
    value,
    color,
}: {
    title: string;
    value: number;
    color: string;
}) {
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-neutral-900">
            <div className={`${color} h-2`} />
            <div className="p-6">
                <p className="text-sm text-gray-500">
                    {title}
                </p>
                <h2 className="mt-3 text-4xl font-bold">
                    {value}
                </h2>
            </div>
        </div>
    );
}