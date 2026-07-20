type Props = {
    status: string;
};

export default function StatusBadge({ status }: Props) {
    const colors: Record<string, string> = {
        pending: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
        confirmed: "bg-blue-500/15 text-blue-300 border-blue-500/30",
        paid: "bg-green-500/15 text-green-300 border-green-500/30",
        cancelled: "bg-red-500/15 text-red-300 border-red-500/30",
    };

    return (
        <span
            className={`px-4 py-2 rounded-full border text-sm font-semibold ${colors[status.toLowerCase()] ??
                "bg-zinc-800 text-white border-zinc-700"
                }`}
        >
            {status}
        </span>
    );
}