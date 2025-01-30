import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";
import MoreRewards from "@/app/rewards-components/moreRewards";
import RewardsContactUs from "@/app/rewards-components/rewardsContactUs";
import RewardsHero from "@/app/rewards-components/rewardsHero";
import RewardsSteps from "@/app/rewards-components/rewardsSteps";


const Rewards: React.FC = () => {
    return (
        <div>
            <PartnersNavigationHeader/>
            <RewardsHero/>
            <RewardsSteps/>
            <MoreRewards/>
            <RewardsContactUs/>
            <PartnersFooter/>
        </div>
    );
};

export default Rewards;
