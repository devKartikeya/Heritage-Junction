import InfoField from "../Bookings/InfoField";
import { MapPin, Navigation, CalendarDays, FileText } from "lucide-react";

type Props = {
    form: any;
};

export default function BasicInfoCard({ form }: Props) {
    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl">

            {/* Header */}
            <div className="border-b border-zinc-800 bg-zinc-950/60 px-6 py-5">
                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        <FileText size={20} />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Basic Information
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            General information about this travel package
                        </p>
                    </div>

                </div>
            </div>


            {/* Content */}
            <div className="p-6">

                <div className="grid gap-6 md:grid-cols-2">

                    {/* Package Title */}
                    <InfoField label="Package Title">

                        <input
                            type="text"
                            value={form.data.title}
                            onChange={(e) => {
                                const title = e.target.value;

                                form.setData("title", title);

                                form.setData(
                                    "slug",
                                    title
                                        .toLowerCase()
                                        .trim()
                                        .replace(/[^a-z0-9\s-]/g, "")
                                        .replace(/\s+/g, "-")
                                );
                            }}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="e.g. Ayodhya Spiritual Tour"
                        />

                    </InfoField>


                    {/* Slug */}
                    <InfoField label="Slug">

                        <input
                            type="text"
                            value={form.data.slug}
                            onChange={(e) =>
                                form.setData(
                                    "slug",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="ayodhya-spiritual-tour"
                        />

                    </InfoField>


                    {/* Starting City */}
                    <InfoField label="Starting City">

                        <div className="relative">
                            <MapPin
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                            />

                            <input
                                type="text"
                                value={form.data.starting_city}
                                onChange={(e) =>
                                    form.setData(
                                        "starting_city",
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                placeholder="e.g. Lucknow"
                            />
                        </div>

                    </InfoField>


                    {/* Ending City */}
                    <InfoField label="Ending City">

                        <div className="relative">
                            <Navigation
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                            />

                            <input
                                type="text"
                                value={form.data.ending_city}
                                onChange={(e) =>
                                    form.setData(
                                        "ending_city",
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                placeholder="e.g. Ayodhya"
                            />
                        </div>

                    </InfoField>


                    {/* Duration Days */}
                    <InfoField label="Duration (Days)">

                        <div className="relative">
                            <CalendarDays
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                            />

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
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-11 pr-4 text-white outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>

                    </InfoField>


                    {/* Duration Nights */}
                    <InfoField label="Duration (Nights)">

                        <div className="relative">
                            <CalendarDays
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                            />

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
                                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-11 pr-4 text-white outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>

                    </InfoField>

                </div>


                {/* Short Description */}
                <div className="mt-6">

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
                            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="Write a short summary of this package..."
                        />

                    </InfoField>

                </div>


                {/* Full Description */}
                <div className="mt-6">

                    <InfoField label="Full Description">

                        <textarea
                            rows={7}
                            value={form.data.full_description}
                            onChange={(e) =>
                                form.setData(
                                    "full_description",
                                    e.target.value
                                )
                            }
                            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="Write the complete description of this package..."
                        />

                    </InfoField>

                </div>

            </div>
        </div>
    );
}