import InfoField from "@/components/Admin/Bookings/InfoField";

export default function PackageBasicCard({
    form,
}: {
    form: any;
}) {

    return (

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold">
                    Basic Information
                </h2>

                <p className="mt-2 text-zinc-500">
                    General package information.
                </p>

            </div>

            <div className="space-y-6">

                <InfoField label="Package Title">

                    <input
                        value={form.data.title}
                        onChange={(e) =>
                            form.setData("title", e.target.value)
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                </InfoField>

                <InfoField label="Slug">

                    <input
                        value={form.data.slug}
                        onChange={(e) =>
                            form.setData("slug", e.target.value)
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                </InfoField>

                <InfoField label="Cover Image URL">

                    <input
                        value={form.data.cover_image}
                        onChange={(e) =>
                            form.setData("cover_image", e.target.value)
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                </InfoField>

                <div className="grid gap-6 md:grid-cols-2">

                    <InfoField label="Duration Days">

                        <input
                            type="number"
                            value={form.data.duration_days}
                            onChange={(e) =>
                                form.setData(
                                    "duration_days",
                                    Number(e.target.value)
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                    <InfoField label="Duration Nights">

                        <input
                            type="number"
                            value={form.data.duration_nights}
                            onChange={(e) =>
                                form.setData(
                                    "duration_nights",
                                    Number(e.target.value)
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <InfoField label="Starting City">

                        <input
                            value={form.data.starting_city}
                            onChange={(e) =>
                                form.setData(
                                    "starting_city",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                    <InfoField label="Ending City">

                        <input
                            value={form.data.ending_city}
                            onChange={(e) =>
                                form.setData(
                                    "ending_city",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <InfoField label="Start Latitude">

                        <input
                            value={form.data.start_lat}
                            onChange={(e) =>
                                form.setData("start_lat", Number(e.target.value))
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                    <InfoField label="Start Longitude">

                        <input
                            value={form.data.start_lng}
                            onChange={(e) =>
                                form.setData("start_lng", Number(e.target.value))
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <InfoField label="End Latitude">

                        <input
                            value={form.data.end_lat}
                            onChange={(e) =>
                                form.setData("end_lat", Number(e.target.value))
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                    <InfoField label="End Longitude">

                        <input
                            value={form.data.end_lng}
                            onChange={(e) =>
                                form.setData("end_lng", Number(e.target.value))
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                </div>

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
                        className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-4"
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
                        className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                </InfoField>

            </div>

        </div>

    );

}