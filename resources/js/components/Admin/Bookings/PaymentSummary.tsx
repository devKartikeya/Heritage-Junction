type Props = {
  booking: any;
};

export default function PaymentSummary({
  booking,
}: Props) {

  return (

    <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-2xl font-bold">
        Payment Summary
      </h2>

      <p className="text-zinc-500 mt-2">
        Financial overview of this booking.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="rounded-2xl bg-black border border-zinc-800 p-6">

          <p className="text-zinc-500">
            Vehicle
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            {booking.pricing?.vehicle_name ?? "-"}
          </h3>

        </div>

        <div className="rounded-2xl bg-black border border-zinc-800 p-6">

          <p className="text-zinc-500">
            Per Person
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-blue-400">
            ₹{booking.per_person_cost}
          </h3>

        </div>

        <div className="rounded-2xl bg-black border border-zinc-800 p-6">

          <p className="text-zinc-500">
            Total Amount
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-400">
            ₹{booking.total_cost}
          </h3>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">

        <div className="flex justify-between">

          <span className="text-zinc-400">
            Booking Status
          </span>

          <span className="font-semibold text-green-400">
            {booking.status.toUpperCase()}
          </span>

        </div>

      </div>

    </div>

  );
}