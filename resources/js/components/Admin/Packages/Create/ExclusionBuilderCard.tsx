import { useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    CircleX,
} from "lucide-react";
import ExclusionModal from "./ExclusionModal";

export default function ExclusionsBuilderCard({
    form,
}: {
    form: any;
}) {
    const [open, setOpen] = useState(false);

    const [editingIndex, setEditingIndex] =
        useState<number | null>(null);

    function remove(index: number) {
        form.setData(
            "exclusions",
            form.data.exclusions.filter(
                (_: any, i: number) => i !== index
            )
        );
    }

    const exclusions = [...form.data.exclusions].sort(
        (a: any, b: any) =>
            a.sort_order - b.sort_order
    );

    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-black/10">

            {/* Header */}
            <div className="border-b border-zinc-800 p-6 md:p-8">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 ring-1 ring-red-500/20">
                            <CircleX
                                size={24}
                                className="text-red-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                                Package Exclusions
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Everything excluded from this package.
                            </p>
                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            setEditingIndex(null);
                            setOpen(true);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-500 active:scale-[0.98]"
                    >
                        <Plus size={17} />
                        Add Exclusion
                    </button>

                </div>

            </div>

            {/* Content */}
            <div className="p-6 md:p-8">

                {/* Count */}
                {exclusions.length > 0 && (
                    <div className="mb-5">
                        <p className="text-sm text-zinc-500">
                            {exclusions.length}{" "}
                            {exclusions.length === 1
                                ? "exclusion"
                                : "exclusions"}{" "}
                            added
                        </p>
                    </div>
                )}

                {/* Empty State */}
                {exclusions.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 px-6 py-12 text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                            <CircleX
                                size={24}
                                className="text-red-400"
                            />
                        </div>

                        <h3 className="mt-4 font-semibold text-zinc-300">
                            No exclusions added
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                            Add anything that travelers will need to
                            pay for or arrange separately.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setEditingIndex(null);
                                setOpen(true);
                            }}
                            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-purple-500 hover:text-white"
                        >
                            <Plus size={16} />
                            Add your first exclusion
                        </button>

                    </div>
                )}

                {/* Exclusion List */}
                {exclusions.length > 0 && (
                    <div className="space-y-3">

                        {exclusions.map(
                            (
                                item: any,
                                index: number
                            ) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
                                >

                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                        {/* Content */}
                                        <div className="flex min-w-0 gap-4">

                                            {/* Number */}
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-red-400 ring-1 ring-red-500/10">
                                                {item.sort_order}
                                            </div>

                                            <div className="min-w-0">

                                                <h3 className="font-semibold text-white">
                                                    {item.exclusion}
                                                </h3>

                                                {item.description && (
                                                    <p className="mt-1.5 max-w-3xl text-sm leading-6 text-zinc-500">
                                                        {item.description}
                                                    </p>
                                                )}

                                            </div>

                                        </div>

                                        {/* Sort Order */}
                                        <span className="hidden shrink-0 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-500 sm:block">
                                            #{item.sort_order}
                                        </span>

                                    </div>

                                    {/* Actions */}
                                    <div className="mt-4 flex items-center justify-end gap-2 border-t border-zinc-800/70 pt-4">

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingIndex(index);
                                                setOpen(true);
                                            }}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-300 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                                        >
                                            <Pencil size={15} />
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                remove(index)
                                            }
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-300 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                                        >
                                            <Trash2 size={15} />
                                            Delete
                                        </button>

                                    </div>

                                </div>
                            )
                        )}

                    </div>
                )}

            </div>

            {/* Modal */}
            <ExclusionModal
                open={open}
                onClose={() => setOpen(false)}
                form={form}
                editingIndex={editingIndex}
            />

        </div>
    );
}