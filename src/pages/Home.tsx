import { Link } from 'react-router-dom'
import { FadeUp, FeatureCard, StatCard, CloudSVG, ImgPlaceholder, TestimonialCard, SectionLabel } from '../components/UI'

const features = [
  { icon: '[books]', title: 'Online Courses', desc: 'Engaging digital learning materials that children can explore at their own pace, reinforcing what they learn in class.', color: '#00C4CC' },
  { icon: '[game]', title: 'Best Simulation', desc: 'Hands-on simulation activities that build problem-solving skills through play-based exploration and discovery.', color: '#FFB800' },
  { icon: '[grad]', title: 'Great Teachers', desc: 'Our certified, loving educators are trained in early childhood development and dedicated to every child growth.', color: '#FF6B6B' },
  { icon: '[headphones]', title: 'Fast Support', desc: 'Parents can reach our team anytime -- we are committed to open communication and quick response times.', color: '#4ECDC4' },
]

const testimonials = [
  { quote: 'My daughter absolutely loves going to Little Stars every morning. The teachers are so warm and caring -- she has grown so much in just one term!', name: 'Amara Njoroge', child: 'Zuri, age 4', color: '#00C4CC' },
  { quote: 'The programs here are outstanding. My son is already reading simple words at age 3. We could not be happier with this school.', name: 'David Kimani', child: 'Leon, age 3', color: '#FFB800' },
  { quote: 'A truly safe and nurturing environment. The staff know every child by name and take their development very seriously.', name: 'Grace Odhiambo', child: 'Tia, age 5', color: '#FF6B6B' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="cloud-hero min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Decorative clouds */}
        <div className="absolute top-24 left-8 opacity-70 cloud-drift">
          <CloudShape size={120} />
        </div>
        <div className="absolute top-40 right-16 opacity-50 cloud-drift-r">
          <CloudShape size={90} />
        </div>
        <div className="absolute top-16 right-1/3 opacity-40 cloud-drift">
          <CloudShape size={70} />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-30 cloud-drift-r">
          <CloudShape size={100} />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-24 relative z-10">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] sparkle" />
              <span className="text-white font-bold text-sm uppercase tracking-widest">Welcome to Little Stars Academy</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-tight mb-6 drop-shadow-lg">
              Better Future<br/>
              <span className="text-[#FFB800]">For Your</span><br/>
              Kids
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-md">
              We create a joyful, safe, and nurturing environment where every child aged 1-6 can discover, explore, and flourish at their own pace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-sky bg-white !text-[#00C4CC] shadow-xl hover:shadow-2xl">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/programs" className="btn-outline">
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">▶</span>
                Explore Programs
              </Link>
            </div>

            {/* Age badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Ages 1-2', 'Ages 2-3', 'Ages 3-4', 'Ages 4-5', 'Ages 5-6'].map((age, i) => (
                <span key={age} className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30"
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  {age}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center">
            <div className="float relative">
              <div className="w-80 h-96 blob-1 overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <ImgPlaceholder className="w-full h-full" label="Hero child photo" accent="#ffffff" />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl float-delay">
                <div className="text-2xl mb-1">[star]</div>
                <div className="text-xs font-bold text-gray-700">Top Rated</div>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#FFB800] text-white rounded-2xl p-3 shadow-xl float">
                <div className="font-display text-2xl">500+</div>
                <div className="text-xs font-bold">Happy Kids</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom cloud wave */}
        <CloudSVG className="absolute bottom-0 left-0 right-0 w-full text-white" />
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel>Our Strengths</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">
              Learn About Our Work &<br />Cultural Activities
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 100}>
                <FeatureCard {...f} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative">
              <div className="w-full aspect-square max-w-md blob-2 overflow-hidden mx-auto" style={{ background: '#e0f7fa' }}>
                <ImgPlaceholder className="w-full h-full" label="Children learning photo" accent="#00C4CC" />
              </div>
              {/* Floating accent */}
              <div className="absolute top-8 -right-6 bg-[#FFB800] text-white rounded-2xl px-4 py-2 shadow-lg float font-bold text-sm">
                [grad] Since 2010
              </div>
              <div className="absolute -bottom-4 left-8 bg-white rounded-2xl p-4 shadow-xl float-delay">
                <div className="font-display text-3xl text-[#FF6B6B]">98%</div>
                <div className="text-xs text-gray-500 font-bold">Parent Satisfaction</div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <SectionLabel color="#FF6B6B">About Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A] mb-6">
              Kindergarten and Childhood Is Our Passion
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              At Little Stars Academy, we believe every child is born with extraordinary potential. Our experienced educators create a warm, stimulating environment where children aged 1-6 develop socially, emotionally, physically, and cognitively.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We combine structured learning with imaginative play, outdoor exploration, creative arts, and music -- giving each child the strongest possible foundation for life.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '✅', text: 'Certified Early Childhood Educators' },
                { icon: '✅', text: 'Safe & Stimulating Environment' },
                { icon: '✅', text: 'Low Child-to-Teacher Ratio' },
                { icon: '✅', text: 'Nutritious Daily Meals Provided' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2 text-sm text-gray-600 font-semibold">
                  <span className="text-[#00C4CC]">{icon}</span> {text}
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-sky">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="cloud-stats py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard number="2,150" label="Enrolled Learners" icon="" color="#00C4CC" />
            <StatCard number="3,200" label="Finished Sessions" icon="[book]" color="#FFB800" />
            <StatCard number="2,600" label="Online Instructors" icon="[woman]‍[school]" color="#FF6B6B" />
            <StatCard number="1,204" label="Satisfied Parents" icon="[family]" color="#4ECDC4" />
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#FFB800">Age Groups</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">Programs For Every Stage</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We offer tailored programmes for boys and girls from infancy through kindergarten.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { age: '1-2 yrs', label: 'Infant Care', color: '#00C4CC', icon: '[bottle]', desc: 'Gentle, nurturing care for our youngest learners with sensory play and early bonding activities.' },
              { age: '3-4 yrs', label: 'Pre-Nursery', color: '#FFB800', icon: '[art]', desc: 'Creative exploration through art, music, storytelling and structured play for boys and girls.' },
              { age: '5-6 yrs', label: 'Kindergarten', color: '#FF6B6B', icon: '✏', desc: 'Academic readiness -- phonics, early maths, science discovery and social skills for school entry.' },
            ].map((p, i) => (
              <FadeUp key={p.label} delay={i * 100}>
                <div className="card-hover rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImgPlaceholder className="h-52 w-full" label={`${p.label} photo`} accent={p.color} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${p.color}22`, color: p.color }}>
                        Ages {p.age}
                      </span>
                    </div>
                    <h3 className="font-display text-xl mb-2" style={{ color: p.color }}>{p.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <Link to="/programs" className="text-sm font-bold flex items-center gap-1" style={{ color: p.color }}>
                      Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center">
            <Link to="/programs" className="btn-sky">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#4ECDC4">Testimonials</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A]">What Parents Say</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 100}>
                <TestimonialCard {...t} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="bg-gradient-to-br from-[#00C4CC] to-[#00A8B0] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-8 text-6xl opacity-20 wiggle">⭐</div>
              <div className="absolute bottom-4 left-8 text-4xl opacity-20 float">[rainbow]</div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Ready to Join Our Family?</h2>
              <p className="text-white/80 text-lg mb-8">Limited spots available for 2026. Book a free school tour and see the magic for yourself.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/admissions" className="btn-sky bg-white !text-[#00C4CC] shadow-xl">
                  Apply Now -- It's Free
                </Link>
                <Link to="/contact" className="btn-outline">
                  Book a School Tour
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

function CloudShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="80" rx="90" ry="40" fill="white" fillOpacity="0.4"/>
      <circle cx="70" cy="65" r="35" fill="white" fillOpacity="0.4"/>
      <circle cx="115" cy="55" r="45" fill="white" fillOpacity="0.4"/>
      <circle cx="155" cy="70" r="28" fill="white" fillOpacity="0.4"/>
    </svg>
  )
}
