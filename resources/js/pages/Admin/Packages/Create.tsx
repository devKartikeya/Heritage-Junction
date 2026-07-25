import { Head, Link, useForm } from "@inertiajs/react";

import PackageBasicCard from "@/components/Admin/Packages/Create/PackageBasicCard";
import DestinationSelectorCard from "@/components/Admin/Packages/Create/DestinationSelectorCard";
import CreatePackageActions from "@/components/Admin/Packages/Create/CreatePackageActions";
import PricingBuilderCard from "@/components/Admin/Packages/Create/PricingBuilderCard";
import ItineraryBuilderCard from "@/components/Admin/Packages/Create/ItineraryBuilderCard";
import InclusionsBuilderCard from "@/components/Admin/Packages/Create/InclusionBuilder";
import ExclusionsBuilderCard from "@/components/Admin/Packages/Create/ExclusionBuilderCard";

export default function Create({
    destinations
}: {
    destinations: any[]
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
            <Head title="Create Package"/>

            <div className="mx-auto max-w-7xl px-8 py-10">

                <Link
                    href="/admin/packages"
                    className="text-zinc-400 hover:text-purple-400"
                >
                    ← Back to Packages
                </Link>

                <div className="mt-8 mb-10">

                    <h1 className="text-5xl font-black">
                        Create Package
                    </h1>

                    <p className="mt-3 text-zinc-500">
                        Build a complete travel package.
                    </p>

                </div>

                <PackageBasicCard form={form} />

                <DestinationSelectorCard
                    form={form}
                    destinations={destinations}
                />

                <PricingBuilderCard form={form}/>

                <ItineraryBuilderCard form={form} />

                <InclusionsBuilderCard form={form}/>

                <ExclusionsBuilderCard form={form}/>

                <CreatePackageActions form={form} />

            </div>

        </div>

    );

}