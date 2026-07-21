import { useForm } from "@inertiajs/react";

type Props = {
    open: boolean;
    onClose: () => void;
    packageId: number;
    allDestinations: any[];
    selectedDestinations: any[];
};

export default function DestinationManagerModal({
    open,
    onClose,
    packageId,
    allDestinations,
    selectedDestinations,
}: Props) {

    const form = useForm({
        destinations: selectedDestinations?.map(d => d.id) ?? [],
    });

    if (!open) return null;

    function toggle(id: number) {

        if (form.data.destinations.includes(id)) {

            form.setData(
                "destinations",
                form.data.destinations.filter(
                    x => x !== id
                )
            );

        } else {

            form.setData(
                "destinations",
                [
                    ...form.data.destinations,
                    id
                ]
            );

        }

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

            <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

                <h2 className="text-2xl font-bold">
                    Manage Destinations
                </h2>

                <p className="mt-2 text-zinc-500">
                    Select destinations included in this package.
                </p>

                <div className="mt-6 space-y-3 max-h-96 overflow-y-auto">

                    {allDestinations.map(destination => (

                        <label
                            key={destination.id}
                            className="flex cursor-pointer items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4 hover:border-purple-500"
                        >

                            <div>

                                <p className="font-semibold">
                                    {destination.name}
                                </p>

                                <p className="text-sm text-zinc-500">
                                    {destination.state}
                                </p>

                            </div>

                            <input
                                type="checkbox"
                                checked={form.data.destinations.includes(destination.id)}
                                onChange={() => toggle(destination.id)}
                                className="h-5 w-5 accent-purple-600"
                            />

                        </label>

                    ))}

                </div>

                <div className="mt-6 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-zinc-700 px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() =>
                            form.put(
                                `/admin/packages/${packageId}/destinations`,
                                {
                                    onSuccess: () => onClose(),
                                }
                            )
                        }
                        className="rounded-xl bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-700"
                    >
                        Save Changes
                    </button>

                </div>

            </div>

        </div>

    );
}