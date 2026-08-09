import { Head, Link, useForm, router } from "@inertiajs/react";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

type HeritageSite = {
    id: number;
    name: string;
    image_path: string;
    description: string | null;
    sort_order: number;
};

type Food = {
    id: number;
    name: string;
    description: string | null;
    sort_order: number;
};

type Destination = {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    hero_image: string;
    state: string;
    category: string;
    best_time: string | null;
    average_budget: number | null;
    is_active: boolean;
    full_description: string;
    banner_image: string;
    lat: number | null;
    lng: number | null;

    heritage_sites: HeritageSite[];
    foods: Food[];
};

export default function Edit({
    destination,
}: {
    destination: Destination;
}) {
    const [showHeritageForm, setShowHeritageForm] = useState(false);
    const [showFoodForm, setShowFoodForm] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Destination Form
    |--------------------------------------------------------------------------
    */

    const form = useForm({
        name: destination.name ?? "",
        slug: destination.slug ?? "",
        short_description: destination.short_description ?? "",
        hero_image: destination.hero_image ?? "",
        state: destination.state ?? "",
        category: destination.category ?? "",
        best_time: destination.best_time ?? "",
        average_budget: destination.average_budget ?? "",
        is_active: destination.is_active ?? true,
        full_description: destination.full_description ?? "",
        banner_image: destination.banner_image ?? "",
        lat: destination.lat ?? "",
        lng: destination.lng ?? "",
    });

    /*
    |--------------------------------------------------------------------------
    | Heritage Site Form
    |--------------------------------------------------------------------------
    */

    const heritageForm = useForm({
        name: "",
        image_path: "",
        description: "",
        sort_order: 0,
    });

    /*
    |--------------------------------------------------------------------------
    | Food Form
    |--------------------------------------------------------------------------
    */

    const foodForm = useForm({
        name: "",
        description: "",
        sort_order: 0,
    });

    /*
    |--------------------------------------------------------------------------
    | Update Destination
    |--------------------------------------------------------------------------
    */

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        form.put(`/admin/destinations/${destination.id}`);
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Heritage Site
    |--------------------------------------------------------------------------
    */

    const deleteHeritageSite = (site: HeritageSite) => {
        if (!confirm(`Delete "${site.name}"?`)) {
            return;
        }

        router.delete(`/admin/heritage-sites/${site.id}`, {
            preserveScroll: true,
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Food
    |--------------------------------------------------------------------------
    */

    const deleteFood = (food: Food) => {
        if (!confirm(`Delete "${food.name}"?`)) {
            return;
        }

        router.delete(`/admin/foods/${food.id}`, {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title={`Edit ${destination.name}`} />

            <div className="min-h-screen bg-black px-6 py-10 text-white">
                <div className="mx-auto max-w-5xl">

                    {/* =====================================================
                        HEADER
                    ====================================================== */}

                    <div className="mb-8 flex items-center justify-between">

                        <div>
                            <h1 className="text-3xl font-bold">
                                Edit Destination
                            </h1>

                            <p className="mt-1 text-zinc-500">
                                Update information for {destination.name}
                            </p>
                        </div>

                        <Link
                            href="/admin/destinations"
                            className="rounded-xl border border-zinc-700 px-5 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800"
                        >
                            ← Back
                        </Link>

                    </div>


                    {/* =====================================================
                        MAIN DESTINATION FORM
                    ====================================================== */}

                    <form
                        onSubmit={submit}
                        className="space-y-6"
                    >

                        {/* =================================================
                            BASIC INFORMATION
                        ================================================== */}

                        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">

                            <h2 className="mb-6 text-xl font-semibold">
                                Basic Information
                            </h2>

                            <div className="grid gap-5 md:grid-cols-2">

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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />

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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />
                                </div>

                            </div>


                            {/* Short Description */}

                            <div className="mt-5">

                                <label className="mb-2 block text-sm text-zinc-400">
                                    Short Description
                                </label>

                                <textarea
                                    rows={3}
                                    value={form.data.short_description}
                                    onChange={(e) =>
                                        form.setData(
                                            "short_description",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                />

                                {form.errors.short_description && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {form.errors.short_description}
                                    </p>
                                )}

                            </div>

                        </section>


                        {/* =================================================
                            IMAGES
                        ================================================== */}

                        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">

                            <h2 className="mb-6 text-xl font-semibold">
                                Images
                            </h2>

                            <div className="grid gap-5 md:grid-cols-2">

                                {/* Hero */}

                                <div>
                                    <label className="mb-2 block text-sm text-zinc-400">
                                        Hero Image URL
                                    </label>

                                    <input
                                        type="url"
                                        value={form.data.hero_image}
                                        onChange={(e) =>
                                            form.setData(
                                                "hero_image",
                                                e.target.value
                                            )
                                        }
                                        placeholder="https://..."
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />

                                    {form.errors.hero_image && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {form.errors.hero_image}
                                        </p>
                                    )}
                                </div>


                                {/* Banner */}

                                <div>
                                    <label className="mb-2 block text-sm text-zinc-400">
                                        Banner Image URL
                                    </label>

                                    <input
                                        type="url"
                                        value={form.data.banner_image}
                                        onChange={(e) =>
                                            form.setData(
                                                "banner_image",
                                                e.target.value
                                            )
                                        }
                                        placeholder="https://..."
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />

                                    {form.errors.banner_image && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {form.errors.banner_image}
                                        </p>
                                    )}
                                </div>

                            </div>

                        </section>


                        {/* =================================================
                            DESTINATION DETAILS
                        ================================================== */}

                        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">

                            <h2 className="mb-6 text-xl font-semibold">
                                Destination Details
                            </h2>

                            <div className="grid gap-5 md:grid-cols-2">

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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />
                                </div>


                                {/* Latitude */}

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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />
                                </div>


                                {/* Longitude */}

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
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                    />
                                </div>

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
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-purple-500"
                                />

                                {form.errors.full_description && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {form.errors.full_description}
                                    </p>
                                )}

                            </div>

                        </section>


                        {/* =================================================
                            STATUS
                        ================================================== */}

                        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">

                            <label className="flex cursor-pointer items-center gap-3">

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
                                    <p className="font-medium">
                                        Active Destination
                                    </p>

                                    <p className="text-sm text-zinc-500">
                                        Make this destination visible to users.
                                    </p>
                                </div>

                            </label>

                        </section>


                        {/* =================================================
                            SAVE DESTINATION
                        ================================================== */}

                        <div className="flex justify-end gap-4">

                            <Link
                                href="/admin/destinations"
                                className="rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:bg-zinc-800"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={form.processing}
                                className="rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
                            >
                                {form.processing
                                    ? "Saving..."
                                    : "Save Changes"}
                            </button>

                        </div>

                    </form>


                    {/* =====================================================
                        HERITAGE SITES
                    ====================================================== */}

                    <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">

                        {/* Header */}

                        <div className="mb-6 flex items-center justify-between">

                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    Heritage Sites
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Manage the heritage sites associated with this destination.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowHeritageForm(
                                        !showHeritageForm
                                    )
                                }
                                className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                            >
                                <Plus size={18} />
                                Add Site
                            </button>

                        </div>


                        {/* Add Heritage Form */}

                        {showHeritageForm && (
                            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">

                                <h3 className="mb-5 text-lg font-semibold text-white">
                                    Add Heritage Site
                                </h3>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* Name */}

                                    <div>
                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Site Name
                                        </label>

                                        <input
                                            type="text"
                                            value={heritageForm.data.name}
                                            onChange={(e) =>
                                                heritageForm.setData(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="e.g. Ram Mandir"
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {heritageForm.errors.name && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {heritageForm.errors.name}
                                            </p>
                                        )}
                                    </div>


                                    {/* Sort Order */}

                                    <div>
                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Sort Order
                                        </label>

                                        <input
                                            type="number"
                                            min="0"
                                            value={heritageForm.data.sort_order}
                                            onChange={(e) =>
                                                heritageForm.setData(
                                                    "sort_order",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {heritageForm.errors.sort_order && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {heritageForm.errors.sort_order}
                                            </p>
                                        )}
                                    </div>


                                    {/* Image */}

                                    <div className="md:col-span-2">

                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Image URL
                                        </label>

                                        <input
                                            type="url"
                                            value={heritageForm.data.image_path}
                                            onChange={(e) =>
                                                heritageForm.setData(
                                                    "image_path",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="https://example.com/image.jpg"
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {heritageForm.errors.image_path && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {heritageForm.errors.image_path}
                                            </p>
                                        )}

                                    </div>


                                    {/* Description */}

                                    <div className="md:col-span-2">

                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Description
                                        </label>

                                        <textarea
                                            rows={4}
                                            value={heritageForm.data.description}
                                            onChange={(e) =>
                                                heritageForm.setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Describe this heritage site..."
                                            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {heritageForm.errors.description && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {heritageForm.errors.description}
                                            </p>
                                        )}

                                    </div>

                                </div>


                                {/* Actions */}

                                <div className="mt-5 flex justify-end gap-3">

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowHeritageForm(false);
                                            heritageForm.reset();
                                        }}
                                        className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition hover:bg-zinc-800"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        disabled={heritageForm.processing}
                                        onClick={() =>
                                            heritageForm.post(
                                                `/admin/destinations/${destination.id}/heritage-sites`,
                                                {
                                                    preserveScroll: true,

                                                    onSuccess: () => {
                                                        heritageForm.reset();
                                                        setShowHeritageForm(false);
                                                    },
                                                }
                                            )
                                        }
                                        className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
                                    >
                                        {heritageForm.processing
                                            ? "Adding..."
                                            : "Add Heritage Site"}
                                    </button>

                                </div>

                            </div>
                        )}


                        {/* Existing Heritage Sites */}

                        <div className="space-y-4">

                            {destination.heritage_sites?.length > 0 ? (

                                destination.heritage_sites
                                    .slice()
                                    .sort(
                                        (a, b) =>
                                            a.sort_order -
                                            b.sort_order
                                    )
                                    .map((site) => (

                                        <div
                                            key={site.id}
                                            className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 sm:flex-row"
                                        >

                                            {/* Image */}

                                            <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-44">

                                                <img
                                                    src={site.image_path}
                                                    alt={site.name}
                                                    className="h-full w-full object-cover"
                                                />

                                            </div>


                                            {/* Content */}

                                            <div className="flex flex-1 flex-col">

                                                <div className="flex items-start justify-between gap-4">

                                                    <div>

                                                        <h3 className="text-lg font-semibold text-white">
                                                            {site.name}
                                                        </h3>

                                                        <span className="mt-1 inline-block text-xs text-zinc-500">
                                                            Order: {site.sort_order}
                                                        </span>

                                                    </div>


                                                    {/* DELETE ONLY */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteHeritageSite(
                                                                site
                                                            )
                                                        }
                                                        className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:border-red-500 hover:text-red-400"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>

                                                </div>


                                                {site.description && (
                                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                                        {site.description}
                                                    </p>
                                                )}

                                            </div>

                                        </div>

                                    ))

                            ) : (

                                <div className="rounded-xl border border-dashed border-zinc-700 py-10 text-center">

                                    <p className="text-sm text-zinc-500">
                                        No heritage sites have been added yet.
                                    </p>

                                </div>

                            )}

                        </div>

                    </section>


                    {/* =====================================================
                        FOODS
                    ====================================================== */}

                    <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">

                        {/* Header */}

                        <div className="mb-6 flex items-center justify-between">

                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    Local Foods
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Manage the local foods associated with this destination.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowFoodForm(!showFoodForm)
                                }
                                className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                            >
                                <Plus size={18} />
                                Add Food
                            </button>

                        </div>


                        {/* Add Food Form */}

                        {showFoodForm && (
                            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">

                                <h3 className="mb-5 text-lg font-semibold text-white">
                                    Add Local Food
                                </h3>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* Food Name */}

                                    <div>
                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Food Name
                                        </label>

                                        <input
                                            type="text"
                                            value={foodForm.data.name}
                                            onChange={(e) =>
                                                foodForm.setData(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="e.g. Awadhi Biryani"
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {foodForm.errors.name && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {foodForm.errors.name}
                                            </p>
                                        )}

                                    </div>


                                    {/* Sort Order */}

                                    <div>
                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Sort Order
                                        </label>

                                        <input
                                            type="number"
                                            min="0"
                                            value={foodForm.data.sort_order}
                                            onChange={(e) =>
                                                foodForm.setData(
                                                    "sort_order",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {foodForm.errors.sort_order && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {foodForm.errors.sort_order}
                                            </p>
                                        )}

                                    </div>


                                    {/* Description */}

                                    <div className="md:col-span-2">

                                        <label className="mb-2 block text-sm text-zinc-400">
                                            Description
                                        </label>

                                        <textarea
                                            rows={4}
                                            value={foodForm.data.description}
                                            onChange={(e) =>
                                                foodForm.setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Describe this local food..."
                                            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none transition focus:border-purple-500"
                                        />

                                        {foodForm.errors.description && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {foodForm.errors.description}
                                            </p>
                                        )}

                                    </div>

                                </div>


                                {/* Actions */}

                                <div className="mt-5 flex justify-end gap-3">

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowFoodForm(false);
                                            foodForm.reset();
                                        }}
                                        className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition hover:bg-zinc-800"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        disabled={foodForm.processing}
                                        onClick={() =>
                                            foodForm.post(
                                                `/admin/destinations/${destination.id}/foods`,
                                                {
                                                    preserveScroll: true,

                                                    onSuccess: () => {
                                                        foodForm.reset();
                                                        setShowFoodForm(false);
                                                    },
                                                }
                                            )
                                        }
                                        className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
                                    >
                                        {foodForm.processing
                                            ? "Adding..."
                                            : "Add Food"}
                                    </button>

                                </div>

                            </div>
                        )}


                        {/* Existing Foods */}

                        <div className="space-y-4">

                            {destination.foods?.length > 0 ? (

                                destination.foods
                                    .slice()
                                    .sort(
                                        (a, b) =>
                                            a.sort_order -
                                            b.sort_order
                                    )
                                    .map((food) => (

                                        <div
                                            key={food.id}
                                            className="flex items-start justify-between gap-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
                                        >

                                            {/* Content */}

                                            <div className="flex-1">

                                                <div className="flex flex-wrap items-center gap-3">

                                                    <h3 className="text-lg font-semibold text-white">
                                                        {food.name}
                                                    </h3>

                                                    <span className="text-xs text-zinc-600">
                                                        Order: {food.sort_order}
                                                    </span>

                                                </div>


                                                {food.description && (
                                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                                        {food.description}
                                                    </p>
                                                )}

                                            </div>


                                            {/* DELETE */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    deleteFood(food)
                                                }
                                                className="shrink-0 rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:border-red-500 hover:text-red-400"
                                            >
                                                <Trash2 size={16} />
                                            </button>

                                        </div>

                                    ))

                            ) : (

                                <div className="rounded-xl border border-dashed border-zinc-700 py-10 text-center">

                                    <p className="text-sm text-zinc-500">
                                        No local foods have been added yet.
                                    </p>

                                </div>

                            )}

                        </div>

                    </section>


                    {/* Bottom spacing */}

                    <div className="h-10" />

                </div>
            </div>
        </>
    );
}