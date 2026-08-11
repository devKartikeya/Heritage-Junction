import { useMemo, useState } from "react";
import {
    Search,
    ChevronDown,
    X,
    CircleHelp,
    MessageCircle,
    Phone,
    ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { Head, Link } from "@inertiajs/react";

export default function FAQS({
    faqs,
}: {
    faqs: any[];
}) {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState<number | null>(null);

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return faqs;

        return faqs.filter(
            (faq) =>
                faq.question?.toLowerCase().includes(query) ||
                faq.answer?.toLowerCase().includes(query) ||
                faq.category?.toLowerCase().includes(query)
        );
    }, [faqs, search]);

    const grouped = useMemo(() => {
        return filtered.reduce(
            (groups: Record<string, any[]>, faq: any) => {
                if (!groups[faq.category]) {
                    groups[faq.category] = [];
                }

                groups[faq.category].push(faq);

                return groups;
            },
            {}
        );
    }, [filtered]);

    const totalResults = filtered.length;
    const hasSearch = search.trim().length > 0;

    return (
        <div className="min-h-screen bg-[#fafafa] text-gray-950">
            <Head title="Frequently Asked Questions">
                <meta
                    name="description"
                    content="Find answers to frequently asked questions about Heritage Junction, travel packages, bookings, destinations and your journey."
                />
            </Head>

            <Navbar />

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden border-b border-gray-100 bg-white">
                {/* Decorative background */}
                <div className="pointer-events-none absolute -left-40 -top-20 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />

                <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-16 text-center md:pb-20 md:pt-24">

                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4">
                        <CircleHelp
                            size={15}
                            className="text-purple-600"
                        />

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700">
                            Help Centre
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="
                        mt-6
                        text-4xl
                        font-bold
                        tracking-tight
                        text-gray-950
                        sm:text-5xl
                        md:text-6xl
                    ">
                        Frequently Asked
                        <span className="block text-purple-600">
                            Questions
                        </span>
                    </h1>

                    <p className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-base
                        leading-7
                        text-gray-500
                        sm:text-md
                    ">
                        Everything you need to know about destinations,
                        travel packages, bookings and your journey with
                        Heritage Junction.
                    </p>

                    {/* Stats */}
                    <div className="mt-8 flex justify-center">
                        <div className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-gray-200
                            bg-white
                            px-5
                            py-2.5
                            shadow-sm
                        ">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                                {faqs.length}
                            </span>

                            <span className="text-sm font-medium text-gray-600">
                                Questions answered
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                MAIN FAQ CONTENT
            ===================================================== */}

            <main className="mx-auto max-w-5xl px-6 py-14 md:py-20">

                {/* Search */}
                <div className="relative mx-auto max-w-3xl">

                    <Search
                        size={20}
                        className="
                            pointer-events-none
                            absolute
                            left-5
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setOpen(null);
                        }}
                        placeholder="Search your question..."
                        aria-label="Search frequently asked questions"
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            py-5
                            pl-14
                            pr-14
                            text-base
                            text-gray-900
                            shadow-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-gray-400
                            hover:border-gray-300
                            focus:border-purple-500
                            focus:ring-4
                            focus:ring-purple-500/10
                        "
                    />

                    {search && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setOpen(null);
                            }}
                            aria-label="Clear search"
                            className="
                                absolute
                                right-4
                                top-1/2
                                flex
                                h-9
                                w-9
                                -translate-y-1/2
                                items-center
                                justify-center
                                rounded-full
                                text-gray-400
                                transition
                                hover:bg-gray-100
                                hover:text-gray-700
                            "
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>


                {/* Search Result Info */}
                <div className="mx-auto mt-5 flex max-w-3xl items-center justify-between">

                    <p className="text-sm text-gray-500">
                        {hasSearch ? (
                            <>
                                Showing{" "}
                                <span className="font-semibold text-gray-900">
                                    {totalResults}
                                </span>{" "}
                                result{totalResults !== 1 ? "s" : ""}
                            </>
                        ) : (
                            <>
                                Browse questions by category
                            </>
                        )}
                    </p>

                    {hasSearch && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setOpen(null);
                            }}
                            className="
                                text-sm
                                font-semibold
                                text-purple-600
                                transition
                                hover:text-purple-700
                            "
                        >
                            Clear search
                        </button>
                    )}
                </div>


                {/* =================================================
                    FAQ CATEGORIES
                ================================================= */}

                <div className="mt-12 space-y-14">

                    {Object.entries(grouped).map(
                        ([category, items]: [string, any[]]) => (

                            <section key={category}>

                                {/* Category Header */}
                                <div className="mb-5 flex items-center gap-6">

                                    <div className="
                                        flex
                                        h-10
                                        w-10
                                        flex-shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-purple-100
                                        text-sm
                                        font-bold
                                        text-purple-700
                                    ">
                                        {items.length}
                                    </div>

                                    <div className="flex-1">

                                        <h2 className="
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-gray-950
                                            md:text-2xl
                                        ">
                                            {category}
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {items.length} question
                                            {items.length !== 1 ? "s" : ""}
                                        </p>

                                    </div>

                                    <div className="hidden h-px flex-1 bg-gray-200 sm:block" />

                                </div>


                                {/* Questions */}
                                <div className="space-y-3">

                                    {items.map((faq: any) => {

                                        const isOpen = open === faq.id;

                                        return (
                                            <div
                                                key={faq.id}
                                                className={`
                                                    overflow-hidden
                                                    rounded-2xl
                                                    border
                                                    bg-white
                                                    transition-all
                                                    duration-300
                                                    ${
                                                        isOpen
                                                            ? "border-purple-200 shadow-md shadow-purple-100/40"
                                                            : "border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
                                                    }
                                                `}
                                            >

                                                {/* Question */}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpen(
                                                            isOpen
                                                                ? null
                                                                : faq.id
                                                        )
                                                    }
                                                    aria-expanded={isOpen}
                                                    className="
                                                        flex
                                                        w-full
                                                        items-center
                                                        justify-between
                                                        gap-6
                                                        px-5
                                                        py-5
                                                        text-left
                                                        outline-none
                                                        focus-visible:ring-2
                                                        focus-visible:ring-inset
                                                        focus-visible:ring-purple-500
                                                        md:px-6
                                                        md:py-6
                                                    "
                                                >

                                                    <span className="
                                                        text-base
                                                        font-semibold
                                                        leading-6
                                                        text-gray-900
                                                        md:text-lg
                                                    ">
                                                        {faq.question}
                                                    </span>


                                                    <span
                                                        className={`
                                                            flex
                                                            h-9
                                                            w-9
                                                            flex-shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            transition-all
                                                            duration-300
                                                            ${
                                                                isOpen
                                                                    ? "bg-purple-600 text-white rotate-180"
                                                                    : "bg-gray-100 text-gray-500"
                                                            }
                                                        `}
                                                    >
                                                        <ChevronDown
                                                            size={18}
                                                        />
                                                    </span>

                                                </button>


                                                {/* Answer */}
                                                <div
                                                    className={`
                                                        grid
                                                        transition-all
                                                        duration-300
                                                        ${
                                                            isOpen
                                                                ? "grid-rows-[1fr] opacity-100"
                                                                : "grid-rows-[0fr] opacity-0"
                                                        }
                                                    `}
                                                >
                                                    <div className="overflow-hidden">

                                                        <div className="
                                                            border-t
                                                            border-gray-100
                                                            px-5
                                                            pb-6
                                                            pt-5
                                                            md:px-6
                                                        ">

                                                            <p className="
                                                                max-w-3xl
                                                                text-sm
                                                                leading-7
                                                                text-gray-600
                                                                md:text-base
                                                            ">
                                                                {faq.answer}
                                                            </p>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        );
                                    })}

                                </div>

                            </section>
                        )
                    )}


                    {/* =================================================
                        NO RESULTS
                    ================================================= */}

                    {Object.keys(grouped).length === 0 && (

                        <div className="
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            px-6
                            py-16
                            text-center
                            shadow-sm
                        ">

                            <div className="
                                mx-auto
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-purple-50
                                text-purple-600
                            ">
                                <Search size={28} />
                            </div>

                            <h2 className="
                                mt-6
                                text-2xl
                                font-bold
                                text-gray-900
                            ">
                                No questions found
                            </h2>

                            <p className="
                                mx-auto
                                mt-3
                                max-w-md
                                text-gray-500
                            ">
                                We couldn't find anything matching{" "}
                                <span className="font-semibold text-gray-800">
                                    "{search}"
                                </span>
                                . Try using different keywords.
                            </p>

                            <button
                                type="button"
                                onClick={() => setSearch("")}
                                className="
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-gray-900
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:bg-gray-800
                                "
                            >
                                Clear search
                            </button>

                        </div>
                    )}

                </div>


                {/* =====================================================
                    CONTACT CTA
                ===================================================== */}

                <section className="mt-20 md:mt-28">

                    <div className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-gray-200
                        bg-gray-950
                        px-6
                        py-12
                        shadow-xl
                        md:px-12
                        md:py-14
                    ">

                        {/* Background decoration */}
                        <div className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-72
                            w-72
                            rounded-full
                            bg-purple-600/20
                            blur-3xl"
                        />

                        <div className="
                            pointer-events-none
                            absolute
                            -bottom-32
                            -left-20
                            h-72
                            w-72
                            rounded-full
                            bg-red-600/15
                            blur-3xl"
                        />


                        <div className="
                            relative
                            z-10
                            flex
                            flex-col
                            gap-8
                            md:flex-row
                            md:items-center
                            md:justify-between
                        ">

                            {/* Content */}
                            <div className="max-w-xl">

                                <div className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-semibold
                                    text-purple-300
                                ">
                                    <MessageCircle size={17} />

                                    <span>
                                        Need more help?
                                    </span>
                                </div>

                                <h2 className="
                                    mt-3
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-white
                                    md:text-3xl
                                ">
                                    Still have questions?
                                </h2>

                                <p className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-gray-400
                                    md:text-base
                                ">
                                    Our travel experts are happy to help
                                    you with destinations, packages,
                                    bookings or anything else you need
                                    before your journey.
                                </p>

                            </div>


                            {/* Actions */}
                            <div className="
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                            ">

                                <Link
                                    href="/#contact"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-white
                                        px-5
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-gray-950
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-gray-100
                                    "
                                >
                                    Contact Us
                                    <ArrowRight size={17} />
                                </Link>


                                <a
                                    href="tel:+917905358890"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white/15
                                        bg-white/5
                                        px-5
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        backdrop-blur-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-white/10
                                    "
                                >
                                    <Phone size={16} />
                                    Call Now
                                </a>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </div>
    );
}