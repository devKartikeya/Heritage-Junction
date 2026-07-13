import React, { useState, useEffect, useRef } from 'react'
import { Link } from '@inertiajs/react'
import Button from './Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            // if click is outside menu and hamburger button
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav className="w-full text-white h-16 flex justify-between items-center p-2 bg-gray-900 relative">
            {/* Logo */}
            <div className="navbar-logo p-2 font-bold text-lg"><Link href={"/"}>Heritage Junction</Link></div>

            {/* Hamburger button (mobile only) */}
            <button
                ref={buttonRef}
                className="md:hidden block focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="space-y-1">
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </div>
            </button>

            {/* Navigation links */}
            <ul
                ref={menuRef}
                className={`
          md:flex md:gap-6 md:items-center md:static md:bg-transparent md:w-auto
          transition-all duration-300  ease-in-out
          ${isOpen
                        ? 'flex flex-col gap-4 fixed top-16 left-0 w-full bg-gray-900 p-4 z-50'
                        : 'hidden md:flex'}
        `}
            >
                <li className="navbar-link hover:text-pink-400 hover:underline"><Link href="/">Home</Link></li>
                <li className="navbar-link hover:text-pink-400 hover:underline"><Link href="/packages">Packages</Link></li>
                <li className="navbar-link hover:text-pink-400 hover:underline"><Link href="/destinations">Destinations</Link></li>
                <li className="navbar-link hover:text-pink-400 hover:underline"><Link href="/services">Services</Link></li>
                <li className="navbar-link hover:text-pink-400 hover:underline"><Link href="/about">About Us</Link></li>
                <li className="navbar-link hover:text-pink-400 hover:underline"><Link href="/contact">Contact Us</Link></li>
                <div className="navbar-link">
                    <Button command="Signup" variant="primary" size="md" link="/register" />
                </div>
                <div className="navbar-link">
                    <Button command="Login" variant="primary" size="md" link="/login" />
                </div>
            </ul>
        </nav>
    )
}

export default Navbar