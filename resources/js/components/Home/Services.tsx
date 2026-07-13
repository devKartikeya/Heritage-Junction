import React, { useState } from 'react'
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
        <section className="w-full bg-gray-100 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Heading */}
                <h2 className="text-5xl font-bold text-center text-purple-600">Our Services</h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Guided Heritage Tours"
                        description="Explore iconic sites like Varanasi ghats, Lucknow’s Nawabi heritage, and Ayodhya’s spiritual landmarks with expert local guides."
                        image="https://imgs.search.brave.com/fhsVD7qES8La4vyAMGe4Ar6ILwn706Rf_g4DTZkHwh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MzkyNzE3Ni9waG90/by9zaGFuZ2hhaS1j/aGluYS1vY3RvYmVy/LTEyLTIwMjItYS1z/cGVjaWFsLWV4aGli/aXRpb24tb2Ytb3Zl/cnNlYXMtcmV0dXJu/ZWQtY3VsdHVyYWwt/cmVsaWNzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XdEM2/Z1BkLTJJNjJ4ckVI/dDh3VU1tRTlvS0Zr/U2xfckFHdThFWXNk/QTc0PQ"
                        backInfo="Discover Uttar Pradesh’s treasures with curated itineraries that go beyond sightseeing. Our tours include guided walks along Varanasi’s ghats, storytelling sessions in Lucknow’s Nawabi quarters, and spiritual journeys through Ayodhya. Each package covers comfortable transport, authentic meals, and insider access to places often missed by regular tourists."
                        backImage='https://imgs.search.brave.com/fhsVD7qES8La4vyAMGe4Ar6ILwn706Rf_g4DTZkHwh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MzkyNzE3Ni9waG90/by9zaGFuZ2hhaS1j/aGluYS1vY3RvYmVy/LTEyLTIwMjItYS1z/cGVjaWFsLWV4aGli/aXRpb24tb2Ytb3Zl/cnNlYXMtcmV0dXJu/ZWQtY3VsdHVyYWwt/cmVsaWNzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XdEM2/Z1BkLTJJNjJ4ckVI/dDh3VU1tRTlvS0Zr/U2xfckFHdThFWXNk/QTc0PQ'
                    />

                    <ServiceCard
                        title="Cultural Immersion Experiences"
                        description="Participate in classical music recitals, Kathak dance workshops, and traditional craft sessions led by local artisans."
                        image="https://imgs.search.brave.com/6o-DEk-XKXYoKVeEz3-IDHtKddpuKShSvbrp5PJbKNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNS8w/NS8yMS8xNS8zNC9z/bm93LW1vdW50YWlu/LTk2MTQwODdfNjQw/LmpwZw"
                        backInfo='Step into the living traditions of Uttar Pradesh. Join Kathak dance workshops, learn classical ragas from maestros, and try your hand at pottery or weaving with local artisans. These immersive experiences are designed to give you not just knowledge, but a heartfelt connection to the culture, with opportunities to interact directly with artists and performers.'
                        backImage='https://imgs.search.brave.com/6o-DEk-XKXYoKVeEz3-IDHtKddpuKShSvbrp5PJbKNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNS8w/NS8yMS8xNS8zNC9z/bm93LW1vdW50YWlu/LTk2MTQwODdfNjQw/LmpwZw'
                    />
                    <ServiceCard
                        title="Festival & Event Packages"
                        description="Celebrate Holi in Mathura, Diwali in Ayodhya, or the grand Kumbh Mela with curated itineraries and safe arrangements."
                        image="https://imgs.search.brave.com/3OXaFzhmNcVYE6uDXulqcs75eAOrkUsoL0O-hkI896M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1L2U5/LzQ5L2E1ZTk0OTEw/ODI2NzY3NzQ2MGMx/Y2RjMzdmMjQwNWI1/LmpwZw"
                        backInfo='Celebrate India’s most vibrant festivals in their authentic settings. Experience the colors of Holi in Mathura, the lights of Diwali in Ayodhya, and the spiritual grandeur of the Kumbh Mela. Our packages include priority access to rituals, curated festival trails, safe arrangements, local cuisine tastings, and photography support to capture unforgettable memories.'
                        backImage='https://imgs.search.brave.com/3OXaFzhmNcVYE6uDXulqcs75eAOrkUsoL0O-hkI896M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1L2U5/LzQ5L2E1ZTk0OTEw/ODI2NzY3NzQ2MGMx/Y2RjMzdmMjQwNWI1/LmpwZw'
                    />
                    <ServiceCard
                        title="Heritage Stays"
                        description="Stay in restored havelis, palaces, and boutique heritage hotels that blend comfort with cultural authenticity."
                        image="https://imgs.search.brave.com/8cXWrLZ9BbaRs025lVMxXkGtjXrJJdRGupPrqHIHcaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmVh/dGhlZHJlYW1nby5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDUvVGFqLU1h/aGFsLXJlZmxlY3Rp/b24uanBn"
                        backInfo='Live like royalty in restored havelis, palaces, and boutique heritage hotels. Each stay blends modern comfort with historic charm, offering curated dining experiences, cultural evenings with music and dance, and guided tours of the property’s architecture. Perfect for travelers who want to indulge in luxury while staying rooted in tradition.'
                        backImage='https://imgs.search.brave.com/8cXWrLZ9BbaRs025lVMxXkGtjXrJJdRGupPrqHIHcaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmVh/dGhlZHJlYW1nby5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDUvVGFqLU1h/aGFsLXJlZmxlY3Rp/b24uanBn'
                    />
                    <ServiceCard
                        title="Community Engagement"
                        description="Support local communities through village tours, culinary experiences, and artisan markets that sustain heritage livelihoods."
                        image="https://imgs.search.brave.com/mI-JdjhrRwS_nuvNfDJWyLALXhixbCSGcJIXYsVZAcY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uYXR1/cmFsLXBlYXJscy1p/bnNpZGUtb3lzdGVy/LW5hdHVyYWwtcGVh/cmxzLWluc2lkZS1v/eXN0ZXItc2hlbGwt/NDM5NDkyNTg1Lmpw/Zw"
                        backInfo='Travel with purpose by engaging directly with local communities. Visit villages, join family cooking sessions, and shop at artisan markets where your purchases sustain livelihoods. These experiences allow you to connect with people, understand their traditions, and contribute to heritage preservation. Every booking supports community development initiatives.'
                        backImage='https://imgs.search.brave.com/mI-JdjhrRwS_nuvNfDJWyLALXhixbCSGcJIXYsVZAcY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uYXR1/cmFsLXBlYXJscy1p/bnNpZGUtb3lzdGVy/LW5hdHVyYWwtcGVh/cmxzLWluc2lkZS1v/eXN0ZXItc2hlbGwt/NDM5NDkyNTg1Lmpw/Zw'
                    />
                    <ServiceCard
                        title="Customized Travel Planning"
                        description="Tailor‑made itineraries for solo travelers, families, and corporate groups — from transport to curated cultural activities."
                        image="https://imgs.search.brave.com/2R0CE7XrrJulxAy1YOnY8dK6jR31j9r9f8lk7J71Nkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9tc2lk/LTExMzM3MDMxMCx3/aWR0aC03NDgsaGVp/Z2h0LTQ5OSxyZXNp/emVtb2RlPTQsaW1n/c2l6ZS0yMTYxMzgv/UGljdHVyZS1wb3N0/Y2FyZHMtZnJvbS10/aGUtbW9zdC1jaGFy/bWluZy12aWxsYWdl/cy1pbi1Td2l0emVy/bGFuZC5qcGc"
                        backInfo='Your journey, your way. Whether you’re a solo explorer, a family on vacation, or a corporate group, we design tailor‑made itineraries that fit your interests and schedule. From transport and accommodation to curated cultural activities, our planners provide 24/7 support and personalized recommendations to ensure a seamless and memorable experience.'
                        backImage='https://imgs.search.brave.com/2R0CE7XrrJulxAy1YOnY8dK6jR31j9r9f8lk7J71Nkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9tc2lk/LTExMzM3MDMxMCx3/aWR0aC03NDgsaGVp/Z2h0LTQ5OSxyZXNp/emVtb2RlPTQsaW1n/c2l6ZS0yMTYxMzgv/UGljdHVyZS1wb3N0/Y2FyZHMtZnJvbS10/aGUtbW9zdC1jaGFy/bWluZy12aWxsYWdl/cy1pbi1Td2l0emVy/bGFuZC5qcGc'
                    />
                    <h2 className='text-black font-semibold text-md'>To uncover our full capabilities, refer to our <Link className='hover:underline text-pink-500' href={"/services"}>Services</Link> Page !</h2>
                </div>
            </div>
        </section>
    )
}

export default Services