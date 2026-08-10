import { router } from "@inertiajs/react";
import {
    Ban,
    ShieldCheck,
    AlertTriangle,
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

    const isActive = user.status === "active";

    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-xl shadow-black/20">

            {/* Header */}
            <div className="flex flex-col gap-5 border-b border-zinc-800/80 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                    <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                            isActive
                                ? "bg-red-500/10"
                                : "bg-green-500/10"
                        }`}
                    >
                        {isActive ? (
                            <Ban
                                size={21}
                                className="text-red-400"
                            />
                        ) : (
                            <ShieldCheck
                                size={21}
                                className="text-green-400"
                            />
                        )}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold tracking-tight">
                            Account Actions
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Manage this user's account access.
                        </p>
                    </div>

                </div>

                {/* Current Status */}
                <div
                    className={`flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${
                        isActive
                            ? "border-green-500/20 bg-green-500/10 text-green-400"
                            : "border-red-500/20 bg-red-500/10 text-red-400"
                    }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${
                            isActive
                                ? "bg-green-400"
                                : "bg-red-400"
                        }`}
                    />

                    {user.status}
                </div>

            </div>

            {/* Action Area */}
            <div className="flex flex-col gap-5 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-start gap-3">

                    <AlertTriangle
                        size={18}
                        className="mt-0.5 shrink-0 text-zinc-600"
                    />

                    <div>
                        <p className="text-sm font-medium text-zinc-300">
                            {isActive
                                ? "Restrict account access"
                                : "Restore account access"}
                        </p>

                        <p className="mt-1 max-w-xl text-sm leading-6 text-zinc-600">
                            {isActive
                                ? "Blocking this user will prevent them from accessing their account."
                                : "Unblocking this user will restore their account access."}
                        </p>
                    </div>

                </div>

                {/* Action Button */}
                <button
                    onClick={toggleStatus}
                    className={`inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        isActive
                            ? "border border-red-500/20 bg-red-500/10 text-red-400 hover:border-red-500/40 hover:bg-red-500/15"
                            : "border border-green-500/20 bg-green-500/10 text-green-400 hover:border-green-500/40 hover:bg-green-500/15"
                    }`}
                >
                    {isActive ? (
                        <>
                            <Ban size={17} />
                            Block User
                        </>
                    ) : (
                        <>
                            <ShieldCheck size={17} />
                            Unblock User
                        </>
                    )}
                </button>

            </div>

        </div>
    );
}