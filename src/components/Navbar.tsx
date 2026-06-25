import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/activities', label: 'Activities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C4CC] to-[#00A8B0] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 8H21L16.5 12L18.5 18L12 14.5L5.5 18L7.5 12L3 8H9L12 2Z" fill="white"/>
            </svg>
          </div>
          <div>
            <span className="font-display text-xl text-[#00C4CC] leading-none block">Little Stars</span>
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Academy</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
                  pathname === to
                    ? 'bg-[#00C4CC] text-white shadow-md'
                    : 'text-gray-600 hover:bg-sky-50 hover:text-[#00C4CC]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/admissions"
          className="hidden lg:flex btn-sky text-sm py-2.5 px-5 shadow-md"
        >
          Enrol Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-sky-50"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-sky-100 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`block px-4 py-3 rounded-xl font-bold transition-all ${
                    pathname === to
                      ? 'bg-[#00C4CC] text-white'
                      : 'text-gray-600 hover:bg-sky-50'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/admissions" className="btn-sky w-full justify-center mt-2">
                Enrol Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
