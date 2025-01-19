import AdmissionPDFOverview from "@/app/sections-components/admission-pdf-overview"
import AdmissionQuickFacts from "@/app/sections-components/admission-quick-facts"
import AdmissionsSteps from "@/app/sections-components/admission-steps"
import TopSection from "@/app/sections-components/admission-top-section"
import Footer from "@/app/ui-components/footer"
import Header from "@/app/ui-components/header"

const Admission = () => {
  return (
    <div>
        <Header/>
        <TopSection/>
        <AdmissionsSteps/>
        <AdmissionPDFOverview/>
        <AdmissionQuickFacts/>
        <Footer/>
    </div>
  )
}

export default Admission