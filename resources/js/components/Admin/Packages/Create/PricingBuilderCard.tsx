import { useState } from "react";
import { CarFront, Pencil, Trash2, Plus } from "lucide-react";
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

    return (

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-blue-500/20 p-4">

                        <CarFront
                            size={28}
                            className="text-blue-400"
                        />

                    </div>

                    <div>

                        <h2 className="text-3xl font-bold">
                            Vehicle Pricing
                        </h2>

                        <p className="mt-2 text-zinc-500">
                            Add pricing options.
                        </p>

                    </div>

                </div>

                <button
                    onClick={() => {

                        setEditingIndex(null);

                        setOpen(true);

                    }}
                    className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700"
                >

                    <Plus size={18} />

                    Add Vehicle

                </button>

            </div>

            <div className="mt-8 space-y-5">

                {form.data.pricings.length === 0 && (

                    <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center text-zinc-500">

                        No pricing added.

                    </div>

                )}

                {form.data.pricings
                    .sort(
                        (a: any, b: any) =>
                            a.sort_order - b.sort_order
                    )
                    .map(
                        (
                            pricing: any,
                            index: number
                        ) => (

                            <div
                                key={index}
                                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <h3 className="text-xl font-bold">

                                            {pricing.vehicle_name}

                                        </h3>

                                        <p className="mt-1 text-zinc-500">

                                            Minimum{" "}
                                            {
                                                pricing.minimum_persons
                                            }{" "}
                                            Travelers

                                        </p>

                                    </div>

                                    <span className="rounded-xl bg-purple-500/20 px-4 py-2 text-purple-400">

                                        #{pricing.sort_order}

                                    </span>

                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-5">

                                    <div className="rounded-xl bg-zinc-900 p-4">

                                        <p className="text-xs uppercase tracking-widest text-zinc-500">

                                            Per Person

                                        </p>

                                        <p className="mt-2 text-2xl font-bold text-yellow-400">

                                            ₹
                                            {
                                                pricing.per_person_cost
                                            }

                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-zinc-900 p-4">

                                        <p className="text-xs uppercase tracking-widest text-zinc-500">

                                            Total Cost

                                        </p>

                                        <p className="mt-2 text-2xl font-bold text-green-400">

                                            ₹
                                            {pricing.total_cost}

                                        </p>

                                    </div>

                                </div>

                                <div className="mt-6 flex gap-3">

                                    <button
                                        onClick={() => {

                                            setEditingIndex(
                                                index
                                            );

                                            setOpen(true);

                                        }}
                                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 hover:bg-blue-700"
                                    >

                                        <Pencil
                                            size={18}
                                        />

                                        Edit

                                    </button>

                                    <button
                                        onClick={() =>
                                            removePricing(
                                                index
                                            )
                                        }
                                        className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-3 hover:bg-red-700"
                                    >

                                        <Trash2
                                            size={18}
                                        />

                                        Delete

                                    </button>

                                </div>

                            </div>

                        )
                    )}

            </div>

            <PricingModal
                open={open}
                onClose={() => setOpen(false)}
                form={form}
                editingIndex={editingIndex}
            />
        </div>

    );

}