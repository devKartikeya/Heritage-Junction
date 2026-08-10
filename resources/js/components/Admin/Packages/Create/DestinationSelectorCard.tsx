import { MapPinned, Check, MapPin } from "lucide-react";

export default function DestinationSelectorCard({
    form,
    destinations,
}: {
    form: any;
    destinations: any[];
}) {
    function toggle(id: number) {
        if (form.data.destinations.includes(id)) {
            form.setData(
                "destinations",
                form.data.destinations.filter(
                    (d: number) => d !== id
                )
            );
        } else {
            form.setData("destinations", [
                ...form.data.destinations,
                id,
            ]);
        }
    }

    return (
        <section className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">

            {/* Header */}
            <div className="border-b border-zinc-800 px-8 py-7">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                            <MapPinned
                                size={24}
                                className="text-emerald-400"
                            />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Destinations
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Select the places included in this travel package.
                            </p>
                        </div>

                    </div>

                    {/* Selected Counter */}
                    <div className="flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5">

                        <span className="text-lg font-bold text-purple-400">
                            {form.data.destinations.length}
                        </span>

                        <span className="text-sm text-zinc-500">
                            selected
                        </span>

                    </div>

                </div>

            </div>

            {/* Destination Grid */}
            <div className="p-8">

                {destinations.length === 0 ? (

                    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 py-14 text-center">

                        <MapPin
                            size={32}
                            className="mx-auto text-zinc-600"
                        />

                        <p className="mt-3 font-medium text-zinc-400">
                            No destinations available
                        </p>

                        <p className="mt-1 text-sm text-zinc-600">
                            Create a destination first.
                        </p>

                    </div>

                ) : (

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                        {destinations.map((destination: any) => {

                            const checked =
                                form.data.destinations.includes(
                                    destination.id
                                );

                            return (
                                <div
                                    key={destination.id}
                                    onClick={() =>
                                        toggle(destination.id)
                                    }
                                    className={`
                                        group relative cursor-pointer overflow-hidden rounded-2xl
                                        border transition-all duration-300
                                        ${
                                            checked
                                                ? "border-purple-500 bg-purple-500/5 shadow-lg shadow-purple-500/5"
                                                : "border-zinc-800 bg-zinc-950 hover:-translate-y-0.5 hover:border-zinc-600 hover:shadow-xl hover:shadow-black/20"
                                        }
                                    `}
                                >

                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">

                                        <img
                                            src={destination.hero_image}
                                            alt={destination.name}
                                            className={`
                                                h-full w-full object-cover
                                                transition duration-500
                                                group-hover:scale-105
                                                ${
                                                    checked
                                                        ? "scale-105"
                                                        : ""
                                                }
                                            `}
                                        />

                                        {/* Image Overlay */}
                                        <div
                                            className={`
                                                absolute inset-0 transition
                                                ${
                                                    checked
                                                        ? "bg-purple-950/40"
                                                        : "bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                                                }
                                            `}
                                        />

                                        {/* Selected Badge */}
                                        {checked && (
                                            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                                                <Check size={14} />
                                                Selected
                                            </div>
                                        )}

                                        {/* Checkbox */}
                                        <div
                                            className={`
                                                absolute right-4 top-4 flex h-9 w-9 items-center justify-center
                                                rounded-xl border backdrop-blur-md transition-all
                                                ${
                                                    checked
                                                        ? "border-purple-400 bg-purple-600 text-white"
                                                        : "border-white/20 bg-black/40 text-transparent"
                                                }
                                            `}
                                        >
                                            {checked && (
                                                <Check size={18} />
                                            )}

                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                readOnly
                                                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                            />
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="p-5">

                                        <div className="flex items-start justify-between gap-3">

                                            <div>

                                                <h3 className="text-lg font-bold text-white">
                                                    {destination.name}
                                                </h3>

                                                {destination.state && (
                                                    <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                                                        <MapPin size={13} />
                                                        {destination.state}
                                                    </p>
                                                )}

                                            </div>

                                        </div>

                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
                                            {destination.short_description}
                                        </p>

                                    </div>

                                    {/* Bottom Selection Indicator */}
                                    <div
                                        className={`
                                            h-0.5 w-full transition-all duration-300
                                            ${
                                                checked
                                                    ? "bg-purple-500"
                                                    : "bg-transparent"
                                            }
                                        `}
                                    />

                                </div>
                            );
                        })}

                    </div>

                )}

            </div>

        </section>
    );
}