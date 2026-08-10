import {
    CalendarDays,
    Mail,
    ShieldCheck,
    ShieldX,
    UserRound,
} from "lucide-react";

export default function UserHeader({
    user,
}: {
    user: any;
}) {
    const isBlocked = user.status === "blocked";

    const joinedDate = new Date(
        user.created_at
    ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">

            {/* Top Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500" />

            <div className="p-6 sm:p-8">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* User Identity */}
                    <div className="flex items-center gap-5">

                        {/* Avatar */}
                        <div className="relative shrink-0">

                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-3xl font-bold shadow-lg shadow-purple-900/20 sm:h-24 sm:w-24 sm:text-4xl">
                                {user.name
                                    .charAt(0)
                                    .toUpperCase()}
                            </div>

                            {/* Online / Active indicator */}
                            <span
                                className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-zinc-900 ${
                                    isBlocked
                                        ? "bg-red-500"
                                        : "bg-green-500"
                                }`}
                            />

                        </div>

                        {/* Details */}
                        <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-3">

                                <h1 className="truncate text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    {user.name}
                                </h1>

                                <span
                                    className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${
                                        isBlocked
                                            ? "border-red-500/20 bg-red-500/10 text-red-400"
                                            : "border-green-500/20 bg-green-500/10 text-green-400"
                                    }`}
                                >
                                    {user.status}
                                </span>

                            </div>

                            <div className="mt-3 flex flex-col gap-2 text-sm">

                                <div className="flex items-center gap-2 text-zinc-400">

                                    <Mail
                                        size={16}
                                        className="shrink-0 text-zinc-500"
                                    />

                                    <span className="truncate">
                                        {user.email}
                                    </span>

                                </div>

                                <div className="flex items-center gap-2 text-zinc-500">

                                    <CalendarDays
                                        size={16}
                                        className="shrink-0"
                                    />

                                    <span>
                                        Joined {joinedDate}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Account Meta */}
                    <div className="flex flex-wrap gap-3 lg:justify-end">

                        {/* User ID */}
                        <div className="min-w-[130px] rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4">

                            <div className="flex items-center gap-2">

                                <UserRound
                                    size={15}
                                    className="text-purple-400"
                                />

                                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                                    User ID
                                </p>

                            </div>

                            <p className="mt-2 text-xl font-bold text-white">
                                #{user.id}
                            </p>

                        </div>

                        {/* Status */}
                        <div
                            className={`min-w-[150px] rounded-2xl border px-5 py-4 ${
                                isBlocked
                                    ? "border-red-500/20 bg-red-500/5"
                                    : "border-green-500/20 bg-green-500/5"
                            }`}
                        >

                            <div className="flex items-center gap-2">

                                {isBlocked ? (
                                    <ShieldX
                                        size={16}
                                        className="text-red-400"
                                    />
                                ) : (
                                    <ShieldCheck
                                        size={16}
                                        className="text-green-400"
                                    />
                                )}

                                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                                    Account
                                </p>

                            </div>

                            <p
                                className={`mt-2 font-semibold capitalize ${
                                    isBlocked
                                        ? "text-red-400"
                                        : "text-green-400"
                                }`}
                            >
                                {isBlocked
                                    ? "Blocked"
                                    : "Active"}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}