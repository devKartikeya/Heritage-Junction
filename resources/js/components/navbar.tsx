import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import { ChevronDown, LogIn, UserPlus, User } from "lucide-react";

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
        <nav className="relative z-50 w-full h-20 px-4 sm:px-6 bg-gray-900 text-white flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center"
            >
                <img
                    src="/heritage-junction-logo-black.png"
                    alt="Heritage Junction"
                    className="w-36 sm:w-40 h-auto"
                />
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <ul className="hidden md:flex items-center gap-6">

                <li>
                    <Link
                        href="/"
                        className="hover:text-pink-400 transition-colors hover:underline hover:underline-offset-4"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/packages"
                        className="hover:text-pink-400 transition-colors hover:underline hover:underline-offset-4"
                    >
                        Packages
                    </Link>
                </li>

                <li>
                    <Link
                        href="/destinations"
                        className="hover:text-pink-400 transition-colors hover:underline hover:underline-offset-4"
                    >
                        Destinations
                    </Link>
                </li>

                <li>
                    <Link
                        href="/services"
                        className="hover:text-pink-400 transition-colors hover:underline hover:underline-offset-4"
                    >
                        Our Services
                    </Link>
                </li>

                <li>
                    <Link
                        href="/#about"
                        className="hover:text-pink-400 transition-colors hover:underline hover:underline-offset-4"
                    >
                        About Us
                    </Link>
                </li>

                <li>
                    <a
                        href="/#contact"
                        className="hover:text-pink-400 transition-colors hover:underline hover:underline-offset-4"
                    >
                        Contact Us
                    </a>
                </li>

                {/* ================= ACCOUNT DROPDOWN ================= */}
                <li>
                    <div
                        ref={accountRef}
                        className="relative"
                    >

                        {/* Dropdown Trigger */}
                        <button
                            type="button"
                            onClick={() =>
                                setAccountOpen((prev) => !prev)
                            }
                            className={`
                                group
                                flex items-center gap-2
                                rounded-xl
                                border
                                px-4 py-2.5
                                text-sm font-medium
                                transition-all duration-200
                                cursor-pointer
                                ${
                                    accountOpen
                                        ? "border-purple-500 bg-purple-500/10 text-pink-400"
                                        : "border-zinc-700 bg-zinc-800/150 text-zinc-200 hover:border-purple-500 hover:text-pink-400"
                                }
                            `}
                        >
                            <User size={17}/>
                            <span>Account</span>

                            <ChevronDown
                                size={16}
                                className={`
                                    transition-transform duration-200
                                    ${
                                        accountOpen
                                            ? "rotate-180 text-pink-400"
                                            : "group-hover:text-pink-400"
                                    }
                                `}
                            />
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`
                                absolute right-0 top-full mt-3
                                w-64
                                origin-top-right
                                transition-all duration-200
                                ${
                                    accountOpen
                                        ? "visible scale-100 opacity-100"
                                        : "invisible scale-95 opacity-0 pointer-events-none"
                                }
                            `}
                        >
                            <div className="overflow-hidden rounded-2xl border p-2 border-zinc-700 bg-white shadow-2xl shadow-black/40 backdrop-blur-xl">

                                {/* Small Header */}
                                <div className="border-b border-zinc-800 px-4 py-3">
                                    <p className="text-xs font-bold uppercase tracking-wider text-black">
                                        Your Account
                                    </p>
                                    <p className="mt-1 text-sm text-gray-800">
                                        Access your Heritage Junction account
                                    </p>
                                </div>

                                {/* Sign In */}
                                <Link
                                    href="/login"
                                    onClick={() => setAccountOpen(false)}
                                    className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-purple-500/10"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/20">
                                        <LogIn size={18} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-purple-600">
                                            Sign In
                                        </p>
                                        <p className="text-xs text-gray-800">
                                            Access your account
                                        </p>
                                    </div>
                                </Link>

                                {/* Create Account */}
                                <Link
                                    href="/register"
                                    onClick={() => setAccountOpen(false)}
                                    className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-pink-500/10"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 transition-colors group-hover:bg-pink-500/20">
                                        <UserPlus size={18} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-pink-600">
                                            Create Account
                                        </p>
                                        <p className="text-xs text-gray-800">
                                            Start your journey with us
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            {/* ================= MOBILE HAMBURGER ================= */}
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
                className="md:hidden rounded-lg p-2 focus:outline-none"
            >
                <div className="w-6 h-5 flex flex-col justify-between">

                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                            isOpen
                                ? "translate-y-2 rotate-45"
                                : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                            isOpen
                                ? "opacity-0"
                                : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                            isOpen
                                ? "-translate-y-2 -rotate-45"
                                : ""
                        }`}
                    />
                </div>
            </button>

            {/* ================= MOBILE MENU ================= */}
            <ul
                ref={menuRef}
                className={`
                    md:hidden
                    absolute top-full left-0
                    w-full
                    bg-gray-900
                    border-t border-gray-700
                    shadow-xl
                    px-6 py-6
                    flex flex-col gap-5
                    transition-all duration-300 ease-in-out
                    ${
                        isOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-2 invisible pointer-events-none"
                    }
                `}
            >

                <li>
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition-colors"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/packages"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition-colors"
                    >
                        Packages
                    </Link>
                </li>

                <li>
                    <Link
                        href="/destinations"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition-colors"
                    >
                        Destinations
                    </Link>
                </li>

                <li>
                    <Link
                        href="/services"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition-colors"
                    >
                        Our Services
                    </Link>
                </li>

                <li>
                    <Link
                        href="/#about"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition-colors"
                    >
                        About Us
                    </Link>
                </li>

                <li>
                    <a
                        href="/#contact"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition-colors"
                    >
                        Contact Us
                    </a>
                </li>

                {/* Mobile Account Section */}
                <li className="border-t border-zinc-800 pt-5">

                    <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
                        Account
                    </p>

                    <div className="space-y-2">

                        <Link
                            href="/login"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-800/60 px-4 py-3 transition hover:border-purple-500 hover:bg-purple-500/10"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                <LogIn size={17} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold">
                                    Sign In
                                </p>
                                <p className="text-xs text-zinc-500">
                                    Access your account
                                </p>
                            </div>
                        </Link>

                        <Link
                            href="/register"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-800/60 px-4 py-3 transition hover:border-pink-500 hover:bg-pink-500/10"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                                <UserPlus size={17} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">
                                    Create Account
                                </p>
                                <p className="text-xs text-zinc-500">
                                    Start your journey
                                </p>
                            </div>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;