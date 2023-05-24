import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>From Farm to Table: Experience the Freshness and Delight of Our Dairy Goodness!</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 MilkLink. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
