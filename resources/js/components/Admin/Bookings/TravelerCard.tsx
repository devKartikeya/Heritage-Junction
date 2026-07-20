import { router } from "@inertiajs/react";
import {
    BadgeCheck,
    CircleAlert,
    CircleX,
    Eye,
} from "lucide-react";

export default function TravelerCard({
    traveler,
    index,
}: {
    traveler: any;
    index: number;
}) {

    const badge = () => {

        switch (traveler.verification_status.toLowerCase()) {

            case "verified":
                return (
                    <span className="rounded-full bg-green-500/20 px-3 py-5 text-green-400">
                        Verified
                    </span>
                );

            case "rejected":
                return (
                    <span className="rounded-full bg-red-500/20 px-3 py-5 text-red-400">
                        Rejected
                    </span>
                );

            default:
                return (
                    <span className="rounded-full bg-yellow-500/20 px-3 py-4 text-yellow-400">
                        Pending
                    </span>
                );
        }
    };

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-xl font-semibold">
                        Traveler #{index + 1}
                    </h3>
                    <p className="text-zinc-500 mt-2">
                        {traveler.traveler_name}
                    </p>
                </div>
                {badge()}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
                <a
                    href={`/storage/${traveler.aadhar_path}`}
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 hover:border-purple-500"
                >
                    <Eye size={18} />
                    View Aadhaar
                </a>
                <button
                    onClick={() =>
                        router.patch(
                            `/admin/travelers/${traveler.id}/verify`
                        )
                    }
                    className="flex items-center gap-2 rounded-xl bg-green-600 px-3 py-2 hover:bg-green-700"
                >
                    <BadgeCheck size={18} />
                    Verify
                </button>
                <button
                    onClick={() =>
                        router.patch(
                            `/admin/travelers/${traveler.id}/reject`
                        )
                    }
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-3 py-2 hover:bg-red-700"
                >
                    <CircleX size={18} />
                    Reject
                </button>
            </div>
        </div>
    );
}