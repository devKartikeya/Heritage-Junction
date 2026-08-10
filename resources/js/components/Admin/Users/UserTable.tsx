import { Link } from "@inertiajs/react";
import {
    Eye,
    Search,
    UsersRound,
} from "lucide-react";
import { useState } from "react";

export default function UserTable({
    users,
}: {
    users: any[];
}) {
    const [search, setSearch] = useState("");

    const filtered = users.filter((user) =>
        user.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
        user.email
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

            {/* Toolbar */}
            <div className="border-b border-zinc-800 px-5 py-5 sm:px-6">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-semibold">
                                All Users
                            </h2>

                            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                                {filtered.length}
                            </span>
                        </div>

                        <p className="mt-1 text-sm text-zinc-500">
                            Registered users and account activity.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-80">

                        <Search
                            size={18}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                        />

                    </div>

                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full min-w-[850px]">

                    <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/40 text-left">

                            <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                User
                            </th>

                            <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Bookings
                            </th>

                            <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Total Spent
                            </th>

                            <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Joined
                            </th>

                            <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Status
                            </th>

                            <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-zinc-800">

                        {filtered.map((user) => (

                            <tr
                                key={user.id}
                                className="group transition hover:bg-zinc-900/60"
                            >

                                {/* User */}
                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-700/10 text-sm font-bold text-purple-300 ring-1 ring-purple-500/20">
                                            {user.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div className="min-w-0">

                                            <p className="truncate font-medium text-zinc-100">
                                                {user.name}
                                            </p>

                                            <p className="mt-0.5 max-w-[250px] truncate text-sm text-zinc-500">
                                                {user.email}
                                            </p>

                                        </div>

                                    </div>

                                </td>

                                {/* Bookings */}
                                <td className="px-4 py-5">

                                    <span className="font-medium text-zinc-300">
                                        {user.bookings_count}
                                    </span>

                                </td>

                                {/* Total */}
                                <td className="px-4 py-5">

                                    <span className="font-semibold text-emerald-400">
                                        ₹{user.bookings_sum_total_cost ?? 0}
                                    </span>

                                </td>

                                {/* Joined */}
                                <td className="px-4 py-5 text-sm text-zinc-400">

                                    {new Date(
                                        user.created_at
                                    ).toLocaleDateString(undefined, {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}

                                </td>

                                {/* Status */}
                                <td className="px-4 py-5">

                                    <span
                                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                                            user.status === "blocked"
                                                ? "border-red-500/20 bg-red-500/10 text-red-400"
                                                : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                        }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${
                                                user.status === "blocked"
                                                    ? "bg-red-400"
                                                    : "bg-emerald-400"
                                            }`}
                                        />

                                        {user.status}
                                    </span>

                                </td>

                                {/* Action */}
                                <td className="px-6 py-5 text-right">

                                    <Link
                                        href={`/admin/users/${user.id}`}
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 opacity-80 transition hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400 group-hover:opacity-100"
                                        title="View user"
                                    >
                                        <Eye size={17} />
                                    </Link>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Empty State */}
            {filtered.length === 0 && (

                <div className="border-t border-zinc-800 px-6 py-16 text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-zinc-600">
                        <UsersRound size={22} />
                    </div>

                    <h3 className="mt-4 font-medium text-zinc-300">
                        No users found
                    </h3>

                    <p className="mt-1 text-sm text-zinc-600">
                        Try adjusting your search.
                    </p>

                </div>

            )}

        </div>
    );
}