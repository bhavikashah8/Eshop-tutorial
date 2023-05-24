import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
