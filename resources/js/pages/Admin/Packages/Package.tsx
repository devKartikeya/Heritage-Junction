import { Head, Link, useForm } from "@inertiajs/react";

import PackageHeader from "@/components/Admin/Packages/PackageHeader";
import BasicInfoCard from "@/components/Admin/Packages/BasicInfoCard";
import PricingCard from "@/components/Admin/Packages/PricingCard";
import DestinationsCard from "@/components/Admin/Packages/DestinationsCard";
import ItineraryCard from "@/components/Admin/Packages/ItineraryCard";
import PackageActions from "@/components/Admin/Packages/PackageActions";

export default function Package({
    package: pkg,
    allDestinations,
}: {
    package: any;
    allDestinations: any[];
}) {
    const form = useForm({
        title: pkg.title ?? "",
        slug: pkg.slug ?? "",
        short_description: pkg.short_description ?? "",
        full_description: pkg.full_description ?? "",
        starting_city: pkg.starting_city ?? "",
        ending_city: pkg.ending_city ?? "",
        duration_days: pkg.duration_days ?? "",
        duration_nights: pkg.duration_nights ?? "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        form.put(`/admin/packages/${pkg.id}`, {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title={`Manage ${pkg.title}`} />

            <div className="min-h-screen bg-black text-white">

                {/* Subtle background */}
                <div className="pointer-events-none fixed inset-0 -z-0">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl" />
                    <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                    {/* Back */}
                    <div className="mb-6">
                        <Link
                            href="/admin/packages"
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-sm font-medium text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                        >
                            <span className="text-lg">←</span>
                            Back to Packages
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <PackageHeader pkg={pkg} />
                    </div>

                    <form onSubmit={submit}>

                        {/* Main Information */}
                        <section className="mb-6">

                            <div className="mb-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                                    Package Configuration
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-white">
                                    Package Information
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Manage the basic information and details of this
                                    travel package.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl shadow-black/20">
                                <BasicInfoCard
                                    form={form}
                                />
                            </div>

                        </section>

                        {/* Pricing */}
                        <section className="mb-6">

                            <div className="mb-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                                    Pricing
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-white">
                                    Package Pricing
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Manage vehicles, pricing and passenger
                                    requirements for this package.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl shadow-black/20">
                                <PricingCard
                                    pkg={pkg}
                                />
                            </div>

                        </section>

                        {/* Destinations */}
                        <section className="mb-6">

                            <div className="mb-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                                    Destinations
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-white">
                                    Package Destinations
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Select and manage the destinations included
                                    in this travel package.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl shadow-black/20">
                                <DestinationsCard
                                    pkg={pkg}
                                    allDestinations={allDestinations}
                                />
                            </div>

                        </section>

                        {/* Itinerary */}
                        <section className="mb-6">

                            <div className="mb-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                                    Schedule
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-white">
                                    Package Itinerary
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Manage the day-by-day activities and travel
                                    schedule.
                                </p>
                            </div>

                            
                                <ItineraryCard
                                    pkg={pkg}
                                />
                            

                        </section>

                        {/* Package Actions */}
                        <section className="mb-6">

                            {/* <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl shadow-black/20"> */}
                                <PackageActions
                                    pkg={pkg}
                                />
                            {/* </div> */}

                        </section>

                        {/* Bottom Save Bar */}
                        <div className="sticky bottom-4 z-30">

                            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <p className="font-semibold text-white">
                                        Unsaved changes
                                    </p>

                                    <p className="text-sm text-zinc-500">
                                        Save your package information when you're
                                        finished editing.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">

                                    <Link
                                        href="/admin/packages"
                                        className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={form.processing}
                                        className="rounded-xl bg-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {form.processing
                                            ? "Saving..."
                                            : "Save Changes"}
                                    </button>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </>
    );
}