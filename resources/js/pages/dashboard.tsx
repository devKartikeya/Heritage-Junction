import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

type Booking = {
    id: number;
    start_date: string;
    total_cost: number;
    number_of_travelers: number;

    package: {
        title: string;
        cover_image: string;
    };
};

export default function Dashboard({
    bookings,
}: {
    bookings: Booking[];
}) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-8 md:grid-cols-3">
                    {bookings.map((booking) => (
                        <div key={booking.id}>
                            <img src={booking.package.cover_image} />
                            <h2>{booking.package.title}</h2>

                            <p>{booking.start_date}</p>

                            <p>{booking.number_of_travelers} Travellers</p>

                            <p>₹{booking.total_cost}</p>

                            <button>View Booking</button>
                        </div>
                    ))}
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};