import {
  Facebook,
  Instagram,
  MessageCircleHeart,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const SubHeader = () => {
  return (
    <section className="h-[32px] bg-[#A5C926]">
      <div className="flex container justify-between place-items-center p-[8px] text-white">
        <div className="flex gap-[20px]">
          <p>Call Us: +1 213 974-5898</p>
          <p>Email: toystore@template.com</p>
        </div>
        <div className="flex gap-[20px]">
          <Twitter /> <Facebook /> <Instagram /> <MessageCircleHeart />
          <Youtube />
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
