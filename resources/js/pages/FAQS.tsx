import { useMemo, useState } from "react";
import {
    Search,
    ChevronDown,
    ChevronUp,
    CircleHelp,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { Head } from "@inertiajs/react";
export default function FAQS({
    faqs,
}: {
    faqs: any[];
}) {
    const [search, setSearch] = useState("");
    const [open, setOpen] =
        useState<number | null>(null);
    const filtered = faqs.filter((faq) =>
        faq.question
            .toLowerCase()
            .includes(search.toLowerCase())
    );
    const grouped = useMemo(() => {
        return filtered.reduce(
            (groups: any, faq: any) => {
                if (!groups[faq.category]) {
                    groups[faq.category] = [];

                }
                groups[faq.category].push(faq);
                return groups;
            },
            {}
        );

    }, [filtered]);

    return (

        <div className="min-h-screen bg-white text-black">
            <Head title="FAQS"/>
            <Navbar />
            <div className="mx-auto max-w-5xl px-4 py-16">
                {/* Hero */}
                <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/20">
                        <CircleHelp
                            size={40}
                            className="text-purple-400"
                        />
                    </div>
                    <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl text-purple-600 font-bold">
                        Frequently Asked Questions
                    </h1>

                    <p className="mt-4 text-zinc-400">
                        Find answers to the most common questions.
                    </p>

                </div>
                {/* Search */}
                <div className="relative mt-12">
                    <Search
                        size={18}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                        placeholder="Search FAQs..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 text-white py-5 pl-14 pr-5 outline-none focus:border-purple-500"
                    />
                </div>

                {/* Categories */}
                <div className="mt-14 space-y-10">
                    {Object.entries(grouped).map(
                        ([category, items]: any) => (
                            <div key={category}>
                                <h2 className="mb-4 text-3xl font-bold">
                                    {category}
                                </h2>
                                <div className="space-y-4">
                                    {items.map((faq: any) => (
                                        <div
                                            key={faq.id}
                                            className="rounded-2xl border border-zinc-800 bg-purple-500 text-white"
                                        >
                                            <button
                                                onClick={() =>
                                                    setOpen(
                                                        open === faq.id
                                                            ? null
                                                            : faq.id
                                                    )
                                                }
                                                className="flex w-full items-center justify-between p-4 text-left"
                                            >
                                                <span className="text-lg font-semibold">
                                                    {faq.question}
                                                </span>
                                                {open === faq.id
                                                    ? <ChevronUp />
                                                    : <ChevronDown />}

                                            </button>
                                            {open === faq.id && (
                                                <div className="border-t border-zinc-800 px-6 py-6 text-zinc-400 leading-8">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
                {/* Contact */}
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-10 text-center">
                    <h2 className="text-3xl font-bold">
                        Still have questions?
                    </h2>
                    <p className="mt-3 text-purple-100">
                        Our travel experts are always ready to help.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="/#contact"
                            className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
                        >
                            Contact Us
                        </a>
                        <a
                            href="tel:+917905358890"
                            className="rounded-xl border border-white px-6 py-3"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}