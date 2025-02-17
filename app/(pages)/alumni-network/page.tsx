import LocalImpactSection from '@/alumni-components/alumni-local-impacts'
import TestimonialSection from '@/alumni-components/alumni-testimonial-section'
import AlumniHero from '@/alumni-components/AlumniHero'
import Footer from '@/app/ui-components/footer'
import Header from '@/app/ui-components/header'

 const AlumniNetwork = () => {
  return (
    <div>
        <Header/>
        <AlumniHero/>
        <LocalImpactSection/>
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default AlumniNetwork;
