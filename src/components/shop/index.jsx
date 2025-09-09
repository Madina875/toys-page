import React from "react";

const Shop = () => {
  return (
    <section className=" mt-[100px] h-[250px] w-[100%] ">
      <div className="container flex gap-[20px] py-[40px] px-[100px] text-white">
        <div className="bg-[#FFC12C] flex flex-[50%] border flex-col items-center justify-center rounded-[16px]">
          <h3 className="text-3xl">Stuffed Animals</h3>
          <button className=" bg-white text-black w-[130px] h-[40px] rounded-[20px] mt-[20px] a-btns">
            shop now
          </button>
        </div>
        <div className=" bg-[#FB416B] flex flex-[50%]  border flex-col items-center justify-center rounded-[16px]">
          <h3 className="text-3xl">Wooden Toys</h3>
          <button className=" bg-white text-black w-[130px] h-[40px] rounded-[20px] mt-[20px] a-btns">
            shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
