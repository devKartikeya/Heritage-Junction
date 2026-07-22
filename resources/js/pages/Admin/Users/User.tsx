import UserHeader from "@/components/Admin/Users/UserHeader";
import UserInfoCard from "@/components/Admin/Users/UserInfoCard";
import UserStatsCard from "@/components/Admin/Users/UserStatsCard";
import UserBookingsCard from "@/components/Admin/Users/UserBookingsCard";
import UserActions from "@/components/Admin/Users/UserActions";
import { Link } from "@inertiajs/react";

export default function Show({
    user,
}: {
    user: any;
}) {

    return (

        <div className="min-h-screen bg-black text-white">

            <div className="mx-auto max-w-7xl px-8 py-10">

                <Link
                    href="/admin/users"
                    className="text-zinc-400 hover:text-purple-400"
                >
                    ← Back to Users
                </Link>

                <UserHeader user={user} />

                <div className="mt-10 grid gap-8 lg:grid-cols-2">

                    <UserInfoCard user={user} />

                    <UserStatsCard user={user} />

                </div>

                <UserBookingsCard user={user} />

                <UserActions user={user} />

            </div>

        </div>

    );

}