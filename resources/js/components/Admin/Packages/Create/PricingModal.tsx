import { useEffect, useState } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    form: any;
    editingIndex: number | null;
};

const emptyPricing = {
    vehicle_name: "",
    minimum_persons: 1,
    per_person_cost: 0,
    total_cost: 0,
    sort_order: 1,
};

export default function PricingModal({
    open,
    onClose,
    form,
    editingIndex,
}: Props) {

    const [pricing, setPricing] =
        useState(emptyPricing);

    useEffect(() => {

        if (!open) return;

        if (editingIndex !== null) {

            setPricing(
                form.data.pricings[editingIndex]
            );

        } else {

            setPricing({
                ...emptyPricing,
                sort_order:
                    form.data.pricings.length + 1,
            });

        }

    }, [open]);

    if (!open) return null;

    function save() {

        const list = [...form.data.pricings];

        if (editingIndex === null) {

            list.push(pricing);

        } else {

            list[editingIndex] = pricing;

        }

        form.setData("pricings", list);

        onClose();

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

            <div className="w-full max-w-xl rounded-3xl bg-zinc-900 p-5">

                <h2 className="text-2xl font-bold">

                    {editingIndex === null
                        ? "Add Vehicle"
                        : "Edit Vehicle"}

                </h2>

                <div className="mt-4 space-y-4">

                    <label htmlFor="" className="text-sm">Vehicle Name</label>
                    <input
                        placeholder="Vehicle Name"
                        value={pricing.vehicle_name}
                        onChange={(e) =>
                            setPricing({
                                ...pricing,
                                vehicle_name:
                                    e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

                    <label htmlFor="" className="text-sm">Minimum Travelers</label>
                    <input
                        type="number"
                        placeholder="Minimum Travelers"
                        value={
                            pricing.minimum_persons
                        }
                        onChange={(e) =>
                            setPricing({
                                ...pricing,
                                minimum_persons:
                                    Number(
                                        e.target.value
                                    ),
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

                    <label htmlFor="" className="text-sm">Per Person Cost</label>
                    <input
                        type="number"
                        placeholder="Per Person Cost"
                        value={
                            pricing.per_person_cost
                        }
                        onChange={(e) =>
                            setPricing({
                                ...pricing,
                                per_person_cost:
                                    Number(
                                        e.target.value
                                    ),
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

                    <label htmlFor="" className="text-sm">Total Cost</label>
                    <input
                        type="number"
                        placeholder="Total Cost"
                        value={pricing.total_cost}
                        onChange={(e) =>
                            setPricing({
                                ...pricing,
                                total_cost: Number(
                                    e.target.value
                                ),
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

                    <label htmlFor="" className="text-sm">Sort Order</label>
                    <input
                        type="number"
                        placeholder="Sort Order"
                        value={pricing.sort_order}
                        onChange={(e) =>
                            setPricing({
                                ...pricing,
                                sort_order: Number(
                                    e.target.value
                                ),
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

                </div>

                <div className="mt-5 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-zinc-700 px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={save}
                        className="rounded-xl bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-700"
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>

    );

}