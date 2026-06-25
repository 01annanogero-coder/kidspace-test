import { Link } from 'react-router-dom'
import { PageHero, FadeUp, SectionLabel, ImgPlaceholder, TestimonialCard } from '../components/UI'

const team = [
  { name: 'Mrs. Sarah Mwangi', role: 'Head Teacher & Founder', age: 'All Ages', color: '#00C4CC' },
  { name: 'Ms. Linda Otieno', role: 'Infant & Toddler Lead', age: '1-3 yrs', color: '#FFB800' },
  { name: 'Mr. James Kariuki', role: 'Pre-Nursery Educator', age: '3-4 yrs', color: '#FF6B6B' },
  { name: 'Ms. Faith Wanjiku', role: 'Kindergarten Lead', age: '5-6 yrs', color: '#4ECDC4' },
  { name: 'Ms. Brenda Achieng', role: 'Music & Arts Teacher', age: 'All Ages', color: '#A78BFA' },
  { name: 'Mr. Peter Omondi', role: 'PE & Outdoor Activity', age: 'All Ages', color: '#FFB800' },
]

const values = [
  { icon: '[heart]', title: 'Nurturing Care', desc: 'Every child is treated with warmth and individual attention.' },
  { icon: '[art]', title: 'Creative Learning', desc: 'Play-based education that sparks imagination and curiosity.' },
  { icon: '[shield]', title: 'Safety First', desc: 'Secure premises, trained staff and strict safeguarding policies.' },
  { icon: '[sprout]', title: 'Holistic Growth', desc: 'We develop the whole child -- mind, body, and character.' },
  { icon: '[hands]', title: 'Family Partnership', desc: 'Open communication with parents every step of the way.' },
  { icon: '[globe]', title: 'Cultural Diversity', desc: 'We celebrate every background, language, and tradition.' },
]

export default function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="Our Story" color="#00C4CC" />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                <ImgPlaceholder className="w-full h-full" label="School building / classroom photo" accent="#00C4CC" />
              </div>
              <div className="absolute top-6 -right-6 bg-[#FFB800] text-white rounded-2xl p-4 shadow-xl float">
                <div className="font-display text-3xl">15+</div>
                <div className="text-xs font-bold">Years of Excellence</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 float-delay">
                <div className="font-display text-2xl text-[#FF6B6B]">500+</div>
                <div className="text-xs text-gray-500 font-semibold">Happy Graduates</div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A] mb-6">
              A Place Where Every Child Shines
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Founded in 2010, Little Stars Academy has been Nairobi's most trusted early childhood centre for over 15 years. Our philosophy is simple: children learn best when they feel loved, safe, and excited.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              We welcome boys and girls from 1 to 6 years old into a carefully designed environment that balances structured learning with creative freedom. Every room, every activity, and every routine has been thoughtfully crafted with your child development in mind.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our team of certified early childhood educators bring passion, expertise, and boundless energy to work every day -- because we know that the first six years shape a lifetime.
            </p>
            <Link to="/admissions" className="btn-sky">
              Start Your Journey With Us
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#FFB800">Our Values</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">What We Stand For</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 80}>
                <div className="card-hover bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-display text-xl text-[#1A3C4A] mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#FF6B6B">Our Educators</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">Meet Our Amazing Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Every teacher at Little Stars is certified, DBS-checked, and genuinely passionate about early childhood development.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <FadeUp key={t.name} delay={i * 80}>
                <div className="card-hover bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm text-center">
                  <ImgPlaceholder className="h-56 w-full" label={`${t.name} photo`} accent={t.color} />
                  <div className="p-5">
                    <h3 className="font-display text-lg text-[#1A3C4A]">{t.name}</h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: t.color }}>{t.role}</p>
                    <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: `${t.color}22`, color: t.color }}>
                      {t.age}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#4ECDC4">Parent Voices</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">Our Families Love Us</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'The teachers know every child individually. My son gets personal attention that has made a huge difference.', name: 'Kevin Muturi', child: 'Sam, age 4', color: '#00C4CC' },
              { quote: 'I was nervous leaving my daughter for the first time. Little Stars made both of us feel completely at home.', name: 'Jane Wanjiru', child: 'Mia, age 2', color: '#FFB800' },
              { quote: 'Outstanding curriculum. My child is reading, counting, and -- most importantly -- genuinely happy every single day.', name: 'Paul Ochieng', child: 'Kai, age 5', color: '#FF6B6B' },
            ].map((t, i) => (
              <FadeUp key={t.name} delay={i * 100}>
                <TestimonialCard {...t} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
