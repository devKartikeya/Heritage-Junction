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
                group relative
                rounded-2xl
                border border-gray-200
                bg-white
                p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-red-200
            "
        >
            {/* Icon */}
            <div
                className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-xl
                    bg-red-50
                    text-2xl
                    transition-all duration-300
                    group-hover:bg-red-600
                    group-hover:scale-110
                "
            >
                <span className="transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </span>
            </div>

            {/* Content */}
            <div className="mt-6">
                <h3
                    className="
                        text-xl
                        font-bold
                        text-gray-900
                        transition-colors duration-300
                        group-hover:text-red-600
                    "
                >
                    {title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600">
                    {description}
                </p>
            </div>

            {/* Bottom accent */}
            <div
                className="
                    absolute bottom-0 left-7 right-7
                    h-0.5
                    origin-left
                    scale-x-0
                    rounded-full
                    bg-red-600
                    transition-transform duration-300
                    group-hover:scale-x-100
                "
            />
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span
                        className="
                            inline-block
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-black
                        "
                    >
                        Why Heritage Junction
                    </span>

                    <h2
                        className="
                            mt-3
                            text-4xl
                            font-bold
                            tracking-tight
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        <span className="text-black">Why</span> <span className="text-red-600"> Choose Us</span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            leading-7
                            text-gray-600
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
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
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
                <div className="mt-16 text-center">
                    <p className="text-lg font-medium italic text-gray-700">
                        "We don't just take you to a destination — <span className="text-red-600">we help you experience its story."</span>
                        
                    </p>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;