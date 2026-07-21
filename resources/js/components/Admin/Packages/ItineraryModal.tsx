import { useForm } from "@inertiajs/react";

type Props = {
    open: boolean;
    onClose: () => void;
    packageId: number;
    itinerary?: any;
};

export default function ItineraryModal({
    open,
    onClose,
    packageId,
    itinerary,
}: Props) {

    const form = useForm({
        day_number: itinerary?.day_number ?? 1,
        sort_order: itinerary?.sort_order ?? 1,
        time: itinerary?.time ?? "",
        title: itinerary?.title ?? "",
        description: itinerary?.description ?? "",
    });

    if (!open) return null;

    function submit() {

        if (itinerary) {

            form.put(
                `/admin/itinerary/${itinerary.id}`,
                {
                    onSuccess: onClose,
                }
            );

        } else {

            form.post(
                `/admin/packages/${packageId}/itinerary`,
                {
                    onSuccess: onClose,
                }
            );
        }
    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold">
                    {itinerary
                        ? "Edit Activity"
                        : "Add Activity"}
                </h2>
                <div className="mt-5 space-y-6">
                    <input
                        type="number"
                        min={1}
                        value={form.data.day_number}
                        onChange={(e) =>
                            form.setData(
                                "day_number",
                                Number(e.target.value)
                            )
                        }
                        placeholder="Day Number"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2"
                    />
                    <input
                        type="number"
                        min={1}
                        value={form.data.sort_order}
                        onChange={(e) =>
                            form.setData(
                                "sort_order",
                                Number(e.target.value)
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2"
                    />
                    <input
                        type="time"
                        value={form.data.time}
                        onChange={(e) =>
                            form.setData(
                                "time",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2"
                    />
                    <input
                        value={form.data.title}
                        onChange={(e) =>
                            form.setData(
                                "title",
                                e.target.value
                            )
                        }
                        placeholder="Activity Title"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2"
                    />
                    <textarea
                        rows={3}
                        value={form.data.description}
                        onChange={(e) =>
                            form.setData(
                                "description",
                                e.target.value
                            )
                        }
                        placeholder="Description"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2"
                    />

                </div>
                <div className="mt-8 flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="rounded-xl border border-zinc-700 px-4 py-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={submit}
                        className="rounded-xl bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-700"
                    >
                        {itinerary
                            ? "Save Changes"
                            : "Add Activity"}
                    </button>
                </div>
            </div>
        </div>

    );
}