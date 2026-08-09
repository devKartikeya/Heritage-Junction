import { Head, Link } from "@inertiajs/react";
import {
    ArrowLeft,
    MapPin,
    CalendarDays,
    Wallet,
    Landmark,
    Utensils,
    Pencil,
    Plus,
    Trash2,
    Power,
    Globe,
} from "lucide-react";

type HeritageSite = {
    id: number;
    name: string;
    image_path: string | null;
    description: string;
    sort_order: number;
};

type Food = {
    id: number;
    name: string;
    description: string;
    sort_order: number;
};

type Destination = {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    hero_image: string | null;
    state: string;
    category: string;
    best_time: string | null;
    average_budget: number | string | null;
    is_active: boolean;
    full_desc: string | null;
    banner_image: string | null;
    lat: number | string | null;
    lng: number | string | null;

    heritage_sites: HeritageSite[];
    foods: Food[];
};

export default function Destination({
    destination,
}: {
    destination: Destination;
}) {
    return (
        <>
            <Head title={`${destination.name} - Destination Management`} />

            <div className="min-h-screen bg-zinc-950 p-6 text-white">

                {/* Back */}
                <div className="mb-6">
                    <Link
                        href="/admin/destinations"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Back to Destinations
                    </Link>
                </div>


                {/* Header */}
                <div className="mb-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

                    {/* Banner */}
                    <div className="relative h-64 sm:h-80">

                        {destination.banner_image ? (
                            <img
                                src={destination.banner_image}
                                alt={destination.name}
                                className="h-full w-full object-cover"
                            />
                        ) : destination.hero_image ? (
                            <img
                                src={destination.hero_image}
                                alt={destination.name}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center bg-zinc-800">
                                <MapPin
                                    size={55}
                                    className="text-zinc-600"
                                />
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                        {/* Status */}
                        <div className="absolute right-5 top-5">
                            <span
                                className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur ${
                                    destination.is_active
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "bg-red-500/20 text-red-400"
                                }`}
                            >
                                {destination.is_active
                                    ? "● Active"
                                    : "● Inactive"}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-6 left-6 right-6">

                            <div className="mb-2 flex flex-wrap items-center gap-3">

                                <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
                                    {destination.category}
                                </span>

                                <span className="flex items-center gap-1 text-sm text-zinc-300">
                                    <MapPin size={14} />
                                    {destination.state}
                                </span>

                            </div>

                            <h1 className="text-3xl font-bold sm:text-4xl">
                                {destination.name}
                            </h1>

                        </div>
                    </div>


                    {/* Header Actions */}
                    <div className="flex flex-col gap-3 border-t border-zinc-800 p-5 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <p className="text-sm text-zinc-500">
                                Destination Slug
                            </p>

                            <p className="mt-1 font-mono text-sm text-zinc-300">
                                /{destination.slug}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800"
                            >
                                <Power size={16} />
                                {destination.is_active
                                    ? "Deactivate"
                                    : "Activate"}
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-purple-700"
                            >
                                <Pencil size={16} />
                                Edit Destination
                            </button>

                        </div>

                    </div>

                </div>


                {/* Destination Information */}
                <section className="mb-8">

                    <div className="mb-5">
                        <h2 className="text-2xl font-bold">
                            Destination Information
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Basic information and travel details.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Best Time */}
                        <InfoCard
                            icon={<CalendarDays size={19} />}
                            title="Best Time"
                            value={destination.best_time || "Not specified"}
                        />

                        {/* Budget */}
                        <InfoCard
                            icon={<Wallet size={19} />}
                            title="Average Budget"
                            value={
                                destination.average_budget
                                    ? `₹${destination.average_budget}`
                                    : "Not specified"
                            }
                        />

                        {/* Coordinates */}
                        <InfoCard
                            icon={<Globe size={19} />}
                            title="Coordinates"
                            value={
                                destination.lat && destination.lng
                                    ? `${destination.lat}, ${destination.lng}`
                                    : "Not specified"
                            }
                        />

                        {/* Category */}
                        <InfoCard
                            icon={<MapPin size={19} />}
                            title="Category"
                            value={destination.category}
                        />

                    </div>

                </section>


                {/* Description */}
                <section className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                    <h2 className="mb-4 text-xl font-bold">
                        About {destination.name}
                    </h2>

                    <p className="leading-7 text-zinc-400">
                        {destination.full_desc ||
                            destination.short_description}
                    </p>

                </section>


                {/* Heritage Sites */}
                <section className="mb-8">

                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-bold">
                                <Landmark
                                    size={22}
                                    className="text-purple-400"
                                />
                                Heritage Sites
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Manage heritage attractions associated with this destination.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-purple-700"
                        >
                            <Plus size={17} />
                            Add Heritage Site
                        </button>

                    </div>


                    {destination.heritage_sites.length === 0 ? (

                        <EmptySection
                            icon={<Landmark size={30} />}
                            message="No heritage sites have been added yet."
                        />

                    ) : (

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {[...destination.heritage_sites]
                                .sort(
                                    (a, b) =>
                                        a.sort_order - b.sort_order
                                )
                                .map((site) => (

                                    <div
                                        key={site.id}
                                        className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
                                    >

                                        <div className="flex h-48 items-center justify-center bg-zinc-800">

                                            {site.image_path ? (
                                                <img
                                                    src={site.image_path}
                                                    alt={site.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <Landmark
                                                    size={45}
                                                    className="text-zinc-600"
                                                />
                                            )}

                                        </div>


                                        <div className="p-5">

                                            <h3 className="text-lg font-bold">
                                                {site.name}
                                            </h3>

                                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">
                                                {site.description}
                                            </p>


                                            <div className="mt-5 flex gap-2">

                                                <button
                                                    type="button"
                                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 py-2.5 text-sm font-semibold transition hover:bg-zinc-800"
                                                >
                                                    <Pencil size={15} />
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    className="flex items-center justify-center rounded-xl border border-red-900/50 px-4 text-red-400 transition hover:bg-red-500/10"
                                                >
                                                    <Trash2 size={16} />
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                        </div>

                    )}

                </section>


                {/* Foods */}
                <section className="mb-8">

                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-bold">
                                <Utensils
                                    size={22}
                                    className="text-orange-400"
                                />
                                Local Foods
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Manage food and culinary experiences associated with this destination.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-orange-700"
                        >
                            <Plus size={17} />
                            Add Food
                        </button>

                    </div>


                    {destination.foods.length === 0 ? (

                        <EmptySection
                            icon={<Utensils size={30} />}
                            message="No local foods have been added yet."
                        />

                    ) : (

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                            {[...destination.foods]
                                .sort(
                                    (a, b) =>
                                        a.sort_order - b.sort_order
                                )
                                .map((food) => (

                                    <div
                                        key={food.id}
                                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700"
                                    >

                                        <div className="mb-4 flex items-start justify-between gap-3">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                                <Utensils size={19} />
                                            </div>

                                            <span className="rounded-lg bg-zinc-800 px-2.5 py-1 text-xs text-zinc-500">
                                                #{food.sort_order}
                                            </span>

                                        </div>

                                        <h3 className="text-lg font-bold">
                                            {food.name}
                                        </h3>

                                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">
                                            {food.description}
                                        </p>


                                        <div className="mt-5 flex gap-2">

                                            <button
                                                type="button"
                                                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 py-2.5 text-sm font-semibold transition hover:bg-zinc-800"
                                            >
                                                <Pencil size={15} />
                                                Edit
                                            </button>

                                            <button
                                                type="button"
                                                className="flex items-center justify-center rounded-xl border border-red-900/50 px-4 text-red-400 transition hover:bg-red-500/10"
                                            >
                                                <Trash2 size={16} />
                                            </button>

                                        </div>

                                    </div>

                                ))}

                        </div>

                    )}

                </section>

            </div>
        </>
    );
}


/* ------------------------------------------------ */
/* Reusable Components */
/* ------------------------------------------------ */

function InfoCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                {icon}
            </div>

            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {title}
            </p>

            <p className="mt-1 font-semibold text-zinc-200">
                {value}
            </p>

        </div>
    );
}


function EmptySection({
    icon,
    message,
}: {
    icon: React.ReactNode;
    message: string;
}) {
    return (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/50 p-10 text-center">

            <div className="mb-3 flex justify-center text-zinc-600">
                {icon}
            </div>

            <p className="text-sm text-zinc-500">
                {message}
            </p>

        </div>
    );
}