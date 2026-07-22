import FAQFormCard from "@/components/Admin/FAQS/FAQFormCard";
import {
    Link,
    useForm,
} from "@inertiajs/react";

export default function Edit({
    faq,
}: {
    faq: any;
}) {

    const form = useForm({

        question: faq.question,

        answer: faq.answer,

        category: faq.category,

        sort_order: faq.sort_order,

    });

    function submit() {

        form.put(
            `/admin/faqs/${faq.id}`
        );

    }

    return (

        <div className="min-h-screen bg-black text-white">

            <div className="mx-auto max-w-5xl px-8 py-10">

                <Link
                    href="/admin/faqs"
                    className="text-zinc-400 hover:text-purple-400"
                >
                    ← Back
                </Link>

                <h1 className="mt-6 text-5xl font-bold">

                    Edit FAQ

                </h1>

                <FAQFormCard
                    form={form}
                />

                <div className="mt-8 flex justify-end">

                    <button
                        onClick={submit}
                        className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700"
                    >

                        Save Changes

                    </button>

                </div>

            </div>

        </div>

    );

}