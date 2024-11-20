import React from 'react'
import Frame from '../img/Frame (1).png'
import Frame1 from '../img/Frame (3).png' 
export default function filter() {
  return (
    <div className="w-[295px] h-[1064px] px-6 py-5 rounded-[20px] border border-black/10 flex-col justify-start items-start gap-6 inline-flex mx-4">
  <div className="self-stretch justify-between items-center inline-flex">
    <div className="text-black text-xl font-semibold font-abhaya">Filters</div>
    <div className="w-6 h-6 px-[1.88px] py-[2.62px] justify-center items-center flex"  ><img src={Frame}alt="img"></img></div>
  </div>
  <div className="self-stretch h-[0px] border border-black/10"></div>
  <div className="self-stretch h-[220px] flex-col justify-start items-start gap-5 flex">
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-[#484848] text-base font-semibold font-montserrat">Resorts</div>
      <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5" ><img src={Frame1}alt="img"></img></div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-[#484848] text-base font-semibold font-montserrat">Farm stays</div>
      <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5" ><img src={Frame1}alt="img"></img></div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-[#484848] text-base font-semibold font-montserrat">Villas</div>
      <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5" ><img src={Frame1}alt="img"></img></div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-[#484848] text-base font-semibold font-montserrat">Homestays</div>
      <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5" ><img src={Frame1}alt="img"></img></div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-[#484848] text-base font-semibold font-montserrat">Tent Stays</div>
      <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5" ><img src={Frame1}alt="img"></img></div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-[#484848] text-base font-semibold font-montserrat">Others</div>
      <div className="w-5 h-5 px-[2.25px] pt-[5.25px] pb-[4.25px] origin-top-left -rotate-90 justify-center items-center flex mt-5" ><img src={Frame1}alt="img"></img></div>
    </div>
  </div>
  <div className="w-[247px] h-12 px-[54px] py-4 bg-black rounded-[62px] mt-[600px] justify-center items-center gap-3 inline-flex">
    <div className="text-white text-sm font-medium font-abhaya">Apply Filter</div>
  </div>
</div>
  )
}
