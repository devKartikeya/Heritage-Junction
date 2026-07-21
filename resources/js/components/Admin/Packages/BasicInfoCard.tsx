import InfoField from "../Bookings/InfoField";

type Props = {
  pkg: any;
  form: any;
};

export default function BasicInfoCard({
  pkg,
  form,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Basic Information</h2>
        <p className="mt-1 text-zinc-500">General package information</p>
      </div>

      <div className="space-y-6">
        <InfoField label="Package Title">
          <input
            value={form.data.title}
            onChange={(e) =>
              form.setData(
                "title",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />

        </InfoField>

        <InfoField label="Slug">
          <input
            value={form.data.slug}
            onChange={(e) => {
              const title = e.target.value;
              form.setData("title", title);
              form.setData(
                "slug",
                title
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-")
              );
            }}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />

        </InfoField>
        <InfoField label="Starting City">

          <input
            value={form.data.starting_city}
            onChange={(e) =>
              form.setData(
                "starting_city",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />

        </InfoField>

        <InfoField label="Ending City">
          <input
            value={form.data.ending_city}
            onChange={(e) =>
              form.setData(
                "ending_city",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />

        </InfoField>

        <InfoField label="Duration (Days)">
          <input
            type="number"
            min={1}
            value={form.data.duration_days}
            onChange={(e) =>
              form.setData(
                "number_of_days",
                Number(e.target.value)
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />

        </InfoField>

        <InfoField label="Short Description">
          <textarea
            rows={3}
            value={form.data.short_description}
            onChange={(e) =>
              form.setData(
                "short_description",
                e.target.value
              )
            }
            className="w-full resize-none rounded-xl border border-zinc-700 text-sm bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />

        </InfoField>

        <InfoField label="Description">
          <textarea
            rows={6}
            value={form.data.full_description}
            onChange={(e) =>
              form.setData(
                "full_description",
                e.target.value
              )
            }
            className="w-full resize-none rounded-xl border border-zinc-700 text-sm bg-zinc-800 px-3 py-2 outline-none focus:border-purple-500"
          />
        </InfoField>
      </div>
    </div>
  );
}