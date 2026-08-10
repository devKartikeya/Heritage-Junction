import InfoField from "./InfoField";
import {
    Package,
    CalendarDays,
    CircleDot,
    CarFront,
    Users,
    IndianRupee,
    BadgeCheck,
} from "lucide-react";

type Pricing = {
    id: number;
    vehicle_name: string;
    per_person_cost: number;
    minimum_persons: number;
};

type Props = {
    booking: any;
    form: any;
    pricings: Pricing[];
};

export default function PackageCard({
    booking,
    form,
    pricings,
}: Props) {

    const selectedPricing = pricings.find(
        p => p.id == form.data.pricing_id
    );

    const travelerCount = booking.number_of_travelers;

    const perPerson =
        selectedPricing?.per_person_cost ??
        booking.per_person_cost;

    const total =
        Number(perPerson) * travelerCount;

    return (
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 sm:p-8">

            {/* Header */}
            <div className="mb-8 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <Package
                        size={20}
                        className="text-cyan-400"
                    />
                </div>

                <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                        Package Information
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Journey details and booking configuration.
                    </p>
                </div>

            </div>

            <div className="space-y-5">

                {/* Package ID */}
                <InfoField label="Package ID">
                    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                            <Package
                                size={16}
                                className="text-purple-400"
                            />
                        </div>

                        <span className="text-sm font-semibold text-zinc-200">
                            #{booking.package.id}
                        </span>

                    </div>
                </InfoField>

                {/* Package Name */}
                <InfoField label="Package Name">
                    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
                            <BadgeCheck
                                size={16}
                                className="text-cyan-400"
                            />
                        </div>

                        <span className="text-sm font-semibold text-zinc-200">
                            {booking.package.title}
                        </span>

                    </div>
                </InfoField>

                {/* Travel Date */}
                <InfoField label="Travel Date">
                    <div className="relative">

                        <CalendarDays
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="date"
                            value={form.data.start_date}
                            onChange={(e) =>
                                form.setData(
                                    "start_date",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />

                    </div>
                </InfoField>

                {/* Booking Status */}
                <InfoField label="Booking Status">

                    <div className="relative">

                        <CircleDot
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <select
                            value={form.data.status}
                            onChange={(e) =>
                                form.setData(
                                    "status",
                                    e.target.value
                                )
                            }
                            className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        >
                            <option value="confirmed">
                                Confirmed
                            </option>

                            <option value="pending">
                                Pending
                            </option>

                            <option value="paid">
                                Paid
                            </option>

                            <option value="cancelled">
                                Cancelled
                            </option>

                            <option value="completed">
                                Completed
                            </option>
                        </select>

                    </div>

                </InfoField>

                {/* Vehicle */}
                <InfoField label="Vehicle">

                    <div className="relative">

                        <CarFront
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <select
                            value={form.data.pricing_id}
                            onChange={(e) =>
                                form.setData(
                                    "pricing_id",
                                    Number(e.target.value)
                                )
                            }
                            className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        >
                            {pricings.map((pricing) => (
                                <option
                                    key={pricing.id}
                                    value={pricing.id}
                                >
                                    {pricing.vehicle_name}
                                </option>
                            ))}
                        </select>

                    </div>

                </InfoField>

                {/* Divider */}
                <div className="flex items-center gap-4 py-2">
                    <div className="h-px flex-1 bg-zinc-800" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                        Pricing Summary
                    </span>

                    <div className="h-px flex-1 bg-zinc-800" />
                </div>

                {/* Travelers */}
                <InfoField label="Number of Travelers">
                    <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5">

                        <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                                <Users
                                    size={16}
                                    className="text-purple-400"
                                />
                            </div>

                            <span className="text-sm text-zinc-400">
                                Travelers
                            </span>

                        </div>

                        <span className="text-lg font-bold text-white">
                            {travelerCount}
                        </span>

                    </div>
                </InfoField>

                {/* Per Person */}
                <InfoField label="Per Person Cost">
                    <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5">

                        <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10">
                                <IndianRupee
                                    size={16}
                                    className="text-yellow-400"
                                />
                            </div>

                            <span className="text-sm text-zinc-400">
                                Per traveler
                            </span>

                        </div>

                        <span className="text-lg font-bold text-yellow-400">
                            ₹{perPerson}
                        </span>

                    </div>
                </InfoField>

                {/* Total */}
                <div className="rounded-2xl border border-green-500/15 bg-green-500/[0.04] p-5">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                Total Cost
                            </p>

                            <p className="mt-1 text-xs text-zinc-600">
                                {travelerCount} traveler
                                {travelerCount !== 1 ? "s" : ""} × ₹
                                {perPerson}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">

                            <IndianRupee
                                size={20}
                                className="text-green-400"
                            />

                            <span className="text-2xl font-black tracking-tight text-green-400">
                                {total}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}