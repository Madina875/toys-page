import React from "react";
import heroImage from "../../assets/herochilds.png";

const Hero = () => {
  return (
    <section
      className="h-[640px] w-[100%] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-[550px] bg-white rounded-[16px] flex flex-col items-center gap-[5px] justify-center h-[300px]">
        <p className="text-[#A5C926]">Say Hello to ToyStore!</p>
        <p className="text-[45px] w-[90%] text-center">
          Free Ecommerce Template for Webflow
        </p>
        <button className="w-[150px] h-[40px] bg-[#A5C926] rounded-[24px] text-white">
          Open catalog
        </button>
      </div>
    </section>
  );
};

export default Hero;
