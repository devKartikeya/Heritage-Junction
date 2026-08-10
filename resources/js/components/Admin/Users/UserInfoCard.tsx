import InfoField from "@/components/Admin/Bookings/InfoField";
import {
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    Hash,
    UserRound,
} from "lucide-react";

export default function UserInfoCard({
    user,
}: {
    user: any;
}) {
    return (
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-7 shadow-xl shadow-black/10 backdrop-blur-sm">

            {/* Header */}
            <div className="mb-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                    <UserRound
                        size={22}
                        className="text-purple-400"
                    />
                </div>

                <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                        User Information
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Personal details of the registered user.
                    </p>
                </div>

            </div>

            {/* Information */}
            <div className="space-y-5">

                <InfoField label="User ID">
                    <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 transition-colors hover:border-zinc-700">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                            <Hash
                                size={16}
                                className="text-purple-400"
                            />
                        </div>

                        <span className="font-medium text-zinc-200">
                            #{user.id}
                        </span>

                    </div>
                </InfoField>

                <InfoField label="Full Name">
                    <div className="flex min-h-[52px] items-center rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 font-medium text-zinc-200 transition-colors hover:border-zinc-700">
                        {user.name}
                    </div>
                </InfoField>

                <InfoField label="Email Address">
                    <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 transition-colors hover:border-zinc-700">

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                            <Mail
                                size={16}
                                className="text-cyan-400"
                            />
                        </div>

                        <span className="truncate text-zinc-300">
                            {user.email}
                        </span>

                    </div>
                </InfoField>

                <InfoField label="Phone Number">
                    <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 transition-colors hover:border-zinc-700">

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                            <Phone
                                size={16}
                                className="text-green-400"
                            />
                        </div>

                        <span
                            className={
                                user.phone
                                    ? "text-zinc-300"
                                    : "text-zinc-600"
                            }
                        >
                            {user.phone || "Not Provided"}
                        </span>

                    </div>
                </InfoField>

                <InfoField label="Address">
                    <div className="flex min-h-[52px] items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 transition-colors hover:border-zinc-700">

                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                            <MapPin
                                size={16}
                                className="text-orange-400"
                            />
                        </div>

                        <span
                            className={
                                user.address
                                    ? "leading-6 text-zinc-300"
                                    : "leading-6 text-zinc-600"
                            }
                        >
                            {user.address || "Not Provided"}
                        </span>

                    </div>
                </InfoField>

                <InfoField label="Registered On">
                    <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 transition-colors hover:border-zinc-700">

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                            <CalendarDays
                                size={16}
                                className="text-yellow-400"
                            />
                        </div>

                        <span className="text-zinc-300">
                            {new Date(
                                user.created_at
                            ).toLocaleString()}
                        </span>

                    </div>
                </InfoField>

            </div>
        </div>
    );
}