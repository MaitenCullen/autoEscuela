
import Header from './components/Header'
import Carousel from './components/Carousel'
import Services from './pages/Services'
import TestimonialSection from './pages/TestimonialsSection'
import Footer from './pages/Footer'
import ContactSection from './pages/ContactSection'

export default function Home() {
  return (
    <main className="bg-white h-full w-full">
      <Header/>
      <Carousel/>
      <Services/>
      <TestimonialSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}
