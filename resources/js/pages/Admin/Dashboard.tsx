import { Head, Link } from "@inertiajs/react";
import {
    CalendarDays,
    ChevronRight,
    ClipboardList,
    Compass,
    HelpCircle,
    MapPin,
    Package,
    Users,
} from "lucide-react";

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

            <div className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    {/* =====================================================
                        HEADER
                    ====================================================== */}
                    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                                    Administrator
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Dashboard
                            </h1>

                            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
                                Welcome back! Here's what's happening at
                                Heritage Junction.
                            </p>
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-400 shadow-lg">
                            <span className="text-zinc-600">Admin Panel</span>
                            <span className="mx-2 text-zinc-700">/</span>
                            <span className="text-zinc-300">
                                Overview
                            </span>
                        </div>

                    </div>


                    {/* =====================================================
                        STATISTICS
                    ====================================================== */}
                    <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        <StatCard
                            title="Total Bookings"
                            value={stats.bookings}
                            icon={<ClipboardList size={21} />}
                            color="purple"
                        />

                        <StatCard
                            title="Active Packages"
                            value={stats.packages}
                            icon={<Package size={21} />}
                            color="blue"
                        />

                        <StatCard
                            title="Destinations"
                            value={stats.destinations}
                            icon={<MapPin size={21} />}
                            color="pink"
                        />

                        <StatCard
                            title="Registered Users"
                            value={stats.users}
                            icon={<Users size={21} />}
                            color="emerald"
                        />

                    </div>


                    {/* =====================================================
                        QUICK ACTIONS
                    ====================================================== */}
                    <section className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-2xl shadow-black/30 sm:p-6">

                        <div className="mb-6 flex items-center justify-between">

                            <div>
                                <h2 className="text-lg font-semibold">
                                    Quick Actions
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Quickly access the main management areas.
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

                            <QuickAction
                                href="/admin/bookings"
                                icon={<CalendarDays size={19} />}
                                title="Bookings"
                                description="Manage reservations"
                            />

                            <QuickAction
                                href="/admin/packages"
                                icon={<Package size={19} />}
                                title="Packages"
                                description="Manage tour packages"
                            />

                            <QuickAction
                                href="/admin/destinations"
                                icon={<Compass size={19} />}
                                title="Destinations"
                                description="Manage destinations"
                            />

                            <QuickAction
                                href="/admin/users"
                                icon={<Users size={19} />}
                                title="Users"
                                description="Manage users"
                            />

                            <QuickAction
                                href="/admin/faqs"
                                icon={<HelpCircle size={19} />}
                                title="FAQs"
                                description="Manage FAQs"
                            />

                        </div>

                    </section>


                    {/* =====================================================
                        RECENT BOOKINGS
                    ====================================================== */}
                    <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/30">

                        {/* Section Header */}
                        <div className="flex flex-col gap-3 border-b border-zinc-800 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                            <div>
                                <h2 className="text-lg font-semibold">
                                    Recent Bookings
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Latest reservations made by customers.
                                </p>
                            </div>

                            <Link
                                href="/admin/bookings"
                                className="group flex w-fit items-center gap-1 text-sm font-medium text-purple-400 transition hover:text-purple-300"
                            >
                                View all

                                <ChevronRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>

                        </div>


                        {/* Table */}
                        <div className="overflow-x-auto">

                            <table className="min-w-full">

                                <thead>
                                    <tr className="border-b border-zinc-800 bg-zinc-950/50">

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Customer
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Package
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Travel Date
                                        </th>

                                        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Action
                                        </th>

                                    </tr>
                                </thead>


                                <tbody>

                                    {recentBookings.length > 0 ? (

                                        recentBookings.map((booking) => (

                                            <tr
                                                key={booking.id}
                                                className="group border-b border-zinc-800/70 transition hover:bg-zinc-800/30"
                                            >

                                                {/* Customer */}
                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-3">

                                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-sm font-semibold text-purple-400">
                                                            {booking.full_name
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-200">
                                                                {booking.full_name}
                                                            </p>

                                                            <p className="text-xs text-zinc-600">
                                                                Booking #{booking.id}
                                                            </p>
                                                        </div>

                                                    </div>

                                                </td>


                                                {/* Package */}
                                                <td className="px-6 py-5">

                                                    <span className="text-sm text-zinc-300">
                                                        {booking.package.title}
                                                    </span>

                                                </td>


                                                {/* Date */}
                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-2 text-sm text-zinc-400">

                                                        <CalendarDays
                                                            size={15}
                                                            className="text-zinc-600"
                                                        />

                                                        {booking.start_date}

                                                    </div>

                                                </td>


                                                {/* Action */}
                                                <td className="px-6 py-5 text-right">

                                                    <Link
                                                        href={`/admin/bookings/${booking.id}`}
                                                        className="inline-flex items-center gap-1 rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                                                    >
                                                        View

                                                        <ChevronRight size={14} />
                                                    </Link>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan={4}
                                                className="px-6 py-14 text-center"
                                            >

                                                <div className="mx-auto flex max-w-sm flex-col items-center">

                                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-500">
                                                        <ClipboardList size={22} />
                                                    </div>

                                                    <p className="font-medium text-zinc-300">
                                                        No recent bookings
                                                    </p>

                                                    <p className="mt-1 text-sm text-zinc-600">
                                                        New customer bookings
                                                        will appear here.
                                                    </p>

                                                </div>

                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </section>

                </div>

            </div>
        </>
    );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
    title,
    value,
    icon,
    color,
}: {
    title: string;
    value: number;
    icon: React.ReactNode;
    color: "purple" | "blue" | "pink" | "emerald";
}) {

    const styles = {
        purple: {
            icon: "bg-purple-500/10 text-purple-400",
            glow: "group-hover:border-purple-500/30",
        },
        blue: {
            icon: "bg-blue-500/10 text-blue-400",
            glow: "group-hover:border-blue-500/30",
        },
        pink: {
            icon: "bg-pink-500/10 text-pink-400",
            glow: "group-hover:border-pink-500/30",
        },
        emerald: {
            icon: "bg-emerald-500/10 text-emerald-400",
            glow: "group-hover:border-emerald-500/30",
        },
    };

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 ${styles[color].glow}`}
        >

            {/* Subtle top glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm text-zinc-500">
                        {title}
                    </p>

                    <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                        {value}
                    </p>

                </div>

                <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles[color].icon}`}
                >
                    {icon}
                </div>

            </div>

        </div>
    );
}


/* =========================================================
   QUICK ACTION
========================================================= */

function QuickAction({
    href,
    icon,
    title,
    description,
}: {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <Link
            href={href}
            className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-zinc-800/60"
        >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/15">
                {icon}
            </div>

            <div className="min-w-0">

                <p className="text-sm font-semibold text-zinc-200 transition group-hover:text-white">
                    {title}
                </p>

                <p className="mt-0.5 truncate text-xs text-zinc-600">
                    {description}
                </p>

            </div>

            <ChevronRight
                size={16}
                className="ml-auto shrink-0 text-zinc-700 transition group-hover:translate-x-0.5 group-hover:text-purple-400"
            />

        </Link>
    );
}