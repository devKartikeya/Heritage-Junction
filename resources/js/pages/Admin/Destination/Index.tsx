import { Head, Link, router } from "@inertiajs/react";
import { MapPin, Plus, Pencil, Trash2, Eye, Power } from "lucide-react";

type Destination = {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    hero_image: string | null;
    state: string;
    category: string;
    best_time: string | null;
    average_budget: number | null;
    is_active: boolean;
};

export default function Index({
    destinations,
}: {
    destinations: Destination[];
}) {
    const deleteDestination = (id: number) => {
        if (
            confirm(
                "Are you sure you want to delete this destination?"
            )
        ) {
            router.delete(`/admin/destinations/${id}`);
        }
    };

    const toggleStatus = (id: number) => {
        router.patch(
            `/admin/destinations/${id}/toggle-status`
        );
    };

    return (
        <>
            <Head title="Destination Management" />

            <div className="min-h-screen bg-zinc-950 text-white p-6">

                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">

                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-purple-600/20 p-3">
                                <MapPin
                                    size={24}
                                    className="text-purple-400"
                                />
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold">
                                    Destinations
                                </h1>

                                <p className="text-zinc-400 text-sm mt-1">
                                    Manage destinations, heritage sites,
                                    food and cultural information.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/admin/destinations/create"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-700"
                    >
                        <Plus size={18} />
                        Add Destination
                    </Link>
                </div>


                {/* Destination Grid */}
                {destinations.length === 0 ? (

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-12 text-center">
                        <MapPin
                            size={40}
                            className="mx-auto text-zinc-600 mb-4"
                        />

                        <h2 className="text-xl font-semibold">
                            No destinations found
                        </h2>

                        <p className="mt-2 text-zinc-500">
                            Start by adding your first destination.
                        </p>
                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {destinations.map((destination) => (

                            <div
                                key={destination.id}
                                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl transition hover:-translate-y-1 hover:border-zinc-700"
                            >

                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">

                                    {destination.hero_image ? (
                                        <img
                                            src={destination.hero_image}
                                            alt={destination.name}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-zinc-800">
                                            <MapPin
                                                size={40}
                                                className="text-zinc-600"
                                            />
                                        </div>
                                    )}

                                    {/* Status */}
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
                                                destination.is_active
                                                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                                            }`}
                                        >
                                            {destination.is_active
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                    </div>

                                </div>


                                {/* Content */}
                                <div className="p-5">

                                    <div className="flex items-start justify-between gap-3">

                                        <div>
                                            <h2 className="text-xl font-bold">
                                                {destination.name}
                                            </h2>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                {destination.state}
                                            </p>
                                        </div>

                                        <span className="rounded-lg bg-purple-500/10 px-2 py-1 text-xs text-purple-400">
                                            {destination.category}
                                        </span>

                                    </div>


                                    <p className="mt-4 text-sm leading-6 text-zinc-400 line-clamp-3">
                                        {destination.short_description}
                                    </p>


                                    {/* Meta */}
                                    <div className="mt-5 grid grid-cols-2 gap-3">

                                        <div className="rounded-xl bg-zinc-800/70 p-3">
                                            <p className="text-xs text-zinc-500">
                                                Best Time
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {destination.best_time || "—"}
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-zinc-800/70 p-3">
                                            <p className="text-xs text-zinc-500">
                                                Avg. Budget
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {destination.average_budget
                                                    ? `₹${destination.average_budget}`
                                                    : "—"}
                                            </p>
                                        </div>

                                    </div>


                                    {/* Actions */}
                                    <div className="mt-5 flex items-center gap-2">

                                        <Link
                                            href={`/admin/destinations/${destination.id}`}
                                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 px-3 py-2.5 text-sm transition hover:bg-zinc-800"
                                        >
                                            <Eye size={16} />
                                            View
                                        </Link>

                                        <Link
                                            href={`/admin/destinations/${destination.id}/edit`}
                                            className="flex items-center justify-center rounded-xl border border-zinc-700 px-3 py-2.5 transition hover:bg-zinc-800"
                                            title="Edit"
                                        >
                                            <Pencil
                                                size={16}
                                                className="text-purple-400"
                                            />
                                        </Link>

                                        <button
                                            onClick={() =>
                                                toggleStatus(
                                                    destination.id
                                                )
                                            }
                                            className="flex items-center justify-center rounded-xl border border-zinc-700 px-3 py-2.5 transition hover:bg-zinc-800"
                                            title="Toggle status"
                                        >
                                            <Power
                                                size={16}
                                                className={
                                                    destination.is_active
                                                        ? "text-green-400"
                                                        : "text-zinc-500"
                                                }
                                            />
                                        </button>

                                        <button
                                            onClick={() =>
                                                deleteDestination(
                                                    destination.id
                                                )
                                            }
                                            className="flex items-center justify-center rounded-xl border border-red-500/20 px-3 py-2.5 text-red-400 transition hover:bg-red-500/10"
                                            title="Delete"
                                        >
                                            <Trash2 size={16} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </div>
        </>
    );
}