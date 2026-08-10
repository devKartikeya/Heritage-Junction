import {
    Users,
    UserPlus,
    ShieldCheck,
    Ban,
    ArrowUpRight,
} from "lucide-react";

export default function StatsCards({
    stats,
}: {
    stats: any;
}) {
    const cards = [
        {
            title: "Total Users",
            value: stats.total,
            icon: Users,
            iconStyle: "bg-purple-500/10 text-purple-400",
            accent: "group-hover:border-purple-500/40",
        },
        {
            title: "Joined Today",
            value: stats.today,
            icon: UserPlus,
            iconStyle: "bg-emerald-500/10 text-emerald-400",
            accent: "group-hover:border-emerald-500/40",
        },
        {
            title: "Active Users",
            value: stats.active,
            icon: ShieldCheck,
            iconStyle: "bg-cyan-500/10 text-cyan-400",
            accent: "group-hover:border-cyan-500/40",
        },
        {
            title: "Blocked Users",
            value: stats.blocked,
            icon: Ban,
            iconStyle: "bg-red-500/10 text-red-400",
            accent: "group-hover:border-red-500/40",
        },
    ];

    return (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition duration-300 hover:-translate-y-0.5 ${card.accent}`}
                    >
                        {/* Top */}
                        <div className="flex items-start justify-between">
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconStyle}`}
                            >
                                <Icon size={21} />
                            </div>

                            <ArrowUpRight
                                size={17}
                                className="text-zinc-700 transition group-hover:text-zinc-400"
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-5">
                            <p className="text-sm text-zinc-500">
                                {card.title}
                            </p>

                            <p className="mt-1 text-3xl font-bold tracking-tight text-white">
                                {card.value}
                            </p>
                        </div>

                        {/* Subtle glow */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.02] blur-2xl" />
                    </div>
                );
            })}

        </div>
    );
}