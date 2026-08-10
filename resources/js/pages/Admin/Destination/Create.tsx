import { Head, Link, useForm } from "@inertiajs/react";
import {
    ArrowLeft,
    Image as ImageIcon,
    MapPin,
    Save,
} from "lucide-react";

export default function Create() {
    const form = useForm({
        name: "",
        slug: "",
        short_description: "",
        hero_image: "",
        state: "Uttar Pradesh",
        category: "",
        best_time: "",
        average_budget: "",
        is_active: true,
        full_description: "",
        banner_image: "",
        lat: "",
        lng: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        form.post("/admin/destinations", {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Create Destination" />

            <div className="min-h-screen bg-zinc-950 text-white p-6">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <Link
                            href="/admin/destinations"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:bg-zinc-800"
                        >
                            <ArrowLeft size={18} />
                        </Link>

                        <div>
                            <h1 className="text-3xl font-bold">
                                Create Destination
                            </h1>

                            <p className="mt-1 text-sm text-zinc-500">
                                Add a new destination to Heritage Junction. 
                            </p>

                             <p className="mt-1 text-xs text-zinc-500">
                                To add heritage sites and food items, you can do so after creating the destination.
                            </p>
                        </div>

                    </div>

                </div>


                <form
                    onSubmit={submit}
                    className="mx-auto max-w-6xl space-y-6"
                >

                    {/* Basic Information */}
                    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl">

                        <div className="mb-6 flex items-center gap-3">

                            <div className="rounded-xl bg-purple-600/20 p-3">
                                <MapPin
                                    size={22}
                                    className="text-purple-400"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">
                                    Basic Information
                                </h2>

                                <p className="text-sm text-zinc-500">
                                    General information about the destination.
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Destination Name
                                </label>

                                <input
                                    type="text"
                                    value={form.data.name}
                                    onChange={(e) =>
                                        form.setData(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    placeholder="e.g. Ayodhya"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                                />

                                {form.errors.name && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {form.errors.name}
                                    </p>
                                )}
                            </div>


                            {/* Slug */}
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Slug
                                </label>

                                <input
                                    type="text"
                                    value={form.data.slug}
                                    onChange={(e) =>
                                        form.setData(
                                            "slug",
                                            e.target.value
                                        )
                                    }
                                    placeholder="ayodhya"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                                />

                                <p className="mt-1 text-xs text-zinc-600">
                                    Leave empty to generate automatically.
                                </p>

                                {form.errors.slug && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {form.errors.slug}
                                    </p>
                                )}
                            </div>


                            {/* State */}
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    State
                                </label>

                                <input
                                    type="text"
                                    value={form.data.state}
                                    onChange={(e) =>
                                        form.setData(
                                            "state",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                                />
                            </div>


                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Category
                                </label>

                                <input
                                    type="text"
                                    value={form.data.category}
                                    onChange={(e) =>
                                        form.setData(
                                            "category",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Spiritual, Historical..."
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                                />
                            </div>


                            {/* Best Time */}
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Best Time to Visit
                                </label>

                                <input
                                    type="text"
                                    value={form.data.best_time}
                                    onChange={(e) =>
                                        form.setData(
                                            "best_time",
                                            e.target.value
                                        )
                                    }
                                    placeholder="October - March"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                                />
                            </div>


                            {/* Budget */}
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Average Budget
                                </label>

                                <input
                                    type="number"
                                    value={form.data.average_budget}
                                    onChange={(e) =>
                                        form.setData(
                                            "average_budget",
                                            e.target.value
                                        )
                                    }
                                    placeholder="5000"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                                />
                            </div>

                        </div>


                        {/* Short Description */}
                        <div className="mt-5">

                            <label className="mb-2 block text-sm text-zinc-400">
                                Short Description
                            </label>

                            <textarea
                                rows={4}
                                value={form.data.short_description}
                                onChange={(e) =>
                                    form.setData(
                                        "short_description",
                                        e.target.value
                                    )
                                }
                                placeholder="A short introduction to this destination..."
                                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                            />

                        </div>


                        {/* Full Description */}
                        <div className="mt-5">

                            <label className="mb-2 block text-sm text-zinc-400">
                                Full Description
                            </label>

                            <textarea
                                rows={8}
                                value={form.data.full_description}
                                onChange={(e) =>
                                    form.setData(
                                        "full_description",
                                        e.target.value
                                    )
                                }
                                placeholder="Write the complete description of the destination..."
                                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-purple-500"
                            />

                        </div>

                    </section>


                    {/* Images */}
                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Hero Image */}
                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Hero Image URL
                            </label>

                            <input
                                type="url"
                                value={form.data.hero_image}
                                onChange={(e) =>
                                    form.setData("hero_image", e.target.value)
                                }
                                placeholder="https://example.com/hero-image.jpg"
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />

                            {form.errors.hero_image && (
                                <p className="mt-1 text-sm text-red-400">
                                    {form.errors.hero_image}
                                </p>
                            )}
                        </div>

                        {/* Banner Image */}
                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Banner Image URL
                            </label>

                            <input
                                type="url"
                                value={form.data.banner_image}
                                onChange={(e) =>
                                    form.setData("banner_image", e.target.value)
                                }
                                placeholder="https://example.com/banner-image.jpg"
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />

                            {form.errors.banner_image && (
                                <p className="mt-1 text-sm text-red-400">
                                    {form.errors.banner_image}
                                </p>
                            )}
                        </div>

                    </div>


                    {/* Location */}
                    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl">

                        <h2 className="mb-2 text-xl font-semibold">
                            Location
                        </h2>

                        <p className="mb-6 text-sm text-zinc-500">
                            Coordinates used for destination location mapping.
                        </p>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Latitude
                                </label>

                                <input
                                    type="number"
                                    step="any"
                                    value={form.data.lat}
                                    onChange={(e) =>
                                        form.setData(
                                            "lat",
                                            e.target.value
                                        )
                                    }
                                    placeholder="26.7997"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-purple-500"
                                />
                            </div>


                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Longitude
                                </label>

                                <input
                                    type="number"
                                    step="any"
                                    value={form.data.lng}
                                    onChange={(e) =>
                                        form.setData(
                                            "lng",
                                            e.target.value
                                        )
                                    }
                                    placeholder="82.2047"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-purple-500"
                                />
                            </div>

                        </div>

                    </section>


                    {/* Status */}
                    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl">

                        <label className="flex cursor-pointer items-center gap-4">

                            <input
                                type="checkbox"
                                checked={form.data.is_active}
                                onChange={(e) =>
                                    form.setData(
                                        "is_active",
                                        e.target.checked
                                    )
                                }
                                className="h-5 w-5 accent-purple-600"
                            />

                            <div>
                                <p className="font-semibold">
                                    Active Destination
                                </p>

                                <p className="text-sm text-zinc-500">
                                    Make this destination visible to visitors.
                                </p>
                            </div>

                        </label>

                    </section>


                    {/* Actions */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                        <Link
                            href="/admin/destinations"
                            className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-medium transition hover:bg-zinc-800"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Save size={18} />

                            {form.processing
                                ? "Creating..."
                                : "Create Destination"}
                        </button>


                    </div>
                        <p className="text-right text-sm text-gray-600">
                            To add heritage sites and food items, you can do so after creating the destination.
                        </p>

                </form>

            </div>
        </>
    );
}