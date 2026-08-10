import {
    CalendarCheck,
    Clock3,
    CircleX,
    IndianRupee,
    PlaneTakeoff,
} from "lucide-react";

export default function UserStatsCard({
    user,
}: {
    user: any;
}) {
    const totalBookings = user.bookings.length;

    const confirmed = user.bookings.filter(
        (booking: any) => booking.status === "Confirmed"
    ).length;

    const pending = user.bookings.filter(
        (booking: any) => booking.status === "Pending"
    ).length;

    const cancelled = user.bookings.filter(
        (booking: any) => booking.status === "Cancelled"
    ).length;

    const totalSpent = user.bookings.reduce(
        (sum: number, booking: any) =>
            sum + Number(booking.total_cost),
        0
    );

    const stats = [
        {
            title: "Total Bookings",
            value: totalBookings,
            icon: PlaneTakeoff,
            color: "purple",
        },
        {
            title: "Confirmed",
            value: confirmed,
            icon: CalendarCheck,
            color: "green",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            color: "yellow",
        },
        {
            title: "Cancelled",
            value: cancelled,
            icon: CircleX,
            color: "red",
        },
        {
            title: "Total Spent",
            value: `₹${totalSpent.toLocaleString()}`,
            icon: IndianRupee,
            color: "cyan",
            wide: true,
        },
    ];

    const colors: any = {
        purple: {
            iconBg: "bg-purple-500/10",
            icon: "text-purple-400",
            glow: "group-hover:bg-purple-500/5",
        },
        green: {
            iconBg: "bg-emerald-500/10",
            icon: "text-emerald-400",
            glow: "group-hover:bg-emerald-500/5",
        },
        yellow: {
            iconBg: "bg-amber-500/10",
            icon: "text-amber-400",
            glow: "group-hover:bg-amber-500/5",
        },
        red: {
            iconBg: "bg-red-500/10",
            icon: "text-red-400",
            glow: "group-hover:bg-red-500/5",
        },
        cyan: {
            iconBg: "bg-cyan-500/10",
            icon: "text-cyan-400",
            glow: "group-hover:bg-cyan-500/5",
        },
    };

    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-xl shadow-black/20">

            {/* Header */}
            <div className="mb-7">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Statistics
                        </h2>

                        <p className="mt-1.5 text-sm text-zinc-500">
                            Booking activity and spending overview.
                        </p>
                    </div>

                    <div className="hidden rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 sm:block">
                        <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                            Overview
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-3 sm:grid-cols-2">

                {stats.map((stat: any) => {
                    const color = colors[stat.color];

                    return (
                        <div
                            key={stat.title}
                            className={`group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 ${
                                stat.wide ? "sm:col-span-2" : ""
                            }`}
                        >
                            {/* Subtle background glow */}
                            <div
                                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition ${color.glow}`}
                            />

                            <div className="relative flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                                        {stat.title}
                                    </p>

                                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
                                        {stat.value}
                                    </p>
                                </div>

                                <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${color.iconBg}`}
                                >
                                    <stat.icon
                                        size={21}
                                        strokeWidth={2}
                                        className={color.icon}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}