import React from "react";
import Send from "../img/ph_paper-plane.png"
const Newsletter = () => {
  return (
    <div className="w-full h-[169px] relative mt-[80px] mb-[50px]">
      <div className="w-full h-[228px] left-0 top-[-43px] absolute bg-[#18b7bb]/70" />
      <div className="w-full h-[79px] max-w-screen-xl mx-auto left-[130px] top-[19px] absolute">
        <div className="w-[238px] h-[68px] left-0 top-0 absolute">
          <div className="w-[238px] h-[27px] left-0 top-0 absolute text-[#484848] text-[32px] font-bold font-montserrat leading-tight">
            NEWSLETTER
          </div>
          <div className="w-[167px] h-[27px] left-0 top-[41px] mt-2 absolute text-[#484848] text-[17px] font-medium font-montserrat leading-tight">
            Stay Upto Date
          </div>
        </div>
        <div className="w-full max-w-[794px] h-[52px] left-[262px] top-[27px] absolute">
          <div className="w-full h-[52px] left-0 top-0 absolute bg-white rounded-[26px] border border-[#e8eaec]">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full mt-1 px-6 py-2 text-sm text-[#9a9a9a] font-medium font-montserrat rounded-[26px] outline-none"
            />
          </div>
        </div>
        <div className="w-12 h-12 left-[1004px] top-[29px] absolute">
          <div className="w-12 h-12 left-0 top-0 absolute bg-[#64cfd1] rounded-full flex justify-center items-center">
            <img src={Send} alt="send "></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
