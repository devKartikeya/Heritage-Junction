type Props = {
  booking: any;
};

export default function BookingTimeline({
  booking,
}: Props) {
  return (
    <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold">Booking Timeline</h2>
      <p className="text-zinc-500 mt-2">Lifecycle of this booking.</p>
      <div className="mt-8 space-y-8">
        <div className="flex gap-5">
          <div className="w-4 h-4 rounded-full bg-green-500 mt-2" />
          <div>
            <h3 className="font-semibold">Booking Created</h3>
            <p className="text-zinc-400">
              {new Date(
                booking.created_at
              ).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-4 h-4 rounded-full bg-yellow-500 mt-2" />
          <div>
            <h3 className="font-semibold">Awaiting Manager Review</h3>
            <p className="text-zinc-500">Customer submitted booking request.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-4 h-4 rounded-full bg-blue-500 mt-2" />
          <div>
            <h3 className="font-semibold">Payment Pending</h3>
            <p className="text-zinc-500">Waiting for quotation approval.</p>
          </div>
        </div>
      </div>
    </div>
  );
}