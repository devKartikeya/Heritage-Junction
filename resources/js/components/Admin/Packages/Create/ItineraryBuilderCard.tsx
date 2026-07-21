import { useState } from "react";
import {
    CalendarDays,
    Plus,
    Pencil,
    Trash2,
    Clock3,
} from "lucide-react";
import ItineraryModal from "./ItineraryModal";

type Props = {
    form: any;
};

export default function ItineraryBuilderCard({
    form,
}: Props) {

    const [open, setOpen] = useState(false);

    const [editingIndex, setEditingIndex] =
        useState<number | null>(null);

    function remove(index: number) {

        form.setData(
            "itineraries",
            form.data.itineraries.filter(
                (_: any, i: number) => i !== index
            )
        );

    }

    const itineraries = [...form.data.itineraries].sort(
        (a: any, b: any) => {

            if (a.day_number !== b.day_number) {
                return (
                    a.day_number -
                    b.day_number
                );
            }

            return (
                a.sort_order -
                b.sort_order
            );

        }
    );

    return (

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-cyan-500/20 p-4">

                        <CalendarDays
                            size={28}
                            className="text-cyan-400"
                        />

                    </div>

                    <div>

                        <h2 className="text-3xl font-bold">
                            Package Itinerary
                        </h2>

                        <p className="mt-2 text-zinc-500">
                            Create day-wise activities.
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

                    Add Activity

                </button>

            </div>

            {/* Empty */}

            {itineraries.length === 0 && (

                <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-500">

                    No itinerary added.

                </div>

            )}

            {/* Activities */}

            <div className="mt-8 space-y-5">

                {itineraries.map(
                    (
                        item: any,
                        index: number
                    ) => (

                        <div
                            key={index}
                            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-400">

                                        Day {item.day_number}

                                    </span>

                                    <h3 className="mt-4 text-xl font-bold">

                                        {item.title}

                                    </h3>

                                    <div className="mt-2 flex items-center gap-2 text-zinc-400">

                                        <Clock3
                                            size={16}
                                        />

                                        {item.time}

                                    </div>

                                    {item.description && (

                                        <p className="mt-4 text-zinc-500">

                                            {item.description}

                                        </p>

                                    )}

                                </div>

                                <span className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-zinc-400">

                                    #{item.sort_order}

                                </span>

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
                                        remove(index)
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

            <ItineraryModal
                open={open}
                onClose={() =>
                    setOpen(false)
                }
                form={form}
                editingIndex={editingIndex}
            />

        </div>

    );

}