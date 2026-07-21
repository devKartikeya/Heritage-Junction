import { useState } from "react";
import ItineraryModal from "./ItineraryModal";
import { router } from "@inertiajs/react";
import {
  CalendarDays,
  Clock3,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

type Props = {
  pkg: any;
};

export default function ItineraryCard({ pkg }: Props) {
  console.log(pkg);
  const grouped = pkg.itineraries.reduce(
    (acc: any, item: any) => {

      if (!acc[item.day_number]) {
        acc[item.day_number] = [];
      }

      acc[item.day_number].push(item);

      return acc;

    },
    {}
  );

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  return (
    <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-orange-500/20 p-4">
            <CalendarDays
              size={28}
              className="text-orange-400"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Package Itinerary
            </h2>
            <p className="mt-1 text-zinc-500">
              Complete day-wise travel schedule.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setSelected(null);
            setOpen(true);
          }}
          className="rounded-xl bg-purple-600 px-5 py-3"
        >
          + Add Activity
        </button>

      </div>

      {/* Timeline */}

      <div className="mt-10 space-y-12">
        {Object.entries(grouped).map(
          ([day, activities]: any) => (
            <div key={day}>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 font-bold">
                  {day}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Day {day}
                  </h3>
                  <p className="text-zinc-500">
                    {activities.length} Activities
                  </p>
                </div>
              </div>
              <div className="ml-7 border-l-2 border-zinc-700 pl-10 space-y-5">
                {activities.map((activity: any) => (
                  <div
                    key={activity.id}
                    className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
                  >

                    {/* timeline dot */}
                    <div className="absolute -left-[50px] top-8 h-5 w-5 rounded-full border-4 border-zinc-900 bg-purple-500"></div>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-purple-400">
                          <Clock3 size={16} />
                          {activity.time}
                        </div>
                        <h4 className="mt-2 text-lg font-semibold">
                          {activity.title}
                        </h4>
                        {activity.description && (
                          <p className="mt-3 text-zinc-400 leading-7">
                            {activity.description}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-6">
                        <button
                        className="bg-blue-500 rounded-2xl p-2"
                          onClick={() => {
                            setSelected(activity);
                            setOpen(true);
                          }}
                        >
                          <Pencil size={18} className="cursor-pointer"/>
                        </button>
                        <button
                        className="bg-red-500 p-2 rounded-2xl"
                          onClick={() => {
                            if (confirm("Delete this activity?")) {
                              router.delete(
                                `/admin/itinerary/${activity.id}`
                              );
                            }
                          }}
                        >
                          <Trash2 size={18} className="cursor-pointer "/>
                        </button>

                      </div>

                    </div>

                  </div>

                ))}
              </div>
            </div>
          )
        )}
      </div>
      <ItineraryModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelected(null);
        }}
        packageId={pkg.id}
        itinerary={selected}
      />
    </div>
  );
}