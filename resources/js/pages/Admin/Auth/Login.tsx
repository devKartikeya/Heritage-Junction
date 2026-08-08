import { Head, useForm } from "@inertiajs/react";
import { Lock, User, ShieldCheck, ArrowRight } from "lucide-react";

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
        <>
            <Head title="Admin Login" />
            <div className="min-h-screen bg-white flex items-center justify-center px-4 py-6">
                {/* Main Container */}
                <div className="w-full max-w-5xl min-h-[600px] grid md:grid-cols-2 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
                    {/* =====================================================
                        LEFT — BRANDING / VISUAL
                    ====================================================== */}
                    <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-black p-8 text-white">

                        {/* Background glow */}
                        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl" />
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />

                        {/* Decorative lines */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-10 w-40 h-px bg-white" />
                            <div className="absolute top-24 left-10 w-24 h-px bg-white" />
                            <div className="absolute bottom-20 right-10 w-40 h-px bg-white" />
                            <div className="absolute bottom-24 right-10 w-24 h-px bg-white" />
                        </div>

                        {/* Logo / Brand */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600/20 border border-purple-400/30">
                                    <ShieldCheck
                                        size={27}
                                        className="text-purple-400"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold tracking-wide">
                                        Heritage Junction
                                    </h2>

                                    <p className="text-xs text-gray-400 tracking-wider uppercase">
                                        Administrator Portal
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Center Content */}
                        <div className="relative z-10 max-w-md">
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                                Secure Access
                            </p>
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Manage your
                                <span className="block text-purple-400">
                                    Heritage Journey.
                                </span>
                            </h1>
                            <p className="mt-5 text-gray-400 leading-relaxed">
                                Access your administrative dashboard to manage
                                packages, bookings, destinations and traveler
                                information.
                            </p>
                        </div>
                        {/* Bottom */}
                        <div className="relative z-10">
                            <div className="h-px w-full bg-gray-800 mb-4" />

                            <p className="text-xs text-gray-500">
                                Authorized personnel only
                            </p>
                        </div>
                    </div>
                    {/* =====================================================
                        RIGHT — LOGIN FORM
                    ====================================================== */}
                    <div className="flex items-center justify-center p-7 sm:p-10 lg:p-10">
                        <div className="w-full max-w-md">
                            {/* Mobile Logo */}
                            <div className="flex md:hidden justify-center mb-7">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 border border-purple-100">
                                    <ShieldCheck
                                        size={34}
                                        className="text-purple-600"
                                    />
                                </div>
                            </div>
                            {/* Heading */}
                            <div className="text-center md:text-left">
                                <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                                    Administrator
                                </p>

                                <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-950">
                                    Welcome back
                                </h1>

                                <p className="mt-3 text-gray-500">
                                    Sign in to access the Heritage Junction
                                    administration panel.
                                </p>
                            </div>
                            {/* Form */}
                            <form
                                onSubmit={submit}
                                className="mt-9 space-y-6"
                            >
                                {/* Username */}
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="mb-2 block text-sm font-semibold text-gray-800"
                                    >
                                        Username
                                    </label>

                                    <div
                                        className={`
                                            flex items-center rounded-xl
                                            border bg-gray-50
                                            px-4 transition-all duration-200
                                            focus-within:bg-white
                                            focus-within:ring-4
                                            focus-within:ring-purple-100
                                            ${
                                                form.errors.username
                                                    ? "border-red-400"
                                                    : "border-gray-200 focus-within:border-purple-500"
                                            }
                                        `}
                                    >
                                        <User
                                            size={19}
                                            className="text-gray-400 shrink-0"
                                        />
                                        <input
                                            id="username"
                                            type="text"
                                            value={form.data.username}
                                            onChange={(e) =>
                                                form.setData(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full bg-transparent px-3 py-2 text-gray-900 outline-none placeholder:text-gray-400"
                                            placeholder="Enter username"
                                            autoComplete="username"
                                        />
                                    </div>
                                </div>
                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-semibold text-gray-800"
                                    >
                                        Password
                                    </label>

                                    <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all duration-200 focus-within:bg-white focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                                        <Lock
                                            size={19}
                                            className="text-gray-400 shrink-0"
                                        />
                                        <input
                                            id="password"
                                            type="password"
                                            value={form.data.password}
                                            onChange={(e) =>
                                                form.setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full bg-transparent px-3 py-2 text-gray-900 outline-none placeholder:text-gray-400"
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </div>
                                {/* Error */}
                                {form.errors.username && (
                                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                                        <span className="mt-0.5">⚠</span>

                                        <span>
                                            {form.errors.username}
                                        </span>
                                    </div>
                                )}
                                {/* Remember */}
                                <label className="flex items-center gap-3 cursor-pointer select-none">

                                    <input
                                        type="checkbox"
                                        checked={form.data.remember}
                                        onChange={(e) =>
                                            form.setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                        className="h-4 w-4 cursor-pointer accent-purple-600"
                                    />

                                    <span className="text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>


                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={form.processing}
                                    className="
                                        group w-full
                                        flex items-center justify-center gap-3
                                        rounded-xl
                                        bg-black
                                        px-5 py-3.5
                                        text-base font-semibold text-white
                                        shadow-lg
                                        transition-all duration-300
                                        hover:bg-purple-600
                                        hover:shadow-purple-200
                                        hover:shadow-xl
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                    "
                                >
                                    {form.processing ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            Sign in to Admin Panel

                                            <ArrowRight
                                                size={18}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </>
                                    )}
                                </button>
                            </form>
                            {/* Footer */}
                            <div className="mt-8 border-t border-gray-100 pt-6 text-center">
                                <p className="text-xs text-gray-400">
                                    Heritage Junction Admin Panel
                                </p>

                                <p className="mt-1 text-xs text-gray-300">
                                    Authorized access only
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}