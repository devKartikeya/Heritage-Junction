import { useEffect, useState } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    form: any;
    editingIndex: number | null;
};

const emptyActivity = {
    day_number: 1,
    time: "",
    title: "",
    description: "",
    sort_order: 1,
};

export default function ItineraryModal({
    open,
    onClose,
    form,
    editingIndex,
}: Props) {

    const [activity, setActivity] =
        useState(emptyActivity);

    useEffect(() => {

        if (!open) return;

        if (editingIndex !== null) {

            setActivity(
                form.data.itineraries[editingIndex]
            );

        } else {

            setActivity({
                ...emptyActivity,
                sort_order:
                    form.data.itineraries.length + 1,
            });

        }

    }, [open]);

    if (!open) return null;

    function save() {

        const list = [...form.data.itineraries];

        if (editingIndex === null) {

            list.push(activity);

        } else {

            list[editingIndex] = activity;

        }

        form.setData(
            "itineraries",
            list
        );

        onClose();

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

            <div className="w-full max-w-2xl rounded-3xl bg-zinc-900 p-5">

                <h2 className="text-2xl font-bold">

                    {editingIndex === null
                        ? "Add Activity"
                        : "Edit Activity"}

                </h2>

                <div className="mt-4 space-y-4">

                    <div className="grid grid-cols-2 gap-5">

<label htmlFor="" className="text-sm">Day number</label>
                        <input
                            type="number"
                            placeholder="Day Number"
                            value={activity.day_number}
                            onChange={(e) =>
                                setActivity({
                                    ...activity,
                                    day_number: Number(
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
                            value={activity.sort_order}
                            onChange={(e) =>
                                setActivity({
                                    ...activity,
                                    sort_order: Number(
                                        e.target.value
                                    ),
                                })
                            }
                            className="w-full rounded-xl border mt-1 border-zinc-700 bg-zinc-800 p-3"
                        />

                    </div>

<label htmlFor="" className="text-sm"></label>
                    <input
                        type="time"
                        value={activity.time}
                        onChange={(e) =>
                            setActivity({
                                ...activity,
                                time: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

<label htmlFor="" className="text-sm">Title</label>
                    <input
                        placeholder="Title"
                        value={activity.title}
                        onChange={(e) =>
                            setActivity({
                                ...activity,
                                title: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

<label htmlFor="" className="text-sm">Description</label>
                    <textarea
                        rows={3}
                        placeholder="Description"
                        value={activity.description}
                        onChange={(e) =>
                            setActivity({
                                ...activity,
                                description:
                                    e.target.value,
                            })
                        }
                        className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-3 mt-1"
                    />

                </div>

                <div className="mt-3 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-zinc-700 px-4 py-2 hover:bg-zinc-800"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={save}
                        className="rounded-xl bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-700"
                    >
                        Save Activity
                    </button>

                </div>

            </div>

        </div>

    );

}