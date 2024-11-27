import React, { useState } from 'react';
import Frame from '../img/Frame (1).png';
import Frame1 from '../img/Frame (3).png';
import Filter from '../img/filter-icon.png';

export default function FilterComponent() {
  const [showDropdown, setShowDropdown] = useState(false); // To toggle the dropdown menu

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div>
      
      {/* Filter button */}
      {!showDropdown && (
  <div className="w-[146px] h-12 relative flex justify-center items-center ml-12 mt-2 " style={{marginBottom:"100px"}}>
    <div
      className="w-[146px] h-12 bg-white rounded-3xl border border-[#9a9a9a] flex items-center justify-center px-4 cursor-pointer"
      onClick={toggleDropdown}
    >
      <img
        src={Filter}
        alt="Filter Icon"
        className=" mr-4"
      /> 
      <div className="text-[#484848] text-sm font-semibold font-montserrat">
        Filters
      </div>
    </div>
  </div>
)}


      {/* Dropdown menu */}
      {showDropdown && (
        <div className="w-[295px] h-[1064px] px-6 py-5 rounded-[20px] border border-black/10 flex-col justify-start items-start gap-6 inline-flex mx-4">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-black text-xl font-semibold font-abhaya">
              Filters
            </div>
            <div
              className="w-6 h-6 px-[1.88px] py-[2.62px] justify-center items-center flex cursor-pointer"
              onClick={toggleDropdown}
            >
              <img src={Frame} alt="Close Icon" />
            </div>
          </div>
          <div className="self-stretch h-[0px] border border-black/10"></div>
          <div className="self-stretch h-[220px] flex-col justify-start items-start gap-5 flex">
            {['Resorts', 'Farm stays', 'Villas', 'Homestays', 'Tent Stays', 'Others'].map((category, index) => (
              <div
                key={index}
                className="self-stretch justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-[#484848] text-base font-semibold font-montserrat">
                  {category}
                </div>
                <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5">
                  <img src={Frame1} alt="Dropdown Icon" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-[247px] h-12 px-[54px] py-4 bg-black rounded-[62px] mt-6 justify-center items-center gap-3 inline-flex" style={{marginTop:"600px"}}>
            <div className="text-white text-sm font-medium font-abhaya">
              Apply Filter
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
