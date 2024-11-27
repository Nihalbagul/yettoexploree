import React from "react";
import Frame from "../img/Frame.png";
import Frame2 from "../img/Frame (2).png";

export default function PropertiesFilter() {
  return (
    <div style={{ marginLeft: "55px", marginTop: "60px" }}>
      <div className="flex items-center gap-10">
        {/* Breadcrumb Section */}
        <div className="flex items-center gap-2">
          <div className="text-black/60 text-base font-normal font-abhaya">
            Home
          </div>
          <img src={Frame} alt="Frame" />
          <div className="text-black text-base font-normal font-abhaya">
            Resorts
          </div>
        </div>

        {/* Filters and Search */}
        <div
          className="flex items-center gap-10"
          style={{ marginLeft: "100px" }}
        >
          {/* Filters */}
          <div className="flex items-center gap-4">
            {/* Resorts */}
            <div className="w-[56px] h-8 relative">
              <div className="w-10 h-[3px] left-0 top-[29px] absolute bg-[#484848]" />
              <div className=" left-0 top-0 absolute text-[#484848] text-base font-semibold font-['Montserrat']">
                Resorts
              </div>
            </div>
            <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6"></div>
            {/* Farm stays */}
            <div className="relative flex items-center">
              <div className="text-[#484848] text-base font-semibold font-montserrat">
                Farm stays
              </div>
              <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6"></div>
            </div>

            {/* Villas */}
            <div className="relative flex items-center">
              <div className="text-[#484848] text-base font-semibold font-montserrat">
                Villas
              </div>
              <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6"></div>
            </div>

            {/* Homestays */}
            <div className="relative flex items-center">
              <div className="text-[#484848] text-base font-semibold font-montserrat">
                Homestays
              </div>
              <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6"></div>
            </div>

            {/* More */}
            <div className="text-[#484848] text-base font-semibold font-montserrat">
              More
            </div>
          </div>

          {/* Search Bar */}
          <div
            className="w-[270px] h-12 px-4 py-3 bg-white rounded-[62px] border border-black flex items-center"
            style={{ marginLeft: "150px" }}
          >
            <div className="w-[27px] h-[27px] flex justify-center items-center">
              <img src={Frame2} alt="Search Icon" />
            </div>
            <input
              type="text"
              placeholder="Search for stays"
              className="w-full text-black text-xl font-normal font-abhaya outline-none pl-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
