import InfoField from "@/components/Admin/Bookings/InfoField";
import {
    HelpCircle,
    FileText,
    Tag,
    ListOrdered,
} from "lucide-react";

export default function FAQFormCard({
    form,
}: {
    form: any;
}) {
    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-xl shadow-black/20">

            {/* Card Header */}
            <div className="border-b border-zinc-800/80 px-7 py-6">

                <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                        <HelpCircle
                            size={21}
                            className="text-purple-400"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold tracking-tight">
                            FAQ Details
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Provide the question, answer and organization details.
                        </p>
                    </div>

                </div>

            </div>

            {/* Form Content */}
            <div className="space-y-7 px-7 py-7">

                {/* Question */}
                <InfoField label="Question">

                    <div className="relative">

                        <HelpCircle
                            size={17}
                            className="absolute left-4 top-4 text-zinc-600"
                        />

                        <input
                            value={form.data.question}
                            onChange={(e) =>
                                form.setData(
                                    "question",
                                    e.target.value
                                )
                            }
                            placeholder="e.g. What is included in the package?"
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                        />

                    </div>

                </InfoField>

                {/* Answer */}
                <InfoField label="Answer">

                    <div className="relative">

                        <FileText
                            size={17}
                            className="absolute left-4 top-4 text-zinc-600"
                        />

                        <textarea
                            rows={8}
                            value={form.data.answer}
                            onChange={(e) =>
                                form.setData(
                                    "answer",
                                    e.target.value
                                )
                            }
                            placeholder="Write a clear and helpful answer..."
                            className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm leading-6 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                        />

                    </div>

                </InfoField>

                {/* Metadata */}
                <div className="grid gap-6 border-t border-zinc-800/80 pt-7 md:grid-cols-2">

                    {/* Category */}
                    <InfoField label="Category">

                        <div className="relative">

                            <Tag
                                size={17}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                            />

                            <select
                                value={form.data.category}
                                onChange={(e) =>
                                    form.setData(
                                        "category",
                                        e.target.value
                                    )
                                }
                                className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-zinc-300 outline-none transition focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
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

                        </div>

                    </InfoField>

                    {/* Sort Order */}
                    <InfoField label="Sort Order">

                        <div className="relative">

                            <ListOrdered
                                size={17}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                            />

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
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-zinc-200 outline-none transition focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                            />

                        </div>

                    </InfoField>

                </div>

            </div>

        </div>
    );
}