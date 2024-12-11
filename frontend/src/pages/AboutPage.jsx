import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] mt-16 sm:mt-0  mb-10">
      <div className="mx-4  flex items-center gap-2 mt-4">
        <p
          className="cursor-pointer text-black hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <MdOutlineChevronRight />
        <p>About Us</p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div>
            <img
              src="./Karamveer.webp"
              alt="swamiji"
              className="h-72 w-full object-cover md:h-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-green-500">
              Yoga Guru Swami Karamveer Maharaj
            </h1>
            <p className="my-2">
              In the heart of Himkalp’s foundation lies the profound gratitude
              and respect for Yoga Guru Swami Karamveer Maharaj, whose teachings
              have been a beacon of light and wisdom. It is under his esteemed
              guidance that Ankit Yogi, the visionary behind Himkalp, has
              embarked on a transformative journey, mastering the ancient
              practices of Ayurveda and Yoga. Swami Karamveer Maharaj, not just
              a mentor but a spiritual architect, has meticulously sculpted the
              path for Himkalp, entrusting Ankit Yogi with the legacy of health
              and wellness. This special acknowledgment is a tribute to the guru
              who has been the cornerstone of our journey, shaping the very
              essence of Himkalp and its commitment to spreading the holistic
              wellness that Ayurveda and Yoga promise.
            </p>
            <h1 className="text-4xl font-bold text-green-500 mt-4">
              Our Areas of Work
            </h1>
            <p className="">
              Himkalp is an Ayurvedic products company that strives to bring the
              stated, period-tested goodness of Ayurveda to 21st century
              customers. Founded by Yogi Ankit, with the blessing of Karamveer
              Maharaj ji. After treating thousands of patients for more than a
              century and perfecting unique blends through cautious expertise,
              today, we have the funds for ascribed formulations for Ayurvedic
              proprietary medicine. Keeping in stock then our dedication to
              vibes, all our products are manufactured in-dwelling at our
              utterly own ISO 9001:2015, US FDA registered, GMP endorsed factory
              in Uttar pradesh.
            </p>
            <br />
            <p>
              At Himkalp we aim to make the respected science of Ayurveda
              attractive and accessible to advanced consumers both in India and
              worldwide. Each one of our products bears the mark Proudly Indian
              because we apportion that Ayurveda should influence India’s
              footprint and become a household lifestyle option for health and
              wellness, globally.
            </p>
            <h1 className="text-4xl font-bold text-green-500 mt-4">Details</h1>
            <div className="flex items-start flex-col">
              <p>Customer service: +91 9634178864</p> <p>Owner: Ankit Yogi</p>
              <p>Founded: December 2020 Headquarters </p>
              <p>location: Noida</p>
            </div>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-4xl font-bold text-green-500 mt-4">
            More About Us
          </h1>
          <p className="mt-2">
            Himkalp provides the genuine ayurvedic treatments to the world
            backed by a usual holistic admittance. Himkalp proudly offers its
            customers an exclusive assortment of light and definite products.
            Our products are made from natural ingredients, without chemical
            additives. Himkalp is in addition to accurately known for herbal
            ayurvedic products Manufacturing and Classical Ayurvedic Medicines
            including: Botanicals such as Height Growth, Chyanwanprash, Shilajit
            Vati, Aviral Curopathy. Oils when Lavender Oil – Aromatic Drums or
            Mint Extract Tea Tree Bark Ghee Milk tea Shampoo Leaves Water For
            Cosmetics Like Body Care The finest skin care formulations through
            globalized herbals company behind high environment results! Our
            Ayurveda product descent includes herbal capsules, herbal syrup,
            herbal powders, tablets, Herbal oils, and classical Ayurvedic
            medicine. Through these medicines, we aim to cure skin illness,
            female infertility, heart sickness, Weight Management, liver
            sickness, kidn-ey disease, respiratory, digestion-connected
            revolution, Male & Female Health Support & supplement lifestyle
            disorders. We have a range of products specially formulated for
            diabetes and weight dealing out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
