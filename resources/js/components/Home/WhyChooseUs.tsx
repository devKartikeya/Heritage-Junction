const Card = ({ title, description, icon }: { title: string, description: string, icon: any }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition hover:bg-pink-100 cursor-default">
            <div className="text-4xl mb-4 text-red-500">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    )
}

const WhyChooseUs = () => {
    return (
        <>
            <div className="h-1 w-screen bg-black"></div>
            <section className="w-full bg-blue-50 text-black py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-10">
                    {/* Heading */}
                    <h2 className="font-bold text-4xl lg:text-5xl text-center text-red-500">
                        Why Choose Us?
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card
                            icon="🏛️"
                            title="Hyper‑Local Expertise"
                            description="Our journeys are designed by historians, scholars, and local storytellers who decode India’s heritage."
                        />
                        <Card
                            icon="📖"
                            title="Curated Heritage Experiences"
                            description="From sunrise aartis in Varanasi to Nawabi kitchens in Lucknow, every itinerary is handpicked for authenticity."
                        />
                        <Card
                            icon="🤝"
                            title="Trusted Local Partnerships"
                            description="We collaborate with certified guides, artisans, and heritage hotels to sustain communities and heritage sites."
                        />
                        <Card
                            icon="🚍"
                            title="Seamless Travel Planning"
                            description="End‑to‑end arrangements for solo travelers, families, and corporate groups — hassle‑free and flexible."
                        />
                        <Card
                            icon="🏰"
                            title="Luxury & Comfort Options"
                            description="Palace stays, private experiences, and gourmet dining blend opulence with authenticity."
                        />
                        <Card
                            icon="🎶"
                            title="Cultural & Spiritual Depth"
                            description="Immerse in Kathak, Ram Leela, Kumbh Mela, and savor Awadhi kebabs or Varanasi street food."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs