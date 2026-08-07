import { useState } from 'react'
import { Link } from '@inertiajs/react'

const ServiceCard = ({
    title,
    description,
    image,
    backInfo,
    backImage
}: {
    title: string
    description: string
    image: string
    backInfo: string
    backImage?: string
}) => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className="group w-full h-[340px] [perspective:1200px] cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`
                    relative w-full h-full
                    transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    [transform-style:preserve-3d]
                    ${flipped
                        ? '[transform:rotateY(180deg)]'
                        : 'group-hover:[transform:rotateY(180deg)]'
                    }
                `}
            >

                {/* ================= FRONT ================= */}
                <div
                    className="
                        absolute inset-0
                        overflow-hidden
                        rounded-2xl
                        shadow-xl
                        [backface-visibility:hidden]
                    "
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                    {/* Decorative border */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white">

                        <span className="
                            inline-block
                            mb-3
                            rounded-full
                            bg-pink-500/20
                            border border-pink-400/30
                            px-3 py-1
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-white
                        ">
                            Heritage Junction
                        </span>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            {title}
                        </h3>

                        <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-3">
                            {description}
                        </p>

                        <div className="
                            mt-5
                            flex items-center gap-2
                            text-sm
                            font-semibold
                            text-pink-300
                        ">
                            <span>Explore service</span>
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                    </div>
                </div>


                {/* ================= BACK ================= */}
                <div
                    className="
                        absolute inset-0
                        overflow-hidden
                        rounded-2xl
                        shadow-xl
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                    "
                    style={{
                        backgroundImage: backImage
                            ? `url(${backImage})`
                            : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: backImage
                            ? 'transparent'
                            : '#18181b'
                    }}
                >

                    {/* Overlay */}
                    <div className="
                        absolute inset-0
                        bg-gradient-to-br
                        from-black/80
                        via-black/65
                        to-purple-950/80
                    " />

                    {/* Border */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20" />

                    {/* Back content */}
                    <div className="
                        relative z-10
                        h-full
                        flex flex-col
                        items-center
                        justify-center
                        text-center
                        px-7
                        text-white
                    ">

                        <div className="
                            mb-5
                            h-12 w-12
                            rounded-full
                            flex items-center justify-center
                            border border-pink-400/40
                            bg-pink-500/10
                            text-pink-300
                            text-xl"
                        >
                            ✦
                        </div>

                        <h3 className="text-2xl font-bold mb-5 text-pink-300 ">
                            {title}
                        </h3>

                        <p className="
                            text-sm md:text-sm
                            leading-relaxed
                            text-gray-200
                            max-w-md
                        ">
                            {backInfo}
                        </p>

                        <span className="
                            mt-6
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-gray-400
                        ">
                            Tap / Hover to return
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}


const Services = () => {
    return (
        <>
            <section className="py-20 px-6 md:px-10 lg:px-16 bg-white">

                <div className="max-w-7xl mx-auto">

                    {/* ================= HEADING ================= */}
                    <div className="text-center max-w-3xl mx-auto mb-14">

                        <span className="
                            inline-block
                            mb-4
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-black
                        ">
                            What We Offer
                        </span>

                        <h2 className="
                            text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            text-gray-900
                        ">
                            Our <span className="text-red-500">Services</span>
                        </h2>

                        <p className="
                            mt-5
                            text-gray-600
                            text-base
                            md:text-lg
                            leading-relaxed
                        ">
                            From heritage explorations to immersive cultural
                            experiences, we carefully curate every part of
                            your journey through Uttar Pradesh.
                        </p>

                    </div>


                    {/* ================= CARDS ================= */}
                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                    ">

                        <ServiceCard
                            title="Heritage Tours"
                            description="Explore iconic sites like Varanasi ghats, Lucknow’s Nawabi heritage, and Ayodhya’s spiritual landmarks with expert local guides."
                            image="https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop"
                            backInfo="Explore iconic heritage sites across Uttar Pradesh with knowledgeable local guides who bring history, architecture, traditions, and stories to life."
                            backImage="https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop"
                        />

                        <ServiceCard
                            title="Cultural Experiences"
                            description="Participate in classical music recitals, Kathak dance workshops, and traditional craft sessions led by local artisans."
                            image="https://images.unsplash.com/photo-1565970141927-d4591950032e?q=80&w=2070&auto=format&fit=crop"
                            backInfo="Step into the living traditions of Uttar Pradesh. Experience Kathak, classical music, traditional crafts, and authentic interactions with local artisans."
                            backImage="https://images.unsplash.com/photo-1565970141927-d4591950032e?q=80&w=2070&auto=format&fit=crop"
                        />

                        <ServiceCard
                            title="Festival Experiences"
                            description="Celebrate Holi in Mathura, Diwali in Ayodhya, or the grand Kumbh Mela with curated itineraries and safe arrangements."
                            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop"
                            backInfo="Celebrate India's most vibrant festivals in their authentic settings. Experience the colours of Holi, the lights of Diwali, and the spiritual grandeur of major cultural gatherings."
                            backImage="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop"
                        />

                        <ServiceCard
                            title="Heritage Stays"
                            description="Stay in restored havelis, palaces, and boutique heritage hotels that blend comfort with cultural authenticity."
                            image="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop"
                            backInfo="Live like royalty in restored havelis, palaces, and boutique heritage hotels. Enjoy modern comfort while experiencing historic architecture, local cuisine, and cultural charm."
                            backImage="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop"
                        />

                    </div>


                    {/* ================= FOOTER CTA ================= */}
                    <div className="mt-14 text-center">

                        <p className="text-gray-600">
                            Looking for something more personalized?
                        </p>

                        <Link
                            href="/services"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-3
                                text-red-500
                                font-semibold
                                hover:text-red-600
                                transition-colors
                            "
                        >
                            Discover all our services
                            <span className="text-lg">→</span>
                        </Link>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Services