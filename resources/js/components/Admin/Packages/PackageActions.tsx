import { router } from "@inertiajs/react";
import {
    Eye,
    Copy,
    Power,
    Trash2,
    Map,
} from "lucide-react";

export default function PackageActions({
    pkg,
}: {
    pkg: any;
}) {
    return (
        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">

            {/* Header */}
            <div className="flex flex-col gap-1">

                <h2 className="text-xl font-bold text-white">
                    Package Actions
                </h2>

                <p className="text-sm text-zinc-500">
                    Manage this travel package.
                </p>

            </div>


            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

                {/* Preview */}
                <button
                    type="button"
                    onClick={() =>
                        window.open(
                            `/packages/${pkg.slug}`,
                            "_blank"
                        )
                    }
                    className="group inline-flex h-10 items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 text-sm font-medium text-cyan-400 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/15"
                >
                    <Eye
                        size={17}
                        className="transition-transform group-hover:scale-110"
                    />

                    Preview
                </button>
                {/* Duplicate */}
                <button
                    type="button"
                    onClick={() => {
                        router.post(
                            `/admin/packages/${pkg.id}/duplicate`
                        );
                    }}
                    className="group inline-flex h-10 items-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 text-sm font-medium text-indigo-400 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/15"
                >
                    <Copy
                        size={17}
                        className="transition-transform group-hover:scale-110"
                    />

                    Duplicate
                </button>


                {/* Spacer */}
                <div className="hidden h-7 w-px bg-zinc-800 sm:block" />


                {/* Activate / Deactivate */}
                <button
                    type="button"
                    onClick={() => {
                        if (
                            confirm(
                                `Are you sure you want to ${
                                    pkg.is_active
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
                    className={`group inline-flex h-10 items-center gap-2 rounded-xl border px-4 text-sm font-medium transition-all ${
                        pkg.is_active
                            ? "border-red-500/20 bg-red-500/10 text-red-400 hover:border-red-500/40 hover:bg-red-500/15"
                            : "border-green-500/20 bg-green-500/10 text-green-400 hover:border-green-500/40 hover:bg-green-500/15"
                    }`}
                >
                    <Power
                        size={17}
                        className="transition-transform group-hover:scale-110"
                    />

                    {pkg.is_active
                        ? "Deactivate"
                        : "Activate"}
                </button>


                {/* Delete */}
                <button
                    type="button"
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
                    className="group inline-flex h-10 items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-sm font-medium text-zinc-400 transition-all hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                >
                    <Trash2
                        size={17}
                        className="transition-transform group-hover:scale-110"
                    />

                    Delete
                </button>

            </div>

        </div>
    );
}