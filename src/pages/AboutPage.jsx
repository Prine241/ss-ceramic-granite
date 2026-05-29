import PageHero from '../components/PageHero'
import WhyUs from '../components/WhyUs'
import CTABanner from '../components/CTABanner'
import { User, MapPin, Phone, Award } from 'lucide-react'
import './AboutPage.css'

const milestones = [
  { year: '2014', event: 'SS Ceramic & Granite founded by Suresh Kumar at Paraicode' },
  { year: '2016', event: 'Expanded product range to include premium Natural Granites' },
  { year: '2018', event: 'Introduced PGVT and GVT large-format tile collection' },
  { year: '2020', event: 'Launched wholesale supply for builders and contractors' },
  { year: '2023', event: 'Crossed 5,000+ satisfied customers across Kanyakumari District' },
  { year: '2024', event: 'Added Porcelain Slabs and premium Sanitaryware range' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="Our Story"
        title={<>About <em>SS Ceramic</em> &amp; Granite</>}
        subtitle="A decade of passion, quality, and trust — serving Kanyakumari with the finest tiles and granite."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Story Section */}
      <section className="about-page section tile-bg">
        <div className="container about-page__inner">
          <div className="about-page__story">
            <p className="section-label">Our Foundation</p>
            <h2 className="section-title">
              Built on <em>Trust</em> &amp; Quality
            </h2>
            <div className="divider" />
            <p className="about-page__para">
              SS Ceramic &amp; Granite was born from a simple vision: to bring
              premium-quality tiles and natural granite within reach of every
              homeowner in Kanyakumari District. Proprietor <strong>Suresh Kumar</strong> started
              the business in 2014 from Paraicode with a small but carefully curated
              selection and a commitment to honest pricing.
            </p>
            <p className="about-page__para">
              Over 10 years, that vision has grown into one of the most trusted tile and
              granite establishments in the region. Contractors, interior designers,
              and thousands of homeowners from across Kanyakumari, Tirunelveli, and
              beyond rely on us for their projects — big and small.
            </p>
            <p className="about-page__para">
              We carry everything from everyday Ceramic Wall Tiles and Floor Tiles
              to premium Vitrified Tiles, PGVT, GVT, large-format Porcelain Slabs,
              and exquisite Natural Granites — all under one roof, at wholesale
              and retail pricing that's genuinely competitive.
            </p>
          </div>

          {/* Proprietor Card */}
          <div className="about-page__proprietor">
            <div className="about-page__prop-card">
              <div className="about-page__prop-avatar">
                <User size={40} />
              </div>
              <h3 className="about-page__prop-name">Suresh Kumar</h3>
              <p className="about-page__prop-role">Proprietor &amp; Founder</p>
              <div className="about-page__prop-divider" />
              <div className="about-page__prop-info">
                <div className="about-page__prop-item">
                  <Award size={14} />
                  <span>10+ Years in Business</span>
                </div>
                <div className="about-page__prop-item">
                  <MapPin size={14} />
                  <span>Paraicode, Kanyakumari</span>
                </div>
                <div className="about-page__prop-item">
                  <Phone size={14} />
                  <span>9442757859</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="about-page__stats">
              {[
                { v: '10+', l: 'Years Experience' },
                { v: '500+', l: 'Products' },
                { v: '5000+', l: 'Happy Clients' },
                { v: '100%', l: 'Quality Assured' },
              ].map(({ v, l }) => (
                <div key={l} className="about-page__stat">
                  <span className="about-page__stat-value">{v}</span>
                  <span className="about-page__stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section">
        <div className="container">
          <div className="about-timeline__head">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">
              <em>Milestones</em> Over the Years
            </h2>
            <div className="divider" />
          </div>
          <div className="about-timeline__list">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-item__dot" />
                <div className="timeline-item__card">
                  <span className="timeline-item__year">{year}</span>
                  <p className="timeline-item__event">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CTABanner />
    </main>
  )
}