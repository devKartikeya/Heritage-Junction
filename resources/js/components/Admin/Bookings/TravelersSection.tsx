import TravelerCard from "./TravelerCard";

export default function TravelersSection({
  travelers,
}: {
  travelers: any[];
}) {

  const verified =
    travelers.filter(
      t => t.verification_status.toLowerCase() === "verified"
    ).length;

  const pending =
    travelers.filter(
      t => t.verification_status.toLowerCase() === "pending"
    ).length;

  const rejected =
    travelers.filter(
      t => t.verification_status.toLowerCase() === "rejected"
    ).length;

  return (

    <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Travelers
          </h2>
          <p className="text-zinc-500 mt-2">
            Verify traveler identities.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
            Verified {verified}
          </span>
          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400">
            Pending {pending}
          </span>
          <span className="rounded-full bg-red-500/20 px-4 py-2 text-red-400">
            Rejected {rejected}
          </span>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {travelers.map((traveler, index) => (
          <TravelerCard
            key={traveler.id}
            traveler={traveler}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}