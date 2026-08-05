import { useState } from 'react'
import { Link } from '@inertiajs/react'

const ServiceCard = ({
    title,
    description,
    image,
    backInfo,
    backImage
}: {
    title: string,
    description: string,
    image: string,
    backInfo: string,
    backImage?: string
}) => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className="group w-full h-72 [perspective:1000px] cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] 
          ${flipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'}`}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center text-center text-white px-6 [backface-visibility:hidden]"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="bg-black/40 absolute inset-0"></div>
                    <h3 className="text-2xl font-bold mb-3 relative z-10 text-pink-500">{title}</h3>
                    <p className="text-sm max-w-md relative z-10">{description}</p>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 rounded-xl shadow-lg flex items-center justify-center text-center px-6 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    style={{
                        backgroundImage: backImage ? `url(${backImage})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: backImage ? 'transparent' : '#fce7f3' // fallback pink if no image
                    }}
                >
                    <div className="bg-black/40 absolute inset-0"></div>
                    <p className="text-white text-sm tracking-wide font-medium relative z-10">{backInfo}</p>
                </div>
            </div>
        </div>
    )
}


const Services = () => {
    return (
        <section className="w-full bg-blue-50 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Heading */}
                <h2 className="text-4xl lg:text-5xl font-bold text-center text-red-600">Our Services</h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <ServiceCard
                        title=""
                        description="Explore iconic sites like Varanasi ghats, Lucknow’s Nawabi heritage, and Ayodhya’s spiritual landmarks with expert local guides."
                        image="https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        backInfo="Explore iconic sites like Varanasi ghats, Lucknow’s Nawabi heritage, and Ayodhya’s spiritual landmarks with expert local guides."
                        backImage='https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />

                    <ServiceCard
                        title=""
                        description="Participate in classical music recitals, Kathak dance workshops, and traditional craft sessions led by local artisans."
                        image="https://images.unsplash.com/photo-1565970141927-d4591950032e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        backInfo='Step into the living traditions of Uttar Pradesh. Join Kathak dance workshops, learn classical ragas from maestros, and try your hand at pottery or weaving with local artisans.'
                        backImage='https://images.unsplash.com/photo-1565970141927-d4591950032e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    <ServiceCard
                        title=""
                        description="Celebrate Holi in Mathura, Diwali in Ayodhya, or the grand Kumbh Mela with curated itineraries and safe arrangements."
                        image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        backInfo='Celebrate India’s most vibrant festivals in their authentic settings. Experience the colors of Holi in Mathura, the lights of Diwali in Ayodhya, and the spiritual grandeur of the Kumbh Mela. '
                        backImage='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    <ServiceCard
                        title=""
                        description="Stay in restored havelis, palaces, and boutique heritage hotels that blend comfort with cultural authenticity."
                        image="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        backInfo='Live like royalty in restored havelis, palaces, and boutique heritage hotels. Each stay blends modern comfort with historic charm, offering curated dining experiences, cultural evenings with music and dance, and guided tours of the property’s architecture.'
                        backImage='https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    <ServiceCard
                        title=""
                        description="Support local communities through village tours, culinary experiences, and artisan markets that sustain heritage livelihoods."
                        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        backInfo='Travel with purpose by engaging directly with local communities. Visit villages, join family cooking sessions, and shop at artisan markets where your purchases sustain livelihoods.a'
                        backImage='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    {/* <ServiceCard
                        title=""
                        description="Tailor‑made itineraries for solo travelers, families, and corporate groups — from transport to curated cultural activities."
                        image="https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        backInfo='Your journey, your way. Whether you’re a solo explorer, a family on vacation, or a corporate group, we design tailor‑made itineraries that fit your interests and schedule. From transport and accommodation to curated cultural activities, our planners provide 24/7 support and personalized recommendations to ensure a seamless and memorable experience.'
                        backImage='https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    /> */}
                </div>
                    <h2 className='text-black font-semibold text-md text-center'>To uncover our full capabilities, refer to our <Link className='hover:underline text-pink-500' href={"/services"}>Services</Link> Page !</h2>
            </div>
        </section>
    )
}

export default Services;