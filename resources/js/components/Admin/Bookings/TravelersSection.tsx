import TravelerCard from "./TravelerCard";

export default function TravelersSection({
    travelers,
}: {
    travelers: any[];
}) {
    const verified = travelers.filter(
        (t) =>
            t.verification_status.toLowerCase() === "verified"
    ).length;

    const pending = travelers.filter(
        (t) =>
            t.verification_status.toLowerCase() === "pending"
    ).length;

    const rejected = travelers.filter(
        (t) =>
            t.verification_status.toLowerCase() === "rejected"
    ).length;

    return (
        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">

            {/* Header */}
            <div className="border-b border-zinc-800 p-8">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* Title */}
                    <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                            <svg
                                className="h-6 w-6 text-purple-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.8}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19a3 3 0 01-6 0m9-6a6 6 0 00-12 0c0 2.25-1.5 3-1.5 3h15S18 15.25 18 13z"
                                />
                            </svg>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Travelers
                            </h2>

                            <p className="mt-1.5 text-sm text-zinc-500">
                                Review and verify traveler identity
                                documents.
                            </p>
                        </div>

                    </div>

                    {/* Verification Summary */}
                    <div className="flex flex-wrap gap-3">

                        <div className="flex items-center gap-2 rounded-xl border border-green-500/10 bg-green-500/5 px-4 py-2.5">
                            <span className="h-2 w-2 rounded-full bg-green-400" />

                            <span className="text-sm text-zinc-400">
                                Verified
                            </span>

                            <span className="text-sm font-bold text-green-400">
                                {verified}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-xl border border-yellow-500/10 bg-yellow-500/5 px-4 py-2.5">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />

                            <span className="text-sm text-zinc-400">
                                Pending
                            </span>

                            <span className="text-sm font-bold text-yellow-400">
                                {pending}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-xl border border-red-500/10 bg-red-500/5 px-4 py-2.5">
                            <span className="h-2 w-2 rounded-full bg-red-400" />

                            <span className="text-sm text-zinc-400">
                                Rejected
                            </span>

                            <span className="text-sm font-bold text-red-400">
                                {rejected}
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            {/* Traveler List */}
            <div className="p-8">

                {travelers.length === 0 ? (

                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 py-16 text-center">

                        <p className="text-sm font-medium text-zinc-400">
                            No travelers found
                        </p>

                        <p className="mt-1 text-sm text-zinc-600">
                            Traveler information will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="space-y-5">

                        {travelers.map((traveler, index) => (
                            <TravelerCard
                                key={traveler.id}
                                traveler={traveler}
                                index={index}
                            />
                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}