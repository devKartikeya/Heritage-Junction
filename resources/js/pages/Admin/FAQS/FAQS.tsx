import { useMemo, useState } from "react";
import { Head, router, Link } from "@inertiajs/react";
import {
    CircleHelp,
    Plus,
    Pencil,
    Trash2,
    Search,
    ChevronRight,
} from "lucide-react";

export default function FAQS({
    faqs,
}: {
    faqs: any[];
}) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = useMemo(() => {
        return [
            "All",
            ...new Set(
                faqs.map(
                    (faq) => faq.category
                )
            ),
        ];
    }, [faqs]);

    const filtered = faqs.filter((faq) => {
        const matchesSearch =
            faq.question
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            faq.category === category;

        return (
            matchesSearch &&
            matchesCategory
        );
    });

    return (
        <div className="min-h-screen bg-black text-white">
            <Head title="FAQ Management" />

            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

                {/* Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                                <CircleHelp
                                    size={22}
                                    className="text-purple-400"
                                />
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                FAQ Management
                            </h1>

                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                            Manage frequently asked questions
                            and keep helpful information organized
                            for your customers.
                        </p>
                    </div>

                    <Link
                        href="/admin/faqs/create"
                        className="inline-flex w-fit items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-purple-500"
                    >
                        <Plus size={17} />
                        Add FAQ
                    </Link>

                </div>

                {/* Toolbar */}
                <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-3 sm:flex-row">

                    {/* Search */}
                    <div className="relative flex-1">

                        <Search
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                        />

                        <input
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                            placeholder="Search FAQs..."
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 transition focus:border-purple-500/50"
                        />

                    </div>

                    {/* Category */}
                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(
                                e.target.value
                            )
                        }
                        className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-purple-500/50"
                    >
                        {categories.map((cat) => (
                            <option
                                key={cat}
                                value={cat}
                                className="bg-zinc-950"
                            >
                                {cat}
                            </option>
                        ))}
                    </select>

                </div>

                {/* Result summary */}
                <div className="mt-6 flex items-center justify-between">

                    <p className="text-sm text-zinc-500">
                        Showing{" "}
                        <span className="font-semibold text-zinc-300">
                            {filtered.length}
                        </span>{" "}
                        {filtered.length === 1
                            ? "FAQ"
                            : "FAQs"}
                    </p>

                    {category !== "All" && (
                        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                            {category}
                        </span>
                    )}

                </div>

                {/* FAQ Cards */}
                <div className="mt-4 space-y-3">

                    {filtered
                        .sort(
                            (a, b) =>
                                a.sort_order -
                                b.sort_order
                        )
                        .map((faq) => (

                            <div
                                key={faq.id}
                                className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-5 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
                            >

                                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">

                                        {/* Meta */}
                                        <div className="flex flex-wrap items-center gap-2">

                                            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-400">
                                                {faq.category}
                                            </span>

                                            <span className="text-xs text-zinc-600">
                                                •
                                            </span>

                                            <span className="text-xs font-medium text-zinc-600">
                                                #{faq.sort_order}
                                            </span>

                                        </div>

                                        {/* Question */}
                                        <h3 className="mt-3 text-base font-semibold leading-6 text-zinc-100">
                                            {faq.question}
                                        </h3>

                                        {/* Answer */}
                                        <p className="mt-2 max-w-4xl text-sm leading-6 text-zinc-500">
                                            {faq.answer}
                                        </p>

                                    </div>

                                    {/* Actions */}
                                    <div className="flex shrink-0 items-center gap-2">

                                        <Link
                                            href={`/admin/faqs/${faq.id}/edit`}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                                            title="Edit FAQ"
                                        >
                                            <Pencil size={16} />
                                        </Link>

                                        <button
                                            onClick={() => {
                                                if (
                                                    confirm(
                                                        "Delete this FAQ?"
                                                    )
                                                ) {
                                                    router.delete(
                                                        `/admin/faqs/${faq.id}`
                                                    );
                                                }
                                            }}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Delete FAQ"
                                        >
                                            <Trash2 size={16} />
                                        </button>

                                        <ChevronRight
                                            size={16}
                                            className="ml-1 text-zinc-700 transition-transform group-hover:translate-x-0.5"
                                        />

                                    </div>

                                </div>

                            </div>

                        ))}

                    {/* Empty */}
                    {filtered.length === 0 && (
                        <div className="flex min-h-52 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 px-6 text-center">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900">
                                <CircleHelp
                                    size={22}
                                    className="text-zinc-600"
                                />
                            </div>

                            <p className="mt-4 text-sm font-medium text-zinc-400">
                                No FAQs found
                            </p>

                            <p className="mt-1 text-xs text-zinc-600">
                                Try changing your search
                                or category filter.
                            </p>

                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}