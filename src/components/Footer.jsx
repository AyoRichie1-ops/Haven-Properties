import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Properties', path: '/properties' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#252820] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#626b4f] text-xl font-bold">
              H
            </span>

            <span>
              <span className="block text-lg font-bold tracking-[0.18em]">
                HAVEN
              </span>

              <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Properties
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
            Helping you find the right space to live, grow, and build
            your future.
          </p>

          <Link
            to="/properties"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#c7cfb8] transition hover:text-white"
          >
            Explore Properties
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em]">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em]">
            Get In Touch
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-[#c7cfb8]"
              />

              <p className="text-sm leading-6 text-gray-400">
                Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone
                size={18}
                className="mt-1 shrink-0 text-[#c7cfb8]"
              />

              <p className="text-sm text-gray-400">
                +234 800 000 0000
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail
                size={18}
                className="mt-1 shrink-0 text-[#c7cfb8]"
              />

              <p className="break-all text-sm text-gray-400">
                hello@havenproperties.com
              </p>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
            Find Your Haven
          </h3>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Have a property in mind? Let us help you take the next step.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#626b4f] px-5 py-3 text-sm transition hover:bg-[#778263]"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:px-10">

          <p>
            © {new Date().getFullYear()} HAVEN Properties.
            All rights reserved.
          </p>

          <p>Designed with care.</p>

        </div>
      </div>

    </footer>
  )
}