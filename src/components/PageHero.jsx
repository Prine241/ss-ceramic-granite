import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import './PageHero.css'

export default function PageHero({ label, title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" />
      <div className="container page-hero__content">
        {breadcrumbs.length > 0 && (
          <nav className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbs.map(({ label, to }) => (
              <>
                <ChevronRight size={13} />
                {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
              </>
            ))}
          </nav>
        )}
        {label && <p className="section-label page-hero__label">{label}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}