import { CalendarDays, MapPinned, Package2 } from "lucide-react";

type Props = {
    pkg: any;
};

export default function PackageHeader({ pkg }: Props) {
    const badge = () => {
        if (pkg.is_active) {
            return (
                <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400 font-semibold">
                    Active
                </span>
            );
        }
        return (
            <span className="rounded-full bg-red-500/20 px-4 py-2 text-red-400 font-semibold">
                Inactive
            </span>
        );
    };

    return (
        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Left */}
                <div>
                    <h1 className="text-4xl font-bold">
                        {pkg.title}
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        {pkg.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">

                        <span className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300">
                            #{pkg.id}
                        </span>

                        <span className="rounded-xl border border-zinc-700 px-4 py-2 text-purple-400">
                            {pkg.slug}
                        </span>
                        {badge()}
                    </div>

                </div>
                {/* Right */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-zinc-950 p-5 text-center">
                        <Package2
                            className="mx-auto mb-3 text-purple-400"
                            size={24}
                        />

                        <p className="text-sm text-zinc-500">
                            Pricings
                        </p>

                        <p className="mt-2 text-2xl font-bold">
                            {pkg.pricings.length}
                        </p>
                    </div>
                    <div className="rounded-2xl bg-zinc-950 p-5 text-center">
                        <MapPinned
                            className="mx-auto mb-3 text-blue-400"
                            size={24}
                        />

                        <p className="text-sm text-zinc-500">
                            Dests
                        </p>

                        <p className="mt-2 text-2xl font-bold">
                            {pkg.destinations.length}
                        </p>
                    </div>
                    <div className="rounded-2xl bg-zinc-950 p-5 text-center">
                        <CalendarDays
                            className="mx-auto mb-3 text-green-400"
                            size={24}
                        />

                        <p className="text-sm text-zinc-500">
                            Days
                        </p>

                        <p className="mt-2 text-2xl font-bold">
                            {pkg.duration_days}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}