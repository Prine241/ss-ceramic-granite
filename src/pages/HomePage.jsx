import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Testimonials />
      <CTABanner />
      <Contact />
    </main>
  )
}