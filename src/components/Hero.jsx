import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Package } from 'lucide-react'
import './Hero.css'

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Package, value: '500+', label: 'Products' },
  { icon: Users, value: '5000+', label: 'Happy Customers' },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Background mosaic pattern */}
      <div className="hero__bg">
        <div className="hero__overlay" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge animate-fadeUp delay-1">
          <span className="hero__badge-dot" />
          Kanyakumari's Premier Tile &amp; Granite Store
        </div>

        <h1 className="hero__title animate-fadeUp delay-2">
          <span className="hero__title-line">Crafting Spaces</span>
          <em className="hero__title-italic">With Timeless</em>
          <span className="hero__title-line">Stone &amp; Tile</span>
        </h1>

        <p className="hero__desc animate-fadeUp delay-3">
          Premium quality Ceramic Tiles, Natural Granites, Vitrified Tiles, PGVT, GVT
          &amp; Porcelain Slabs at wholesale and retail — delivered with expertise
          from Paraicode, Kanyakumari District.
        </p>

        <div className="hero__actions animate-fadeUp delay-4">
          <Link to="/products" className="btn-primary">
            <span>Explore Products</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="hero__link">
            Get Free Quote <ArrowRight size={14} />
          </Link>
        </div>

        {/* Stats */}
        <div className="hero__stats animate-fadeUp delay-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="hero__stat">
              <Icon size={18} className="hero__stat-icon" />
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}