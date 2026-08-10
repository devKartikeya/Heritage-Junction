import InfoField from "./InfoField";
import {
    UserRound,
    Mail,
    Phone,
    MapPin,
    AtSign,
} from "lucide-react";

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
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 sm:p-8">

            {/* Header */}
            <div className="mb-8 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <UserRound
                        size={20}
                        className="text-purple-400"
                    />
                </div>

                <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                        Customer Information
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Primary contact and communication details.
                    </p>
                </div>

            </div>

            {/* Fields */}
            <div className="space-y-5">

                <InfoField label="Full Name">
                    <div className="relative">
                        <UserRound
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            value={form.data.full_name}
                            onChange={(e) =>
                                form.setData(
                                    "full_name",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />
                    </div>
                </InfoField>

                <InfoField label="Email Address">
                    <div className="relative">
                        <Mail
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="email"
                            value={form.data.email}
                            onChange={(e) =>
                                form.setData(
                                    "email",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />
                    </div>
                </InfoField>

                <InfoField label="Phone Number">
                    <div className="relative">
                        <Phone
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            value={form.data.phone}
                            onChange={(e) =>
                                form.setData(
                                    "phone",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />
                    </div>
                </InfoField>

                {/* Divider */}
                <div className="flex items-center gap-4 py-2">
                    <div className="h-px flex-1 bg-zinc-800" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                        Alternate Contact
                    </span>

                    <div className="h-px flex-1 bg-zinc-800" />
                </div>

                <InfoField label="Alternate Email">
                    <div className="relative">
                        <AtSign
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="email"
                            value={form.data.additional_email}
                            onChange={(e) =>
                                form.setData(
                                    "additional_email",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />
                    </div>
                </InfoField>

                <InfoField label="Alternate Phone">
                    <div className="relative">
                        <Phone
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            value={form.data.additional_phone}
                            onChange={(e) =>
                                form.setData(
                                    "additional_phone",
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />
                    </div>
                </InfoField>

                <InfoField label="Address">
                    <div className="relative">
                        <MapPin
                            size={17}
                            className="pointer-events-none absolute left-4 top-4 text-zinc-500"
                        />

                        <textarea
                            rows={4}
                            value={form.data.address}
                            onChange={(e) =>
                                form.setData(
                                    "address",
                                    e.target.value
                                )
                            }
                            className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 py-3.5 pl-11 pr-4 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                        />
                    </div>
                </InfoField>

            </div>
        </div>
    );
}