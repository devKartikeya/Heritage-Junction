import { Link } from "@inertiajs/react";
import { Eye } from "lucide-react";
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
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <input
                placeholder="Search user..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                className="mb-8 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
            />
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-zinc-800 text-left text-zinc-500">
                            <th className="pb-4">User</th>
                            <th>Bookings</th>
                            <th>Total Spent</th>
                            <th>Joined</th>
                            <th>Status
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-zinc-800"
                            >
                                <td className="py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold">
                                            {user.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                {user.name}
                                            </h3>
                                            <p className="text-sm text-zinc-500">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.bookings_count}</td>
                                <td>₹{user.bookings_sum_total_cost ?? 0} </td>
                                <td>
                                    {new Date(
                                        user.created_at
                                    ).toLocaleDateString()}
                                </td>
                                <td>
                                    <span
                                        className={`rounded-full px-3 py-2 text-sm ${user.status ===
                                                "blocked"
                                                ? "bg-red-500/20 text-red-400"
                                                : "bg-green-500/20 text-green-400"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        href={`/admin/users/${user.id}`}
                                        className="rounded-xl bg-purple-600 p-3 inline-flex hover:bg-purple-700"
                                    >
                                        <Eye size={18} />
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