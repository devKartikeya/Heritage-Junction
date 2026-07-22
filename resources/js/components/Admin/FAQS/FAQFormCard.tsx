import InfoField from "@/components/Admin/Bookings/InfoField";

export default function FAQFormCard({
    form,
}: {
    form: any;
}) {

    return (

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="space-y-6">

                <InfoField label="Question">

                    <input
                        value={form.data.question}
                        onChange={(e) =>
                            form.setData(
                                "question",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                    />

                </InfoField>

                <InfoField label="Answer">

                    <textarea
                        rows={8}
                        value={form.data.answer}
                        onChange={(e) =>
                            form.setData(
                                "answer",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 resize-none"
                    />

                </InfoField>

                <div className="grid gap-6 md:grid-cols-2">

                    <InfoField label="Category">

                        <select
                            value={form.data.category}
                            onChange={(e) =>
                                form.setData(
                                    "category",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        >

                            <option>

                                Package

                            </option>

                            <option>

                                Booking

                            </option>

                            <option>

                                Payment

                            </option>

                            <option>

                                Travel

                            </option>

                            <option>

                                General

                            </option>

                        </select>

                    </InfoField>

                    <InfoField label="Sort Order">

                        <input
                            type="number"
                            value={form.data.sort_order}
                            onChange={(e) =>
                                form.setData(
                                    "sort_order",
                                    Number(
                                        e.target.value
                                    )
                                )
                            }
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4"
                        />

                    </InfoField>

                </div>

            </div>

        </div>

    );

}