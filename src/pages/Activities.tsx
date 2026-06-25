import { PageHero, FadeUp, SectionLabel, ImgPlaceholder } from '../components/UI'
import { Link } from 'react-router-dom'

const activities = [
  { icon: '[art]', title: 'Arts & Crafts', color: '#FF6B6B', age: 'All Ages', desc: 'Painting, collage, clay modelling, and mixed media -- children express themselves freely and develop fine motor skills.', days: 'Daily' },
  { icon: '[music]', title: 'Music & Singing', color: '#00C4CC', age: 'All Ages', desc: 'Singing, rhythm instruments, and movement to music builds language, memory, and emotional expression.', days: 'Mon, Wed, Fri' },
  { icon: '⚽', title: 'Outdoor Sports', color: '#FFB800', age: '3-6 yrs', desc: 'Football, running games, obstacle courses and team play build coordination, fitness, and sportsmanship.', days: 'Tue, Thu, Sat' },
  { icon: '[book]', title: 'Storytelling & Drama', color: '#4ECDC4', age: 'All Ages', desc: 'Interactive storytelling and drama activities build vocabulary, listening skills, confidence, and creativity.', days: 'Daily' },
  { icon: '[lab]', title: 'Science Discovery', color: '#A78BFA', age: '4-6 yrs', desc: 'Simple experiments and hands-on science exploration that spark curiosity about the natural world.', days: 'Wed, Fri' },
  { icon: '[leaf]', title: 'Nature & Gardening', color: '#22C55E', age: 'All Ages', desc: 'Children grow vegetables, tend to plants and explore the natural environment, building responsibility and wonder.', days: 'Tue, Thu' },
  { icon: '[laptop]', title: 'Digital Learning', color: '#00C4CC', age: '4-6 yrs', desc: 'Age-appropriate tablet time with educational apps, coding games and creative tools to build digital literacy.', days: 'Mon, Wed' },
  { icon: '[cooking]', title: 'Cooking & Life Skills', color: '#FFB800', age: '3-6 yrs', desc: 'Simple cooking activities teach nutrition, following instructions, safety, and basic independence skills.', days: 'Every Friday' },
  { icon: '[yoga]', title: 'Mindfulness & Yoga', color: '#FF6B6B', age: 'All Ages', desc: 'Gentle breathing, movement and relaxation activities help children manage emotions and build focus.', days: 'Mon, Thu' },
]

const clubs = [
  { name: 'Little Chefs Club', icon: '[chef]', color: '#FFB800', age: '4-6 yrs', day: 'Fridays 3:30 PM' },
  { name: 'Star Readers Club', icon: '[books]', color: '#4ECDC4', age: '5-6 yrs', day: 'Wednesdays 3:30 PM' },
  { name: 'Mini Scientists', icon: '[lab]', color: '#A78BFA', age: '4-6 yrs', day: 'Thursdays 3:30 PM' },
  { name: 'Dance & Drama', icon: '[drama]', color: '#FF6B6B', age: 'All Ages', day: 'Tuesdays 3:30 PM' },
]

export default function Activities() {
  return (
    <>
      <PageHero title="Activities" subtitle="Learning Through Play" color="#4ECDC4" />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <SectionLabel color="#4ECDC4">Every Day is an Adventure</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A] mb-4">
              Activities That Inspire<br />& Develop
            </h2>
            <p className="text-gray-500 leading-relaxed">
              At Little Stars, learning happens through doing. Our rich activity programme covers creativity, physical development, science, technology, music, and mindfulness -- giving every child, boy or girl, the chance to discover what they love.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <FadeUp key={a.title} delay={i * 60}>
                <div className="card-hover bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImgPlaceholder className="h-44 w-full" label={`${a.title} photo`} accent={a.color} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{a.icon}</span>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${a.color}22`, color: a.color }}>Ages {a.age}</span>
                        <span className="text-xs text-gray-400 font-semibold"> {a.days}</span>
                      </div>
                    </div>
                    <h3 className="font-display text-xl mb-2" style={{ color: a.color }}>{a.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* After-School Clubs */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <SectionLabel color="#FFB800">Extra Curricular</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">After-School Clubs</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Optional enrichment clubs for children who want to dive deeper into their passions after school hours.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((c, i) => (
              <FadeUp key={c.name} delay={i * 80}>
                <div className="card-hover bg-white rounded-3xl p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-5xl mb-4">{c.icon}</div>
                  <h3 className="font-display text-lg mb-1" style={{ color: c.color }}>{c.name}</h3>
                  <p className="text-xs font-bold text-gray-400 mb-2">Ages {c.age}</p>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${c.color}22`, color: c.color }}>
                     {c.day}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <SectionLabel color="#FF6B6B">Sample Week</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">A Day at Little Stars</h2>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              {[
                { time: '7:00 - 8:00 AM', activity: 'Morning Welcome & Free Play', icon: '[sun]', color: '#FFB800' },
                { time: '8:00 - 8:30 AM', activity: 'Breakfast & Morning Circle', icon: '[bowl]', color: '#00C4CC' },
                { time: '8:30 - 10:00 AM', activity: 'Structured Learning (Literacy / Numeracy)', icon: '[books]', color: '#FF6B6B' },
                { time: '10:00 - 10:30 AM', activity: 'Snack Time & Rest', icon: '[apple]', color: '#4ECDC4' },
                { time: '10:30 - 12:00 PM', activity: 'Creative Activities (Art, Music, Drama)', icon: '[art]', color: '#A78BFA' },
                { time: '12:00 - 1:00 PM', activity: 'Lunch & Quiet Time', icon: '[plate]', color: '#FFB800' },
                { time: '1:00 - 2:30 PM', activity: 'Outdoor Play & Sports', icon: '⚽', color: '#22C55E' },
                { time: '2:30 - 3:30 PM', activity: 'Science / Life Skills / Digital Learning', icon: '[lab]', color: '#00C4CC' },
                { time: '3:30 - 5:30 PM', activity: 'After-School Care (Optional)', icon: '[moon]', color: '#FF6B6B' },
              ].map((row, i) => (
                <div key={row.time} className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8FFFE]'} border-b border-gray-50 last:border-0`}>
                  <span className="text-2xl flex-shrink-0">{row.icon}</span>
                  <span className="text-xs font-bold text-gray-400 w-32 flex-shrink-0">{row.time}</span>
                  <span className="text-sm font-semibold text-gray-700">{row.activity}</span>
                  <div className="ml-auto w-3 h-3 rounded-full flex-shrink-0" style={{ background: row.color }} />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F0FFFE]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-4xl text-[#1A3C4A] mb-4">Want to See Activities in Action?</h2>
            <p className="text-gray-500 mb-8">Book a school tour and watch your child explore our world first-hand.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-sky">Book a Tour</Link>
              <Link to="/gallery" className="btn-sky" style={{ background: '#4ECDC4' }}>View Our Gallery</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
