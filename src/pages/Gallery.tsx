import { useState } from 'react'
import { PageHero, FadeUp, SectionLabel, ImgPlaceholder } from '../components/UI'

const categories = ['All', 'Classrooms', 'Outdoor Play', 'Arts & Crafts', 'Music', 'Events', 'Meals']

const items = [
  { label: 'Morning circle time', cat: 'Classrooms', color: '#00C4CC', span: 'col-span-2' },
  { label: 'Art class painting', cat: 'Arts & Crafts', color: '#FF6B6B', span: '' },
  { label: 'Outdoor playground', cat: 'Outdoor Play', color: '#FFB800', span: '' },
  { label: 'Music session', cat: 'Music', color: '#4ECDC4', span: '' },
  { label: 'Reading corner', cat: 'Classrooms', color: '#A78BFA', span: '' },
  { label: 'End of year concert', cat: 'Events', color: '#FF6B6B', span: 'col-span-2' },
  { label: 'Lunch time', cat: 'Meals', color: '#FFB800', span: '' },
  { label: 'Science experiment', cat: 'Classrooms', color: '#00C4CC', span: '' },
  { label: 'Football on the field', cat: 'Outdoor Play', color: '#22C55E', span: '' },
  { label: 'Clay modelling', cat: 'Arts & Crafts', color: '#FF6B6B', span: '' },
  { label: 'Graduation ceremony', cat: 'Events', color: '#A78BFA', span: '' },
  { label: 'Storytelling drama', cat: 'Classrooms', color: '#4ECDC4', span: 'col-span-2' },
  { label: 'Snack time', cat: 'Meals', color: '#FFB800', span: '' },
  { label: 'Drum circle', cat: 'Music', color: '#00C4CC', span: '' },
  { label: 'Nature walk', cat: 'Outdoor Play', color: '#22C55E', span: '' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
    <>
      <PageHero title="Gallery" subtitle="Moments & Memories" color="#A78BFA" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <SectionLabel color="#A78BFA">Our World in Pictures</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A3C4A] mb-4">Every Day is a Memory</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Peek inside Little Stars Academy and see where the magic happens -- from cosy classrooms to sunny playgrounds and everything in between.</p>
          </FadeUp>

          {/* Filter tabs */}
          <FadeUp delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                    active === cat
                      ? 'bg-[#A78BFA] text-white shadow-md'
                      : 'bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-[#A78BFA]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <FadeUp
                key={`${item.label}-${i}`}
                delay={i * 50}
                className={item.span || ''}
              >
                <div className="card-hover rounded-2xl overflow-hidden relative group cursor-pointer">
                  <ImgPlaceholder
                    className={`w-full ${item.span ? 'h-56' : 'h-48'}`}
                    label={item.label}
                    accent={item.color}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-bold">{item.label}</span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">[camera]</div>
              <p className="font-bold">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video section */}
      <section className="py-20 bg-[#F0FFFE]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <SectionLabel color="#00C4CC">Video Tour</SectionLabel>
            <h2 className="font-display text-4xl text-[#1A3C4A]">See Our School in Action</h2>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-3xl overflow-hidden relative aspect-video shadow-2xl">
              <ImgPlaceholder className="w-full h-full" label="School tour video thumbnail" accent="#00C4CC" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#00C4CC">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full">
                [video] Virtual School Tour -- 3:45 mins
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
