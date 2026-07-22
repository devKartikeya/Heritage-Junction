import { router } from "@inertiajs/react";
import {
    Ban,
    ShieldCheck,
} from "lucide-react";

export default function UserActions({
    user,
}: {
    user: any;
}) {

    function toggleStatus() {

        if (
            confirm(
                user.status === "active"
                    ? "Block this user?"
                    : "Unblock this user?"
            )
        ) {

            router.patch(
                `/admin/users/${user.id}/toggle`
            );

        }

    }

    return (

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-3xl font-bold">

                Account Actions

            </h2>

            <p className="mt-2 text-zinc-500">

                Manage this user's account access.

            </p>

            <div className="mt-8">

                <button
                    onClick={toggleStatus}
                    className={`flex items-center gap-3 rounded-2xl px-8 py-4 font-semibold transition ${
                        user.status === "active"
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-green-600 hover:bg-green-700"
                    }`}
                >

                    {user.status === "active" ? (

                        <>
                            <Ban size={22} />
                            Block User
                        </>

                    ) : (

                        <>
                            <ShieldCheck size={22} />
                            Unblock User
                        </>

                    )}

                </button>

            </div>

        </div>

    );

}