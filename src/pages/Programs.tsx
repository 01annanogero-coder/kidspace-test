import { Link } from 'react-router-dom'
import { PageHero, FadeUp, SectionLabel, ImgPlaceholder } from '../components/UI'

const programs = [
  {
    title: 'Infant Care',
    age: '1-2 years',
    gender: 'Boys & Girls',
    icon: '[bottle]',
    color: '#00C4CC',
    spots: 8,
    schedule: 'Mon - Fri, 7:00 AM - 5:30 PM',
    ratio: '1 teacher : 3 children',
    desc: 'A gentle, home-like setting for our youngest learners. Caregivers focus on sensory play, motor development, early language, and secure attachment. Daily routines are flexible and tailored to each infant.',
    highlights: ['Sensory play stations', 'Soft movement gym', 'Daily sleep schedules', 'Weaning & nutrition support', 'Parent daily reports', 'Monthly developmental check-ins'],
  },
  {
    title: 'Toddler Group',
    age: '2-3 years',
    gender: 'Boys & Girls',
    icon: '[bear]',
    color: '#FFB800',
    spots: 10,
    schedule: 'Mon - Fri, 7:00 AM - 5:30 PM',
    ratio: '1 teacher : 4 children',
    desc: 'An energetic, discovery-focused programme for toddlers beginning to assert their independence. Activities build vocabulary, social skills, and fine motor control through structured play and gentle guidance.',
    highlights: ['Language & storytelling circles', 'Sand & water play', 'Toilet training support', 'Music & movement', 'Outdoor exploration', 'Social play sessions'],
  },
  {
    title: 'Pre-Nursery',
    age: '3-4 years',
    gender: 'Boys & Girls',
    icon: '[art]',
    color: '#FF6B6B',
    spots: 12,
    schedule: 'Mon - Fri, 7:30 AM - 4:30 PM',
    ratio: '1 teacher : 6 children',
    desc: 'Creative learning through art, drama, science experiments, and imaginative play. Children develop confidence, curiosity, and early literacy foundations in a fun and stimulating classroom environment.',
    highlights: ['Art & craft studio', 'Simple science experiments', 'Drama & role play', 'Early phonics introduction', 'Nature walks', 'Group project activities'],
  },
  {
    title: 'Nursery',
    age: '4-5 years',
    gender: 'Boys & Girls',
    icon: '[book]',
    color: '#4ECDC4',
    spots: 15,
    schedule: 'Mon - Fri, 7:30 AM - 4:00 PM',
    ratio: '1 teacher : 8 children',
    desc: 'Structured learning that lays the groundwork for primary school. Children develop phonics, early maths, reading readiness, and emotional regulation while enjoying rich creative and physical activities.',
    highlights: ['Phonics & reading readiness', 'Number concepts & early maths', 'Emotional intelligence sessions', 'Computer & tablet time', 'Cooking & life skills', 'Show & tell presentations'],
  },
  {
    title: 'Kindergarten',
    age: '5-6 years',
    gender: 'Boys & Girls',
    icon: '✏',
    color: '#A78BFA',
    spots: 18,
    schedule: 'Mon - Fri, 7:30 AM - 3:30 PM',
    ratio: '1 teacher : 10 children',
    desc: 'Our flagship pre-primary programme prepares children fully for Year 1. With a rigorous yet joyful curriculum covering literacy, numeracy, science and social studies, children graduate ready and excited for school.',
    highlights: ['Full literacy & writing programme', 'Maths through real-world activities', 'Science discovery lab', 'Social studies & community', 'Second language introduction', 'End-of-year graduation ceremony'],
  },
  {
    title: 'After-School Care',
    age: '3-6 years',
    gender: 'Boys & Girls',
    icon: '[moon]',
    color: '#FFB800',
    spots: 20,
    schedule: 'Mon - Fri, 3:30 PM - 6:00 PM',
    ratio: '1 teacher : 10 children',
    desc: 'Safe, supervised and fun afternoon care for children already enrolled in our programmes or joining from nearby primary schools. Includes homework help, snacks, free play and enrichment clubs.',
    highlights: ['Homework & reading support', 'Nutritious afternoon snack', 'Free choice play', 'Art & craft clubs', 'Outdoor sports', 'Relaxation & quiet time'],
  },
]

export default function Programs() {
  return (
    <>
      <PageHero title="Our Programs" subtitle="Age-Based Learning" color="#FFB800" />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <SectionLabel color="#FFB800">Tailored For Every Stage</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A] mb-4">
              The Right Programme<br />At The Right Age
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every programme at Little Stars Academy is carefully designed around the developmental milestones of that specific age group -- for both boys and girls -- ensuring each child is challenged just enough to grow while always feeling supported and confident.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Program Cards */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {programs.map((p, i) => (
            <FadeUp key={p.title} delay={i * 60}>
              <div className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <ImgPlaceholder className="h-64 lg:h-full w-full min-h-64" label={`${p.title} photo`} accent={p.color} />
                </div>
                <div className="p-8 lg:p-10 bg-white">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: `${p.color}22`, color: p.color }}>
                      Ages {p.age}
                    </span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gray-100 text-gray-500">
                      {p.gender}
                    </span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-green-50 text-green-600">
                      {p.spots} spots available
                    </span>
                  </div>
                  <h3 className="font-display text-3xl mb-3" style={{ color: p.color }}>{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {p.highlights.map(h => (
                      <div key={h} className="flex items-start gap-2 text-xs text-gray-600 font-semibold">
                        <span style={{ color: p.color }}>✓</span> {h}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-semibold mb-6 border-t border-gray-100 pt-4">
                    <span>[clock] {p.schedule}</span>
                    <span>[woman]‍[school] {p.ratio}</span>
                  </div>

                  <Link to="/admissions" className="btn-sky text-sm" style={{ background: p.color }}>
                    Apply for {p.title}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F0FFFE]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-4xl text-[#1A3C4A] mb-4">Not Sure Which Programme?</h2>
            <p className="text-gray-500 mb-8">Book a free consultation and our team will help you find the perfect fit for your child\'s age, personality and learning style.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-sky">Book a Free Consultation</Link>
              <Link to="/admissions" className="btn-sky" style={{ background: '#FF6B6B' }}>Start Application</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
