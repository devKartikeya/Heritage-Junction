import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import Bookings from '@/components/User/Bookings';

type Booking = {
    id: number;
    start_date: string;
    total_cost: number;
    number_of_travelers: number;
    created_at: any;
    additional_email: string;
    additional_phone: string;
    full_name: string;
    email: string;
    phone: string;
    package: {
        id: number;
        duration_days: number;
        duration_nights: number;
        title: string;
        cover_image: string;
        starting_city: string;
        ending_city: string;
    };
    pricing: {
        vehicle_name: string;
    };
    travelers: []
};

export default function Dashboard({ bookings }: { bookings: Booking[] }) {
    return (
        <div className=''>
            <Head title="Dashboard" />
            {/* Bookings of User */}
            <Bookings bookings={bookings}/>
        </div>
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