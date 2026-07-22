import { Link, useForm } from "@inertiajs/react";

import PackageHeader from "@/components/Admin/Packages/PackageHeader";
import BasicInfoCard from "@/components/Admin/Packages/BasicInfoCard";
import PricingCard from "@/components/Admin/Packages/PricingCard";
import DestinationsCard from "@/components/Admin/Packages/DestinationsCard";
import ItineraryCard from "@/components/Admin/Packages/ItineraryCard";
import PackageActions from "@/components/Admin/Packages/PackageActions";

export default function Package({
    package: pkg,
    allDestinations
}: {
    package: any;
    allDestinations: any[]
}) {
    const form = useForm({
        title: pkg.title,
        slug: pkg.slug,
        short_description: pkg.short_description,
        full_description: pkg.full_description,
        starting_city: pkg.starting_city,
        ending_city: pkg.ending_city,
        duration_days: pkg.duration_days,
        duration_nights: pkg.duration_nights,
    });
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-7xl px-8 py-10">
                {/* Back */}
                <Link
                    href="/admin/packages"
                    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-purple-400"
                >
                    ← Back to Packages
                </Link>
                {/* Header */}
                <PackageHeader pkg={pkg} />
                {/* Top Cards */}
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <BasicInfoCard pkg={pkg} form={form} />
                    <PricingCard pkg={pkg} />
                </div>
                {/* Destinations */}
                <DestinationsCard
                    pkg={pkg}
                    allDestinations={allDestinations}
                />
                {/* Itinerary */}
                <ItineraryCard pkg={pkg} />
                {/* Actions */}
                <PackageActions pkg={pkg} />
                <button
                    onClick={() =>
                        form.put(`/admin/packages/${pkg.id}`)
                    }
                    className="rounded-xl bg-purple-600 px-6 py-3 m-5 font-semibold hover:bg-purple-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}