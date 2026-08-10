import UserHeader from "@/components/Admin/Users/UserHeader";
import UserInfoCard from "@/components/Admin/Users/UserInfoCard";
import UserStatsCard from "@/components/Admin/Users/UserStatsCard";
import UserBookingsCard from "@/components/Admin/Users/UserBookingsCard";
import UserActions from "@/components/Admin/Users/UserActions";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function Show({
    user,
}: {
    user: any;
}) {
    return (
        <div className="min-h-screen bg-black text-white">
            <Head title={`Manage ${user.name} Account`} />

            <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:py-10">

                {/* Top Navigation */}
                <div className="mb-8">
                    <Link
                        href="/admin/users"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-white"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform group-hover:-translate-x-1"
                        />

                        Back to Users
                    </Link>
                </div>

                {/* User Header */}
                <UserHeader user={user} />

                {/* Information + Statistics */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <UserInfoCard user={user} />

                    <UserStatsCard user={user} />
                </div>

                {/* Booking History */}
                <div className="mt-6">
                    <UserBookingsCard user={user} />
                </div>

                {/* Account Actions */}
                <div className="mt-6">
                    <UserActions user={user} />
                </div>

            </div>
        </div>
    );
}