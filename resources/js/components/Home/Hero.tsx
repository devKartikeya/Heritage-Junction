import { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react';
import Button from '../Button'

const Hero = () => {
  const slides = [
    {
      image: "/ram-lalla-4k-wallpaper-scaled-1.webp",
      title: "Ayodhya",
      link: "/ayodhya",
      description: "“The birthplace of Lord Rama, Ayodhya is revered as one of India’s holiest cities. Its ghats along the Sarayu River, magnificent temples, and spiritual atmosphere make it a center of devotion and storytelling. Pilgrims come from across the world to experience its timeless traditions and vibrant festivals.”"
    },
    {
      image: "/taj-mahal-agra-uttar-pradesh-city-1-hero.jpg",
      title: "Agra",
      link: "/agra",
      description: "“Home to the iconic Taj Mahal, Agra is a jewel of Mughal architecture and history. Beyond the Taj, the city boasts the Agra Fort, Fatehpur Sikri, and bustling bazaars filled with handicrafts. Agra represents a blend of romance, grandeur, and cultural richness that continues to captivate travelers.”"
    },
    {
      image: "/sadhu-indian-holymen-sitting-in-the-temple.webp",
      title: "Varanasi",
      link: "/varanasi",
      description: "“Known as the spiritual capital of India, Varanasi is one of the world’s oldest living cities. Its ghats along the Ganges host mesmerizing evening aartis, while narrow lanes echo with chants and temple bells. Varanasi offers a profound journey into faith, philosophy, and centuries‑old traditions.”"
    },
    {
      image: "/Cultural-heritage-of-Uttar-Pradesh-Varanasi.webp",
      title: "Prayagraj",
      link: "/prayagraj",
      description: "“Famed for the sacred Sangam — the confluence of the Ganga, Yamuna, and mythical Saraswati — Prayagraj is a city of immense spiritual significance. It hosts the grand Kumbh Mela, drawing millions of devotees. The city blends spirituality with history, offering forts, temples, and cultural vibrancy.”"
    },
    {
      image: "/panoramic-of-vrindavan-uttar-pradesh-india.webp",
      title: "Vrindavan",
      link: "/vrindavan",
      description: "“The Kumbh Mela, held in Prayagraj and other sacred sites, is the largest spiritual gathering on Earth. Millions of pilgrims, saints, and seekers come together to bathe in holy rivers, participate in rituals, and celebrate faith. It is a spectacle of devotion, unity, and timeless tradition.”"
    },
    {
      image: "/m_Shri Kashi Vishwanath Temple Varanasi_3_p_728_640.webp",
      title: "Mathura",
      link: "/mathura",
      description: "“Mathura, the birthplace of Krishna, is steeped in mythology and celebration. The city is famous for its Holi festivities, temples, and sacred ghats. Mathura offers a lively blend of spirituality, culture, and joy, making it a heartland of devotion and festivity in Uttar Pradesh.”"
    },
    {
      image: "/images.jpg",
      title: "Jhansi",
      link: "/jhansi",
      description: "“Jhansi is remembered for its valiant queen, Rani Lakshmibai, who became a symbol of resistance during India’s First War of Independence. The city’s fort stands as a proud reminder of its heroic past. Jhansi combines history, courage, and heritage, offering a glimpse into India’s struggle for freedom.”"
    },
    {
      image: "/little-girl-observing-how-sadhu-doing-his-makeup.webp",
      title: "Lucknow",
      link: "/lucknow",
      description: "“Lucknow, the city of Nawabs, is renowned for its tehzeeb (etiquette), Awadhi cuisine, and Indo‑Islamic architecture. From the Bara Imambara to bustling Chowk markets, Lucknow exudes charm and sophistication. It is a city where culture, hospitality, and history come together beautifully.”"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // auto change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-white relative overflow-hidden flex flex-col md:flex-row">
      {/* Left Image Section with hover overlay */}
      <section className="relative w-full md:w-1/2 h-64 md:h-[530px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out group`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateX(${index === currentIndex ? '0%' : index < currentIndex ? '-100%' : '100%'})`
            }}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white px-6">
              <div className='flex flex-col gap-2 p-5 bg-gray-50/20 rounded-xl backdrop-blur-md'>
                <h3 className="text-3xl md:text-6xl font-semibold md:mb-2 mb-1">{slide.title}</h3>
                <p className="md:text-md text-sm max-w-md md:my-2 my-1">{slide.description}</p>
              </div>
              <button className='bg-red-500 cursor-pointer font-semibold md:p-3 p-1 rounded-xl md:m-4 m-1'>    <Link href={`/destinations${slide.link}`}>Read More about {slide.title}</Link></button>
            </div>
          </div>

        ))}
      </section>

      {/* Right Text Section with background + overlay */}
      <section
        className="relative w-full md:w-1/2 h-auto md:h-[530px] flex flex-col justify-center items-center px-6 py-10 md:px-8 text-white"
        style={{
          backgroundImage: `url(https://imgs.search.brave.com/fqDQ7PegrsS0btIe8JzO7w8ukJvFQVTPwJ_M__1-IQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/NDEzMDU2Ni9waG90/by9wYW5vcmFtaWMt/b2YtdnJpbmRhdmFu/LXV0dGFyLXByYWRl/c2gtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU83/UldhY1E3RE5VYzhJ/dzRrQWR2elRhMTdu/RlY2WF9rU3duaEF0/eDZXbnc9)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
            Her<span className="text-purple-400">i</span>tage
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">Junction</h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl italic max-w-md">
            “Where Culture Meets Journey”
          </p>
          <p className="mt-2 text-sm md:text-lg lg:text-xl italic font-semibold max-w-md">
            A gateway to Uttar Pradesh’s timeless heritage, curated for modern travelers.
          </p>

          <div className="mt-6 flex gap-10">
            <Button command="Learn More" link="/services" />
            <Button command="Book Now" link="/packages" variant='secondary' />
            <Button command="My Dashboard" link="/dashboard" variant='danger' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero