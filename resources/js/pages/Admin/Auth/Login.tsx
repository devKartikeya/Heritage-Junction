import { Head, useForm } from "@inertiajs/react";
import { Lock, User, Shield } from "lucide-react";

export default function Login() {
    const form = useForm({
        username: "",
        password: "",
        remember: false,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        form.post("/admin/login");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-6 py-4">
            <Head title="Admin Login"/>
            <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/90 p-7 shadow-2xl backdrop-blur">

                {/* Logo */}
                <div className="flex justify-center">
                    <div className="rounded-3xl bg-purple-600/20 p-5">
                        <Shield
                            size={42}
                            className="text-purple-400"
                        />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mt-4 text-center text-4xl text-white font-bold">Heritage Junction</h1>
                <p className="mt-2 text-center text-red-500">Administrator Portal</p>

                {/* Form */}
                <form
                    onSubmit={submit}
                    className="mt-5 space-y-4"
                >

                    {/* Username */}
                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Username
                        </label>
                        <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                            <User
                                size={18}
                                className="text-zinc-500"
                            />
                            <input
                                value={form.data.username}
                                onChange={(e) =>
                                    form.setData(
                                        "username",
                                        e.target.value
                                    )
                                }
                                className="w-full bg-transparent p-3 outline-none"
                                placeholder="Enter username"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Password
                        </label>
                        <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">
                            <Lock
                                size={18}
                                className="text-zinc-500"
                            />
                            <input
                                type="password"
                                value={form.data.password}
                                onChange={(e) =>
                                    form.setData(
                                        "password",
                                        e.target.value
                                    )
                                }
                                className="w-full text-white bg-transparent p-3 outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {/* Remember */}
                    <label className="flex items-center gap-3 text-sm text-zinc-400">
                        <input
                            type="checkbox"
                            checked={form.data.remember}
                            onChange={(e) =>
                                form.setData(
                                    "remember",
                                    e.target.checked
                                )
                            }
                            className="h-4 text-white w-4 accent-purple-600"
                        />
                        Remember Me
                    </label>

                    {/* Error */}
                    {form.errors.username && (
                        <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-400">
                            {form.errors.username}
                        </div>
                    )}

                    {/* Button */}
                    <button
                        disabled={form.processing}
                        className="w-full rounded-xl bg-purple-600 py-2 text-lg font-semibold transition hover:bg-purple-700 disabled:opacity-60 text-white cursor-pointer"
                    >
                        {form.processing
                            ? "Signing In..."
                            : "Login"}
                    </button>
                </form>

                <p className="mt-5 text-center text-xs text-zinc-600">
                    Heritage Junction Admin Panel
                </p>
            </div>
        </div>
    );
}