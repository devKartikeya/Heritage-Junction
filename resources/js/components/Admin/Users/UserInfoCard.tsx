import InfoField from "@/components/Admin/Bookings/InfoField";
import {
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    Hash,
} from "lucide-react";

export default function UserInfoCard({
    user,
}: {
    user: any;
}) {

    return (

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            {/* Header */}

            <div className="mb-8">

                <h2 className="text-3xl font-bold">

                    User Information

                </h2>

                <p className="mt-2 text-zinc-500">

                    Personal details of the registered user.

                </p>

            </div>

            <div className="space-y-6">

                <InfoField label="User ID">

                    <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">

                        <Hash
                            size={20}
                            className="text-purple-400"
                        />

                        <span>

                            #{user.id}

                        </span>

                    </div>

                </InfoField>

                <InfoField label="Full Name">

                    <div className="rounded-xl bg-zinc-800 p-4">

                        {user.name}

                    </div>

                </InfoField>

                <InfoField label="Email Address">

                    <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">

                        <Mail
                            size={18}
                            className="text-cyan-400"
                        />

                        {user.email}

                    </div>

                </InfoField>

                <InfoField label="Phone Number">

                    <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">

                        <Phone
                            size={18}
                            className="text-green-400"
                        />

                        {user.phone || "Not Provided"}

                    </div>

                </InfoField>

                <InfoField label="Address">

                    <div className="flex items-start gap-3 rounded-xl bg-zinc-800 p-4">

                        <MapPin
                            size={18}
                            className="mt-1 text-orange-400"
                        />

                        <span>

                            {user.address || "Not Provided"}

                        </span>

                    </div>

                </InfoField>

                <InfoField label="Registered On">

                    <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">

                        <CalendarDays
                            size={18}
                            className="text-yellow-400"
                        />

                        {new Date(
                            user.created_at
                        ).toLocaleString()}

                    </div>

                </InfoField>

            </div>

        </div>

    );

}