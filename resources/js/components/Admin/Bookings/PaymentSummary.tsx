import {
    CarFront,
    CircleCheck,
    IndianRupee,
    ReceiptText,
} from "lucide-react";

type Props = {
    booking: any;
};

export default function PaymentSummary({
    booking,
}: Props) {
    return (
        <div className="mt-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 sm:p-8">

            {/* Header */}
            <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
                    <ReceiptText
                        size={20}
                        className="text-green-400"
                    />
                </div>

                <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                        Payment Summary
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Financial overview of this booking.
                    </p>
                </div>

            </div>

            {/* Financial Cards */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">

                {/* Vehicle */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Vehicle
                            </p>

                            <h3 className="mt-3 text-lg font-bold text-zinc-100">
                                {booking.pricing?.vehicle_name ?? "-"}
                            </h3>
                        </div>

                        <div className="rounded-xl bg-blue-500/10 p-3">
                            <CarFront
                                size={19}
                                className="text-blue-400"
                            />
                        </div>

                    </div>

                </div>

                {/* Per Person */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Per Person
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-blue-400">
                                ₹{booking.per_person_cost}
                            </h3>
                        </div>

                        <div className="rounded-xl bg-blue-500/10 p-3">
                            <IndianRupee
                                size={19}
                                className="text-blue-400"
                            />
                        </div>

                    </div>

                </div>

                {/* Total */}
                <div className="rounded-2xl border border-green-500/15 bg-green-500/[0.04] p-5 transition hover:border-green-500/25">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Total Amount
                            </p>

                            <h3 className="mt-3 text-2xl font-black text-green-400">
                                ₹{booking.total_cost}
                            </h3>
                        </div>

                        <div className="rounded-xl bg-green-500/10 p-3">
                            <IndianRupee
                                size={19}
                                className="text-green-400"
                            />
                        </div>

                    </div>

                </div>

            </div>

            {/* Status */}
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">

                <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-zinc-900 p-2">
                        <CircleCheck
                            size={17}
                            className="text-zinc-500"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-zinc-300">
                            Booking Status
                        </p>

                        <p className="text-xs text-zinc-600">
                            Current payment state
                        </p>
                    </div>

                </div>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-green-400">
                    {booking.status.toUpperCase()}
                </span>

            </div>

        </div>
    );
}