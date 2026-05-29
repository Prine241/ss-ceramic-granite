import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const productLinks = [
  'Digital Wall Tiles',
  'Floor Tiles',
  'Vitrified Tiles',
  'Sanitarywares',
  'Natural Granites',
  'Porcelain Slabs',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-ss">SS</span>
              <span className="footer__logo-text">
                <span>Ceramic &amp; Granite</span>
                <span className="footer__logo-sub">Paraicode · Est. 2014</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Kanyakumari's most trusted destination for premium tiles,
              natural granites, and bathroom solutions at unbeatable prices.
            </p>
            <div className="footer__contact-list">
              <a href="https://wa.me/919442757859?text=Hello%20SS%20Ceramic%20%26%20Granite!%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="footer__contact-item footer__contact-item--wa">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                9442757859 (WhatsApp)
              </a>
              <a href="https://wa.me/919498409859?text=Hello%20SS%20Ceramic%20%26%20Granite!%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="footer__contact-item footer__contact-item--wa">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                9498409859 (WhatsApp)
              </a>
              <a href="mailto:ssceramicgranite84@gmail.com" className="footer__contact-item">
                <Mail size={13} /> ssceramicgranite84@gmail.com
              </a>
              <div className="footer__contact-item">
                <MapPin size={13} /> Paraicode, Mulagumoodu Post, Kanyakumari Dist.
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">
                    <ArrowRight size={12} /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__col-title">Products</h4>
            <ul className="footer__links">
              {productLinks.map(p => (
                <li key={p}>
                  <Link to="/products" className="footer__link">
                    <ArrowRight size={12} /> {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map / Visit */}
          <div className="footer__col">
            <h4 className="footer__col-title">Find Us</h4>
            <div className="footer__map-placeholder">
              <MapPin size={28} />
              <p>TVM Main Road</p>
              <p>Paraicode, Mulagumoodu</p>
              <p>Kanyakumari District</p>
              <a
                href="https://maps.google.com/?q=Paraicode+Mulagumoodu+Kanyakumari"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__directions"
              >
                Get Directions <ArrowRight size={12} />
              </a>
            </div>
            <div className="footer__hours">
              <p className="footer__hours-title">Opening Hours</p>
              <p>Mon – Sat: 9 AM – 7 PM</p>
              <p>Sunday: 10 AM – 5 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {currentYear} SS Ceramic &amp; Granite. All rights reserved.</p>
          <p>Proprietor: <strong>Suresh Kumar</strong> | Paraicode, Kanyakumari</p>
        </div>
      </div>
    </footer>
  )
}