import FAQFormCard from "@/components/Admin/FAQS/FAQFormCard";
import { useForm, Link, Head } from "@inertiajs/react";
import { ArrowLeft, Plus } from "lucide-react";

export default function Create() {
    const form = useForm({
        question: "",
        answer: "",
        category: "Package",
        sort_order: 1,
    });

    function submit() {
        form.post("/admin/faqs");
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Head title="Create FAQ" />

            <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">

                {/* Back */}
                <Link
                    href="/admin/faqs"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-200"
                >
                    <ArrowLeft
                        size={16}
                        className="transition-transform group-hover:-translate-x-0.5"
                    />
                    Back to FAQs
                </Link>

                {/* Header */}
                <div className="mt-8">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                            <Plus
                                size={21}
                                className="text-purple-400"
                            />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Create FAQ
                            </h1>

                            <p className="mt-1 text-sm text-zinc-500">
                                Add a frequently asked question for your customers.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Form */}
                <FAQFormCard form={form} />

                {/* Actions */}
                <div className="mt-6 flex items-center justify-end gap-3">

                    <Link
                        href="/admin/faqs"
                        className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200"
                    >
                        Cancel
                    </Link>

                    <button
                        onClick={submit}
                        disabled={form.processing}
                        className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <Plus size={17} />

                        {form.processing
                            ? "Creating..."
                            : "Create FAQ"}
                    </button>

                </div>

            </div>
        </div>
    );
}