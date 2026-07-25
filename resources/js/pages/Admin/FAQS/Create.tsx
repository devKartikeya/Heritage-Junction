import FAQFormCard from "@/components/Admin/FAQS/FAQFormCard";
import { useForm, Link, Head } from "@inertiajs/react";

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
            <Head title="Create FAQ"/>

            <div className="mx-auto max-w-5xl px-8 py-10">

                <Link
                    href="/admin/faqs"
                    className="text-zinc-400 hover:text-purple-400"
                >
                    ← Back
                </Link>

                <h1 className="mt-6 text-5xl font-bold">

                    Create FAQ

                </h1>

                <FAQFormCard form={form} />

                <div className="mt-8 flex justify-end">

                    <button
                        onClick={submit}
                        className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700"
                    >

                        Create FAQ

                    </button>

                </div>

            </div>

        </div>

    );

}