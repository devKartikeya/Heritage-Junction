import { useMemo, useState } from "react";
import { router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import {
  CircleHelp,
  Plus,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

export default function FAQS({
  faqs,
}: {
  faqs: any[];
}) {

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

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
        .includes(
          search.toLowerCase()
        );

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
      <div className="mx-auto max-w-7xl px-5 py-7">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold">FAQ Management</h1>
            <p className="mt-3 text-zinc-500">Manage frequently asked questions.</p>
          </div>
          <Link
            href="/admin/faqs/create"
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700"
          >
            <Plus size={20} />
            Add FAQ
          </Link>
        </div>
        {/* Filters */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search FAQs..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-4 outline-none focus:border-purple-500"
            />
          </div>
          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-5"
          >
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>
        {/* Cards */}
        <div className="mt-10 space-y-6">
          {filtered
            .sort(
              (a, b) =>
                a.sort_order -
                b.sort_order
            )
            .map((faq) => (
              <div
                key={faq.id}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="rounded-2xl bg-purple-500/20 p-4 h-fit">
                      <CircleHelp
                        className="text-purple-400"
                        size={28}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-400">
                          {faq.category}
                        </span>
                        <span className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-400">
                          #{faq.sort_order}
                        </span>
                      </div>
                      <h2 className="mt-5 text-2xl font-bold">
                        {faq.question}
                      </h2>
                      <p className="mt-4 leading-7 text-zinc-400">{faq.answer}</p>
                    </div>

                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/faqs/${faq.id}/edit`}
                      className="rounded-xl bg-blue-600 p-4 transition hover:bg-blue-700"
                    >
                      <Pencil size={18} />
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
                      className="rounded-xl bg-red-600 p-4 hover:bg-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {filtered.length === 0 && (
            <div className="rounded-3xl border border-dashed border-zinc-700 py-20 text-center text-zinc-500">
              No FAQs Found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}