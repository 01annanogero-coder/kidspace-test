import { useEffect, useRef } from 'react'

/* Image map - real Unsplash photos */
const IMAGES: Record<string, string> = {
  'Hero child photo': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format&fit=crop',
  'Children learning photo': 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80&auto=format&fit=crop',
  'Infant Care photo': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80&auto=format&fit=crop',
  'Pre-Nursery photo': 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=600&q=80&auto=format&fit=crop',
  'Kindergarten photo': 'https://images.unsplash.com/photo-1508781399904-07f8ea08e1a7?w=600&q=80&auto=format&fit=crop',
  'Activities photo': 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80&auto=format&fit=crop',
  'default': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop',
}

export function PageHero({ title, subtitle, color = '#00C4CC' }: { title: string; subtitle: string; color?: string }) {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
      <CloudSVG className="absolute bottom-0 left-0 right-0 w-full text-white" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-8">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-4">
          <span className="text-white text-sm font-bold uppercase tracking-widest">{subtitle}</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-semibold">
          <span>Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </div>
  )
}

export function SectionLabel({ children, color = '#00C4CC' }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-6 h-1 rounded-full" style={{ background: color }} />
      <span className="font-bold text-sm uppercase tracking-widest" style={{ color }}>{children}</span>
      <div className="w-6 h-1 rounded-full" style={{ background: color }} />
    </div>
  )
}

export function ImgPlaceholder({
  className = '',
  label = 'default',
  accent = '#00C4CC',
}: {
  className?: string
  label?: string
  accent?: string
}) {
  const src = IMAGES[label] || IMAGES['default']
  return (
    <img
      src={src}
      alt={label}
      className={`object-cover ${className}`}
      loading="lazy"
      onError={(e) => { (e.target as HTMLImageElement).src = IMAGES['default'] }}
    />
  )
}

export function StatCard({ number, label, icon, color }: { number: string; label: string; icon: string; color: string }) {
  return (
    <div className="text-center text-white">
      <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.15)' }}>
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="font-display text-5xl mb-1">{number}</div>
      <div className="text-sm font-bold uppercase tracking-widest text-white/80">{label}</div>
    </div>
  )
}

export function FeatureCard({ icon, title, desc, color, linkLabel = 'Read More' }: {
  icon: string; title: string; desc: string; color: string; linkLabel?: string
}) {
  return (
    <div className="card-hover bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center group">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform" style={{ background: `${color}22` }}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="font-display text-xl mb-3" style={{ color }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
      <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 mx-auto" style={{ color }}>
        {linkLabel}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  )
}

export function ProgramCard({ age, title, desc, color, spots }: {
  age: string; title: string; desc: string; color: string; spots: number
}) {
  return (
    <div className="card-hover bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
      <ImgPlaceholder className="h-48 w-full" label={`${title} photo`} accent={color} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${color}22`, color }}>
            Ages {age}
          </span>
          <span className="text-xs text-gray-400 font-semibold">{spots} spots left</span>
        </div>
        <h3 className="font-display text-xl mb-2" style={{ color }}>{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
        <a href="/admissions" className="btn-sky w-full justify-center text-sm py-2.5" style={{ background: color }}>
          Learn More
        </a>
      </div>
    </div>
  )
}

export function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function CloudSVG({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M0,64 C180,120 360,0 540,64 C720,128 900,0 1080,64 C1260,128 1380,40 1440,64 L1440,120 L0,120 Z"/>
    </svg>
  )
}

export function TestimonialCard({ quote, name, child, color }: { quote: string; name: string; child: string; color: string }) {
  return (
    <div className="card-hover bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative">
      <div className="text-5xl font-display mb-4 leading-none" style={{ color: `${color}44` }}>&ldquo;</div>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80&auto=format&fit=crop" alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-sm text-gray-800">{name}</p>
          <p className="text-xs text-gray-400">Parent of {child}</p>
        </div>
      </div>
    </div>
  )
}
