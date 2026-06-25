import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1A3C4A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00C4CC] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 8H21L16.5 12L18.5 18L12 14.5L5.5 18L7.5 12L3 8H9L12 2Z" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-lg text-[#00C4CC] block leading-none">Little Stars</span>
                <span className="text-xs text-gray-400 tracking-widest uppercase">Academy</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A nurturing home away from home for children aged 1-6. We spark curiosity, creativity, and confidence every single day.
            </p>
            <div className="flex gap-3 mt-5">
              {['facebook', 'instagram', 'twitter', 'youtube'].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00C4CC] transition-colors flex items-center justify-center" aria-label={s}>
                  <div className="w-4 h-4 bg-white/60 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-[#00C4CC] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Our Programs' },
                { to: '/activities', label: 'Activities' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/admissions', label: 'Admissions' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-[#00C4CC] transition-colors text-sm flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-[#00C4CC] text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {['Infant Care (1-2 yrs)', 'Toddler Group (2-3 yrs)', 'Pre-Nursery (3-4 yrs)', 'Nursery (4-5 yrs)', 'Kindergarten (5-6 yrs)', 'After-School Care'].map(p => (
                <li key={p}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFB800] flex-shrink-0" />
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[#00C4CC] text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text: '123 Sunshine Lane, Nairobi, Kenya' },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+254 700 123 456' },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'hello@littlestars.ac.ke' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-[#00C4CC] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={icon}/></svg>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-5 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1 font-bold uppercase tracking-wide">School Hours</p>
              <p className="text-sm text-white">Mon - Fri: 7:00 AM - 5:30 PM</p>
              <p className="text-sm text-gray-400">Sat: 8:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Little Stars Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00C4CC] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00C4CC] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
