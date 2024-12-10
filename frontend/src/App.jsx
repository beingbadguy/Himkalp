import React, { useContext, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Newletter from "./components/Newletter";
import Faq from "./components/Faq";
import Popular from "./components/Popular";
import Gallery from "./components/Gallery";
import Product from "./components/Product";
import { UserContext } from "./Context/UserContext";
import ShopCategories from "./pages/ShopCategories";
import Hero from "./components/Hero";
import OffersMarquee from "./components/OffersMarquee";
import { useNavigate } from "react-router-dom";
import Hero2 from "./components/Hero2";

const App = () => {
  // const { wishlist } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="min-h-[73vh] mt-14 sm:mt-0 ">
      {/* <p>This is the react app</p> */}
      {/* <Gallery /> */}
      {/* <Hero /> */}
      <Hero2 />
      <ShopCategories />
      <OffersMarquee />
      <Product />
      <img
        src="https://images.unsplash.com/photo-1517646458010-ea6bd9f4a75f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-[400px] object-cover w-full brightness-75"
      />
      {/* <Popular /> */}
      <div className="flex flex-col items-center justify-center gap-1">
        <p className=" text-2xl sm:text-3xl my-4 mt-10">
          Frequently Asked Questions
        </p>
        <Faq />
        <Faq
          question=" WHAT IS AYURVEDA?"
          answer="Before allopathy and homeopathy came an ancient indian science called Ayurveda that relied on nature’s.Much in the previously allopathy and homeopathy came an ancient Indian science called Ayurveda that relied intensely in the region of flora and faunas bounty for its cures. Ayurveda is the conventional, period-tested science of healing bearing in mind herbs, fruits and minerals that are in abundance within your hands in flora and fauna. It is one of the oldest scientific medical systems in the world, taking into account a long compilation of clinical occupation of adeptly-known Ayurvedic sages in the tune of Dhanvantri, Sushruta and Charaka, whose legacy was substitute carried on the order of by Vaids or Ayurvedic doctors. The word Ayu denotes all aspects of simulation from birth to death. The word Veda means knowledge or learning. Hence Ayurveda indicates a science by which energy, in its totality, is extremely understood"
        />
        <Faq
          question="HOW IS AYURVEDA DIFFERENT FROM MODERN(ALLOPATHIC) MEDICINES?"
          answer="Modern medicine treats the symptoms in the unexpected term, rather than addressing the root cause of a uncomplainings hardship. Ayurveda, upon the proceed hand, makes its special contributions by addressing the uniqueness of each cooperative and by helping each body to heal from the root cause of the ailment. Thus, Ayurveda looks at a longer term innocent to tolerant hardship in comparison behind difficult medicine."
        />
        <Faq
          question="WHY IS AYURVEDA UNIQUE AS COMPARED TO OTHER SYSTEMS OF MEDICINE?"
          answer="It is one of the oldest scientific medical systems in the world, considering a long wedding album of clinical experience from Ayurvedic sages and scriptures. Other than flesh and blood being a form of medicine, Ayurveda is a quirk of energy that teaches us how to preserve healthy human systems and longevity. Ayurveda treats man as a combined  which is a scrap book of body, mind and soul. Therefore it is in reality a holistic and integrative medical system."
        />
        <Faq
          question="WHAT KIND OF AILMENTS DOES DR. VAIDYA’S CATER TO?"
          answer="Ayurveda has proven the whole vivacious for a serious majority of diseases which undertaking the body, including skin diseases, ailments of the bones and joints (e.g. Arthritis etc.), diabetes and additional hormone connected diseases, agitated system disorders taking into account paralysis, epilepsy etc. It has become popular in treatment of cases connected to decreased vitality. It is as well as obliging in ailments that are recurring and persistent, and have no definitive treatment in new systems of medicines.

As Globalizeherbal believed in 360 degree healing, we at Dr. Vaidyas are fortunate to have formulations that treat a multitude of ailments. In our stable we have Ayurvedic medicines for arthritis, diabetes, asthma, hypertension, cholesterol, indigestion, obesity, kidney problems, liver guidance, immunity, hair oil, shampoo tranquilizer, sore balm, male rejuvenation, allergies, piles etc."
        />
        <Faq
          question=" ARE AYURVEDIC MEDICINES USED FOR CHRONIC AILMENTS ONLY?"
          answer="A large number of people seek allopathy for a cure to an ailment. When the results are negative, they slant their view of Ayurveda. By this time the illness becomes chronic. Therefore there is a misconception that Ayurvedic drugs cannot be used for youngster ailments subsequent to chilly, cough, fever, acidity, aimless motions and adding aches and pains. At Dr. Vaidyas have formulations that treat such teenager, non-chronic ailments as dexterously."
        />
      </div>

      <Newletter />
    </div>
  );
};

export default App;
