import {
    CarFront,
    Pencil,
    Trash2,
    Plus,
    Users,
    IndianRupee,
} from "lucide-react";

import PricingModal from "./PricingModal";
import { router } from "@inertiajs/react";
import { useState } from "react";

type Props = {
    pkg: any;
};

export default function PricingCard({ pkg }: Props) {
    const [open, setOpen] = useState(false);
    const [selectedPricing, setSelectedPricing] = useState<any>(null);

    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl">

            {/* Header */}
            <div className="flex flex-col gap-5 border-b border-zinc-800 bg-zinc-950/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        <CarFront size={21} />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Vehicle Pricing
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Pricing options available for this package.
                        </p>
                    </div>

                </div>

                <button
                    type="button"
                    onClick={() => {
                        setSelectedPricing(null);
                        setOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
                >
                    <Plus size={18} />
                    Add Pricing
                </button>

            </div>


            {/* Pricing List */}
            <div className="p-6">

                {pkg.pricings?.length > 0 ? (

                    <div className="grid gap-5 lg:grid-cols-2">

                        {[...pkg.pricings]
                            .sort(
                                (a: any, b: any) =>
                                    a.sort_order - b.sort_order
                            )
                            .map((pricing: any) => (

                                <div
                                    key={pricing.id}
                                    className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition duration-300 hover:border-purple-500/40 hover:bg-zinc-950"
                                >

                                    {/* Vehicle Header */}
                                    <div className="flex items-start justify-between gap-4">

                                        <div className="flex min-w-0 items-center gap-3">

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/20">
                                                <CarFront size={22} />
                                            </div>

                                            <div className="min-w-0">

                                                <h3 className="truncate text-lg font-semibold text-white">
                                                    {pricing.vehicle_name}
                                                </h3>

                                                <div className="mt-1 flex items-center gap-2 text-sm text-zinc-500">

                                                    <Users size={14} />

                                                    <span>
                                                        Minimum{" "}
                                                        {pricing.minimum_persons}{" "}
                                                        Travelers
                                                    </span>

                                                </div>

                                            </div>

                                        </div>


                                        {/* Sort Order */}
                                        <span className="shrink-0 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-400">
                                            #{pricing.sort_order}
                                        </span>

                                    </div>


                                    {/* Pricing */}
                                    <div className="mt-6 grid grid-cols-2 gap-3">

                                        {/* Per Person */}
                                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">

                                            <div className="flex items-center gap-2 text-zinc-500">

                                                <IndianRupee size={14} />

                                                <p className="text-xs font-medium uppercase tracking-wider">
                                                    Per Person
                                                </p>

                                            </div>

                                            <p className="mt-2 text-xl font-bold text-yellow-400">
                                                ₹{pricing.per_person_cost}
                                            </p>

                                        </div>


                                        {/* Total Cost */}
                                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">

                                            <div className="flex items-center gap-2 text-zinc-500">

                                                <IndianRupee size={14} />

                                                <p className="text-xs font-medium uppercase tracking-wider">
                                                    Total Cost
                                                </p>

                                            </div>

                                            <p className="mt-2 text-xl font-bold text-green-400">
                                                ₹{pricing.total_cost}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Actions */}
                                    <div className="mt-5 flex gap-3 border-t border-zinc-800 pt-5">

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedPricing(pricing);
                                                setOpen(true);
                                            }}
                                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                                        >
                                            <Pencil size={16} />
                                            Edit
                                        </button>


                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (
                                                    confirm(
                                                        "Delete this pricing option?"
                                                    )
                                                ) {
                                                    router.delete(
                                                        `/admin/pricing/${pricing.id}`
                                                    );
                                                }
                                            }}
                                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
                                        >
                                            <Trash2 size={16} />
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))}

                    </div>

                ) : (

                    /* Empty State */
                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 px-6 py-12 text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-500">
                            <CarFront size={22} />
                        </div>

                        <h3 className="mt-4 font-semibold text-zinc-300">
                            No pricing options
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                            Add a vehicle pricing option for this package.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedPricing(null);
                                setOpen(true);
                            }}
                            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                        >
                            <Plus size={17} />
                            Add Pricing
                        </button>

                    </div>

                )}

            </div>


            {/* Modal */}
            <PricingModal
                open={open}
                onClose={() => {
                    setOpen(false);
                    setSelectedPricing(null);
                }}
                packageId={pkg.id}
                pricing={selectedPricing}
            />

        </div>
    );
}