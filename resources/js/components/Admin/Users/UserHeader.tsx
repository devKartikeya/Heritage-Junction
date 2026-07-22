import { CalendarDays, Mail, ShieldCheck, ShieldX } from "lucide-react";

export default function UserHeader({
    user,
}: {
    user: any;
}) {

    return (

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="flex items-center gap-6">

                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-5xl font-bold">

                        {user.name.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h1 className="text-4xl font-bold">

                            {user.name}

                        </h1>

                        <div className="mt-3 flex items-center gap-2 text-zinc-400">

                            <Mail size={18} />

                            {user.email}

                        </div>

                        <div className="mt-2 flex items-center gap-2 text-zinc-500">

                            <CalendarDays size={18} />

                            Joined{" "}
                            {new Date(
                                user.created_at
                            ).toLocaleDateString()}

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="flex flex-wrap gap-4">

                    <div className="rounded-2xl bg-zinc-950 px-6 py-4">

                        <p className="text-xs uppercase tracking-widest text-zinc-500">

                            User ID

                        </p>

                        <p className="mt-2 text-xl font-bold">

                            #{user.id}

                        </p>

                    </div>

                    <div
                        className={`rounded-2xl px-6 py-4 ${
                            user.status === "blocked"
                                ? "bg-red-500/20"
                                : "bg-green-500/20"
                        }`}
                    >

                        <p className="text-xs uppercase tracking-widest text-zinc-400">

                            Status

                        </p>

                        <div className="mt-2 flex items-center gap-2">

                            {user.status === "blocked" ? (

                                <ShieldX
                                    className="text-red-400"
                                    size={20}
                                />

                            ) : (

                                <ShieldCheck
                                    className="text-green-400"
                                    size={20}
                                />

                            )}

                            <span
                                className={`font-semibold ${
                                    user.status === "blocked"
                                        ? "text-red-400"
                                        : "text-green-400"
                                }`}
                            >

                                {user.status}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}