import {
    Facebook,
    Instagram,
    Linkedin,
    MapPin,
    Mail,
    Phone,
    ArrowUpRight,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className=" border-t border-zinc-800 bg-gray-900 text-zinc-400">

            {/* Main Footer */}

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">


                    {/* Brand */}

                    <div className="lg:col-span-4">

                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-tight text-white transition hover:text-pink-400"
                        >
                            Heritage Junction
                        </Link>

                        <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

                        <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
                            Preserving culture, connecting heritage, and
                            building bridges to the future.
                        </p>


                        {/* Contact */}

                        <div className="mt-8 space-y-4">

                            <div className="flex items-start gap-3">

                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-pink-400"
                                />

                                <p className="text-sm leading-6 text-zinc-500">
                                    5/38 Vipul Khand, Gomti Nagar,
                                    Lucknow, Uttar Pradesh, India, 226010
                                </p>

                            </div>


                            <div className="flex items-center gap-3">

                                <Phone
                                    size={18}
                                    className="shrink-0 text-pink-400"
                                />

                                <a
                                    href="tel:+917905358890"
                                    className="text-sm transition hover:text-white"
                                >
                                    +91 79053 58890
                                </a>

                            </div>


                            <div className="flex items-center gap-3">

                                <Mail
                                    size={18}
                                    className="shrink-0 text-pink-400"
                                />

                                <a
                                    href="mailto:info@heritagejunction.in"
                                    className="text-sm transition hover:text-pink-400"
                                >
                                    info@heritagejunction.in
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* Quick Links */}

                    <div className="lg:col-span-2">

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Explore
                        </h4>

                        <ul className="mt-6 space-y-3">

                            <li>
                                <Link
                                    href="/#about"
                                    className="group flex items-center gap-1 text-sm transition hover:text-white"
                                >
                                    About Us

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/packages"
                                    className="group flex items-center gap-1 text-sm transition hover:text-white"
                                >
                                    Our Packages

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/destinations"
                                    className="group flex items-center gap-1 text-sm transition hover:text-white"
                                >
                                    Our Destinations

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#contact"
                                    className="group flex items-center gap-1 text-sm transition hover:text-white"
                                >
                                    Contact Us

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/login"
                                    className="text-sm text-zinc-600 transition hover:text-zinc-300"
                                >
                                    Admin Login
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Popular Packages */}

                    <div className="lg:col-span-3">

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Popular Packages
                        </h4>

                        <ul className="mt-6 space-y-3">

                            <li>
                                <Link
                                    href="/packages/varanasi-spiritual-tour"
                                    className="text-sm transition hover:text-pink-400"
                                >
                                    Varanasi Spiritual Tour
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/packages/dudhwa-wildlife-safari"
                                    className="text-sm transition hover:text-pink-400"
                                >
                                    Dudhwa National Park Tour
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/packages/ayodhya-spiritual-tour"
                                    className="text-sm transition hover:text-pink-400"
                                >
                                    Ayodhya Spiritual Tour
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/packages/naimisharanya-spiritual-tour"
                                    className="text-sm transition hover:text-pink-400"
                                >
                                    Naimisharanya Spiritual Tour
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/packages/heritage-point-fatehpur-sikri-agra"
                                    className="text-sm transition hover:text-pink-400"
                                >
                                    Fatehpur Sikri Tour
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Support */}

                    <div className="lg:col-span-3">

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Support
                        </h4>

                        <ul className="mt-6 space-y-3">

                            <li>
                                <Link
                                    href="/faqs"
                                    className="text-sm transition hover:text-white"
                                >
                                    FAQs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/help"
                                    className="text-sm transition hover:text-white"
                                >
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/cancellation-refund"
                                    className="text-sm transition hover:text-white"
                                >
                                    Cancellation & Refund Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm transition hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm transition hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>


                {/* Social / Divider */}

                <div className="mt-16 flex flex-col gap-6 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                            Follow Heritage Junction
                        </p>

                        <div className="mt-4 flex items-center gap-3">

                            {/* Facebook */}

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                            >
                                <Facebook size={18} />
                            </a>


                            {/* Instagram */}

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-pink-400"
                            >
                                <Instagram size={18} />
                            </a>


                            {/* X */}

                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                            >
                                <span className="text-sm font-bold">
                                    𝕏
                                </span>
                            </a>


                            {/* LinkedIn */}

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-blue-400"
                            >
                                <Linkedin size={18} />
                            </a>

                        </div>

                    </div>


                    {/* Small CTA */}

                    <div className="max-w-sm">

                        <p className="text-sm leading-6 text-zinc-500">
                            Discover the stories, traditions, and places
                            that make Uttar Pradesh unforgettable.
                        </p>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}

            <div className="border-t border-zinc-800 bg-gray-900">

                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">

                    <p>
                        © 2025 Heritage Junction. All rights reserved.
                    </p>

                    <p>
                        Website powered by{" "}

                        <a
                            className="font-medium text-zinc-400 transition hover:text-white"
                            target="_blank"
                            href="https://www.kryoteksoftwares.com/"
                        >
                            Kryotek Softwares Private Limited
                        </a>

                        {" "}·{" "}

                        <a
                            href="https://github.com/devKartikeya"
                            target="_blank"
                            className="font-medium text-pink-500 transition hover:text-pink-400"
                        >
                            @Kartikeya Mishra
                        </a>

                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;