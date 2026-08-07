import { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLUListElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="relative z-50 w-full h-20 px-4 sm:px-6 bg-gray-900 text-white flex items-center justify-between">

            {/* Logo */}
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

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6">

                <li>
                    <Link
                        href="/"
                        className="hover:text-pink-400 hover:underline transition"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/packages"
                        className="hover:text-pink-400 hover:underline transition"
                    >
                        Packages
                    </Link>
                </li>

                <li>
                    <Link
                        href="/destinations"
                        className="hover:text-pink-400 hover:underline transition"
                    >
                        Destinations
                    </Link>
                </li>

                <li>
                    <Link
                        href="/services"
                        aria-label="Read more about our services"
                        className="hover:text-pink-400 hover:underline transition"
                    >
                        Our Services
                    </Link>
                </li>

                <li>
                    <Link
                        href="/#about"
                        className="hover:text-pink-400 hover:underline transition"
                    >
                        About Us
                    </Link>
                </li>

                <li>
                    <a
                        href="/#contact"
                        className="hover:text-pink-400 hover:underline transition"
                    >
                        Contact Us
                    </a>
                </li>

                <li>
                    <Button
                        command="Login"
                        variant="primary"
                        size="md"
                        link="/login"
                    />
                </li>

                <li>
                    <Button
                        command="Register"
                        variant="primary"
                        size="md"
                        link="/register"
                    />
                </li>

            </ul>

            {/* Mobile Hamburger */}
            <button
                ref={buttonRef}
                type="button"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(prev => !prev)}
                className="md:hidden p-2 focus:outline-none"
            >
                <div className="w-6 h-5 flex flex-col justify-between">

                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                            isOpen ? 'translate-y-2 rotate-45' : ''
                        }`}
                    />

                    <span
                        className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                    />

                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                            isOpen ? '-translate-y-2 -rotate-45' : ''
                        }`}
                    />

                </div>
            </button>

            {/* Mobile Menu */}
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
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }
                `}
            >

                <li>
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/packages"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition"
                    >
                        Packages
                    </Link>
                </li>

                <li>
                    <Link
                        href="/destinations"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition"
                    >
                        Destinations
                    </Link>
                </li>

                <li>
                    <Link
                        href="/services"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition"
                    >
                        Our Services
                    </Link>
                </li>

                <li>
                    <Link
                        href="/#about"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition"
                    >
                        About Us
                    </Link>
                </li>

                <li>
                    <a
                        href="/#contact"
                        onClick={closeMenu}
                        className="block hover:text-pink-400 transition"
                    >
                        Contact Us
                    </a>
                </li>

                <li className="pt-2">
                    <Button
                        command="Login"
                        variant="primary"
                        size="md"
                        link="/login"
                    />
                   
                </li>
                   
                <li>
                    <Button
                        command="Register"
                        variant="primary"
                        size="md"
                        link="/register"
                    />
                </li>

            </ul>

        </nav>
    );
};

export default Navbar;