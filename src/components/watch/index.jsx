import React from "react";
import ted from "../../assets/ted.png";
import { Play } from "lucide-react";

const Watch = () => {
  return (
    <section
      className="bg-cover bg-center mt-[100px] h-[460px] w-[100%] flex items-center justify-center text-center text-white "
      style={{ backgroundImage: `url(${ted})` }}
    >
      <div className="gap-[20px] flex-col flex items-center justify-center">
        <h3 className="text-2xl">About The Shop</h3>
        <h3 className="text-5xl">Watch Our Story</h3>
        <p className="w-[700px]">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement, demographic, even the
          consumer’s mood.
        </p>
        <button className="w-[64px] h-[64px] bg-[#A5C926] place-items-center">
          <Play />
        </button>
      </div>
    </section>
  );
};

export default Watch;
