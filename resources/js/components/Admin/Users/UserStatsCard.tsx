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
            bg: "bg-purple-500/20",
            text: "text-purple-400",
        },

        green: {
            bg: "bg-green-500/20",
            text: "text-green-400",
        },

        yellow: {
            bg: "bg-yellow-500/20",
            text: "text-yellow-400",
        },

        red: {
            bg: "bg-red-500/20",
            text: "text-red-400",
        },

        cyan: {
            bg: "bg-cyan-500/20",
            text: "text-cyan-400",
        },

    };

    return (

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold">

                    Statistics

                </h2>

                <p className="mt-2 text-zinc-500">

                    Booking summary of this user.

                </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

                {stats.map((stat: any) => (

                    <div
                        key={stat.title}
                        className={`rounded-2xl border border-zinc-800 bg-zinc-950 p-6 ${stat.wide ? "sm:col-span-2" : ""
                            }`}
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-zinc-500">

                                    {stat.title}

                                </p>

                                <h3 className="mt-3 text-3xl font-bold">

                                    {stat.value}

                                </h3>

                            </div>

                            <div
                                className={`rounded-2xl p-4 ${colors[stat.color].bg}`}
                            >

                                <stat.icon
                                    size={28}
                                    className={colors[stat.color].text}
                                />

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}