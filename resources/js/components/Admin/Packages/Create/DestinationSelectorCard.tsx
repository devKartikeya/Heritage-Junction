import { MapPinned } from "lucide-react";

export default function DestinationSelectorCard({
    form,
    destinations,
}: {
    form: any;
    destinations: any[];
}) {

    function toggle(id: number) {

        if (form.data.destinations.includes(id)) {

            form.setData(
                "destinations",
                form.data.destinations.filter(
                    (d: number) => d !== id
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

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-green-500/20 p-4">

                    <MapPinned
                        className="text-green-400"
                        size={28}
                    />

                </div>

                <div>

                    <h2 className="text-3xl font-bold">
                        Destinations
                    </h2>

                    <p className="mt-2 text-zinc-500">
                        Select all destinations included in this package.
                    </p>

                </div>

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                {destinations.map((destination: any) => {

                    const checked =
                        form.data.destinations.includes(
                            destination.id
                        );

                    return (

                        <div
                            key={destination.id}
                            onClick={() =>
                                toggle(destination.id)
                            }
                            className={`cursor-pointer overflow-hidden rounded-2xl border transition
                            
                            ${checked
                                    ? "border-purple-500 bg-purple-500/10"
                                    : "border-zinc-800 bg-zinc-950 hover:border-purple-500"
                                }`}
                        >

                            <img
                                src={destination.hero_image}
                                className="h-48 w-full object-cover"
                            />

                            <div className="p-5">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-xl font-bold">
                                        {destination.name}
                                    </h3>

                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        readOnly
                                        className="h-5 w-5 accent-purple-600"
                                    />

                                </div>

                                <p className="mt-3 line-clamp-3 text-sm text-zinc-500">
                                    {destination.short_description}
                                </p>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}