import { Link } from "@inertiajs/react"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 p-4">

        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            <Link href={"/"}>Heritage Junction</Link>
          </h4>
          <p className="text-sm leading-relaxed">
            Preserving culture, connecting heritage, and building bridges to the future.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm mb-2">
            <span className="font-bold">Address:</span> 5/38 Vipul Khand, Gomti Nagar, Lucknow, Uttar Pradesh, India, 226010
          </p>
          <p className="text-sm mb-2">
            <span className="font-bold">Phone:</span> +91 79053 58890
          </p>
          <p className="text-sm">
            <span className="font-bold">Email:</span>{" "}
            <a className="hover:text-pink-500" href="mailto:info@heritagejunction.in">
              info@heritagejunction.in
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#about" className="hover:text-pink-500 transition">About Us</Link></li>
            <li><Link href="/packages" className="hover:text-pink-500 transition">Our Packages</Link></li>
            <li><Link href="/destinations" className="hover:text-pink-500 transition">Our Destinations</Link></li>
            <li><Link href="/#contact" className="hover:text-pink-500 transition">Contact Us</Link></li>
            <li><Link href="/admin/login" className="hover:text-pink-500 transition">Admin Login</Link></li>
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Explore Our Most visisted Packages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/packages/varanasi-spiritual-tour" className="hover:text-pink-500 transition">Varanasi Spiritual Tour</Link></li>
            <li><Link href="/packages/dudhwa-wildlife-safari" className="hover:text-pink-500 transition">Dudhwa National Park Tour</Link></li>
            <li><Link href="/packages/ayodhya-spiritual-tour" className="hover:text-pink-500 transition">Ayodhya Spiritual Tour</Link></li>
            <li><Link href="/packages/naimisharanya-tour" className="hover:text-pink-500 transition">Naimisharanya Tour</Link></li>
            <li><Link href="/packages/heritage-point-fatehpur-sikri-agra" className="hover:text-pink-500 transition">Fatehpur Sikri Tour</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faqs" className="hover:text-pink-500 transition">FAQs</Link></li>
            <li><Link href="/help" className="hover:text-pink-500 transition">Help Center</Link></li>
            <li><Link href="/cancellation-refund" className="hover:text-pink-500 transition">Cancellation & Refund Policy</Link></li>
            <li><Link href="/terms" className="hover:text-pink-500 transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-pink-500 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Follow Us</h4>
          <ul className="flex space-y-3 flex-col text-sm">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                X
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-10 text-center">
        <p className="text-sm">© 2025 Heritage Junction. All rights reserved.</p>
        <p className="text-sm mt-2">
          Website Powered by{" "}
          <span className="text-white">
            <a
              className="no-underline hover:text-pink-300"
              target="_blank"
              href="https://www.kryoteksoftwares.com/"
            >
              Kryotek Softwares Private Limited </a> <a href="https://github.com/devKartikeya" target="_blank" className="text-pink-500">@Kartikeya Mishra</a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer