import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import './About.css'

const highlights = [
  'Over 10 years of trusted service in Kanyakumari',
  'Wholesale & retail for homes, builders & contractors',
  'Premium brands at best market prices',
  'Expert guidance for every project',
]

export default function About() {
  return (
    <section className="about section tile-bg">
      <div className="container about__inner">
        {/* Visual side */}
        <div className="about__visual">
          <div className="about__mosaic">
            <div className="about__tile about__tile--1" />
            <div className="about__tile about__tile--2" />
            <div className="about__tile about__tile--3" />
            <div className="about__tile about__tile--4" />
          </div>
          <div className="about__badge-card">
            <span className="about__badge-year">2014</span>
            <span className="about__badge-text">Established</span>
            <div className="about__badge-divider" />
            <span className="about__badge-sub">Paraicode, KK Dist.</span>
          </div>
        </div>

        {/* Text side */}
        <div className="about__text">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">
            Kanyakumari's <em>Most Trusted</em> Tile &amp; Granite House
          </h2>
          <div className="divider" />
          <p className="about__para">
            SS Ceramic &amp; Granite has been the go-to destination for premium tiles
            and natural granite in Kanyakumari District since 2014. Proprietor
            <strong> Suresh Kumar</strong> built this establishment on a simple belief:
            every home deserves beautiful, lasting surfaces — at a price that makes sense.
          </p>
          <p className="about__para">
            From kitchen wall tiles and bathroom floor tiles to large-format
            porcelain slabs and natural granites, our showroom at Paraicode
            carries the widest selection in the region, backed by genuine
            wholesale pricing for both individuals and trade buyers.
          </p>

          <ul className="about__list">
            {highlights.map(h => (
              <li key={h} className="about__list-item">
                <CheckCircle size={16} className="about__check" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-primary">
            <span>Read Our Story</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}