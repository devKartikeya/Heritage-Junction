import { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react';
import Button from '../Button'

const Hero = () => {
  const slides = [
    {
      image: "https://i0.wp.com/heritagejunction.in/wp-content/uploads/2025/05/ram-lalla-4k-wallpaper-scaled-1.jpg?fit=1990%2C2560&ssl=1",
      title: "Ayodhya",
      link: "/ayodhya",
      description: "“The birthplace of Lord Rama, Ayodhya is revered as one of India’s holiest cities. Its ghats along the Sarayu River, magnificent temples, and spiritual atmosphere make it a center of devotion and storytelling. Pilgrims come from across the world to experience its timeless traditions and vibrant festivals.”"
    },
    {
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-city-1-hero?qlt=82&ts=1742179413209",
      title: "Agra",
      link: "/agra",
      description: "“Home to the iconic Taj Mahal, Agra is a jewel of Mughal architecture and history. Beyond the Taj, the city boasts the Agra Fort, Fatehpur Sikri, and bustling bazaars filled with handicrafts. Agra represents a blend of romance, grandeur, and cultural richness that continues to captivate travelers.”"
    },
    {
      image: "https://imgs.search.brave.com/uP2hw3YVoddC7BTbF4bKtaO3bKwgFBtSyUNGrJrapBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODYz/NjU1ODgyL3Bob3Rv/L3NhZGh1LWluZGlh/bi1ob2x5bWVuLXNp/dHRpbmctaW4tdGhl/LXRlbXBsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RnYx/bG43SXNvdDNrRTdQ/dEM1ekFxNnNXVXJ5/U2hlSmxhMjd5ZkNf/Wk1wQT0",
      title: "Varanasi",
      link: "/varanasi",
      description: "“Known as the spiritual capital of India, Varanasi is one of the world’s oldest living cities. Its ghats along the Ganges host mesmerizing evening aartis, while narrow lanes echo with chants and temple bells. Varanasi offers a profound journey into faith, philosophy, and centuries‑old traditions.”"
    },
    {
      image: "https://imgs.search.brave.com/QNez4BtNC2nAdRNiRv6Muyl3fMbqwhYqlFt-UhffBPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYWxl/aWRvc2NvcGUuaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDMvQ3VsdHVyYWwt/aGVyaXRhZ2Utb2Yt/VXR0YXItUHJhZGVz/aC1WYXJhbmFzaS5q/cGc",
      title: "Prayagraj",
      link: "/prayagraj",
      description: "“Famed for the sacred Sangam — the confluence of the Ganga, Yamuna, and mythical Saraswati — Prayagraj is a city of immense spiritual significance. It hosts the grand Kumbh Mela, drawing millions of devotees. The city blends spirituality with history, offering forts, temples, and cultural vibrancy.”"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZw3XIpJjtiXuDB8PllQ7HpBGKvKgQk6TEtCf5w07RA&s=10",
      title: "Kanpur",
      link: "/kanpur",
      description: "“Kanpur, once a major industrial hub, is known for its leather industry and textile heritage. The city also carries historical importance from the era of India’s independence struggle. Today, Kanpur balances its industrial identity with cultural landmarks, gardens, and a growing modern spirit.”"
    },
    {
      image: "https://imgs.search.brave.com/HiE63o60WNki3LlHZhYFfGhnGL5yzt1Avp9c7lmQaQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIz/NTgwOTkyL3Bob3Rv/L2t1bWJoLW1lbGEt/aGluZHUtZmVzdGl2/YWwuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPThoM0xScGVx/TmV5ek9xaUR0enVh/SVYyNDBNX3RJWDBF/ZEI1Nk1mYUFvMDg9",
      title: "Kumbh Mela",
      link: "/kumbh-mela",
      description: "“The Kumbh Mela, held in Prayagraj and other sacred sites, is the largest spiritual gathering on Earth. Millions of pilgrims, saints, and seekers come together to bathe in holy rivers, participate in rituals, and celebrate faith. It is a spectacle of devotion, unity, and timeless tradition.”"
    },
    {
      image: "https://imgs.search.brave.com/fqDQ7PegrsS0btIe8JzO7w8ukJvFQVTPwJ_M__1-IQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/NDEzMDU2Ni9waG90/by9wYW5vcmFtaWMt/b2YtdnJpbmRhdmFu/LXV0dGFyLXByYWRl/c2gtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU83/UldhY1E3RE5VYzhJ/dzRrQWR2elRhMTdu/RlY2WF9rU3duaEF0/eDZXbnc9",
      title: "Vrindavan",
      link: "/vrindavan",
      description: "“The Kumbh Mela, held in Prayagraj and other sacred sites, is the largest spiritual gathering on Earth. Millions of pilgrims, saints, and seekers come together to bathe in holy rivers, participate in rituals, and celebrate faith. It is a spectacle of devotion, unity, and timeless tradition.”"
    },
    {
      image: "https://imgs.search.brave.com/tPsLanPwVcYIs1EDvyv1LYaFrHloEdbpoIpEvovo7Ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvYWRk/aXRpb25hbHR0ZGlt/YWdlcy9tbXQvYWN0/aXZpdGllcy90X3Ry/cC9tX1NocmklMjBL/YXNoaSUyMFZpc2h3/YW5hdGglMjBUZW1w/bGUlMjBWYXJhbmFz/aV8zX3BfNzI4XzY0/MC5qcGc_aW09UmVz/aXplPSgxMjAwLDU3/MCk",
      title: "Mathura",
      link: "/mathura",
      description: "“Mathura, the birthplace of Krishna, is steeped in mythology and celebration. The city is famous for its Holi festivities, temples, and sacred ghats. Mathura offers a lively blend of spirituality, culture, and joy, making it a heartland of devotion and festivity in Uttar Pradesh.”"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnJRNO6y2gmKfOMjXSb_B24dTJwe-0phJ_HxEDLyiIg&s=10",
      title: "Jhansi",
      link: "/jhansi",
      description: "“Jhansi is remembered for its valiant queen, Rani Lakshmibai, who became a symbol of resistance during India’s First War of Independence. The city’s fort stands as a proud reminder of its heroic past. Jhansi combines history, courage, and heritage, offering a glimpse into India’s struggle for freedom.”"
    },
    {
      image: "https://imgs.search.brave.com/TMAikDgmXHR2tqfV8pu7ICjG_rvkTlt6Zd-ghJ07gmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/MjExMzc4OC9waG90/by9saXR0bGUtZ2ly/bC1vYnNlcnZpbmct/aG93LXNhZGh1LWRv/aW5nLWhpcy1tYWtl/dXAuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWxMWXVIUkJZ/SUJkN0xLcWpZaUhE/RW9YTm1MblltMHhI/MktYN2xMbzl2LVU9",
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
              <div className='flex flex-col gap-2'>
                <h3 className="text-3xl md:text-6xl font-bold md:mb-2 mb-1">{slide.title}</h3>
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
          <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold">
            Her<span className="text-purple-400">i</span>tage
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold">Junction</h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl italic max-w-md">
            “Where Culture Meets Journey”
          </p>
          <p className="mt-2 text-sm md:text-lg lg:text-xl italic font-semibold max-w-md">
            A gateway to Uttar Pradesh’s timeless heritage, curated for modern travelers.
          </p>

          <div className="mt-6 flex gap-5">
            <Button command="Learn More" link="/services" />
            <Button command="Book Now" link="/book" variant='secondary' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero