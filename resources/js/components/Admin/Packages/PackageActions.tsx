import { router } from "@inertiajs/react";
import {
  Eye,
  Copy,
  Power,
  Trash2,
  Map
} from "lucide-react";

export default function PackageActions({
  pkg,
}: {
  pkg: any;
}) {
  return (
    <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div>
        <h2 className="text-2xl font-bold">Package Actions
        </h2>
        <p className="mt-2 text-zinc-500">Manage this travel package.</p>
      </div>
      <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
        {/* Preview */}
        <button
          onClick={() =>
            window.open(
              `/packages/${pkg.slug}`,
              "_blank"
            )
          }
          className="flex items-center justify-center gap-3 rounded-xl bg-cyan-600 p-4 cursor-pointer font-semibold transition hover:bg-cyan-700"
        >
          <Eye size={20} />Preview</button>


        {/* Add Destination */}
        <button className="flex items-center justify-center gap-3 rounded-xl bg-emerald-600 cursor-pointer p-3 font-semibold transition hover:bg-emerald-700">
          <Map size={20} />Add Destination
        </button>
        {/* Duplicate */}
        <button
          onClick={() => {
            router.post(`/admin/packages/${pkg.id}/duplicate`);
          }}
          className="flex items-center justify-center gap-3 rounded-xl bg-indigo-600 p-3 cursor-pointer font-semibold transition hover:bg-indigo-700">
          <Copy size={20} />Copy
        </button>
        {/* Activate / Deactivate */}
        <button
          onClick={() => {
            if (
              confirm(
                `Are you sure you want to ${pkg.is_active
                  ? "deactivate"
                  : "activate"
                } this package?`
              )
            ) {
              router.patch(
                `/admin/packages/${pkg.id}/toggle-status`
              );
            }
          }}
          className={`flex items-center justify-center gap-3 rounded-xl cursor-pointer p-4 font-semibold transition ${pkg.is_active
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
            }`}
        >
          <Power size={20} />

          {pkg.is_active
            ? "Deactivate Package"
            : "Activate Package"}
        </button>
        {/* Delete */}
        <button
          onClick={() => {
            if (
              confirm(
                "Delete this package permanently?"
              )
            ) {
              router.delete(
                `/admin/packages/${pkg.id}`
              );
            }
          }}
          className="flex items-center justify-center cursor-pointer gap-3 rounded-xl bg-zinc-800 p-4 font-semibold transition hover:bg-red-700"
        >
          <Trash2 size={20} />Delete</button>
      </div>
    </div>
  );
}