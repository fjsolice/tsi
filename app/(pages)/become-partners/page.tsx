import BecomePartnerTopSection from "@/app/become-partners-components/becomePartnerTopSection";
import PartnerProductSection from "@/app/become-partners-components/PartnerProductSection";
import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";
import SecondSection from "@/app/become-partners-components/SecondSection";
import ThirdSection from "@/app/become-partners-components/ThirdSection";

const BecomePartner = () => {
    return (
        <div>
            <PartnersNavigationHeader/>
            <BecomePartnerTopSection />
            <SecondSection />
            <ThirdSection />
            <PartnerProductSection/>
            {/* Placeholder for the second section */}
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Ready to partner with us?
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Learn more about the partnership opportunities and how we can grow
                        together.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-200">
                        Explore Opportunities
                    </button>
                </div>
            </div>
            <PartnersFooter/>
        </div>
    );
};

export default BecomePartner;
