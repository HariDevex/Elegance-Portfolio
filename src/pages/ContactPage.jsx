import { PageHero } from '../components/PageHero'
import { ContactSection } from '../sections/ContactSection'

export const ContactPage = () => {
  return (
    <>
      <PageHero page="contact" layout="stacked" compact />
      <ContactSection />
    </>
  )
}