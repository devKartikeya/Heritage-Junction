import { useForm } from "@inertiajs/react";

type Props = {
    open: boolean;
    onClose: () => void;
    packageId: number;
    pricing?: any;
};

export default function PricingModal({
    open,
    onClose,
    packageId,
    pricing,
}: Props) {
    const form = useForm({
        vehicle_name: pricing?.vehicle_name ?? "",
        per_person_cost: pricing?.per_person_cost ?? "",
        total_cost: pricing?.total_cost ?? "",
        minimum_persons: pricing?.minimum_persons ?? 1,
        sort_order: pricing?.sort_order ?? 1,
    });

    if (!open) return null;

    const submit = () => {
        if (pricing) {
            form.put(`/admin/pricing/${pricing.id}`, {
                onSuccess: () => onClose(),
            });
        } else {
            form.post(`/admin/packages/${packageId}/pricing`, {
                onSuccess: () => onClose(),
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                <h2 className="text-3xl font-bold">
                    {pricing ? "Edit Pricing" : "Add Pricing"}
                </h2>

                <p className="mt-2 text-zinc-500">
                    Configure a vehicle pricing option.
                </p>

                <div className="mt-8 space-y-6">

                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Vehicle Name
                        </label>

                        <input
                            value={form.data.vehicle_name}
                            onChange={(e) =>
                                form.setData(
                                    "vehicle_name",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Per Person Cost
                            </label>

                            <input
                                type="number"
                                value={form.data.per_person_cost}
                                onChange={(e) =>
                                    form.setData(
                                        "per_person_cost",
                                        Number(e.target.value)
                                    )
                                }
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Total Cost
                            </label>

                            <input
                                type="number"
                                value={form.data.total_cost}
                                onChange={(e) =>
                                    form.setData(
                                        "total_cost",
                                        Number(e.target.value)
                                    )
                                }
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Minimum Persons
                            </label>

                            <input
                                type="number"
                                min={1}
                                value={form.data.minimum_persons}
                                onChange={(e) =>
                                    form.setData(
                                        "minimum_persons",
                                        Number(e.target.value)
                                    )
                                }
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Sort Order
                            </label>

                            <input
                                type="number"
                                value={form.data.sort_order}
                                onChange={(e) =>
                                    form.setData(
                                        "sort_order",
                                        Number(e.target.value)
                                    )
                                }
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                            />
                        </div>

                    </div>

                </div>

                <div className="mt-10 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-zinc-700 px-6 py-3 hover:bg-zinc-800"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={submit}
                        disabled={form.processing}
                        className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700 disabled:opacity-50"
                    >
                        {pricing ? "Save Changes" : "Add Pricing"}
                    </button>

                </div>

            </div>

        </div>
    );
}