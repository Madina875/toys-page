import React from "react";
import child from "../../assets/child.png";

const Available = () => {
  return (
    <section>
      <div className="container flex h-[420px] items-center justify-between gap-[50px]">
        <div className="w-[600px]">
          <h2 className="text-4xl mb-[40px]">Available for FREE!</h2>
          <p>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <button className="text-white bg-[#A5C926] rounded-[24px] mt-[30px] h-[40px] w-[150px]">
            get it now!
          </button>
        </div>
        <div className="">
          <img className="h-[500px]" src={child} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Available;
