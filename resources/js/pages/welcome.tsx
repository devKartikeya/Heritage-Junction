import { gsap } from 'gsap'
import { useEffect } from 'react'
import { Head } from '@inertiajs/react'
import Map from '@/components/Home/Map'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import Contact from '@/components/Home/Contact'
import Services from '@/components/Home/Services'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WhyChooseUs from '@/components/Home/WhyChooseUs'

gsap.registerPlugin(ScrollTrigger)

const Welcome = () => {
    useEffect(() => {

        const sections = gsap.utils.toArray([
            '.hero-section',
            '.about-section',
            '.why-section',
            '.services-section',
            '.footer-section'
        ])

        sections.forEach((section: any) => {
            gsap.from(section, {
                opacity: 0,
                y: 100,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse'
                }
            })
        })
    }, [])

    return (
        <div className="overflow-x-hidden bg-white">
            <Head
                title="Home"
            >
                <meta
                    name="description"
                    content="Heritage Junction is a full-stack travel and tourism management platform featuring destination discovery, package booking, traveler verification, and a powerful administrative dashboard."
                />
            </Head>
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <div className="hero-section">
                <Hero />
            </div>
            {/* About */}
            <div className="about-section">
                <About />
            </div>
            {/* Why Choose Us */}
            <div className="why-section">
                <WhyChooseUs />
            </div>
            {/* Services */}
            <div className="services-section">
                <Services />
            </div>
            {/* Contact */}
            <div>
                <Contact />
            </div>
            {/* Map */}
            <div>
                <Map />
            </div>
            {/* Footer */}
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}

export default Welcome
