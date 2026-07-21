import { useEffect, useState } from "react";

const empty = {

    inclusion: "",

    description: "",

    sort_order: 1,

};

export default function InclusionModal({

    open,

    onClose,

    form,

    editingIndex,

}: any) {

    const [item, setItem] = useState(empty);

    useEffect(() => {

        if (!open) return;

        if (editingIndex !== null) {

            setItem(
                form.data.inclusions[editingIndex]
            );

        }

        else {

            setItem({

                ...empty,

                sort_order:
                    form.data.inclusions.length + 1,

            });

        }

    }, [open]);

    if (!open) return null;

    function save() {

        const list = [...form.data.inclusions];

        if (editingIndex === null)

            list.push(item);

        else

            list[editingIndex] = item;

        form.setData("inclusions", list);

        onClose();

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

            <div className="w-full max-w-xl rounded-3xl bg-zinc-900 p-8">

                <h2 className="text-3xl font-bold">

                    {editingIndex === null
                        ? "Add Inclusion"
                        : "Edit Inclusion"}

                </h2>

                <div className="mt-8 space-y-5">

                    <input
                        placeholder="Inclusion"
                        value={item.inclusion}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                inclusion:
                                    e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                    <textarea
                        rows={4}
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                description:
                                    e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                    <input
                        type="number"
                        placeholder="Sort Order"
                        value={item.sort_order}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                sort_order: Number(
                                    e.target.value
                                ),
                            })
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                </div>

                <div className="mt-8 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-zinc-700 px-6 py-3"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={save}
                        className="rounded-xl bg-purple-600 px-6 py-3 hover:bg-purple-700"
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>

    );

}