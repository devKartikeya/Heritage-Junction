import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import {
    ChevronDown,
    LogIn,
    UserPlus,
    User,
    ArrowRight,
} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);

    const menuRef = useRef<HTMLUListElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const accountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsOpen(false);
            }

            if (
                accountRef.current &&
                !accountRef.current.contains(target)
            ) {
                setAccountOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
        setAccountOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-900 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">

            <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* ================= LOGO ================= */}

                <Link
                    href="/"
                    onClick={closeMenu}
                    className="group flex shrink-0 items-center"
                >
                    <img
                        src="/heritage-junction-logo-black.png"
                        alt="Heritage Junction"
                        className="h-auto w-32 transition duration-300 group-hover:scale-[1.03] sm:w-36 lg:w-40"
                    />
                </Link>

                {/* ================= DESKTOP NAV ================= */}

                <ul className="hidden items-center gap-1 md:flex">

                    <li>
                        <Link
                            href="/"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                        >
                            Home
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-5" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/packages"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                        >
                            Packages
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-5" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/destinations"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                        >
                            Destinations
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-5" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/services"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                        >
                            Our Services
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-5" />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/#about"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                        >
                            About Us
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-5" />
                        </Link>
                    </li>

                    <li>
                        <a
                            href="/#contact"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                        >
                            Contact Us
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-5" />
                        </a>
                    </li>

                    {/* ================= ACCOUNT ================= */}

                    <li className="ml-3">
                        <div
                            ref={accountRef}
                            className="relative"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setAccountOpen((prev) => !prev)
                                }
                                className={`
                                    group flex cursor-pointer items-center gap-2.5
                                    rounded-xl border px-4 py-2.5
                                    text-sm font-semibold
                                    transition-all duration-200
                                    ${
                                        accountOpen
                                            ? "border-purple-500/50 bg-purple-500/10 text-white shadow-lg shadow-purple-500/5"
                                            : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-purple-500/40 hover:bg-purple-500/[0.06] hover:text-white"
                                    }
                                `}
                            >
                                <span
                                    className={`flex h-7 w-7 items-center justify-center rounded-lg transition ${
                                        accountOpen
                                            ? "bg-purple-500/20 text-purple-300"
                                            : "bg-white/[0.06] text-zinc-400 group-hover:bg-purple-500/10 group-hover:text-purple-300"
                                    }`}
                                >
                                    <User size={15} />
                                </span>

                                <span>Account</span>

                                <ChevronDown
                                    size={15}
                                    className={`transition-transform duration-300 ${
                                        accountOpen
                                            ? "rotate-180 text-purple-300"
                                            : "text-zinc-500"
                                    }`}
                                />
                            </button>

                            {/* ================= DROPDOWN ================= */}

                            <div
                                className={`
                                    absolute right-0 top-full mt-3 w-[290px]
                                    origin-top-right
                                    transition-all duration-200
                                    ${
                                        accountOpen
                                            ? "visible scale-100 opacity-100"
                                            : "invisible scale-95 opacity-0 pointer-events-none"
                                    }
                                `}
                            >
                                <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl">

                                    {/* Header */}

                                    <div className="rounded-xl border border-white/5 bg-white/[0.025] px-4 py-4">
                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300">
                                                <User size={18} />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    Your Account
                                                </p>

                                                <p className="mt-0.5 text-xs text-zinc-500">
                                                    Manage your Heritage Junction account
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Sign In */}

                                    <Link
                                        href="/login"
                                        onClick={() => setAccountOpen(false)}
                                        className="group mt-2 flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-purple-500/20 hover:bg-purple-500/[0.08]"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-all duration-200 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                                            <LogIn size={18} />
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                                                Sign In
                                            </p>

                                            <p className="mt-0.5 text-xs text-zinc-500">
                                                Access your account
                                            </p>
                                        </div>

                                        <ArrowRight
                                            size={15}
                                            className="text-zinc-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-purple-400"
                                        />
                                    </Link>

                                    {/* Register */}

                                    <Link
                                        href="/register"
                                        onClick={() => setAccountOpen(false)}
                                        className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-pink-500/20 hover:bg-pink-500/[0.08]"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 transition-all duration-200 group-hover:bg-pink-500/20 group-hover:text-pink-300">
                                            <UserPlus size={18} />
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                                                Create Account
                                            </p>

                                            <p className="mt-0.5 text-xs text-zinc-500">
                                                Start your journey with us
                                            </p>
                                        </div>

                                        <ArrowRight
                                            size={15}
                                            className="text-zinc-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-pink-400"
                                        />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                {/* ================= MOBILE MENU BUTTON ================= */}

                <button
                    ref={buttonRef}
                    type="button"
                    aria-label={
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="group rounded-xl border border-white/10 bg-white/[0.04] p-2.5 transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-500/[0.08] md:hidden"
                >
                    <div className="flex h-5 w-6 flex-col justify-between">

                        <span
                            className={`block h-0.5 w-6 origin-center rounded-full bg-zinc-300 transition-all duration-300 ${
                                isOpen
                                    ? "translate-y-[9px] rotate-45"
                                    : ""
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-6 rounded-full bg-zinc-300 transition-all duration-200 ${
                                isOpen
                                    ? "opacity-0"
                                    : ""
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-6 origin-center rounded-full bg-zinc-300 transition-all duration-300 ${
                                isOpen
                                    ? "-translate-y-[9px] -rotate-45"
                                    : ""
                            }`}
                        />

                    </div>
                </button>

            </div>

            {/* ================= MOBILE MENU ================= */}

            <ul
                ref={menuRef}
                className={`
                    absolute left-0 top-full w-full
                    border-b border-white/10
                    bg-zinc-950/98
                    px-5 py-5
                    shadow-2xl shadow-black/40
                    backdrop-blur-2xl
                    md:hidden
                    ${
                        isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0 pointer-events-none"
                    }
                    transition-all duration-300 ease-out
                `}
            >

                <div className="space-y-1">

                    <li>
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/packages"
                            onClick={closeMenu}
                            className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            Packages
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/destinations"
                            onClick={closeMenu}
                            className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            Destinations
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/services"
                            onClick={closeMenu}
                            className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            Our Services
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/#about"
                            onClick={closeMenu}
                            className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            About Us
                        </Link>
                    </li>

                    <li>
                        <a
                            href="/#contact"
                            onClick={closeMenu}
                            className="flex items-center rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                        >
                            Contact Us
                        </a>
                    </li>

                </div>

                {/* Mobile Account */}

                <li className="mt-4 border-t border-white/10 pt-5">

                    <div className="mb-3 flex items-center gap-2 px-2">
                        <User size={14} className="text-purple-400" />

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                            Account
                        </p>
                    </div>

                    <div className="space-y-2">

                        <Link
                            href="/login"
                            onClick={closeMenu}
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.07]"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                <LogIn size={17} />
                            </div>

                            <div className="flex-1">
                                <p className="text-sm font-semibold text-zinc-200">
                                    Sign In
                                </p>

                                <p className="mt-0.5 text-xs text-zinc-500">
                                    Access your account
                                </p>
                            </div>

                            <ArrowRight
                                size={15}
                                className="text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-purple-400"
                            />
                        </Link>

                        <Link
                            href="/register"
                            onClick={closeMenu}
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-all hover:border-pink-500/30 hover:bg-pink-500/[0.07]"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                                <UserPlus size={17} />
                            </div>

                            <div className="flex-1">
                                <p className="text-sm font-semibold text-zinc-200">
                                    Create Account
                                </p>

                                <p className="mt-0.5 text-xs text-zinc-500">
                                    Start your journey
                                </p>
                            </div>

                            <ArrowRight
                                size={15}
                                className="text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-pink-400"
                            />
                        </Link>

                    </div>

                </li>
            </ul>

        </nav>
    );
};

export default Navbar;