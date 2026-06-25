import { useState } from 'react'
import { PageHero, FadeUp, SectionLabel, ImgPlaceholder } from '../components/UI'

const steps = [
  { num: '01', title: 'Submit Application', desc: 'Fill in the online application form or collect a paper form from our front desk. No fees at this stage.', icon: '[form]', color: '#00C4CC' },
  { num: '02', title: 'School Tour', desc: 'We invite your family for a personal tour of our facilities. Meet the teachers and let your child explore the space.', icon: '[school]', color: '#FFB800' },
  { num: '03', title: 'Assessment Visit', desc: 'A relaxed, play-based session where our educators observe your child\'s current development -- no preparation needed.', icon: '[puzzle]', color: '#FF6B6B' },
  { num: '04', title: 'Offer & Enrolment', desc: 'Receive your offer letter, pay the registration fee, and complete the final enrolment documents.', icon: '[party]', color: '#4ECDC4' },
]

const fees = [
  { program: 'Infant Care (1-2 yrs)', monthly: 'KES 18,000', termly: 'KES 52,000', annual: 'KES 195,000', color: '#00C4CC' },
  { program: 'Toddler Group (2-3 yrs)', monthly: 'KES 15,000', termly: 'KES 43,000', annual: 'KES 162,000', color: '#FFB800' },
  { program: 'Pre-Nursery (3-4 yrs)', monthly: 'KES 13,000', termly: 'KES 37,000', annual: 'KES 138,000', color: '#FF6B6B' },
  { program: 'Nursery (4-5 yrs)', monthly: 'KES 12,000', termly: 'KES 34,000', annual: 'KES 126,000', color: '#4ECDC4' },
  { program: 'Kindergarten (5-6 yrs)', monthly: 'KES 11,000', termly: 'KES 31,000', annual: 'KES 114,000', color: '#A78BFA' },
  { program: 'After-School Care', monthly: 'KES 5,000', termly: 'KES 14,000', annual: 'KES 52,000', color: '#FFB800' },
]

