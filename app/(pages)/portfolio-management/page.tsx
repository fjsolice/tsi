import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import PortfolioFeature from "@/portfolio-components/portfolioFeature";
import PortfolioFeature3 from "@/portfolio-components/portfolioFeature3";
import PortfolioFeature4 from "@/portfolio-components/portfolioFeature4";
import HeroSection from "@/portfolio-components/portfolioManagementHero";
export default function PortfolioManagement() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <PortfolioFeature/>
      <PortfolioFeature3/>
      <PortfolioFeature4/>
      <Footer/>
    </div>
  );
}
