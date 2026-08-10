import {
    CalendarDays,
    MapPinned,
    Package2,
    Hash,
    Link2,
} from "lucide-react";

type Props = {
    pkg: any;
};

export default function PackageHeader({ pkg }: Props) {
    const badge = () => {
        if (pkg.is_active) {
            return (
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Active
                </span>
            );
        }

        return (
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                Inactive
            </span>
        );
    };

    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-2xl">

            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-purple-400 to-transparent" />

            <div className="p-6 sm:p-8">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}
                    <div className="min-w-0 flex-1">

                        {/* Small label */}
                        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-purple-400">
                            <Package2 size={17} />
                            Package Management
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {pkg.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                            {pkg.short_description ||
                                pkg.description ||
                                "Manage package information, pricing, destinations and itinerary."}
                        </p>

                        {/* Metadata */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">

                            {/* ID */}
                            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm text-zinc-400">
                                <Hash size={15} />
                                {pkg.id}
                            </span>

                            {/* Slug */}
                            <span className="inline-flex max-w-full items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                                <Link2 size={15} />

                                <span className="truncate max-w-[220px]">
                                    {pkg.slug}
                                </span>
                            </span>

                            {/* Status */}
                            {badge()}

                        </div>

                    </div>


                    {/* Right - Statistics */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[390px]">

                        {/* Pricing */}
                        <div className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-center transition hover:border-purple-500/30 hover:bg-zinc-950">

                            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/20">
                                <Package2 size={22} />
                            </div>

                            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Pricings
                            </p>

                            <p className="mt-1 text-2xl font-bold text-white">
                                {pkg.pricings?.length ?? 0}
                            </p>

                        </div>


                        {/* Destinations */}
                        <div className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-center transition hover:border-blue-500/30 hover:bg-zinc-950">

                            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
                                <MapPinned size={22} />
                            </div>

                            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Destinations
                            </p>

                            <p className="mt-1 text-2xl font-bold text-white">
                                {pkg.destinations?.length ?? 0}
                            </p>

                        </div>


                        {/* Days */}
                        <div className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-center transition hover:border-green-500/30 hover:bg-zinc-950">

                            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500/20">
                                <CalendarDays size={22} />
                            </div>

                            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                                Duration
                            </p>

                            <p className="mt-1 text-2xl font-bold text-white">
                                {pkg.duration_days}
                                <span className="ml-1 text-sm font-medium text-zinc-500">
                                    days
                                </span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}