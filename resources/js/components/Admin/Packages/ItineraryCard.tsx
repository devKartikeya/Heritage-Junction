import { useState } from "react";
import ItineraryModal from "./ItineraryModal";
import { router } from "@inertiajs/react";
import {
    CalendarDays,
    Clock3,
    Pencil,
    Trash2,
    Plus,
} from "lucide-react";

type Props = {
    pkg: any;
};

export default function ItineraryCard({ pkg }: Props) {
    const grouped = pkg.itineraries.reduce(
        (acc: any, item: any) => {
            if (!acc[item.day_number]) {
                acc[item.day_number] = [];
            }

            acc[item.day_number].push(item);

            return acc;
        },
        {}
    );

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<any>(null);

    return (
        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                        <CalendarDays
                            size={27}
                            className="text-orange-400"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white sm:text-2xl">
                            Package Itinerary
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Complete day-wise travel schedule.
                        </p>
                    </div>

                </div>

                <button
                    type="button"
                    onClick={() => {
                        setSelected(null);
                        setOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/10 transition-all duration-200 hover:bg-purple-500 hover:shadow-purple-600/20 active:scale-[0.98]"
                >
                    <Plus size={18} />
                    Add Activity
                </button>

            </div>


            {/* =====================================================
                DIVIDER
            ====================================================== */}

            <div className="my-8 h-px bg-zinc-800" />


            {/* =====================================================
                ITINERARY
            ====================================================== */}

            {Object.keys(grouped).length > 0 ? (

                <div className="space-y-12">

                    {Object.entries(grouped).map(
                        ([day, activities]: any) => (

                            <div key={day}>

                                {/* Day Header */}

                                <div className="mb-6 flex items-center gap-4">

                                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-600/20">

                                        {day}

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold text-white">
                                            Day {day}
                                        </h3>

                                        <p className="mt-1 text-sm text-zinc-500">
                                            {activities.length}{" "}
                                            {activities.length === 1
                                                ? "Activity"
                                                : "Activities"}
                                        </p>

                                    </div>

                                </div>


                                {/* Timeline */}

                                <div className="ml-6 space-y-5 border-l border-zinc-700 pl-8 sm:ml-6 sm:pl-10">

                                    {activities.map(
                                        (activity: any) => (

                                            <div
                                                key={activity.id}
                                                className="group relative"
                                            >

                                                {/* Timeline Dot */}

                                                <div className="absolute -left-[41px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-4 border-zinc-900 bg-purple-500 shadow-md shadow-purple-500/20 sm:-left-[51px]">
                                                </div>


                                                {/* Activity Card */}

                                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-950">

                                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                                        {/* Activity Information */}

                                                        <div className="min-w-0 flex-1">

                                                            {/* Time */}

                                                            <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-400">

                                                                <Clock3 size={15} />

                                                                <span>
                                                                    {activity.time}
                                                                </span>

                                                            </div>


                                                            {/* Title */}

                                                            <h4 className="text-lg font-semibold text-white">
                                                                {activity.title}
                                                            </h4>


                                                            {/* Description */}

                                                            {activity.description && (

                                                                <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
                                                                    {activity.description}
                                                                </p>

                                                            )}

                                                        </div>


                                                        {/* Actions */}

                                                        <div className="flex shrink-0 items-center gap-2">

                                                            {/* Edit */}

                                                            <button
                                                                type="button"
                                                                title="Edit activity"
                                                                onClick={() => {
                                                                    setSelected(activity);
                                                                    setOpen(true);
                                                                }}
                                                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                                                            >

                                                                <Pencil size={17} />

                                                            </button>


                                                            {/* Delete */}

                                                            <button
                                                                type="button"
                                                                title="Delete activity"
                                                                onClick={() => {
                                                                    if (
                                                                        confirm(
                                                                            "Delete this activity?"
                                                                        )
                                                                    ) {
                                                                        router.delete(
                                                                            `/admin/itinerary/${activity.id}`
                                                                        );
                                                                    }
                                                                }}
                                                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-400 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                                                            >

                                                                <Trash2 size={17} />

                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            ) : (

                /* =================================================
                   EMPTY STATE
                ================================================== */

                <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 px-6 py-12 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800">

                        <CalendarDays
                            size={25}
                            className="text-zinc-500"
                        />

                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                        No itinerary yet
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
                        Start building the travel schedule by adding
                        activities for each day of the package.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setSelected(null);
                            setOpen(true);
                        }}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500"
                    >

                        <Plus size={17} />

                        Add First Activity

                    </button>

                </div>

            )}


            {/* =====================================================
                MODAL
            ====================================================== */}

            <ItineraryModal
                open={open}
                onClose={() => {
                    setOpen(false);
                    setSelected(null);
                }}
                packageId={pkg.id}
                itinerary={selected}
            />

        </div>
    );
}