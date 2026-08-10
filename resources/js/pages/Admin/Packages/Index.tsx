import { Head, Link } from "@inertiajs/react";
import {
    Plus,
    Search,
    Eye,
    Pencil,
    Trash2,
    Package as PackageIcon,
    MapPin,
    ChevronRight,
} from "lucide-react";
import { useMemo, useState } from "react";

type Package = {
    id: number;
    title: string;
    slug: string;
    duration: string;
    is_active: boolean;
    banner_image?: string;

    destinations: {
        id: number;
        name: string;
    }[];

    pricings: {
        id: number;
        vehicle_name: string;
        per_person_cost: number;
    }[];
};

export default function Index({
    packages,
}: {
    packages: Package[];
}) {
    const [search, setSearch] = useState("");

    const filteredPackages = useMemo(() => {
        return packages.filter((pkg) => {
            const q = search.toLowerCase();

            return (
                pkg.title.toLowerCase().includes(q) ||
                pkg.slug.toLowerCase().includes(q)
            );
        });
    }, [packages, search]);

    const badge = (active: boolean) => {
        if (active) {
            return (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                </span>
            );
        }

        return (
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Inactive
            </span>
        );
    };

    return (
        <>
            <Head title="Package Management" />

            <div className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    {/* =====================================================
                        HEADER
                    ====================================================== */}

                    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="mb-3 flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                                    Management
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Packages
                            </h1>

                            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
                                Manage tour packages offered by the company.
                            </p>

                        </div>


                        {/* Header Actions */}

                        <div className="flex items-center gap-3">

                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-3">

                                <p className="text-xs uppercase tracking-wider text-zinc-600">
                                    Total Packages
                                </p>

                                <p className="mt-1 text-2xl font-bold text-purple-400">
                                    {packages.length}
                                </p>

                            </div>


                            <Link
                                href="/admin/create-package"
                                className="group flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-500"
                            >
                                <Plus
                                    size={19}
                                    className="transition-transform group-hover:rotate-90"
                                />

                                Create Package
                            </Link>

                        </div>

                    </div>


                    {/* =====================================================
                        SEARCH / TOOLBAR
                    ====================================================== */}

                    <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            <div className="relative w-full max-w-md">

                                <Search
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                                />

                                <input
                                    type="text"
                                    placeholder="Search packages..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/20"
                                />

                            </div>


                            <div className="text-sm text-zinc-600">
                                Showing{" "}
                                <span className="font-medium text-zinc-300">
                                    {filteredPackages.length}
                                </span>{" "}
                                {filteredPackages.length === 1
                                    ? "package"
                                    : "packages"}
                            </div>

                        </div>

                    </div>


                    {/* =====================================================
                        PACKAGE TABLE
                    ====================================================== */}

                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/30">

                        <div className="overflow-x-auto">

                            <table className="min-w-[950px] w-full">

                                <thead>
                                    <tr className="border-b border-zinc-800 bg-zinc-950/70">

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Package
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Destinations
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Starting Price
                                        </th>

                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Status
                                        </th>

                                        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>


                                <tbody>

                                    {filteredPackages.length > 0 ? (

                                        filteredPackages.map((pkg) => {

                                            const cheapest =
                                                pkg.pricings.length
                                                    ? Math.min(
                                                        ...pkg.pricings.map(
                                                            (p) =>
                                                                p.per_person_cost
                                                        )
                                                    )
                                                    : 0;

                                            return (

                                                <tr
                                                    key={pkg.id}
                                                    className="group border-b border-zinc-800/70 transition hover:bg-zinc-800/30"
                                                >

                                                    {/* Package */}

                                                    <td className="px-6 py-5">

                                                        <div className="flex items-center gap-4">

                                                            {/* Image / Icon */}

                                                            <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">

                                                                {pkg.banner_image ? (

                                                                    <img
                                                                        src={
                                                                            pkg.banner_image
                                                                        }
                                                                        alt={
                                                                            pkg.title
                                                                        }
                                                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                                    />

                                                                ) : (

                                                                    <div className="flex h-full w-full items-center justify-center text-zinc-700">
                                                                        <PackageIcon
                                                                            size={20}
                                                                        />
                                                                    </div>

                                                                )}

                                                            </div>


                                                            <div className="min-w-0">

                                                                <div className="flex items-center gap-2">

                                                                    <span className="font-semibold text-zinc-200">
                                                                        {pkg.title}
                                                                    </span>

                                                                </div>

                                                                <p className="mt-1 max-w-xs truncate text-xs text-zinc-600">
                                                                    /{pkg.slug}
                                                                </p>

                                                                <p className="mt-1 text-xs text-zinc-600">
                                                                    #{pkg.id}
                                                                    {pkg.duration
                                                                        ? ` • ${pkg.duration}`
                                                                        : ""}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* Destinations */}

                                                    <td className="px-6 py-5">

                                                        {pkg.destinations.length > 0 ? (

                                                            <div className="flex max-w-xs flex-wrap gap-1.5">

                                                                {pkg.destinations.map(
                                                                    (
                                                                        destination
                                                                    ) => (

                                                                        <span
                                                                            key={
                                                                                destination.id
                                                                            }
                                                                            className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/10 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-300"
                                                                        >

                                                                            <MapPin
                                                                                size={
                                                                                    12
                                                                                }
                                                                            />

                                                                            {
                                                                                destination.name
                                                                            }

                                                                        </span>

                                                                    )
                                                                )}

                                                            </div>

                                                        ) : (

                                                            <span className="text-sm text-zinc-600">
                                                                No destinations
                                                            </span>

                                                        )}

                                                    </td>


                                                    {/* Price */}

                                                    <td className="px-6 py-5">

                                                        {cheapest > 0 ? (

                                                            <div>

                                                                <p className="font-semibold text-zinc-200">
                                                                    ₹
                                                                    {cheapest.toLocaleString(
                                                                        "en-IN"
                                                                    )}
                                                                </p>

                                                                <p className="mt-1 text-xs text-zinc-600">
                                                                    per person
                                                                </p>

                                                            </div>

                                                        ) : (

                                                            <span className="text-sm text-zinc-600">
                                                                Not available
                                                            </span>

                                                        )}

                                                    </td>


                                                    {/* Status */}

                                                    <td className="px-6 py-5">
                                                        {badge(pkg.is_active)}
                                                    </td>


                                                    {/* Actions */}

                                                    <td className="px-6 py-5">

                                                        <div className="flex justify-end gap-2">

                                                            {/* View */}

                                                            <Link
                                                                href={`/admin/packages/${pkg.id}`}
                                                                title="View package"
                                                                className="rounded-lg border border-zinc-700 bg-zinc-900 p-2.5 text-zinc-400 transition hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
                                                            >
                                                                <Eye
                                                                    size={17}
                                                                />
                                                            </Link>


                                                            {/* Edit */}

                                                            <Link
                                                                href={`/admin/packages/${pkg.id}`}
                                                                title="Edit package"
                                                                className="rounded-lg border border-zinc-700 bg-zinc-900 p-2.5 text-zinc-400 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                                                            >
                                                                <Pencil
                                                                    size={17}
                                                                />
                                                            </Link>


                                                            {/* Delete */}

                                                            <Link
                                                                href={`/admin/packages/${pkg.id}`}
                                                                title="Delete package"
                                                                className="rounded-lg border border-zinc-700 bg-zinc-900 p-2.5 text-zinc-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                                                            >
                                                                <Trash2
                                                                    size={17}
                                                                />
                                                            </Link>

                                                        </div>

                                                    </td>

                                                </tr>

                                            );

                                        })

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan={5}
                                                className="px-6 py-16 text-center"
                                            >

                                                <div className="mx-auto flex max-w-sm flex-col items-center">

                                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-600">
                                                        <PackageIcon
                                                            size={22}
                                                        />
                                                    </div>

                                                    <p className="font-medium text-zinc-300">
                                                        No packages found
                                                    </p>

                                                    <p className="mt-1 text-sm text-zinc-600">
                                                        {search
                                                            ? "Try adjusting your search."
                                                            : "Create your first package to get started."}
                                                    </p>

                                                    {search && (

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setSearch("")
                                                            }
                                                            className="mt-4 text-sm font-medium text-purple-400 hover:text-purple-300"
                                                        >
                                                            Clear search
                                                        </button>

                                                    )}

                                                </div>

                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>


                        {/* Bottom information */}

                        {filteredPackages.length > 0 && (

                            <div className="border-t border-zinc-800 bg-zinc-950/40 px-6 py-3">

                                <p className="text-xs text-zinc-600">
                                    {search
                                        ? `Filtered from ${packages.length} total packages`
                                        : `${packages.length} packages available`}
                                </p>

                            </div>

                        )}

                    </div>

                </div>

            </div>
        </>
    );
}