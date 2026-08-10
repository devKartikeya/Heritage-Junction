import { useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    CheckCircle2,
} from "lucide-react";
import InclusionModal from "./InclusionModal";

export default function InclusionsBuilderCard({
    form,
}: {
    form: any;
}) {
    const [open, setOpen] = useState(false);

    const [editingIndex, setEditingIndex] =
        useState<number | null>(null);

    function remove(index: number) {
        form.setData(
            "inclusions",
            form.data.inclusions.filter(
                (_: any, i: number) => i !== index
            )
        );
    }

    const inclusions = [...form.data.inclusions].sort(
        (a: any, b: any) =>
            a.sort_order - b.sort_order
    );

    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-black/10">

            {/* Header */}
            <div className="border-b border-zinc-800 p-6 md:p-8">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                            <CheckCircle2
                                size={24}
                                className="text-emerald-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                                Package Inclusions
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Everything included in this package.
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
                        Add Inclusion
                    </button>

                </div>

            </div>

            {/* Content */}
            <div className="p-6 md:p-8">

                {/* Count */}
                {inclusions.length > 0 && (
                    <div className="mb-5 flex items-center justify-between">

                        <p className="text-sm text-zinc-500">
                            {inclusions.length}{" "}
                            {inclusions.length === 1
                                ? "inclusion"
                                : "inclusions"}{" "}
                            added
                        </p>

                    </div>
                )}

                {/* Empty State */}
                {inclusions.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 px-6 py-12 text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                            <CheckCircle2
                                size={24}
                                className="text-emerald-400"
                            />
                        </div>

                        <h3 className="mt-4 font-semibold text-zinc-300">
                            No inclusions added
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                            Add the services and experiences included
                            in this package.
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
                            Add your first inclusion
                        </button>

                    </div>
                )}

                {/* Inclusion List */}
                {inclusions.length > 0 && (
                    <div className="space-y-3">

                        {inclusions.map(
                            (
                                item: any,
                                index: number
                            ) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
                                >

                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                        {/* Left */}
                                        <div className="flex min-w-0 gap-4">

                                            {/* Number */}
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-sm font-bold text-emerald-400 ring-1 ring-emerald-500/10">
                                                {item.sort_order}
                                            </div>

                                            {/* Content */}
                                            <div className="min-w-0">

                                                <h3 className="font-semibold text-white">
                                                    {item.inclusion}
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
            <InclusionModal
                open={open}
                onClose={() => setOpen(false)}
                form={form}
                editingIndex={editingIndex}
            />

        </div>
    );
}