import {
    Users,
    UserPlus,
    ShieldCheck,
    Ban,
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
            color: "text-purple-400",
        },

        {
            title: "Joined Today",
            value: stats.today,
            icon: UserPlus,
            color: "text-green-400",
        },

        {
            title: "Active",
            value: stats.active,
            icon: ShieldCheck,
            color: "text-cyan-400",
        },

        {
            title: "Blocked",
            value: stats.blocked,
            icon: Ban,
            color: "text-red-400",
        },

    ];

    return (

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
                >

                    <card.icon
                        size={32}
                        className={card.color}
                    />

                    <h3 className="mt-6 text-zinc-500">

                        {card.title}

                    </h3>

                    <p className="mt-2 text-4xl font-bold">

                        {card.value}

                    </p>

                </div>

            ))}

        </div>

    );

}