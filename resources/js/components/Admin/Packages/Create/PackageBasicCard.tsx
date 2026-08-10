import {
    Image,
    MapPin,
    FileText,
    Route,
} from "lucide-react";

import InfoField from "@/components/Admin/Bookings/InfoField";

export default function PackageBasicCard({
    form,
}: {
    form: any;
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-black/20">

            {/* Header */}
            <div className="border-b border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 px-7 py-6 sm:px-8">

                <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 ring-1 ring-purple-500/20">
                        <FileText
                            size={23}
                            className="text-purple-400"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                            Basic Information
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Set up the essential details of your travel package.
                        </p>
                    </div>

                </div>

            </div>

            {/* Content */}
            <div className="p-7 sm:p-8">

                <div className="space-y-7">

                    {/* Package Identity */}
                    <div>

                        <div className="mb-5 flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-purple-500" />

                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                                Package Identity
                            </h3>
                        </div>

                        <div className="grid gap-5">

                            <InfoField label="Package Title">

                                <input
                                    value={form.data.title}
                                    onChange={(e) =>
                                        form.setData(
                                            "title",
                                            e.target.value
                                        )
                                    }
                                    placeholder="e.g. Ayodhya Spiritual Tour"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                />

                            </InfoField>

                            <InfoField label="Slug">

                                <input
                                    value={form.data.slug}
                                    onChange={(e) =>
                                        form.setData(
                                            "slug",
                                            e.target.value
                                        )
                                    }
                                    placeholder="ayodhya-spiritual-tour"
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                />

                            </InfoField>

                            {/* Cover Image */}
                            <InfoField label="Cover Image URL">

                                <div className="relative">

                                    <Image
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    />

                                    <input
                                        value={form.data.cover_image}
                                        onChange={(e) =>
                                            form.setData(
                                                "cover_image",
                                                e.target.value
                                            )
                                        }
                                        placeholder="https://example.com/image.jpg"
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </div>

                                <p className="mt-2 text-xs text-zinc-600">
                                    Paste the public URL of the package cover image.
                                </p>

                            </InfoField>

                        </div>

                    </div>


                    {/* Duration */}
                    <div className="border-t border-zinc-800 pt-7">

                        <div className="mb-5 flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-purple-500" />

                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                                Duration & Route
                            </h3>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">

                            <InfoField label="Duration Days">

                                <input
                                    type="number"
                                    min={1}
                                    value={form.data.duration_days}
                                    onChange={(e) =>
                                        form.setData(
                                            "duration_days",
                                            Number(e.target.value)
                                        )
                                    }
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                />

                            </InfoField>

                            <InfoField label="Duration Nights">

                                <input
                                    type="number"
                                    min={0}
                                    value={form.data.duration_nights}
                                    onChange={(e) =>
                                        form.setData(
                                            "duration_nights",
                                            Number(e.target.value)
                                        )
                                    }
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                />

                            </InfoField>

                        </div>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <InfoField label="Starting City">

                                <div className="relative">

                                    <MapPin
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    />

                                    <input
                                        value={form.data.starting_city}
                                        onChange={(e) =>
                                            form.setData(
                                                "starting_city",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Starting location"
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </div>

                            </InfoField>

                            <InfoField label="Ending City">

                                <div className="relative">

                                    <Route
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    />

                                    <input
                                        value={form.data.ending_city}
                                        onChange={(e) =>
                                            form.setData(
                                                "ending_city",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Ending location"
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </div>

                            </InfoField>

                        </div>

                    </div>


                    {/* Coordinates */}
                    <div className="border-t border-zinc-800 pt-7">

                        <div className="mb-5">

                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                                Route Coordinates
                            </h3>

                            <p className="mt-1 text-xs text-zinc-600">
                                Geographic coordinates used for the package route.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">

                            <div className="grid gap-5 md:grid-cols-2">

                                <InfoField label="Start Latitude">

                                    <input
                                        type="number"
                                        step="any"
                                        value={form.data.start_lat}
                                        onChange={(e) =>
                                            form.setData(
                                                "start_lat",
                                                Number(e.target.value)
                                            )
                                        }
                                        placeholder="e.g. 26.8467"
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </InfoField>

                                <InfoField label="Start Longitude">

                                    <input
                                        type="number"
                                        step="any"
                                        value={form.data.start_lng}
                                        onChange={(e) =>
                                            form.setData(
                                                "start_lng",
                                                Number(e.target.value)
                                            )
                                        }
                                        placeholder="e.g. 80.9462"
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </InfoField>

                                <InfoField label="End Latitude">

                                    <input
                                        type="number"
                                        step="any"
                                        value={form.data.end_lat}
                                        onChange={(e) =>
                                            form.setData(
                                                "end_lat",
                                                Number(e.target.value)
                                            )
                                        }
                                        placeholder="e.g. 26.7990"
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </InfoField>

                                <InfoField label="End Longitude">

                                    <input
                                        type="number"
                                        step="any"
                                        value={form.data.end_lng}
                                        onChange={(e) =>
                                            form.setData(
                                                "end_lng",
                                                Number(e.target.value)
                                            )
                                        }
                                        placeholder="e.g. 81.0020"
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                </InfoField>

                            </div>

                        </div>

                    </div>


                    {/* Description */}
                    <div className="border-t border-zinc-800 pt-7">

                        <div className="mb-5">

                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                                Package Description
                            </h3>

                            <p className="mt-1 text-xs text-zinc-600">
                                Add the content that customers will see on the package page.
                            </p>

                        </div>

                        <div className="space-y-5">

                            <InfoField label="Short Description">

                                <textarea
                                    rows={3}
                                    value={form.data.short_description}
                                    onChange={(e) =>
                                        form.setData(
                                            "short_description",
                                            e.target.value
                                        )
                                    }
                                    placeholder="A short summary of what this package offers..."
                                    className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                />

                            </InfoField>

                            <InfoField label="Full Description">

                                <textarea
                                    rows={8}
                                    value={form.data.full_description}
                                    onChange={(e) =>
                                        form.setData(
                                            "full_description",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Describe the complete travel experience..."
                                    className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                                />

                            </InfoField>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}