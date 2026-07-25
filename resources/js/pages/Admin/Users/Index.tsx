import StatsCards from "@/components/Admin/Users/StatsCards";
import UserTable from "@/components/Admin/Users/UserTable";
import { Head } from "@inertiajs/react";

export default function Index({
    users,
    stats,
}: {
    users: any[];
    stats: any;
}) {

    return (
        <div className="min-h-screen bg-black text-white">
            <Head title="User Management"/>
            <div className="mx-auto max-w-7xl px-8 py-10">
                <div>
                    <h1 className="text-5xl font-bold">User Management</h1>
                    <p className="mt-3 text-zinc-500">
                        View and manage registered users.
                    </p>
                </div>
                {/* Stats Cards */}
                <StatsCards stats={stats} />
                {/* Users Table List */}
                <UserTable users={users} />
            </div>
        </div>
    );
}