import { Link } from '@inertiajs/react'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
            <Link
                href="/"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
                Go Home
            </Link>
        </div>
    )
}

export default NotFound