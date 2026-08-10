type Props = {
    booking: any;
};

export default function BookingTimeline({
    booking,
}: Props) {
    return (
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Booking Timeline
                    </h2>

                    <p className="mt-2 text-sm text-zinc-500">
                        Lifecycle of this booking.
                    </p>
                </div>

                <div className="hidden rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-500 sm:block">
                    Activity
                </div>

            </div>


            {/* Timeline */}

            <div className="relative mt-10">

                {/* Vertical Line */}

                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-zinc-800" />


                <div className="space-y-10">

                    {/* Booking Created */}

                    <div className="relative flex gap-6">

                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-zinc-900 bg-green-500 shadow-lg shadow-green-500/20" />

                        <div className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Booking Created
                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        Customer submitted the booking request.
                                    </p>
                                </div>

                                <span className="w-fit rounded-lg bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-400">
                                    Created
                                </span>

                            </div>

                            <div className="mt-4 border-t border-zinc-800 pt-3 text-sm text-zinc-500">
                                {new Date(
                                    booking.created_at
                                ).toLocaleString()}
                            </div>

                        </div>

                    </div>


                    {/* Awaiting Manager Review */}

                    <div className="relative flex gap-6">

                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-zinc-900 bg-yellow-500 shadow-lg shadow-yellow-500/20" />

                        <div className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Awaiting Manager Review
                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        Customer submitted booking request.
                                    </p>
                                </div>

                                <span className="w-fit rounded-lg bg-yellow-500/10 px-3 py-1.5 text-xs font-semibold text-yellow-400">
                                    Pending
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Payment Pending */}

                    <div className="relative flex gap-6">

                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-zinc-900 bg-blue-500 shadow-lg shadow-blue-500/20" />

                        <div className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Payment Pending
                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        Waiting for quotation approval.
                                    </p>
                                </div>

                                <span className="w-fit rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-400">
                                    Pending
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}