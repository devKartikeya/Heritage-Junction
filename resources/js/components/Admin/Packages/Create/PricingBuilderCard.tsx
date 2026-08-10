import { useState } from "react";
import {
    CarFront,
    Pencil,
    Trash2,
    Plus,
    Users,
    IndianRupee,
} from "lucide-react";
import PricingModal from "./PricingModal";

export default function PricingBuilderCard({
    form,
}: {
    form: any;
}) {
    const [open, setOpen] = useState(false);

    const [editingIndex, setEditingIndex] =
        useState<number | null>(null);

    function removePricing(index: number) {
        form.setData(
            "pricings",
            form.data.pricings.filter(
                (_: any, i: number) => i !== index
            )
        );
    }

    const sortedPricings = [...form.data.pricings].sort(
        (a: any, b: any) =>
            a.sort_order - b.sort_order
    );

    return (
        <section className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">

            {/* Header */}
            <div className="border-b border-zinc-800 px-8 py-7">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/20">
                            <CarFront
                                size={24}
                                className="text-blue-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Vehicle Pricing
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Configure vehicle options and pricing for this package.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="hidden rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-500 sm:block">
                            {form.data.pricings.length}{" "}
                            {form.data.pricings.length === 1
                                ? "option"
                                : "options"}
                        </span>

                        <button
                            type="button"
                            onClick={() => {
                                setEditingIndex(null);
                                setOpen(true);
                            }}
                            className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
                        >
                            <Plus size={17} />
                            Add Vehicle
                        </button>

                    </div>

                </div>

            </div>

            {/* Pricing Content */}
            <div className="p-8">

                {sortedPricings.length === 0 ? (

                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 px-6 py-14 text-center">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900">
                            <CarFront
                                size={25}
                                className="text-zinc-600"
                            />
                        </div>

                        <h3 className="mt-4 font-semibold text-zinc-300">
                            No pricing options yet
                        </h3>

                        <p className="mx-auto mt-1 max-w-sm text-sm text-zinc-600">
                            Add a vehicle to define the pricing structure
                            for this package.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setEditingIndex(null);
                                setOpen(true);
                            }}
                            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-purple-500 hover:text-purple-400"
                        >
                            <Plus size={16} />
                            Add First Vehicle
                        </button>

                    </div>

                ) : (

                    <div className="grid gap-5 lg:grid-cols-2">

                        {sortedPricings.map(
                            (
                                pricing: any,
                                index: number
                            ) => (

                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/20"
                                >

                                    {/* Top Accent */}
                                    <div className="h-0.5 w-full bg-gradient-to-r from-blue-500/70 via-purple-500/50 to-transparent" />

                                    <div className="p-6">

                                        {/* Vehicle Header */}
                                        <div className="flex items-start justify-between gap-4">

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                                    <CarFront size={21} />
                                                </div>

                                                <div>

                                                    <h3 className="text-lg font-bold text-white">
                                                        {pricing.vehicle_name}
                                                    </h3>

                                                    <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                                                        <Users size={13} />

                                                        Minimum{" "}
                                                        {
                                                            pricing.minimum_persons
                                                        }{" "}
                                                        travelers
                                                    </div>

                                                </div>

                                            </div>

                                            <span className="shrink-0 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-400">
                                                #{pricing.sort_order}
                                            </span>

                                        </div>

                                        {/* Pricing */}
                                        <div className="mt-6 grid grid-cols-2 gap-3">

                                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                                    Per Person
                                                </p>

                                                <div className="mt-2 flex items-center gap-1">

                                                    <IndianRupee
                                                        size={17}
                                                        className="text-yellow-400"
                                                    />

                                                    <p className="text-xl font-bold text-yellow-400">
                                                        {
                                                            pricing.per_person_cost
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                                    Total Cost
                                                </p>

                                                <div className="mt-2 flex items-center gap-1">

                                                    <IndianRupee
                                                        size={17}
                                                        className="text-emerald-400"
                                                    />

                                                    <p className="text-xl font-bold text-emerald-400">
                                                        {
                                                            pricing.total_cost
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                        {/* Actions */}
                                        <div className="mt-5 flex items-center justify-end gap-2 border-t border-zinc-800 pt-5">

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setEditingIndex(
                                                        index
                                                    );
                                                    setOpen(true);
                                                }}
                                                className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                                            >
                                                <Pencil size={15} />
                                                Edit
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removePricing(
                                                        index
                                                    )
                                                }
                                                className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3.5 py-2 text-sm font-medium text-zinc-400 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                                            >
                                                <Trash2 size={15} />
                                                Delete
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

            </div>

            {/* Modal */}
            <PricingModal
                open={open}
                onClose={() => setOpen(false)}
                form={form}
                editingIndex={editingIndex}
            />

        </section>
    );
}