import { useState } from 'react'
import { PageHero, FadeUp, SectionLabel } from '../components/UI'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in Touch" color="#22C55E" />

      {/* Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#22C55E">We'd Love to Hear From You</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">Reach Out Any Time</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '[pin]', title: 'Our Location', lines: ['123 Sunshine Lane', 'Lavington, Nairobi', 'Kenya'], color: '#00C4CC' },
              { icon: '[phone]', title: 'Call Us', lines: ['+254 700 123 456', '+254 733 456 789', 'Mon-Fri 7AM-6PM'], color: '#FFB800' },
              { icon: '✉', title: 'Email Us', lines: ['hello@littlestars.ac.ke', 'admissions@littlestars.ac.ke', 'We reply within 24hrs'], color: '#FF6B6B' },
              { icon: '[clock]', title: 'School Hours', lines: ['Mon-Fri: 7:00 AM - 5:30 PM', 'Saturday: 8:00 AM - 12:00 PM', 'Sunday: Closed'], color: '#4ECDC4' },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={i * 80}>
                <div className="card-hover bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${card.color}22` }}>
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="font-display text-lg mb-3" style={{ color: card.color }}>{card.title}</h3>
                  {card.lines.map(l => (
                    <p key={l} className="text-gray-500 text-sm">{l}</p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <FadeUp>
              {sent ? (
                <div className="rounded-3xl bg-[#F0FFFE] border border-[#00C4CC]/20 p-12 text-center">
                  <div className="text-6xl mb-4">[letter]</div>
                  <h3 className="font-display text-3xl text-[#1A3C4A] mb-3">Message Sent!</h3>
                  <p className="text-gray-500">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                  <h3 className="font-display text-2xl text-[#1A3C4A] mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Njoroge' },
                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+254 700 000 000' },
                      ].map(f => (
                        <div key={f.name} className={f.name === 'name' ? '' : ''}>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">{f.label}</label>
                          <input type={f.type} name={f.name} value={form[f.name as keyof typeof form]} onChange={handleChange}
                            placeholder={f.placeholder} required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition" />
                        </div>
                      ))}
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Subject</label>
                        <select name="subject" value={form.subject} onChange={handleChange} required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C4CC] transition bg-white">
                          <option value="">Select a topic</option>
                          <option value="admissions">Admissions Enquiry</option>
                          <option value="tour">Book a School Tour</option>
                          <option value="fees">Fees & Payments</option>
                          <option value="programs">Programme Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Your Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} required
                        placeholder="How can we help you?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition resize-none" />
                    </div>
                    <button type="submit" className="btn-sky w-full justify-center py-4">
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </form>
                </div>
              )}
            </FadeUp>

            {/* Map placeholder + socials */}
            <FadeUp delay={150}>
              <div className="space-y-6">
                {/* Map */}
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="h-64 bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] flex flex-col items-center justify-center gap-3 relative">
                    <div className="text-5xl">[pin]</div>
                    <p className="font-bold text-[#00C4CC]">123 Sunshine Lane, Lavington</p>
                    <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sky text-sm py-2.5"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a href="https://wa.me/254700123456" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 hover:shadow-md transition-shadow card-hover">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-700">Chat on WhatsApp</p>
                    <p className="text-green-600 text-sm">Quickest way to reach us -- we reply fast!</p>
                  </div>
                  <svg className="ml-auto text-green-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                {/* Social links */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="font-bold text-[#1A3C4A] mb-4 text-sm">Follow Us for Daily Moments</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Facebook', handle: '@LittleStarsAcademy', color: '#1877F2', icon: 'f' },
                      { name: 'Instagram', handle: '@littlestars_ke', color: '#E4405F', icon: '' },
                      { name: 'TikTok', handle: '@littlestarsacademy', color: '#000000', icon: '[music]' },
                      { name: 'YouTube', handle: 'Little Stars Academy', color: '#FF0000', icon: '▶' },
                    ].map(s => (
                      <a key={s.name} href="#" className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: s.color }}>
                          {s.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-700">{s.name}</p>
                          <p className="text-xs text-gray-400">{s.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
