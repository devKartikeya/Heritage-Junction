import {
    MapPinned,
    ArrowUpRight,
    Settings2,
    MapPin,
} from "lucide-react";

import { Link } from "@inertiajs/react";
import { useState } from "react";
import DestinationManagerModal from "./DestinationManagerModal";

type Props = {
    pkg: any;
    allDestinations: any[];
};

export default function DestinationsCard({
    pkg,
    allDestinations,
}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl">

            {/* Header */}
            <div className="flex flex-col gap-5 border-b border-zinc-800 bg-zinc-950/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                        <MapPinned size={21} />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Destinations
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Places covered in this package.
                        </p>
                    </div>

                </div>


                <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-400">
                        {pkg.destinations?.length ?? 0}{" "}
                        {pkg.destinations?.length === 1
                            ? "Destination"
                            : "Destinations"}
                    </span>

                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                    >
                        <Settings2 size={17} />
                        Manage
                    </button>

                </div>

            </div>


            {/* Content */}
            <div className="p-6">

                {pkg.destinations?.length > 0 ? (

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                        {pkg.destinations.map((destination: any) => (

                            <div
                                key={destination.id}
                                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl"
                            >

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">

                                    <img
                                        src={destination.hero_image}
                                        alt={destination.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                    {/* Destination label */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">

                                        <MapPin size={13} />

                                        Destination

                                    </div>

                                </div>


                                {/* Card Body */}
                                <div className="p-5">

                                    <h3 className="text-xl font-semibold text-white">
                                        {destination.name}
                                    </h3>

                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-500">
                                        {destination.short_description ||
                                            destination.about ||
                                            "No description available for this destination."}
                                    </p>


                                    {/* Stats */}
                                    <div className="mt-5 grid grid-cols-3 gap-2">

                                        {/* Heritage */}
                                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 text-center">

                                            <p className="text-lg font-bold text-purple-400">
                                                {destination.heritage_sites?.length ?? 0}
                                            </p>

                                            <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600">
                                                Heritage
                                            </p>

                                        </div>


                                        {/* Foods */}
                                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 text-center">

                                            <p className="text-lg font-bold text-yellow-400">
                                                {destination.foods?.length ?? 0}
                                            </p>

                                            <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600">
                                                Foods
                                            </p>

                                        </div>


                                        {/* Culture */}
                                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 text-center">

                                            <p className="text-lg font-bold text-cyan-400">
                                                {destination.cultural_highlights?.length ?? 0}
                                            </p>

                                            <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600">
                                                Culture
                                            </p>

                                        </div>

                                    </div>


                                    {/* Footer */}
                                    <Link
                                        href={`/admin/destinations/${destination.id}`}
                                        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 py-3 text-sm font-medium text-zinc-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                                    >

                                        <ArrowUpRight size={17} />

                                        Open Destination

                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    /* Empty State */
                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 px-6 py-14 text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-500">
                            <MapPinned size={22} />
                        </div>

                        <h3 className="mt-4 font-semibold text-zinc-300">
                            No destinations added
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                            Add destinations to this package to build its
                            itinerary.
                        </p>

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                        >
                            <Settings2 size={17} />
                            Manage Destinations
                        </button>

                    </div>

                )}

            </div>


            {/* Destination Manager */}
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