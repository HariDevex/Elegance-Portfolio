import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { HeroSection } from './sections/HeroSection'
import { AnimatedStatsSection } from './sections/AnimatedStatsSection'
import { ServicesSection } from './sections/ServicesSection'
import { FAQSection } from './sections/FAQSection'
import { ClientLogosSection } from './sections/ClientLogosSection'
import { AboutSection } from './sections/AboutSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f'}}>
      <Navbar/>
      <HeroSection/>
      <AnimatedStatsSection/>
      <ServicesSection/>
      <FAQSection/>
      <ClientLogosSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <CertificationsSection/>
      <PortfolioSection/>
      <ContactSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default App
