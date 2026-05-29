import { ShieldCheck, Tag, Truck, HeartHandshake, Gem, Clock } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Only top-grade materials from trusted manufacturers — every tile and slab meets strict quality standards.',
  },
  {
    icon: Tag,
    title: 'Best Market Price',
    desc: 'Direct wholesale pricing means you get the finest products without paying inflated retail markups.',
  },
  {
    icon: ShieldCheck,
    title: '10+ Years Trusted',
    desc: 'Over a decade of delivering quality and service has made us the first choice in Kanyakumari District.',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Guidance',
    desc: 'Our experienced team helps you choose the perfect tiles and granite for your specific project needs.',
  },
  {
    icon: Truck,
    title: 'Wholesale & Retail',
    desc: 'Whether you\'re building one home or supplying a large project, we cater to both individual and trade buyers.',
  },
  {
    icon: Clock,
    title: 'Wide Selection',
    desc: 'Ceramic, Vitrified, PGVT, GVT, Porcelain Slabs, and Natural Granites — everything under one roof.',
  },
]

export default function WhyUs() {
  return (
    <section className="whyus section tile-bg">
      <div className="container">
        <div className="whyus__head">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">
            The <em>SS Ceramic</em> Difference
          </h2>
          <div className="divider" />
          <p className="whyus__sub">
            From quality to pricing to service, here's why thousands of homeowners
            and builders in Kanyakumari trust us for every project.
          </p>
        </div>

        <div className="whyus__grid">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="whyus__card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="whyus__icon">
                <Icon size={22} />
              </div>
              <h3 className="whyus__title">{title}</h3>
              <p className="whyus__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}