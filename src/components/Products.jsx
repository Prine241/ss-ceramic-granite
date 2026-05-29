import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Products.css'

const graniteDots = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  cx: Math.random() * 80,
  cy: Math.random() * 80,
  r: 0.8 + Math.random() * 1.2,
}))

const products = [
  {
    id: 1,
    name: 'Digital Wall Tiles',
    desc: 'High-definition digital print tiles for walls — vibrant, durable, and suited for kitchens, bathrooms, and living spaces.',
    tag: 'Wall',
    color: '#8b6f5e',
    pattern: 'wall',
  },
  {
    id: 2,
    name: 'Floor Tiles',
    desc: 'Slip-resistant, heavy-duty floor tiles in a wide variety of textures, finishes, and sizes for every room.',
    tag: 'Floor',
    color: '#3d3028',
    pattern: 'floor',
  },
  {
    id: 3,
    name: 'Vitrified Tiles',
    desc: 'Low-porosity, high-gloss vitrified tiles offering unmatched durability and a premium look for modern interiors.',
    tag: 'Premium',
    color: '#c4a882',
    pattern: 'vitrified',
  },
  {
    id: 4,
    name: 'Sanitarywares',
    desc: 'Complete bathroom solutions — wash basins, commodes, and fixtures from top brands at competitive prices.',
    tag: 'Bathroom',
    color: '#5a4a3e',
    pattern: 'sanitary',
  },
  {
    id: 5,
    name: 'Natural Granites',
    desc: 'Exquisite natural granite slabs for countertops, flooring, and cladding — each slab uniquely beautiful.',
    tag: 'Granite',
    color: '#2d2620',
    pattern: 'granite',
  },
  {
    id: 6,
    name: 'Porcelain Slabs',
    desc: 'Large-format porcelain slabs (PGVT / GVT) with minimal joints, perfect for seamless contemporary spaces.',
    tag: 'Large Format',
    color: '#c8965a',
    pattern: 'porcelain',
  },
]

export default function Products() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="products section">
      <div className="container">
        <div className="products__head">
          <div>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">
              Our <em>Product</em> Range
            </h2>
            <div className="divider" />
          </div>
          <Link to="/products" className="btn-outline products__all-btn">
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="products__grid">
          {products.map((p) => (
            <div
              key={p.id}
              className={`product-card ${hovered === p.id ? 'product-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="product-card__visual" style={{ background: p.color }}>
                <TilePattern type={p.pattern} />
                <span className="product-card__tag">{p.tag}</span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <Link to="/contact" className="product-card__link">
                  Enquire <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TilePattern({ type }) {
  const patterns = {
    wall: (
      <svg width="100%" height="100%" viewBox="0 0 80 80">
        {[0, 20, 40, 60].map(y =>
          [0, 20, 40, 60].map(x => (
            <rect key={`${x}-${y}`} x={x + 1} y={y + 1} width={18} height={18} fill="none"
              stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          ))
        )}
      </svg>
    ),
    floor: (
      <svg width="100%" height="100%" viewBox="0 0 80 80">
        {[0, 1, 2, 3].map(row =>
          [0, 1, 2, 3].map(col => {
            const offset = row % 2 === 0 ? 0 : 10
            return (
              <rect key={`${row}-${col}`}
                x={col * 20 + offset + 1} y={row * 20 + 1}
                width={18} height={18}
                fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            )
          })
        )}
      </svg>
    ),
    vitrified: (
      <svg width="100%" height="100%" viewBox="0 0 80 80">
        <rect x="5" y="5" width="70" height="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <line x1="5" y1="40" x2="75" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <line x1="40" y1="5" x2="40" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      </svg>
    ),
    sanitary: (
      <svg width="100%" height="100%" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      </svg>
    ),
    granite: (
      <svg width="100%" height="100%" viewBox="0 0 80 80">
        {graniteDots.map(dot => (
          <circle key={dot.id} cx={dot.cx} cy={dot.cy} r={dot.r}
            fill="rgba(255,255,255,0.2)" />
        ))}
      </svg>
    ),
    porcelain: (
      <svg width="100%" height="100%" viewBox="0 0 80 80">
        <rect x="2" y="2" width="76" height="76" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <rect x="8" y="8" width="64" height="64" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      </svg>
    ),
  }
  return <div className="product-card__pattern">{patterns[type]}</div>
}