import { useState, useEffect, useRef } from 'react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { X, ZoomIn, ArrowRight } from 'lucide-react'
import './GalleryPage.css'

const galleryCategories = ['All', 'Wall Tiles', 'Floor Tiles', 'Granite', 'Bathrooms', 'Living Spaces']

const galleryItems = [
  { id: 1,  category: 'Wall Tiles',     title: 'Kitchen Backsplash',       color1: '#8b6f5e', color2: '#c4a882', pattern: 'grid',     size: 'large' },
  { id: 2,  category: 'Floor Tiles',    title: 'Living Room Floor',         color1: '#3d3028', color2: '#5a4a3e', pattern: 'offset',   size: 'normal' },
  { id: 3,  category: 'Granite',        title: 'Kitchen Countertop',        color1: '#1a1612', color2: '#3d3028', pattern: 'marble',   size: 'normal' },
  { id: 4,  category: 'Bathrooms',      title: 'Modern Bathroom',           color1: '#7a6055', color2: '#a09080', pattern: 'herring',  size: 'tall' },
  { id: 5,  category: 'Living Spaces',  title: 'Porcelain Slab Feature Wall', color1: '#c8965a', color2: '#e0b87a', pattern: 'large',  size: 'large' },
  { id: 6,  category: 'Wall Tiles',     title: 'Dining Area Accent Wall',   color1: '#5a4a3e', color2: '#8b6f5e', pattern: 'brick',    size: 'normal' },
  { id: 7,  category: 'Floor Tiles',    title: 'Entrance Flooring',         color1: '#2d2620', color2: '#4a3830', pattern: 'diagonal', size: 'tall' },
  { id: 8,  category: 'Granite',        title: 'Black Galaxy Granite',      color1: '#0f0d0a', color2: '#1a1612', pattern: 'speckle',  size: 'normal' },
  { id: 9,  category: 'Bathrooms',      title: 'Luxury Bath Suite',         color1: '#c4a882', color2: '#e8d4b8', pattern: 'grid',     size: 'large' },
  { id: 10, category: 'Living Spaces',  title: 'GVT Living Room',           color1: '#8b6f5e', color2: '#b89878', pattern: 'large',    size: 'normal' },
  { id: 11, category: 'Wall Tiles',     title: 'Digital Print Wall',        color1: '#a07060', color2: '#c09080', pattern: 'print',    size: 'normal' },
  { id: 12, category: 'Granite',        title: 'Tan Brown Granite',         color1: '#8b5e48', color2: '#b07a58', pattern: 'speckle',  size: 'tall' },
]

