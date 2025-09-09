import React from "react";
import teddy from "../../assets/teddy.png";

const More = () => {
  return (
    <section className="h-[680px] w-[100%]">
      <div className="container  flex items-center justify-center flex-col">
        <p className="text-[#A5C926] mb-[20px]">@ElasticThemes</p>
        <h2 className="text-3xl mb-[60px]">We're on Instagram!</h2>
        <div className="grid grid-cols-6 gap-[20px] mb-[30px]">
          <img src={teddy} alt="" />
          <img src={teddy} alt="" />
          <img src={teddy} alt="" />
          <img src={teddy} alt="" />
          <img src={teddy} alt="" />
          <img src={teddy} alt="" />
        </div>
        <button className="bg-[#A5C926] text-white h-[50px] w-[150px] rounded-[24px]">
          see more
        </button>
      </div>
    </section>
  );
};

export default More;
