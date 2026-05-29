import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Nagercoil',
    rating: 5,
    text: 'Excellent quality tiles at the best prices in Kanyakumari. Suresh Kumar sir guided us perfectly for our new home. Very happy with the granite countertop — it looks stunning!',
    role: 'Homeowner',
  },
  {
    name: 'Priya Devi',
    location: 'Marthandam',
    rating: 5,
    text: 'Got all my bathroom tiles and kitchen floor tiles from SS Ceramic. The collection is huge and the prices are unbeatable. Staff is very helpful and knowledgeable.',
    role: 'Interior Designer',
  },
  {
    name: 'Arun Selvan',
    location: 'Colachel',
    rating: 5,
    text: 'As a contractor I have been buying from SS Ceramic for 5 years. Consistent quality, reliable supply, and wholesale pricing that keeps my projects profitable.',
    role: 'Building Contractor',
  },
  {
    name: 'Meena Sundaram',
    location: 'Thuckalay',
    rating: 5,
    text: 'The PGVT tiles I purchased for my living room are absolutely gorgeous. The team helped me choose the right size and finish. Highly recommend to everyone!',
    role: 'Homeowner',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive(a => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section className="testimonials section">
      <div className="container testimonials__inner">
        <div className="testimonials__label-col">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">
            What Our <em>Customers</em> Say
          </h2>
          <div className="divider" />
          <div className="testimonials__nav">
            <button className="testimonials__nav-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <span className="testimonials__count">
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button className="testimonials__nav-btn" onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials__card">
          <Quote size={40} className="testimonials__quote-icon" />
          <div className="testimonials__stars">
            {'★'.repeat(t.rating)}
          </div>
          <p className="testimonials__text">"{t.text}"</p>
          <div className="testimonials__author">
            <div className="testimonials__avatar">
              {t.name.charAt(0)}
            </div>
            <div>
              <p className="testimonials__name">{t.name}</p>
              <p className="testimonials__meta">{t.role} · {t.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}