import InfoField from "./InfoField";

type Pricing = {
    id: number;
    vehicle_name: string;
    per_person_cost: number;
    minimum_persons: number;
};

type Props = {
    booking: any;
    form: any;
    pricings: Pricing[];
};

export default function PackageCard({
    booking,
    form,
    pricings,
}: Props) {

    const selectedPricing = pricings.find(
        p => p.id == form.data.pricing_id
    );

    const travelerCount = booking.number_of_travelers;

    const perPerson =
        selectedPricing?.per_person_cost ??
        booking.per_person_cost;

    const total =
        Number(perPerson) * travelerCount;

    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <div className="mb-8">

                <h2 className="text-2xl font-bold">
                    Package Information
                </h2>

                <p className="mt-1 text-zinc-500">
                    Journey details
                </p>

            </div>

            <div className="space-y-6">

                <InfoField label="Package ID">
                    <div className="text-lg font-medium">
                        #{booking.package.id}
                    </div>
                </InfoField>

                <InfoField label="Package Name">
                    <div className="text-lg font-medium">
                        {booking.package.title}
                    </div>
                </InfoField>

                <InfoField label="Travel Date">
                    <input
                        type="date"
                        value={form.data.start_date}
                        onChange={(e) =>
                            form.setData(
                                "start_date",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                    />
                </InfoField>

                <InfoField label="Booking Status">

                    <select
                        value={form.data.status}
                        onChange={(e) =>
                            form.setData(
                                "status",
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                    >
                        <option value="confirmed">
                            Confirmed
                        </option>
                        <option value="pending">
                            Pending
                        </option>
                        <option value="paid">
                            Paid
                        </option>
                        <option value="cancelled">
                            Cancelled
                        </option>
                        <option value="completed">
                            Completed
                        </option>

                    </select>

                </InfoField>

                <InfoField label="Vehicle">

                    <select
                        value={form.data.pricing_id}
                        onChange={(e) =>
                            form.setData(
                                "pricing_id",
                                Number(e.target.value)
                            )
                        }
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-purple-500"
                    >

                        {pricings.map((pricing) => (

                            <option
                                key={pricing.id}
                                value={pricing.id}
                            >
                                {pricing.vehicle_name}
                            </option>

                        ))}

                    </select>

                </InfoField>

                <InfoField label="Number of Travelers">
                    <div className="text-lg">
                        {travelerCount}
                    </div>
                </InfoField>

                <InfoField label="Per Person Cost">
                    <div className="text-lg text-yellow-400 font-semibold">
                        ₹{perPerson}
                    </div>
                </InfoField>

                <InfoField label="Total Cost">
                    <div className="text-2xl font-bold text-green-400">
                        ₹{total}
                    </div>
                </InfoField>

            </div>

        </div>
    );
}