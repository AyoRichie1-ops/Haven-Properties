import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false)

const links = [
{ name: 'Home', path: '/' },
{ name: 'About', path: '/about' },
{ name: 'Properties', path: '/properties' },
{ name: 'Services', path: '/services' },
{ name: 'Contact', path: '/contact' },
]

return (
<header className="fixed w-full z-50 border-b border-black/10 bg-[#f8f8f5]">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
<Link to="/" className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#626b4f] text-lg font-bold text-white">
H
</span>

      <span>
        <span className="block text-lg font-bold tracking-[0.18em]">
          HAVEN
        </span>
        <span className="block text-[9px] uppercase tracking-[0.3em] text-gray-500">
          Properties
        </span>
      </span>
    </Link>

    <div className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm transition-colors hover:text-[#626b4f] ${
              isActive
                ? 'font-extrabold text-[#626b4f]'
                : 'text-gray-600'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>

    <Link
      to="/properties"
      className="hidden items-center gap-2 rounded-full bg-[#626b4f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#4d553e] md:flex"
    >
      Explore Properties
      <ArrowUpRight size={16} />
    </Link>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg p-2 md:hidden cursor-pointer"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    >
      {menuOpen ? <X size={25} /> : <Menu size={25} />}
    </button>
  </nav>

  {menuOpen && (
    <div className="border-t border-black/10 px-6 py-4 md:hidden">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => setMenuOpen(false)}
          className="block border-b border-black/5 py-3 text-sm text-gray-700"
        >
          {link.name}
        </NavLink>
      ))}

      <Link
        to="/properties"
        onClick={() => setMenuOpen(false)}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#626b4f] px-5 py-3 text-sm text-white"
      >
        Explore Properties
        <ArrowUpRight size={16} />
      </Link>
    </div>
  )}
</header>

)
}