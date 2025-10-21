import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeForm from "../components/SubscribeForm";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever , your one-stop destination for We believe in
            making online shopping simple, enjoyable, and secure. Founded in
            2024, our mission is to provide high-quality products at competitive
            prices while delivering an exceptional customer experience.
          </p>
          <p>
            At Forever, we’re passionate about bringing you the best in making
            online shopping easy and accessible. Established in 2024, we set out
            with a clear mission: to offer top-quality products at unbeatable
            prices
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            all while providing exceptional customer service. We take pride in
            our carefully curated collection that meets the needs of modern
            shoppers. Whether you're browsing our site or making a purchase,
            we’re here to ensure your experience is smooth and enjoyable. Thank
            you for trusting Forever where your satisfaction is our priority!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality assurance:</b>
          <p className="text-gray-600">
            We believe that great value starts with uncompromising quality, and
            our team carefully selects every item to meet the highest standards.
            At Forever, we strive to give our customers a seamless shopping
            experience
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We believe that great value starts with uncompromising quality, and
            our team carefully selects every item to meet the highest standards.
            At Forever, we strive to give our customers a seamless shopping
            experience
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We believe that great value starts with uncompromising quality, and
            our team carefully selects every item to meet the highest standards.
            At Forever, we strive to give our customers a seamless shopping
            experience
          </p>
        </div>
      </div>
      <SubscribeForm />
    </div>
  );
};

export default About;