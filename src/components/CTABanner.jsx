import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import './CTABanner.css'

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" />
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <p className="cta-banner__label">Ready to Transform Your Space?</p>
          <h2 className="cta-banner__title">
            Visit Our Showroom at <em>Paraicode</em>
          </h2>
          <p className="cta-banner__sub">
            Explore hundreds of tile and granite options in person.
            Our experts are ready to help you find the perfect match.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a href="tel:9442757859" className="cta-banner__call">
            <Phone size={18} />
            <span>
              <small>Call Now</small>
              9442757859
            </span>
          </a>
          <Link to="/contact" className="btn-outline cta-banner__quote">
            Get Free Quote <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}