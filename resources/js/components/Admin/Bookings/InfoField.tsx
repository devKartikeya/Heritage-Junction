import { ReactNode, useState } from "react";

type Props = {
    label: string;
    children: ReactNode;
    copyValue?: string | number;
};

export default function InfoField({
    label,
    children,
    copyValue,
}: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (copyValue === undefined || copyValue === null) return;

        await navigator.clipboard.writeText(String(copyValue));

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1200);
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                    {label}
                </p>

                {copyValue !== undefined && (
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="cursor-pointer text-xs text-purple-400 transition hover:text-purple-300"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                )}
            </div>

            <div className="mt-3">
                {children}
            </div>
        </div>
    );
}