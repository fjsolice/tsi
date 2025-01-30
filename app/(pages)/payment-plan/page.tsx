import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";
import PaymentPlanHero from "@/app/payment-plan-components/paymentPlanHero";
import PaymentPlans from "@/app/payment-plan-components/paymentPlans";
import ThirdPaymentPlans from "@/app/payment-plan-components/thirdPaymentPlans";

const PaymentPlan: React.FC = () => {
    return (
        <div>
            <PartnersNavigationHeader />
            <PaymentPlanHero />
            <PaymentPlans/>
            <ThirdPaymentPlans/>
            <PartnersFooter/>
            {/* Add more sections here in the future */}
        </div>
    );
};

export default PaymentPlan;
