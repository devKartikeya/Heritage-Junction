import React from 'react'
import clsx from 'clsx'
import { Link } from '@inertiajs/react'

interface ButtonProps {
    command: string
    variant?: 'primary' | 'secondary' | 'danger'
    size?: 'md' | 'lg'
    icon?: React.ReactNode
    onClick?: () => void,
    link: string
}

const Button: React.FC<ButtonProps> = ({
    command,
    variant = 'primary',
    size = 'md',
    icon,
    link,
    onClick,
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantStyles = {
        primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 cursor-pointer',
        secondary: 'bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-400 cursor-pointer',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 cursor-pointer',
    }

    const sizeStyles = {
        md: 'px-4 py-3 text-base',
        lg: 'px-6 py-4 text-lg',
    }

    return (
        <button
            onClick={onClick}
            className={clsx(baseStyles, variantStyles[variant], sizeStyles[size])}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <Link href={link}>{command}</Link>
        </button>
    )
}

export default Button