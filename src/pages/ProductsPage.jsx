import { useState } from 'react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './ProductsPage.css'

const categories = ['All', 'Wall Tiles', 'Floor Tiles', 'Granite', 'Vitrified', 'Sanitaryware', 'Porcelain']

const allProducts = [
  { id: 1, name: 'Digital Wall Tiles', category: 'Wall Tiles', tag: 'Best Seller', color: '#8b6f5e', desc: 'High-definition digital print tiles. Available in matte, gloss, and satin finishes. Sizes: 250×750mm, 300×900mm. Perfect for modern kitchens and living rooms.' },
  { id: 2, name: 'Kitchen Wall Tiles', category: 'Wall Tiles', tag: null, color: '#a07060', desc: 'Grease-resistant, easy-clean wall tiles specifically designed for kitchen backsplashes and walls. Heat and stain resistant.' },
  { id: 3, name: 'Bathroom Wall Tiles', category: 'Wall Tiles', tag: null, color: '#7a6055', desc: 'Water-resistant ceramic tiles with anti-fungal properties — ideal for bathroom walls and shower enclosures. Non-slip surface.' },
  { id: 4, name: 'Floor Tiles', category: 'Floor Tiles', tag: 'Popular', color: '#3d3028', desc: 'Heavy-duty, slip-resistant floor tiles in multiple textures. Suitable for all indoor and semi-outdoor spaces.' },
  { id: 5, name: 'Kitchen Floor Tiles', category: 'Floor Tiles', tag: null, color: '#4a3830', desc: 'Non-slip, stain-resistant floor tiles engineered for the demands of a kitchen environment.' },
  { id: 6, name: 'Bathroom Floor Tiles', category: 'Floor Tiles', tag: null, color: '#5a4a3e', desc: 'Anti-skid floor tiles with water-resistant glazing. Safe, durable, and easy to clean.' },
  { id: 7, name: 'Vitrified Tiles (GVT)', category: 'Vitrified', tag: 'Premium', color: '#c4a882', desc: 'Glazed Vitrified Tiles with rich patterns and high gloss. Extremely low water absorption and superior durability.' },
  { id: 8, name: 'Vitrified Tiles (PGVT)', category: 'Vitrified', tag: null, color: '#b89870', desc: 'Polished Glazed Vitrified Tiles — mirror-like finish with excellent durability for living and commercial spaces.' },
  { id: 9, name: 'Double Charged Vitrified', category: 'Vitrified', tag: null, color: '#d4b892', desc: 'Heavy-duty vitrified tiles with colour penetrating deeper into the tile body for lasting looks and superior scratch resistance.' },
  { id: 10, name: 'Natural Granite Slabs', category: 'Granite', tag: 'Premium', color: '#2d2620', desc: 'Exquisite natural granite from premium quarries. Every slab is unique. Ideal for countertops, flooring, and cladding.' },
  { id: 11, name: 'Granite Countertops', category: 'Granite', tag: null, color: '#3d3028', desc: 'Pre-cut and polished granite slabs for kitchen countertops and bathroom vanities.' },
  { id: 12, name: 'Granite Flooring', category: 'Granite', tag: null, color: '#252018', desc: 'Cut-to-size granite tiles for prestigious flooring in homes, commercial spaces, and temples.' },
  { id: 13, name: 'Porcelain Slabs', category: 'Porcelain', tag: 'New', color: '#c8965a', desc: 'Large-format porcelain slabs (80×160, 100×180, 120×240 cm) for seamless, minimalist interiors.' },
  { id: 14, name: 'Outdoor Porcelain', category: 'Porcelain', tag: null, color: '#b88040', desc: 'Frost-resistant, heavy-duty porcelain tiles rated for outdoor patios, driveways, and terraces.' },
  { id: 15, name: 'Wash Basins', category: 'Sanitaryware', tag: null, color: '#6a5a50', desc: 'Wall-mounted and counter-top wash basins from premium brands. Modern designs for every bathroom style.' },
  { id: 16, name: 'Sanitaryware Suite', category: 'Sanitaryware', tag: null, color: '#7a6a5e', desc: 'Complete bathroom suites including WC, cistern, wash basin, and bath accessories at bundle pricing.' },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <main>
      <PageHero
        label="Product Catalogue"
        title={<>Our Complete <em>Product Range</em></>}
        subtitle="Premium quality tiles, granite, and sanitaryware — wholesale & retail from Paraicode, Kanyakumari."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="products-page section tile-bg">
        <div className="container">
          {/* Filter bar */}
          <div className="products-page__filter-bar">
            <div className="products-page__categories">
              {categories.map(c => (
                <button
                  key={c}
                  className={`products-page__cat-btn ${activeCategory === c ? 'products-page__cat-btn--active' : ''}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="products-page__count">{filtered.length} products</span>
          </div>

          {/* Products grid */}
          <div className="products-page__grid">
            {filtered.map(p => (
              <div key={p.id} className="prod-card">
                <div className="prod-card__top" style={{ background: p.color }}>
                  <TileVisual color={p.color} />
                  {p.tag && <span className="prod-card__badge">{p.tag}</span>}
                  <span className="prod-card__cat">{p.category}</span>
                </div>
                <div className="prod-card__body">
                  <h3 className="prod-card__name">{p.name}</h3>
                  <p className="prod-card__desc">{p.desc}</p>
                  <Link to="/contact" className="prod-card__enquire">
                    Enquire Now <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}

function TileVisual({ color }) {
  return (
    <svg className="prod-card__pattern" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="120" height="120" fill={color} opacity="0.08" />
      {[0, 30, 60, 90].map(y =>
        [0, 30, 60, 90].map(x => (
          <rect key={`${x}-${y}`} x={x + 2} y={y + 2} width={26} height={26}
            fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" rx="0.5" />
        ))
      )}
    </svg>
  )
}
