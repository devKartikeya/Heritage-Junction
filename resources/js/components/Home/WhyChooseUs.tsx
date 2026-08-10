import React from "react";

type CardProps = {
    title: string;
    description: string;
    icon: string;
};

const Card = ({ title, description, icon }: CardProps) => {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-zinc-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-red-200
                hover:shadow-xl
                sm:p-8
            "
        >
            {/* Soft hover glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-purple-100
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-70
                "
            />

            {/* Icon */}
            <div
                className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-purple-100
                    bg-purple-50
                    text-2xl
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:bg-red-600
                    group-hover:shadow-lg
                "
            >
                <span
                    className="
                        transition-transform
                        duration-500
                        group-hover:scale-110
                        group-hover:grayscale
                    "
                >
                    {icon}
                </span>
            </div>

            {/* Content */}
            <div className="relative mt-7">
                <h3
                    className="
                        text-xl
                        font-bold
                        tracking-tight
                        text-zinc-900
                        transition-colors
                        duration-300
                        group-hover:text-red-600
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-3
                        text-sm
                        leading-7
                        text-zinc-600
                        sm:text-base
                    "
                >
                    {description}
                </p>
            </div>

            {/* Bottom accent */}
            <div
                className="
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-0.5
                    origin-left
                    scale-x-0
                    rounded-full
                    bg-red-600
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                "
            />
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="relative overflow-hidden bg-zinc-50 py-20 sm:py-24 lg:py-32">

            {/* Very subtle background decoration */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-[500px]
                    w-[700px]
                    -translate-x-1/2
                    rounded-full
                    bg-purple-100/40
                    blur-3xl
                "
            />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">

                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-purple-600" />

                        <span
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-black
                            "
                        >
                            Why Heritage Junction
                        </span>

                        <span className="h-px w-10 bg-purple-600" />
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            tracking-tight
                            text-zinc-900
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Why{" "}
                        <span
                            className="
                                bg-gradient-to-r
                                from-red-600
                                to-fuchsia-700
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Choose Us
                        </span>
                    </h2>

                    {/* Accent */}
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-purple-600" />

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-8
                            text-zinc-600
                            sm:text-lg
                        "
                    >
                        We go beyond ordinary sightseeing to create meaningful
                        journeys rooted in the culture, history, and spirit of India.
                    </p>

                </div>

                {/* Cards */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-6
                    "
                >

                    <Card
                        icon="🏛️"
                        title="Hyper-Local Expertise"
                        description="Our journeys are designed by historians, scholars, and local storytellers who decode India's heritage and bring its stories to life."
                    />

                    <Card
                        icon="📖"
                        title="Curated Heritage Experiences"
                        description="From sunrise aartis in Varanasi to Nawabi kitchens in Lucknow, every itinerary is thoughtfully selected for authenticity."
                    />

                    <Card
                        icon="🤝"
                        title="Trusted Local Partnerships"
                        description="We collaborate with certified guides, artisans, and heritage hotels to create authentic experiences while supporting local communities."
                    />

                    <Card
                        icon="🚍"
                        title="Seamless Travel Planning"
                        description="From transportation and accommodation to sightseeing, we handle the details so you can focus entirely on experiencing the journey."
                    />

                    <Card
                        icon="🏰"
                        title="Comfort Without Compromise"
                        description="Choose from comfortable stays, private experiences, and carefully selected dining options while staying connected to the destination."
                    />

                    <Card
                        icon="🎶"
                        title="Cultural & Spiritual Depth"
                        description="Experience India's living traditions through Kathak, Ram Leela, Kumbh Mela, local cuisine, music, festivals, and centuries-old rituals."
                    />

                </div>

                {/* Bottom statement */}
                <div className="mt-16 text-center sm:mt-20">

                    <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">

                        <span className="hidden h-px flex-1 bg-zinc-200 sm:block" />

                        <p className="text-base font-medium italic leading-7 text-zinc-600 sm:text-lg">
                            We don't just take you to a destination —
                            <span className="font-semibold text-red-600">
                                {" "}we help you experience its story.
                            </span>
                        </p>

                        <span className="hidden h-px flex-1 bg-zinc-200 sm:block" />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;