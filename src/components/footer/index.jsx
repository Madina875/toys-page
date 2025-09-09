import {
  Facebook,
  Instagram,
  MessageCircleHeart,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#A5C926] h-[209px] w-[100%]">
      <div className="container h-[209px] w-[100%] text-white pt-[40px]">
        <div className="flex justify-between mb-[50px]">
          <p className="text-2xl">ToyStore</p>
          <ul className="flex gap-[20px]">
            <li>Home</li>
            <li>Catalog</li>
            <li>Delivery</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
          <div className="flex gap-[20px]">
            <Twitter /> <Facebook /> <Instagram /> <MessageCircleHeart />
            <Youtube />
          </div>
        </div>
        <hr className="h-[.5px]" />
        <div className="flex justify-between pt-[40px]">
          <p>Created with love by Elastic Themes</p>
          <p>Powered By Webflow Style Guide Licensing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
