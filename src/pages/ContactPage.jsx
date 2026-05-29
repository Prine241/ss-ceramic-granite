import { useState } from 'react'
import PageHero from '../components/PageHero'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import './ContactPage.css'

const WHATSAPP_NUMBER = '919442757859'
const GMAIL = 'ssceramicgranite84@gmail.com'

function waLink(msg = '') {
  return `https://wa.me/${WHATSAPP_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()

    // Build Gmail compose URL with all form data
    const subject = `Tile Enquiry from ${form.name}${form.product ? ' – ' + form.product : ''}`
    const body = `New enquiry from SS Ceramic & Granite website:\n\nName: ${form.name}\nPhone: ${form.phone || 'Not provided'}\nEmail: ${form.email || 'Not provided'}\nInterested In: ${form.product || 'Not specified'}\n\nMessage:\n${form.message}\n\n---\nSent from ssceramicgranite.com`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${GMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')
    setSent(true)
    setForm({ name: '', phone: '', email: '', product: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  const quickWhatsApp = `Hello! I visited your website and would like to enquire about your tiles and granite. Please help me.`

  return (
    <main>
      <PageHero
        label="Contact Us"
        title={<>Let's <em>Talk Tiles</em></>}
        subtitle="Visit our showroom, call us, WhatsApp us — we're always ready to help with your project."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="contact-page section tile-bg">
        <div className="container contact-page__inner">

          {/* Left: Info */}
          <div className="contact-page__info">
            <p className="section-label">Reach Us</p>
            <h2 className="section-title">
              Come Visit Our <em>Showroom</em>
            </h2>
            <div className="divider" />
            <p className="contact-page__intro">
              Our showroom at Paraicode has the widest tile and granite collection in
              Kanyakumari District. Walk in, call, or WhatsApp us directly!
            </p>

            {/* Quick action buttons */}
            <div className="contact-page__quick-actions">
              <a href={waLink(quickWhatsApp)} target="_blank" rel="noreferrer" className="contact-page__wa-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us Now
              </a>
              <a href={`mailto:${GMAIL}`} className="contact-page__email-btn">
                <Mail size={18} />
                Email Us
              </a>
            </div>

            {/* Info blocks */}
            <div className="contact-page__blocks">
              <div className="contact-page__block">
                <div className="contact-page__block-icon"><Phone size={20} /></div>
                <div>
                  <h4 className="contact-page__block-title">Call or WhatsApp</h4>
                  <div className="contact-page__phone-row">
                    <a href="tel:+919442757859" className="contact-page__tel">9442757859</a>
                    <a href={waLink(quickWhatsApp)} target="_blank" rel="noreferrer" className="contact-page__wa-pill">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                  <div className="contact-page__phone-row">
                    <a href="tel:+919498409859" className="contact-page__tel">9498409859</a>
                    <a href={`https://wa.me/919498409859?text=${encodeURIComponent(quickWhatsApp)}`} target="_blank" rel="noreferrer" className="contact-page__wa-pill">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                  <div className="contact-page__phone-row">
                    <a href="tel:+917200557859" className="contact-page__tel">7200557859 (Office)</a>
                  </div>
                </div>
              </div>

              <div className="contact-page__block">
                <div className="contact-page__block-icon"><Mail size={20} /></div>
                <div>
                  <h4 className="contact-page__block-title">Email Us</h4>
                  <a href={`mailto:${GMAIL}`} className="contact-page__email-link">
                    ssceramicgranite84@gmail.com
                  </a>
                  <p style={{fontSize:'12px', color:'var(--text-muted)', marginTop:'6px'}}>Click to open Gmail directly</p>
                </div>
              </div>

              <div className="contact-page__block">
                <div className="contact-page__block-icon"><MapPin size={20} /></div>
                <div>
                  <h4 className="contact-page__block-title">Our Location</h4>
                  <p>TVM Main Road, Paraicode</p>
                  <p>Mulagumoodu Post</p>
                  <p>Kanyakumari District, Tamil Nadu</p>
                  <a href="https://maps.google.com/?q=Paraicode+Mulagumoodu+Kanyakumari"
                    target="_blank" rel="noreferrer" className="contact-page__map-link">
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="contact-page__block">
                <div className="contact-page__block-icon"><Clock size={20} /></div>
                <div>
                  <h4 className="contact-page__block-title">Business Hours</h4>
                  <div className="contact-page__hours"><span>Monday – Saturday</span><span>9:00 AM – 7:00 PM</span></div>
                  <div className="contact-page__hours"><span>Sunday</span><span>10:00 AM – 5:00 PM</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-page__form-col">
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__form-header">
                <MessageSquare size={22} className="contact-page__form-icon" />
                <h3>Send an Enquiry</h3>
              </div>
              <p className="contact-page__form-note">
                Clicking <strong>"Send Message"</strong> will open Gmail with all your details pre-filled — ready to send to us instantly.
              </p>

              <div className="cpf-row">
                <div className="cpf-field">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="cpf-field">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile number" />
                </div>
              </div>

              <div className="cpf-field">
                <label>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              </div>

              <div className="cpf-field">
                <label>Interested In</label>
                <select name="product" value={form.product} onChange={handleChange}>
                  <option value="">Select product category</option>
                  <option>Digital Wall Tiles</option>
                  <option>Floor Tiles</option>
                  <option>Vitrified Tiles (GVT / PGVT)</option>
                  <option>Natural Granites</option>
                  <option>Porcelain Slabs</option>
                  <option>Sanitarywares</option>
                  <option>Multiple Products</option>
                </select>
              </div>

              <div className="cpf-field">
                <label>Your Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe your project, required quantities, dimensions, or any questions…"
                  rows={5} required />
              </div>

              <div className="cpf-actions">
                <button type="submit" className="btn-primary cpf-submit">
                  <Mail size={16} />
                  <span>Send via Gmail</span>
                </button>
                <button
                  type="button"
                  className="cpf-wa-submit"
                  onClick={() => {
                    const msg = `Hello SS Ceramic & Granite!\n\nName: ${form.name || 'Not provided'}\nPhone: ${form.phone || 'Not provided'}\nInterested In: ${form.product || 'General Enquiry'}\n\nMessage: ${form.message || 'I would like more information about your products.'}`
                    window.open(waLink(msg), '_blank')
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              {sent && (
                <div className="cpf-success">
                  <p>✓ Gmail opened with your message pre-filled. Just click Send in Gmail!</p>
                </div>
              )}
            </form>

            {/* Proprietor note */}
            <div className="contact-page__owner-note">
              <div className="contact-page__owner-avatar">SK</div>
              <div>
                <p className="contact-page__owner-name">Suresh Kumar</p>
                <p className="contact-page__owner-role">Proprietor, SS Ceramic &amp; Granite</p>
                <p className="contact-page__owner-msg">
                  "Call or WhatsApp me directly — I personally ensure you get the best product at the best price!"
                </p>
                <div style={{display:'flex', gap:'10px', marginTop:'12px', flexWrap:'wrap'}}>
                  <a href="tel:+919442757859" className="owner-action-btn owner-action-btn--call">
                    <Phone size={13} /> Call Now
                  </a>
                  <a href={waLink('Hello Suresh Kumar Sir! I visited your website and need help with tiles/granite.')} target="_blank" rel="noreferrer" className="owner-action-btn owner-action-btn--wa">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map bar */}
      <section className="contact-map-bar">
        <div className="container contact-map-bar__inner">
          <MapPin size={18} />
          <span><strong>SS Ceramic &amp; Granite</strong> — TVM Main Road, Paraicode, Mulagumoodu Post, Kanyakumari District</span>
          <a href="https://maps.google.com/?q=Paraicode+Mulagumoodu+Kanyakumari"
            target="_blank" rel="noreferrer" className="contact-map-bar__btn">
            View on Google Maps →
          </a>
        </div>
      </section>
    </main>
  )
}