import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when the route changes.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <header className={`navbar ${scrolled || !isHome ? 'navbar--solid' : ''} ${open ? 'navbar--open' : ''}`}>
      {/* Top bar */}
      <div className="navbar__topbar">
        <div className="container navbar__topbar-inner">
          <span className="navbar__topbar-item">
            <Phone size={12} />
            9442757859 &nbsp;|&nbsp; 9498409859
          </span>
          <span className="navbar__topbar-item navbar__topbar-item--right">
            ssceramicgranite84@gmail.com
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="navbar__main">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-ss">SS</span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-line1">Ceramic &amp; Granite</span>
              <span className="navbar__logo-line2">Paraicode · Est. 2014</span>
            </span>
          </Link>

          <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="navbar__cta btn-primary">
              <span>Get Quote</span>
            </Link>
          </nav>

          <button className="navbar__toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}