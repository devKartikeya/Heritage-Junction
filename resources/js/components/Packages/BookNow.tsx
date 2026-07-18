import { Link } from "@inertiajs/react"
import { Plane } from "lucide-react"

const BookNow = ({ id }: {id: number}) => {
    return (
        <Link
            href={`/booking/${id}`}
            className="fixed right-8 bottom-24 z-50 w-40 h-14 flex items-center justify-center gap-2
             font-semibold text-white border-4 border-green-400 rounded-2xl cursor-pointer
             bg-green-400 shadow-lg animate-bounce-slow
             transition-all duration-500
             hover:bg-green-400 hover:text-white hover:scale-105 hover:shadow-xl"
        >
            <Plane className="w-5 h-5" />
            Book Now
        </Link>
    )
}

export default BookNow