/* ─── SVG Pattern Renderer ────────────────────────────── */
function GalleryVisual({ color1, color2, pattern, title }) {
  const id = `${pattern}-${title.replace(/\s+/g, '')}`

  const defs = (
    <defs>
      <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={color1} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
      <linearGradient id={`mgrad-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor={color1} />
        <stop offset="50%"  stopColor={color2} />
        <stop offset="100%" stopColor={color1} />
      </linearGradient>
    </defs>
  )

  const patterns = {
    grid: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={`url(#grad-${id})`} />
        {[0, 50, 100, 150].flatMap(y =>
          [0, 50, 100, 150].map(x => (
            <rect key={`${x}-${y}`} x={x + 2} y={y + 2} width={46} height={46}
              fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" rx="1" />
          ))
        )}
        <rect x="0" y="0" width="200" height="200" fill="rgba(0,0,0,0.08)" />
      </svg>
    ),
    offset: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={color1} />
        {[0, 1, 2, 3].flatMap(row =>
          [0, 1, 2, 3, 4].map(col => (
            <rect key={`${row}-${col}`}
              x={col * 45 + (row % 2 === 0 ? 0 : 22)} y={row * 48 + 2}
              width={41} height={20}
              fill={color2} opacity="0.5"
              stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" rx="1" />
          ))
        )}
        <rect x="0" y="0" width="200" height="200" fill="rgba(0,0,0,0.1)" />
      </svg>
    ),
    marble: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={`url(#mgrad-${id})`} />
        {[15, 45, 80, 115, 150, 178].map((y, i) => (
          <path key={i}
            d={`M-10 ${y} Q40 ${y - 18} 100 ${y + 12} T210 ${y + 4}`}
            fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth={i % 2 === 0 ? 2.5 : 1} />
        ))}
        {[30, 90, 145].map((y, i) => (
          <path key={`t${i}`}
            d={`M0 ${y} Q70 ${y + 8} 140 ${y - 6} T200 ${y}`}
            fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
        ))}
      </svg>
    ),
    herring: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={color1} />
        {Array.from({ length: 10 }).flatMap((_, row) =>
          Array.from({ length: 6 }).map((_, col) => {
            const x = col * 36 + (row % 2 === 0 ? 0 : 18)
            const y = row * 22
            return (
              <rect key={`${row}-${col}`} x={x + 1} y={y + 1} width={16} height={20}
                fill={color2} opacity="0.55"
                stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"
                transform={`rotate(${row % 2 === 0 ? 12 : -12}, ${x + 8}, ${y + 10})`} />
            )
          })
        )}
        <rect x="0" y="0" width="200" height="200" fill="rgba(0,0,0,0.12)" />
      </svg>
    ),
    large: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={`url(#grad-${id})`} />
        <rect x="6" y="6" width="188" height="188" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <rect x="16" y="16" width="168" height="168" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
        <line x1="6" y1="6" x2="194" y2="194" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="194" y1="6" x2="6" y2="194" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </svg>
    ),
    brick: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={color1} />
        {Array.from({ length: 10 }).flatMap((_, row) =>
          Array.from({ length: 4 }).map((_, col) => {
            const offset = row % 2 === 0 ? 0 : -26
            return (
              <rect key={`${row}-${col}`}
                x={col * 52 + offset + 2} y={row * 21 + 2}
                width={48} height={17}
                fill={color2} opacity="0.48"
                stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="1" />
            )
          })
        )}
        <rect x="0" y="0" width="200" height="200" fill="rgba(0,0,0,0.1)" />
      </svg>
    ),
    diagonal: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={color1} />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={i * 36 - 40} y1="0" x2={i * 36 + 160} y2="200"
            stroke={color2} strokeWidth="20" opacity="0.28" />
        ))}
        {[0, 50, 100, 150].flatMap(y =>
          [0, 50, 100, 150].map(x => (
            <rect key={`${x}-${y}`} x={x + 2} y={y + 2} width={46} height={46}
              fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          ))
        )}
      </svg>
    ),
    speckle: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={color1} />
        {Array.from({ length: 120 }).map((_, i) => {
          const seed = i * 137.508
          const x = seed % 200
          const y = (seed * 1.618) % 200
          const r = 0.8 + (i % 4) * 0.7
          const op = 0.3 + (i % 3) * 0.2
          return <circle key={i} cx={x} cy={y} r={r} fill={color2} opacity={op} />
        })}
        {/* larger crystalline flecks */}
        {Array.from({ length: 18 }).map((_, i) => {
          const seed = i * 73.3
          const x = seed % 190
          const y = (seed * 2.1) % 190
          return <circle key={`l${i}`} cx={x} cy={y} r={2.5} fill={color2} opacity="0.7" />
        })}
      </svg>
    ),
    print: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="gallery-visual">
        {defs}
        <rect width="200" height="200" fill={`url(#grad-${id})`} />
        {Array.from({ length: 5 }).flatMap((_, i) =>
          Array.from({ length: 5 }).map((_, j) => (
            <circle key={`${i}-${j}`} cx={i * 40 + 20} cy={j * 40 + 20} r={13}
              fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
          ))
        )}
        {Array.from({ length: 4 }).flatMap((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <circle key={`s${i}-${j}`} cx={i * 40 + 40} cy={j * 40 + 40} r={5}
              fill="rgba(255,255,255,0.1)" />
          ))
        )}
      </svg>
    ),
  }

  return patterns[pattern] || patterns.grid
}

