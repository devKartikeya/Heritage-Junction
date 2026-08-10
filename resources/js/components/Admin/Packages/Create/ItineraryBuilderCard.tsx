import { useState } from "react";
import {
    CalendarDays,
    Plus,
    Pencil,
    Trash2,
    Clock3,
    MapPin,
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

    const itineraries = form.data.itineraries
        .map((item: any, originalIndex: number) => ({
            ...item,
            _originalIndex: originalIndex,
        }))
        .sort((a: any, b: any) => {
            if (a.day_number !== b.day_number) {
                return a.day_number - b.day_number;
            }

            return a.sort_order - b.sort_order;
        });

    return (
        <section className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">

            {/* Header */}
            <div className="border-b border-zinc-800 px-8 py-7">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                            <CalendarDays
                                size={24}
                                className="text-cyan-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Package Itinerary
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Build a clear day-by-day travel schedule.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="hidden rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-500 sm:block">
                            {itineraries.length}{" "}
                            {itineraries.length === 1
                                ? "activity"
                                : "activities"}
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
                            Add Activity
                        </button>

                    </div>

                </div>

            </div>

            {/* Content */}
            <div className="p-8">

                {/* Empty State */}
                {itineraries.length === 0 ? (

                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 px-6 py-14 text-center">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900">
                            <CalendarDays
                                size={26}
                                className="text-zinc-600"
                            />
                        </div>

                        <h3 className="mt-4 font-semibold text-zinc-300">
                            No itinerary activities yet
                        </h3>

                        <p className="mx-auto mt-1 max-w-sm text-sm text-zinc-600">
                            Start building the travel schedule by adding
                            the first activity.
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
                            Add First Activity
                        </button>

                    </div>

                ) : (

                    <div className="relative">

                        {/* Timeline Line */}
                        <div className="absolute bottom-6 left-[23px] top-6 hidden w-px bg-zinc-800 md:block" />

                        <div className="space-y-5">

                            {itineraries.map(
                                (
                                    item: any,
                                    index: number
                                ) => (

                                    <div
                                        key={item._originalIndex}
                                        className="relative md:pl-16"
                                    >

                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 md:flex">

                                            <div className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/30" />

                                        </div>

                                        {/* Activity Card */}
                                        <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/20">

                                            {/* Top Accent */}
                                            <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500/60 via-purple-500/50 to-transparent" />

                                            <div className="p-6">

                                                {/* Top Row */}
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                                    <div className="flex items-start gap-4">

                                                        {/* Mobile Number */}
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-400 md:hidden">
                                                            {item.day_number}
                                                        </div>

                                                        <div>

                                                            {/* Day + Order */}
                                                            <div className="flex flex-wrap items-center gap-2">

                                                                <span className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-400">
                                                                    Day{" "}
                                                                    {
                                                                        item.day_number
                                                                    }
                                                                </span>

                                                                <span className="text-xs text-zinc-600">
                                                                    Activity{" "}
                                                                    {
                                                                        item.sort_order
                                                                    }
                                                                </span>

                                                            </div>

                                                            <h3 className="mt-3 text-lg font-bold text-white">
                                                                {
                                                                    item.title
                                                                }
                                                            </h3>

                                                        </div>

                                                    </div>

                                                    {/* Time */}
                                                    <div className="flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-cyan-400">

                                                        <Clock3
                                                            size={15}
                                                        />

                                                        {
                                                            item.time
                                                        }

                                                    </div>

                                                </div>

                                                {/* Description */}
                                                {item.description && (
                                                    <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
                                                        {
                                                            item.description
                                                        }
                                                    </p>
                                                )}

                                                {/* Footer */}
                                                <div className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

                                                    <div className="flex items-center gap-2 text-xs text-zinc-600">

                                                        <MapPin
                                                            size={14}
                                                        />

                                                        <span>
                                                            Day{" "}
                                                            {
                                                                item.day_number
                                                            }{" "}
                                                            Schedule
                                                        </span>

                                                    </div>

                                                    <div className="flex items-center gap-2">

                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setEditingIndex(
                                                                    item._originalIndex
                                                                );
                                                                setOpen(
                                                                    true
                                                                );
                                                            }}
                                                            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                                                        >
                                                            <Pencil
                                                                size={
                                                                    15
                                                                }
                                                            />
                                                            Edit
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                remove(
                                                                    item._originalIndex
                                                                )
                                                            }
                                                            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3.5 py-2 text-sm font-medium text-zinc-400 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                                                        >
                                                            <Trash2
                                                                size={
                                                                    15
                                                                }
                                                            />
                                                            Delete
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                )}

            </div>

            {/* Modal */}
            <ItineraryModal
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                form={form}
                editingIndex={editingIndex}
            />

        </section>
    );
}