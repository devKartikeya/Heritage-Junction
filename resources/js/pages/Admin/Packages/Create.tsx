import { Head, Link, useForm } from "@inertiajs/react";
import {
    ArrowLeft,
    PackagePlus,
    MapPinned,
    CarFront,
    CalendarDays,
    CheckCircle2,
} from "lucide-react";

import PackageBasicCard from "@/components/Admin/Packages/Create/PackageBasicCard";
import DestinationSelectorCard from "@/components/Admin/Packages/Create/DestinationSelectorCard";
import CreatePackageActions from "@/components/Admin/Packages/Create/CreatePackageActions";
import PricingBuilderCard from "@/components/Admin/Packages/Create/PricingBuilderCard";
import ItineraryBuilderCard from "@/components/Admin/Packages/Create/ItineraryBuilderCard";
import InclusionsBuilderCard from "@/components/Admin/Packages/Create/InclusionBuilder";
import ExclusionsBuilderCard from "@/components/Admin/Packages/Create/ExclusionBuilderCard";

export default function Create({
    destinations,
}: {
    destinations: any[];
}) {
    const form = useForm({
        title: "",
        slug: "",
        cover_image: "",
        short_description: "",
        full_description: "",
        duration_days: 1,
        duration_nights: 0,
        starting_city: "",
        ending_city: "",
        start_lat: 0,
        start_lng: 0,
        end_lat: 0,
        end_lng: 0,
        is_active: true,
        destinations: [],
        pricings: [],
        itineraries: [],
        inclusions: [],
        exclusions: [],
    });

    return (
        <div className="min-h-screen bg-black text-white">

            <Head title="Create Package" />

            {/* =====================================================
                PAGE CONTAINER
            ====================================================== */}

            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">

                {/* =================================================
                    TOP NAV
                ================================================== */}

                <div className="flex items-center justify-between">

                    <Link
                        href="/admin/packages"
                        className="group inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                    >
                        <ArrowLeft
                            size={17}
                            className="transition-transform group-hover:-translate-x-0.5"
                        />

                        Back to Packages
                    </Link>

                </div>


                {/* =================================================
                    HERO / PAGE HEADER
                ================================================== */}

                <div className="relative mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

                    {/* Subtle background decoration */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl" />


                    <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

                        {/* Title */}

                        <div className="flex items-start gap-4">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                                <PackagePlus
                                    size={27}
                                    className="text-purple-400"
                                />
                            </div>

                            <div>

                                <div className="flex items-center gap-3">

                                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                        Create Package
                                    </h1>

                                    <span className="hidden rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 sm:inline-flex">
                                        New Package
                                    </span>

                                </div>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                                    Build a complete travel package with
                                    destinations, pricing, itinerary,
                                    inclusions and exclusions.
                                </p>

                            </div>

                        </div>


                        {/* Package Builder Indicator */}

                        <div className="hidden items-center gap-3 rounded-2xl border border-zinc-800 bg-black/30 px-4 py-3 lg:flex">

                            <CheckCircle2
                                size={18}
                                className="text-zinc-600"
                            />

                            <div>

                                <p className="text-xs font-medium text-zinc-400">
                                    Package Builder
                                </p>

                                <p className="mt-0.5 text-xs text-zinc-600">
                                    Complete all sections below
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BUILDER OVERVIEW
                ================================================== */}

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    <BuilderStep
                        icon={<PackagePlus size={17} />}
                        number="01"
                        title="Basic Information"
                    />

                    <BuilderStep
                        icon={<MapPinned size={17} />}
                        number="02"
                        title="Destinations"
                    />

                    <BuilderStep
                        icon={<CarFront size={17} />}
                        number="03"
                        title="Pricing"
                    />

                    <BuilderStep
                        icon={<CalendarDays size={17} />}
                        number="04"
                        title="Itinerary"
                    />

                </div>


                {/* =================================================
                    PACKAGE BUILDER
                ================================================== */}

                <div className="mt-8 space-y-6">

                    {/* Basic Information */}

                    <PackageBasicCard
                        form={form}
                    />


                    {/* Destinations */}

                    <DestinationSelectorCard
                        form={form}
                        destinations={destinations}
                    />


                    {/* Pricing */}

                    <PricingBuilderCard
                        form={form}
                    />


                    {/* Itinerary */}

                    <ItineraryBuilderCard
                        form={form}
                    />


                    {/* Inclusions */}

                    <InclusionsBuilderCard
                        form={form}
                    />


                    {/* Exclusions */}

                    <ExclusionsBuilderCard
                        form={form}
                    />

                </div>


                {/* =================================================
                    FINAL ACTIONS
                ================================================== */}

                <div className="mt-8">

                    <CreatePackageActions
                        form={form}
                    />

                </div>


                {/* Bottom spacing */}

                <div className="h-8" />

            </div>

        </div>
    );
}


/* =============================================================
   BUILDER STEP
============================================================= */

function BuilderStep({
    icon,
    number,
    title,
}: {
    icon: React.ReactNode;
    number: string;
    title: string;
}) {
    return (
        <div className="group flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 transition-all hover:border-zinc-700 hover:bg-zinc-900">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-zinc-500 transition-colors group-hover:text-purple-400">
                {icon}
            </div>

            <div className="min-w-0">

                <p className="text-[10px] font-semibold tracking-[0.15em] text-zinc-600">
                    STEP {number}
                </p>

                <p className="mt-0.5 truncate text-sm font-medium text-zinc-300">
                    {title}
                </p>

            </div>

        </div>
    );
}