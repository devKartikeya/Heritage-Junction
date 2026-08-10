import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { ArrowRight, MapPin } from "lucide-react";
import Button from "../Button";

const Hero = () => {
    const slides = [
        {
            image: "/ram-lalla-4k-wallpaper-scaled-1.webp",
            title: "Ayodhya",
            link: "/ayodhya",
            description:
                "“The birthplace of Lord Rama, Ayodhya is revered as one of India’s holiest cities. Its ghats along the Sarayu River, magnificent temples, and spiritual atmosphere make it a center of devotion and storytelling. Pilgrims come from across the world to experience its timeless traditions and vibrant festivals.”",
        },
        {
            image: "/taj-mahal-agra-uttar-pradesh-city-1-hero.jpg",
            title: "Agra",
            link: "/agra",
            description:
                "“Home to the iconic Taj Mahal, Agra is a jewel of Mughal architecture and history. Beyond the Taj, the city boasts the Agra Fort, Fatehpur Sikri, and bustling bazaars filled with handicrafts. Agra represents a blend of romance, grandeur, and cultural richness that continues to captivate travelers.”",
        },
        {
            image: "/sadhu-indian-holymen-sitting-in-the-temple.webp",
            title: "Varanasi",
            link: "/varanasi",
            description:
                "“Known as the spiritual capital of India, Varanasi is one of the world’s oldest living cities. Its ghats along the Ganges host mesmerizing evening aartis, while narrow lanes echo with chants and temple bells. Varanasi offers a profound journey into faith, philosophy, and centuries-old traditions.”",
        },
        {
            image: "/Cultural-heritage-of-Uttar-Pradesh-Varanasi.webp",
            title: "Prayagraj",
            link: "/prayagraj",
            description:
                "“Famed for the sacred Sangam — the confluence of the Ganga, Yamuna, and mythical Saraswati — Prayagraj is a city of immense spiritual significance. It hosts the grand Kumbh Mela, drawing millions of devotees. The city blends spirituality with history, offering forts, temples, and cultural vibrancy.”",
        },
        {
            image: "/little-girl-observing-how-sadhu-doing-his-makeup.webp",
            title: "Lucknow",
            link: "/lucknow",
            description:
                "“Lucknow, the city of Nawabs, is renowned for its tehzeeb (etiquette), Awadhi cuisine, and Indo-Islamic architecture. From the Bara Imambara to bustling Chowk markets, Lucknow exudes charm and sophistication. It is a city where culture, hospitality, and history come together beautifully.”",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-black/40">

            <div className="flex flex-col md:flex-row">

                {/* =====================================================
                    LEFT — DESTINATION SLIDER
                    Animation / logic intentionally preserved
                ====================================================== */}

                <section className="group relative h-[460px] w-full overflow-hidden sm:h-[510px] md:h-[540px] md:w-1/2">

                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transform: `translateX(${
                                    index === currentIndex
                                        ? "0%"
                                        : index < currentIndex
                                        ? "-100%"
                                        : "100%"
                                })`,
                            }}
                        >

                            {/* Permanent cinematic gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 px-5 transition-all duration-500 group-hover:bg-black/55 sm:px-8">

                                <div
                                    className="
                                        max-w-xl
                                        translate-y-5
                                        rounded-3xl
                                        border border-white/20
                                        bg-black/30
                                        p-6
                                        text-center
                                        opacity-0
                                        backdrop-blur-xl
                                        transition-all
                                        duration-500
                                        group-hover:translate-y-0
                                        group-hover:opacity-100
                                        sm:p-8
                                    "
                                >

                                    <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                                        <MapPin size={14} />
                                        Explore Uttar Pradesh
                                    </div>

                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        {slide.title}
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-zinc-200 sm:text-base">
                                        {slide.description}
                                    </p>

                                    <Link
                                        href={`/destinations${slide.link}`}
                                        className="
                                            mt-7
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-white
                                            px-6
                                            py-3
                                            text-sm
                                            font-semibold
                                            text-zinc-950
                                            transition-all
                                            duration-300
                                            hover:bg-red-500
                                            hover:text-white
                                            hover:shadow-lg
                                            hover:shadow-purple-500/25
                                        "
                                    >
                                        Discover {slide.title}
                                        <ArrowRight
                                            size={17}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>

                                </div>
                            </div>

                        </div>
                    ))}

                    {/* Destination indicator */}
                    <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">

                        <div className="flex gap-1.5">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all duration-500 ${
                                        index === currentIndex
                                            ? "w-8 bg-white"
                                            : "w-2 bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>

                        <span className="text-xs font-medium tracking-widest text-white/70">
                            0{currentIndex + 1} / 0{slides.length}
                        </span>

                    </div>

                </section>

                {/* =====================================================
                    RIGHT — HERITAGE JUNCTION
                ====================================================== */}

                <section
                    className="
                        relative
                        flex
                        min-h-[510px]
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        px-6
                        py-16
                        sm:px-10
                        md:min-h-[540px]
                        md:w-1/2
                        lg:px-16
                    "
                    style={{
                        backgroundImage: `url(https://imgs.search.brave.com/fqDQ7PegrsS0btIe8JzO7w8ukJvFQVTPwJ_M__1-IQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/NDEzMDU2Ni9waG90/by9wYW5vcmFtaWMt/b2YtdnJpbmRhdmFu/LXV0dGFyLXByYWRl/c2gtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU83/UldhY1E3RE5VYzhJ/dzRrQWR2elRhMTdu/RlY2WF9rU3duaEF0/eDZXbnc9)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    {/* Cinematic overlays */}
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-black/50" />

                    {/* Decorative glow */}
                    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">

                        {/* Eyebrow */}

                        <div className="mb-6 flex items-center gap-3">

                            <span className="h-px w-10 bg-purple-400/70" />

                            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
                                Heritage • Culture • Journey
                            </span>

                            <span className="h-px w-10 bg-purple-400/70" />

                        </div>

                        {/* Logo */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

                            <img
                                src="/heritage-junction-logo-black.png"
                                alt="Heritage Junction"
                                className="
                                    relative
                                    w-[280px]
                                    sm:w-[380px]
                                    md:w-[420px]
                                    lg:w-[500px]
                                    drop-shadow-2xl
                                "
                            />

                        </div>

                        {/* Tagline */}

                        <p className="mt-7 text-lg font-medium italic tracking-wide text-white/90 sm:text-xl">
                            “Where Culture Meets Journey”
                        </p>

                        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base">
                            A gateway to Uttar Pradesh’s timeless heritage,
                            curated for modern travelers.
                        </p>

                        {/* Divider */}

                        <div className="my-7 h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

                        {/* Buttons */}

                        <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row">

                            <Button
                                command="Learn More"
                                link="/services"
                            />

                            <Button
                                command="Book Now"
                                link="/packages"
                                variant="danger"
                            />

                        </div>

                    </div>

                </section>

            </div>

        </section>
    );
};

export default Hero;




// https://imgs.search.brave.com/fqDQ7PegrsS0btIe8JzO7w8ukJvFQVTPwJ_M__1-IQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/NDEzMDU2Ni9waG90/by9wYW5vcmFtaWMt/b2YtdnJpbmRhdmFu/LXV0dGFyLXByYWRl/c2gtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU83/UldhY1E3RE5VYzhJ/dzRrQWR2elRhMTdu/RlY2WF9rU3duaEF0/eDZXbnc9