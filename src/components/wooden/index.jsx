import { ArrowRight } from "lucide-react";
import React from "react";
import flow from "../../assets/flow.png";

const Wooden = () => {
  return (
    <section className="mt-[50px]">
      <div className="container flex flex-col">
        <div className="flex justify-between place-items-center">
          <h2 className="text-3xl">Wooden Toys</h2>
          <div>
            <p className="flex">
              See All Toys <ArrowRight />
            </p>
            <hr className="border border-gray-200" />
          </div>
        </div>
        <hr className="my-[50px] border border-gray-200" />
        <div className="grid grid-cols-4 gap-[20px]">
          <div className="flex border border-gray-200 h-[400px] rounded-[16px] w-[350px] flex-col gap-[20px] items-center justify-center">
            <img src={flow} alt="" />
            <h3>Happy Flower</h3>
            <button className=" bg-[#A5C926] h-[40px] w-[140px] rounded-[20px] text-white">
              $38.00 USD
            </button>
          </div>{" "}
          <div className="flex border border-gray-200 h-[400px] rounded-[16px] w-[350px] flex-col gap-[20px] items-center justify-center">
            <img src={flow} alt="" />
            <h3>Happy Flower</h3>
            <button className=" bg-[#A5C926] h-[40px] w-[140px] rounded-[20px] text-white">
              $38.00 USD
            </button>
          </div>{" "}
          <div className="flex border border-gray-200 h-[400px] rounded-[16px] w-[350px] flex-col gap-[20px] items-center justify-center">
            <img src={flow} alt="" />
            <h3>Happy Flower</h3>
            <button className=" bg-[#A5C926] h-[40px] w-[140px] rounded-[20px] text-white">
              $38.00 USD
            </button>
          </div>{" "}
          <div className="flex border border-gray-200 h-[400px] rounded-[16px] w-[350px] flex-col gap-[20px] items-center justify-center">
            <img src={flow} alt="" />
            <h3>Happy Flower</h3>
            <button className=" bg-[#A5C926] h-[40px] w-[140px] rounded-[20px] text-white">
              $38.00 USD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wooden;
