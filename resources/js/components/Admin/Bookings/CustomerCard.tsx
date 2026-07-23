import InfoField from "./InfoField";

// type FormData = {
//   full_name: string;
//   email: string;
//   phone: string;
//   additional_email: string;
//   additional_phone: string;
//   address: string;
// };

type Props = {
  form: any;
  booking: number;
};

/* Removed Booking Prop from here */
export default function CustomerCard({ form }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Customer Information
        </h2>
        <p className="mt-1 text-zinc-500">
          Primary contact details
        </p>
      </div>

      <div className="space-y-6">
        <InfoField label="Full Name">
          <input
            value={form.data.full_name}
            onChange={(e) =>
              form.setData("full_name", e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-purple-500"
          />
        </InfoField>
        <InfoField label="Email Address">
          <input
            type="email"
            value={form.data.email}
            onChange={(e) =>
              form.setData("email", e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-purple-500"
          />
        </InfoField>
        <InfoField label="Phone Number">
          <input
            value={form.data.phone}
            onChange={(e) =>
              form.setData("phone", e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-purple-500"
          />
        </InfoField>
        <InfoField label="Alternate Email">
          <input
            type="email"
            value={form.data.additional_email}
            onChange={(e) =>
              form.setData(
                "additional_email",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-purple-500"
          />
        </InfoField>
        <InfoField label="Alternate Phone">
          <input
            value={form.data.additional_phone}
            onChange={(e) =>
              form.setData(
                "additional_phone",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-purple-500"
          />
        </InfoField>
        <InfoField label="Address">
          <textarea
            rows={4}
            value={form.data.address}
            onChange={(e) =>
              form.setData("address", e.target.value)
            }
            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-purple-500"
          />
        </InfoField>
      </div>
    </div>
  );
}