/* ─── Main Page ───────────────────────────────────────── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState({})
  const cardRefs = useRef({})

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(p => p.category === activeCategory)

  // Intersection observer for card reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(prev => ({ ...prev, [e.target.dataset.id]: true }))
          }
        })
      },
      { threshold: 0.12 }
    )
    Object.values(cardRefs.current).forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [filtered])

  // Close lightbox on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const currentIndex = lightbox ? filtered.findIndex(i => i.id === lightbox.id) : -1
  const goPrev = e => {
    e.stopPropagation()
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1])
  }
  const goNext = e => {
    e.stopPropagation()
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1])
  }

  return (
    <main>
      <PageHero
        label="Our Gallery"
        title={<>Inspiring <em>Spaces</em></>}
        subtitle="Browse our collection of tile and granite installations — find inspiration for your next project."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="gallery-page section tile-bg">
        <div className="container">

          {/* ── Filter Pills ── */}
          <div className="gallery-page__filters" role="group" aria-label="Filter by category">
            {galleryCategories.map((c, i) => (
              <button
                key={c}
                className={`gallery-page__filter-btn ${activeCategory === c ? 'gallery-page__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(c)}
                style={{ animationDelay: `${i * 60}ms` }}
                aria-pressed={activeCategory === c}
              >
                {c}
                {activeCategory === c && <span className="gallery-page__filter-dot" aria-hidden="true" />}
              </button>
            ))}
          </div>

          {/* ── Count ── */}
          <p className="gallery-page__count">
            <span>{filtered.length}</span> installation{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* ── Masonry Grid ── */}
          <div className="gallery-page__grid">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                ref={el => { cardRefs.current[item.id] = el }}
                data-id={item.id}
                className={`gallery-card gallery-card--${item.size} ${visible[item.id] ? 'gallery-card--visible' : ''}`}
                style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
              >
                <GalleryVisual {...item} />

                {/* Shimmer effect */}
                <div className="gallery-card__shimmer" aria-hidden="true" />

                <div className="gallery-card__overlay">
                  <div className="gallery-card__overlay-top">
                    <span className="gallery-card__cat">{item.category}</span>
                    <span className="gallery-card__zoom"><ZoomIn size={14} /></span>
                  </div>
                  <div className="gallery-card__overlay-bottom">
                    <h3 className="gallery-card__title">{item.title}</h3>
                    <span className="gallery-card__view-cta">View <ArrowRight size={11} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-page__empty">
              <p>No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          {/* Close */}
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={18} />
          </button>

          {/* Prev / Next */}
          {currentIndex > 0 && (
            <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous">
              <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
            </button>
          )}
          {currentIndex < filtered.length - 1 && (
            <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next">
              <ArrowRight size={18} />
            </button>
          )}

          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            {/* Visual */}
            <div className="lightbox__visual">
              <GalleryVisual {...lightbox} />
              <div className="lightbox__visual-badge">{lightbox.category}</div>
            </div>

            {/* Info */}
            <div className="lightbox__info">
              <div className="lightbox__info-top">
                <div className="lightbox__gold-rule" aria-hidden="true" />
                <span className="lightbox__cat">{lightbox.category}</span>
                <h3 className="lightbox__title">{lightbox.title}</h3>
                <p className="lightbox__desc">
                  This installation showcases our premium {lightbox.category.toLowerCase()} selection,
                  carefully curated to blend durability with elegance. Available exclusively at
                  SS Ceramic &amp; Granite, Paraicode.
                </p>
              </div>
              <div className="lightbox__info-footer">
                <div className="lightbox__detail">
                  <span className="lightbox__detail-label">Collection</span>
                  <span className="lightbox__detail-value">{lightbox.category}</span>
                </div>
                <div className="lightbox__detail">
                  <span className="lightbox__detail-label">Availability</span>
                  <span className="lightbox__detail-value">In Showroom</span>
                </div>
                <a
                  href={`https://wa.me/919442757859?text=Hello! I'm interested in the ${encodeURIComponent(lightbox.title)} installation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="lightbox__enquire-btn"
                  onClick={e => e.stopPropagation()}
                >
                  Enquire on WhatsApp <ArrowRight size={13} />
                </a>
              </div>

              {/* Nav dots */}
              <div className="lightbox__dots">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    className={`lightbox__dot ${item.id === lightbox.id ? 'lightbox__dot--active' : ''}`}
                    onClick={e => { e.stopPropagation(); setLightbox(item) }}
                    aria-label={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </main>
  )
}