export default function Admissions() {
  const [form, setForm] = useState({
    parentName: '', email: '', phone: '',
    childName: '', childDob: '', childGender: '',
    program: '', startDate: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title="Admissions" subtitle="Join Our Family" color="#FF6B6B" />

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#FF6B6B">How It Works</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">Simple 4-Step Enrolment</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.num} delay={i * 100}>
                <div className="card-hover bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-display text-5xl font-bold opacity-10" style={{ color: s.color }}>
                    {s.num}
                  </div>
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-display text-xl mb-3" style={{ color: s.color }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <SectionLabel color="#4ECDC4">Transparent Pricing</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">School Fees Structure</h2>
            <p className="text-gray-500 mt-3">All fees include meals, learning materials, and standard activities. Sibling discounts available.</p>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="grid grid-cols-4 bg-[#1A3C4A] text-white text-xs font-bold uppercase tracking-widest px-6 py-4">
                <span>Programme</span>
                <span className="text-center">Monthly</span>
                <span className="text-center">Per Term</span>
                <span className="text-center">Annual</span>
              </div>
              {fees.map((f, i) => (
                <div key={f.program} className={`grid grid-cols-4 items-center px-6 py-4 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFFFE]'}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: f.color }} />
                    <span className="font-semibold text-sm text-gray-700">{f.program}</span>
                  </div>
                  <span className="text-center font-bold text-sm" style={{ color: f.color }}>{f.monthly}</span>
                  <span className="text-center text-sm text-gray-600 font-semibold">{f.termly}</span>
                  <span className="text-center text-sm text-gray-600 font-semibold">{f.annual}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">* One-time registration fee: KES 5,000. 10% sibling discount applicable. Fees reviewed annually.</p>
          </FadeUp>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <SectionLabel color="#00C4CC">Apply Now</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">Start Your Application</h2>
            <p className="text-gray-500 mt-3">Complete the form below and we'll be in touch within 2 business days.</p>
          </FadeUp>

          {submitted ? (
            <FadeUp>
              <div className="rounded-3xl bg-[#F0FFFE] border border-[#00C4CC]/20 p-12 text-center">
                <div className="text-6xl mb-4">[party]</div>
                <h3 className="font-display text-3xl text-[#1A3C4A] mb-3">Application Received!</h3>
                <p className="text-gray-500">Thank you for applying to Little Stars Academy. Our admissions team will contact you within 2 business days to arrange a school tour.</p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={100}>
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
                {/* Parent info */}
                <div>
                  <h3 className="font-display text-xl text-[#00C4CC] mb-4">Parent / Guardian Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'parentName', label: 'Full Name', type: 'text', placeholder: 'e.g. Jane Njoroge' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+254 700 000 000' },
                    ].map(f => (
                      <div key={f.name} className={f.name === 'parentName' ? 'md:col-span-2' : ''}>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Child info */}
                <div>
                  <h3 className="font-display text-xl text-[#FFB800] mb-4">Child's Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Child's Full Name</label>
                      <input type="text" name="childName" value={form.childName} onChange={handleChange} placeholder="e.g. Zuri Njoroge" required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Date of Birth</label>
                      <input type="date" name="childDob" value={form.childDob} onChange={handleChange} required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Gender</label>
                      <select name="childGender" value={form.childGender} onChange={handleChange} required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 transition bg-white">
                        <option value="">Select gender</option>
                        <option value="girl">Girl</option>
                        <option value="boy">Boy</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Programme */}
                <div>
                  <h3 className="font-display text-xl text-[#FF6B6B] mb-4">Programme Preference</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Preferred Programme</label>
                      <select name="program" value={form.program} onChange={handleChange} required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B6B] transition bg-white">
                        <option value="">Select programme</option>
                        <option value="infant">Infant Care (1-2 yrs)</option>
                        <option value="toddler">Toddler Group (2-3 yrs)</option>
                        <option value="pre-nursery">Pre-Nursery (3-4 yrs)</option>
                        <option value="nursery">Nursery (4-5 yrs)</option>
                        <option value="kindergarten">Kindergarten (5-6 yrs)</option>
                        <option value="after-school">After-School Care</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Preferred Start Date</label>
                      <input type="month" name="startDate" value={form.startDate} onChange={handleChange} required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B6B] transition" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Additional Notes (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any special needs, questions, or information we should know..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition resize-none" />
                </div>

                <button type="submit" className="btn-sky w-full justify-center py-4 text-base">
                  Submit Application
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            </FadeUp>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <SectionLabel color="#A78BFA">FAQ</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">Common Questions</h2>
          </FadeUp>
          <div className="space-y-4">
            {[
              { q: 'What is the minimum age for enrolment?', a: 'We accept children from 1 year old into our Infant Care programme, provided they are healthy and ready for group care.' },
              { q: 'Do you accept both boys and girls?', a: 'Absolutely. Little Stars Academy is fully co-educational. All our programmes welcome boys and girls equally.' },
              { q: 'What documents do I need to apply?', a: 'You will need your child\'s birth certificate, immunisation card, passport photo, and the completed application form.' },
              { q: 'Is there a waiting list?', a: 'Some programmes fill up quickly, especially Infant Care. We recommend applying at least one term in advance to secure a spot.' },
              { q: 'Are meals included in the fees?', a: 'Yes. All fees include a healthy breakfast, mid-morning snack, and lunch. We cater for dietary requirements upon request.' },
              { q: 'Can I visit before applying?', a: 'Yes -- we strongly encourage it! Contact us to book a free school tour with no obligation to apply.' },
            ].map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 60}>
                <details className="bg-white rounded-2xl border border-gray-100 shadow-sm group">
                  <summary className="px-6 py-4 font-bold text-[#1A3C4A] cursor-pointer flex items-center justify-between text-sm list-none">
                    {faq.q}
                    <svg className="w-4 h-4 text-[#00C4CC] flex-shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
