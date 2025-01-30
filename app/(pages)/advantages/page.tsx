import AdvantagesEarnings from "@/app/advantages-components/advantagesEarnings";
import AdvantagesHero from "@/app/advantages-components/advantagesHero";
import AdvantagesSection4 from "@/app/advantages-components/advantagesSection4";
import AdvantagesSection3 from "@/app/advantages-components/advantagesSection3";
import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";


const Advantages: React.FC = () => {
    return (
        <div>
            <PartnersNavigationHeader/>
            <AdvantagesHero/>
            <AdvantagesEarnings/>
            <AdvantagesSection3/>
            <AdvantagesSection4/>
            <PartnersFooter/>
        </div>
    );
};

export default Advantages;
