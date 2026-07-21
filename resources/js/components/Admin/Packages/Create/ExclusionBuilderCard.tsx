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
            "inclusions",
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

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-green-500/20 p-4">

                        <CircleX
                            size={28}
                            className="text-red-400"
                        />

                    </div>

                    <div>

                        <h2 className="text-3xl font-bold">
                            Package Exclusions
                        </h2>

                        <p className="mt-2 text-zinc-500">
                            Everything excluded in this package.
                        </p>

                    </div>

                </div>

                <button
                    onClick={() => {

                        setEditingIndex(null);

                        setOpen(true);

                    }}
                    className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 hover:bg-purple-700"
                >

                    <Plus size={18} />

                    Add Exclusion

                </button>

            </div>

            {exclusions.length === 0 && (

                <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 p-8 text-center text-zinc-500">

                    No exclusions added.

                </div>

            )}

            <div className="mt-8 space-y-4">

                {exclusions.map(
                    (
                        item: any,
                        index: number
                    ) => (

                        <div
                            key={index}
                            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <h3 className="text-lg font-bold">

                                        {item.exclusion}

                                    </h3>

                                    {item.description && (

                                        <p className="mt-2 text-zinc-500">

                                            {item.description}

                                        </p>

                                    )}

                                </div>

                                <span className="rounded-xl bg-zinc-900 px-4 py-2 text-sm">

                                    #{item.sort_order}

                                </span>

                            </div>

                            <div className="mt-6 flex gap-3">

                                <button
                                    onClick={() => {

                                        setEditingIndex(index);

                                        setOpen(true);

                                    }}
                                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 hover:bg-blue-700"
                                >

                                    <Pencil size={18} />

                                    Edit

                                </button>

                                <button
                                    onClick={() =>
                                        remove(index)
                                    }
                                    className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-3 hover:bg-red-700"
                                >

                                    <Trash2 size={18} />

                                    Delete

                                </button>

                            </div>

                        </div>

                    )
                )}

            </div>

            <ExclusionModal
                open={open}
                onClose={() => setOpen(false)}
                form={form}
                editingIndex={editingIndex}
            />

        </div>

    );

}