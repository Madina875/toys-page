import { Send } from "lucide-react";
import React from "react";

const Subscribe = () => {
  return (
    <section className=" mt-[150px] h-[170px]">
      <div className="container border border-gray-200 rounded-[16px] bg-gray-100 flex items-center justify-between px-[50px]">
        <div className="flex place-items-center gap-[20px]">
          <button className="h-[60px] w-[60px]  bg-[#A5C926] text-white place-items-center">
            <Send />
          </button>
          <p className="w-[250px] text-[20px]">
            Subscribe to our newsletter & get 10% discount!
          </p>
        </div>
        <div className="flex gap-[20px]">
          <button className=" h-[50px] border border-gray-300 w-[350px] rounded-[24px]"></button>
          <button className=" bg-[#A5C926] h-[50px] w-[150px] rounded-[24px]"></button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
