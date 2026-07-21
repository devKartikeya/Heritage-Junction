import { Link, useForm } from "@inertiajs/react";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";
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
                <span className="rounded-full bg-green-500/20 px-3 py-2 text-sm font-semibold text-green-400">
                    Active
                </span>
            );
        }

        return (
            <span className="rounded-full bg-red-500/20 px-3 py-2 text-sm font-semibold text-red-400">
                Inactive
            </span>
        );
    };

    return (

        <div className="min-h-screen bg-black p-8 text-white">

            {/* Header */}

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                    <h1 className="text-4xl font-bold">
                        Packages
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        Manage tour packages offered by the company.
                    </p>

                </div>

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-zinc-900 px-6 py-4 shadow">

                        <p className="text-sm text-zinc-500">
                            Total Packages
                        </p>

                        <h2 className="mt-1 text-3xl font-bold text-purple-400">
                            {packages.length}
                        </h2>

                    </div>

                    <Link
                        href="/admin/packages/create"
                        className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-4 font-semibold transition hover:bg-purple-700"
                    >
                        <Plus size={20} />
                        Create
                    </Link>

                </div>

            </div>

            {/* Search */}

            <div className="relative mt-10 max-w-md">

                <Search
                    size={18}
                    className="absolute left-4 top-4 text-zinc-500"
                />

                <input
                    type="text"
                    placeholder="Search package..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-4 outline-none focus:border-purple-500"
                />

            </div>

            {/* Table */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

                <table className="min-w-full">

                    <thead className="border-b border-zinc-800 bg-zinc-950">

                        <tr className="text-left text-sm uppercase tracking-wider text-zinc-400">

                            <th className="px-6 py-5">
                                ID
                            </th>

                            <th className="px-6 py-5">
                                Package
                            </th>

                            <th className="px-6 py-5">
                                Destinations
                            </th>

                            <th className="px-6 py-5">
                                Starting Price
                            </th>

                            <th className="px-6 py-5">
                                Status
                            </th>

                            <th className="px-6 py-5">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredPackages.map((pkg) => {

                            const cheapest =
                                pkg.pricings.length
                                    ? Math.min(
                                        ...pkg.pricings.map(
                                            p => p.per_person_cost
                                        )
                                    )
                                    : 0;

                            return (

                                <tr
                                    key={pkg.id}
                                    className="border-b border-zinc-800 transition hover:bg-zinc-950"
                                >

                                    <td className="px-6 py-6 font-semibold">
                                        #{pkg.id}
                                    </td>

                                    <td className="px-6 py-6">

                                        <div>

                                            <p className="font-semibold">
                                                {pkg.title}
                                            </p>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                {pkg.slug}
                                            </p>

                                        </div>

                                    </td>

                                    <td className="px-6 py-6">

                                        <div className="flex flex-wrap gap-2">

                                            {pkg.destinations.map(
                                                (destination) => (

                                                    <span
                                                        key={
                                                            destination.id
                                                        }
                                                        className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-300"
                                                    >
                                                        {destination.name}
                                                    </span>

                                                )
                                            )}

                                        </div>

                                    </td>

                                    <td className="px-6 py-6 font-semibold text-green-400">
                                        ₹{cheapest}
                                    </td>

                                    <td className="px-6 py-6">
                                        {badge(pkg.is_active)}
                                    </td>

                                    <td className="px-6 py-6">

                                        <div className="flex gap-3">

                                            <Link
                                                href={`/admin/packages/${pkg.id}`}
                                                className="rounded-lg bg-purple-600 p-3 transition hover:bg-purple-700"
                                            >
                                                <Eye size={18} />
                                            </Link>

                                            <Link
                                                href={`/admin/packages/${pkg.id}`}
                                                className="rounded-lg bg-blue-600 p-3 transition hover:bg-blue-700"
                                            >
                                                <Pencil size={18} />
                                            </Link>

                                            <Link
                                                href={`/admin/packages/${pkg.id}`}
                                                className="cursor-pointer rounded-lg bg-red-600 p-3 transition hover:bg-red-700"
                                            >
                                                <Trash2 size={18} />
                                            </Link>

                                        </div>

                                    </td>

                                </tr>

                            );

                        })}

                    </tbody>

                </table>

            </div>

        </div>

    );

}