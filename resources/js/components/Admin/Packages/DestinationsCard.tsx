import { MapPinned, ArrowUpRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import DestinationManagerModal from "./DestinationManagerModal";

type Props = {
    pkg: any;
    allDestinations: any[];
};

export default function DestinationsCard({
    pkg,
    allDestinations
}: Props) {
    const [open, setOpen] = useState(false);
    console.log(pkg.destinations);
    console.log(allDestinations);
    return (

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-green-500/20 p-4">

                        <MapPinned
                            size={28}
                            className="text-green-400"
                        />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">
                            Destinations
                        </h2>

                        <p className="mt-1 text-zinc-500">
                            Places covered in this package.
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <span className="rounded-xl bg-zinc-950 px-4 py-2 text-sm text-zinc-400">
                        {pkg.destinations.length} Destination(s)
                    </span>

                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-xl bg-purple-600 px-5 py-2 font-semibold hover:bg-purple-700"
                    >
                        Manage
                    </button>

                </div>

            </div>

            {/* Grid */}

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {pkg.destinations.map((destination: any) => (

                    <div
                        key={destination.id}
                        className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-purple-500"
                    >

                        {/* Image */}

                        <img
                            src={destination.hero_image}
                            className="h-48 w-full object-cover"
                        />

                        <div className="p-6">

                            <h3 className="text-xl font-bold">
                                {destination.name}
                            </h3>

                            <p className="mt-2 line-clamp-3 text-sm text-zinc-500">
                                {destination.about}
                            </p>

                            {/* Stats */}

                            <div className="mt-6 grid grid-cols-3 gap-3">

                                <div className="rounded-xl bg-zinc-900 p-3 text-center">

                                    <p className="text-xl font-bold text-purple-400">
                                        {destination.heritage_sites?.length ?? 0}
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Heritage
                                    </p>

                                </div>

                                <div className="rounded-xl bg-zinc-900 p-3 text-center">

                                    <p className="text-xl font-bold text-yellow-400">
                                        {destination.foods?.length ?? 0}
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Foods
                                    </p>

                                </div>

                                <div className="rounded-xl bg-zinc-900 p-3 text-center">

                                    <p className="text-xl font-bold text-cyan-400">
                                        {destination.cultural_highlights?.length ?? 0}
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Culture
                                    </p>

                                </div>

                            </div>

                            {/* Footer */}

                            <Link
                                href={`/admin/destinations/${destination.id}`}
                                className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 transition hover:border-purple-500 hover:text-purple-400"
                            >

                                <ArrowUpRight size={18} />

                                Open Destination

                            </Link>

                        </div>

                    </div>

                ))}

            </div>
            <DestinationManagerModal
                open={open}
                onClose={() => setOpen(false)}
                packageId={pkg.id}
                allDestinations={allDestinations}
                selectedDestinations={pkg.destinations}
            />
        </div>

    );

}