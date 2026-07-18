import { Head } from '@inertiajs/react'
import Navbar from '@/components/navbar'
import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import Footer from '@/components/Footer'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import Services from '@/components/Home/Services'
import Contact from '@/components/Home/Contact'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Map from '@/components/Home/Map'

gsap.registerPlugin(ScrollTrigger)

const Welcome = () => {
    useEffect(() => {
        // Animate each section on scroll
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
            <Head title="Home" />
            <Navbar />
            <div className="hero-section">
                <Hero />
            </div>
            <div className="about-section">
                <About />
            </div>
            <div className="why-section">
                <WhyChooseUs />
            </div>
            <div className="services-section">
                <Services />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Map />
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}

export default Welcome
