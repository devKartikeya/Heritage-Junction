import { CarFront } from "lucide-react";
import PricingModal from "./PricingModal";
import { router } from "@inertiajs/react";
import { useState } from "react";

type Props = {
  pkg: any;
};

export default function PricingCard({ pkg }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] =
    useState<any>(null);
  return (
    <div className="rounded-3xl border h-fit border-zinc-800 bg-zinc-900 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-500/20 p-3">
            <CarFront
              size={28}
              className="text-blue-400"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Vehicle Pricing
            </h2>

            <p className="mt-1 text-zinc-500">
              Pricing options available for this package.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedPricing(null);
            setOpen(true);
          }}
          className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700"
        >
          + Add Pricing
        </button>
      </div>
      {/* Pricing List */}
      <div className="space-y-5">
        {pkg.pricings
          .sort((a: any, b: any) => a.sort_order - b.sort_order)
          .map((pricing: any) => (
            <div
              key={pricing.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-purple-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {pricing.vehicle_name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Minimum {pricing.minimum_persons} Travelers
                  </p>
                </div>
                <span className="rounded-xl bg-purple-500/20 px-4 py-2 text-purple-400 font-semibold">
                  #{pricing.sort_order}
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-900 p-3">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Per Person
                  </p>
                  <p className="mt-2 text-2xl font-bold text-yellow-400">
                    ₹{pricing.per_person_cost}
                  </p>
                </div>
                <div className="rounded-xl bg-zinc-900 p-3">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Total Cost
                  </p>
                  <p className="mt-2 text-2xl font-bold text-green-400">
                    ₹{pricing.total_cost}
                  </p>
                </div>
                <button
                className="cursor-pointer rounded-lg"
                  onClick={() => {
                    setSelectedPricing(pricing);
                    setOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                
                  onClick={() => {
                    if (
                      confirm(
                        "Delete this pricing option?"
                      )
                    ) {
                      router.delete(
                        `/admin/pricing/${pricing.id}`
                      );
                    }
                  }}
                  className="rounded-lg cursor-pointer bg-red-600 px-3 py-2 hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <PricingModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedPricing(null);
        }}
        packageId={pkg.id}
        pricing={selectedPricing}
      />
    </div>
  );
}