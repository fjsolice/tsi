import Features from "./ui-components/features ";
import FeaturesServices from "./ui-components/featuresServices";
import Footer from "./ui-components/footer";
import Header from "./ui-components/header";
import Hero from "./ui-components/hero";
import SearchPrograms from "./ui-components/searchPrograms";
import SolutionsForOrganizations from "./ui-components/solutionsForOrganizations";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <SearchPrograms/>
      <FeaturesServices/>\
      <SolutionsForOrganizations/>
      <Footer/>
    </div>
  );
}
