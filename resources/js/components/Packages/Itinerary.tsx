type Itinerary = {
    id: number
    package_id: number
    day_number: number
    title: string
    time: string   // activity title (e.g. "Breakfast", "Visit Ram Janmabhoomi")
    description: string // supporting statement
    sort_order: number
}

/* Removed Starting city and Ending City Prop from here */
export default function Itinerary({ itineraries }: { itineraries: Itinerary[], starting_city: string, ending_city: string }) {
    // Group activities by day_number
    const grouped = itineraries.reduce((acc: Record<number, Itinerary[]>, item) => {
        if (!acc[item.day_number]) acc[item.day_number] = []
        acc[item.day_number].push(item)
        return acc
    }, {})

    const days = Object.keys(grouped).sort((a, b) => Number(a) - Number(b))

    return (
        <section className="relative py-10 md:py-12">

            {/* ================= HEADER ================= */}
            <div className="max-w-3xl mb-8 md:mb-10">

                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-10 bg-red-500" />

                    <span className="
                    text-xs md:text-sm
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-red-500
                ">
                        Your Journey
                    </span>
                </div>

                <h2 className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                tracking-tight
                text-gray-900
            ">
                    Itinerary
                </h2>

                <p className="
                mt-4
                max-w-2xl
                text-base
                md:text-lg
                leading-7
                text-gray-600
            ">
                    A day-by-day look at everything planned for your journey,
                    from activities and meals to sightseeing and experiences.
                </p>

            </div>


            {/* ================= DAYS ================= */}
            <div className="space-y-8 md:space-y-10">

                {days.map((day) => {

                    const activities = grouped[Number(day)]
                        .sort((a, b) => a.sort_order - b.sort_order)

                    return (

                        <div
                            key={day}
                            className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            shadow-sm
                        "
                        >

                            {/* ================= DAY HEADER ================= */}
                            <div className="
                            relative
                            overflow-hidden
                            px-6
                            py-4
                            md:px-8
                            md:py-6
                            bg-gray-900
                        ">

                                {/* Decorative glow */}
                                <div className="
                                absolute
                                -right-10
                                -top-16
                                h-40
                                w-40
                                rounded-full
                                bg-red-500/20
                                blur-2xl"
                                />

                                <div className="
                                relative
                                flex
                                items-center
                                justify-between
                                gap-4
                            ">

                                    <div>

                                        <p className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-red-400
                                    ">
                                            Day {day}
                                        </p>

                                        <h3 className="
                                        mt-1
                                        text-lg
                                        md:text-xl
                                        font-bold
                                        text-white
                                    ">
                                            Your Day {day} Experience
                                        </h3>

                                    </div>


                                    {/* Activity count */}
                                    <div className="
                                    flex-shrink-0
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/10
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-medium
                                    text-gray-200
                                ">
                                        {activities.length}{" "}
                                        {activities.length === 1
                                            ? "Activity"
                                            : "Activities"}
                                    </div>

                                </div>

                            </div>


                            {/* ================= TIMELINE ================= */}
                            <div className="p-4 md:p-6">

                                <div className="relative">

                                    {/* Vertical timeline line */}
                                    <div className="
                                    absolute
                                    left-[15px]
                                    top-3
                                    bottom-3
                                    w-px
                                    bg-gray-200
                                " />


                                    <div className="space-y-8">

                                        {activities.map((act, index) => (

                                            <div
                                                key={act.id}
                                                className="
                                                relative
                                                flex
                                                gap-5
                                                md:gap-6
                                                group
                                            "
                                            >

                                                {/* ================= TIMELINE DOT ================= */}
                                                <div className="
                                                relative
                                                z-10
                                                flex-shrink-0
                                                mt-1
                                                w-7
                                                h-7
                                                rounded-full
                                                border-4
                                                border-white
                                                bg-red-500
                                                shadow-sm
                                                transition-transform
                                                duration-300
                                                group-hover:scale-110
                                            " />


                                                {/* ================= ACTIVITY ================= */}
                                                <div className="
                                                min-w-0
                                                flex-1
                                                
                                            ">

                                                    {/* Time */}
                                                    <div className="
                                                    inline-flex
                                                    items-center
                                                    rounded-full
                                                    bg-red-50
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    md:text-sm
                                                    font-semibold
                                                    text-red-600
                                                ">
                                                        {act.time}
                                                    </div>


                                                    {/* Title */}
                                                    <h4 className="
                                                    mt-3
                                                    text-md
                                                    md:text-lg
                                                    font-bold
                                                    text-gray-900
                                                    transition-colors
                                                    duration-200
                                                    group-hover:text-red-600
                                                ">
                                                        {act.title}
                                                    </h4>


                                                    {/* Description */}
                                                    {act.description && (
                                                        <p className="
                                                        mt-2
                                                        max-w-3xl
                                                        text-sm
                                                        md:text-base
                                                        leading-7
                                                        text-gray-600
                                                    ">
                                                            {act.description}
                                                        </p>
                                                    )}

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    )
                })}

            </div>

        </section>
    )
}