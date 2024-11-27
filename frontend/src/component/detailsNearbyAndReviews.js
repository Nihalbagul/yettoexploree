import React from 'react'
import star from "../img/Vector (2).png"
import arrow from "../img/arrow.png"
import { Link } from 'react-router-dom'
import star1 from "../img/Vector (3).png"
export default function DetailsNearbyAndReviews() {
  return (
    <div>
<div className="w-[791px] h-[280px] relative mx-[125px] top-10 " >
  <div className="w-[255px] h-[29px] left-0 top-[4px] absolute text-[#484848] text-[22px] font-bold font-montserrat">Nearby Services</div>
  <div className="w-[242px] h-[106px] left-0 top-[69px] absolute">
    <div className="w-[242px] h-[106px] left-0 top-0 absolute bg-white rounded-md shadow" />
    <div className="w-[196px] h-[63px] left-[24px] top-[19px] absolute">
      <div className="w-[95px] h-3.5 left-[1px] top-[49px] absolute">
      </div>
      <div className="w-[174px] h-6 left-0 top-0 absolute text-[#484848] text-base font-bold font-montserrat">
  Grill Restro & Bar
</div>
<div className="w-[195px] h-[31px] left-[1px] top-[24px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">
  100 meters away
</div>

{/* 5 Stars displayed horizontally */}
<div className="flex left-[3px] top-[47px] absolute space-x-1">
  {Array(5).fill().map((_, index) => (
    <img key={index} src={star} alt="Star icon" />
  ))}
</div>

    </div>
  </div>
  <div className="w-[242px] h-[106px] left-[256px] top-[69px] absolute">
    <div className="w-[242px] h-[106px] left-0 top-0 absolute bg-white rounded-md shadow" />
    <div className="w-[95px] h-3.5 left-[25px] top-[68px] absolute">
    </div>
    <div className="w-[174px] h-6 left-[24px] top-[19px] absolute text-[#484848] text-base font-bold font-montserrat">Grill Restro & Bar</div>
    <div className="w-[195px] h-[31px] left-[25px] top-[43px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">100 meters away</div>
    <div className="flex left-[26px] top-[67px] absolute space-x-1">
  {Array(5).fill().map((_, index) => (
    <img key={index} src={star} alt="Star icon" />
  ))}
</div>
  </div>
  <div className="w-[242px] h-[106px] left-[512px] top-[69px] absolute">
    <div className="w-[242px] h-[106px] left-0 top-0 absolute bg-white rounded-md shadow" />
    <div className="w-[95px] h-3.5 left-[25px] top-[68px] absolute">
    </div>
    <div className="w-[174px] h-6 left-[24px] top-[19px] absolute text-[#484848] text-base font-bold font-montserrat">Grill Restro & Bar</div>
    <div className="w-[195px] h-[31px] left-[25px] top-[43px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">100 meters away</div>
    <div className="flex left-[28px] top-[67px] absolute space-x-1">
  {Array(5).fill().map((_, index) => (
    <img key={index} src={star} alt="Star icon" />
  ))}
</div>
  </div>
  <div className="w-[55px] h-[55px] left-[780px] top-[93px] absolute">
  {/* Circle */}
  <div className="w-[55px] h-[55px] left-0 top-0 absolute bg-[#9a9a9a] rounded-full" />
  
  {/* Arrow above the circle */}
  <div className="absolute left-[15px] top-[15px]">
    <Link to="">
    <img src={arrow} alt="Arrow icon"  /> </Link>
  </div>
</div>

  <div className="w-[189px] h-[54px] left-0 top-[226px] absolute">
    <div className="w-[189px] h-[54px] left-0 top-0 absolute bg-[#9a9a9a] rounded-[26px]" />
    <div className="w-[118px] h-[26px] left-[39px] top-[18px] absolute text-white text-[15px] font-bold font-montserrat"> <Link to=" ">Show On Map</Link></div>
  </div>
</div>
<div className="w-[802px] h-[665px] relative top-[106px] mx-[125px]">
  <div className="w-[106px] h-[29px] left-[-2px] top-[8px] absolute text-[#484848] text-[22px] font-bold font-montserrat">Reviews</div>
  <div className=" left-[112px] top-[13px] absolute text-[#484848] text-[22px] font-bold font-montserrat"><img src={star1} alt="star img"></img></div>
 
  <div className="w-10 h-[29px] left-[147px] top-[8px] absolute text-[#484848] text-[22px] font-bold font-montserrat">5.0</div>
  <div className="w-[366px] h-[23px] left-0 top-[61px] absolute">
    <div className="w-[100px] h-[23px] left-0 top-0 absolute text-[#484848] text-base font-medium font-montserrat">Amenities</div>
    <div className="w-[135px] h-1 left-[194px] top-[8px] absolute bg-[#9a9a9a] rounded-sm" />
    <div className="w-6 h-[21px] left-[342px] top-0 absolute text-[#484848] text-base font-semibold font-montserrat">5.0</div>
  </div>
  <div className="w-[366px] h-[23px] left-0 top-[97px] absolute">
    <div className="w-[140px] h-[23px] left-0 top-0 absolute text-[#484848] text-base font-medium font-montserrat">Communication</div>
    <div className="w-[135px] h-1 left-[194px] top-[8px] absolute bg-[#9a9a9a] rounded-sm" />
    <div className="w-6 h-[21px] left-[342px] top-0 absolute text-[#484848] text-base font-semibold font-montserrat">5.0</div>
  </div>
  <div className="w-[366px] h-[23px] left-0 top-[132px] absolute">
    <div className="w-[140px] h-[23px] left-0 top-0 absolute text-[#484848] text-base font-medium font-montserrat">Value for Money</div>
    <div className="w-[135px] h-1 left-[194px] top-[8px] absolute bg-[#9a9a9a] rounded-sm" />
    <div className="w-6 h-[21px] left-[342px] top-0 absolute text-[#484848] text-base font-semibold font-montserrat">5.0</div>
  </div>
  <div className="w-[367px] h-[23px] left-[411px] top-[61px] absolute">
    <div className="w-[100px] h-[23px] left-0 top-0 absolute text-[#484848] text-base font-medium font-montserrat">Hygiene</div>
    <div className="w-[135px] h-1 left-[195px] top-[8px] absolute bg-[#9a9a9a] rounded-sm" />
    <div className="w-6 h-[21px] left-[343px] top-0 absolute text-[#484848] text-base font-semibold font-montserrat">5.0</div>
  </div>
  <div className="w-[367px] left-[411px] top-[97px] absolute">
    <div className="w-[181px] h-[23px] left-0 top-0 absolute text-[#484848] text-base font-medium font-montserrat">Location of Property</div>
    <div className="w-[135px] h-1 left-[195px] top-[8px] absolute bg-[#9a9a9a] rounded-sm" />
    <div className="w-6 h-[21px] left-[343px] top-0 absolute text-[#484848] text-base font-semibold font-montserrat">5.0</div>
  </div>
  <div className="w-[382px] h-40 left-0 top-[202px] absolute">
    <div className="w-[238px] h-[70px] left-0 top-0 absolute">
      <div className="w-[151px] h-[29px] left-[87px] top-[13px] absolute text-[#484848] text-base font-bold font-montserrat">John Doberman</div>
      <div className="w-[95px] h-6 left-[87px] top-[38px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">Mar 12 2020</div>
      <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#9a9a9a] rounded-full" />
    </div>
    <div className="w-[382px] h-[70px] left-0 top-[90px] absolute text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
  <div className="w-[382px] h-40 left-[420px] top-[202px] absolute">
    <div className="w-[238px] h-[70px] left-0 top-0 absolute">
      <div className="w-[151px] h-[29px] left-[87px] top-[13px] absolute text-[#484848] text-base font-bold font-montserrat">John Doberman</div>
      <div className="w-[95px] h-6 left-[87px] top-[38px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">Mar 12 2020</div>
      <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#9a9a9a] rounded-full" />
    </div>
    <div className="w-[382px] h-[70px] left-0 top-[90px] absolute text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
  <div className="w-[382px] h-40 left-0 top-[393px] absolute">
    <div className="w-[238px] h-[70px] left-0 top-0 absolute">
      <div className="w-[151px] h-[29px] left-[87px] top-[13px] absolute text-[#484848] text-base font-bold font-montserrat">John Doberman</div>
      <div className="w-[95px] h-6 left-[87px] top-[38px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">Mar 12 2020</div>
      <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#9a9a9a] rounded-full" />
    </div>
    <div className="w-[382px] h-[70px] left-0 top-[90px] absolute text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
  <div className="w-[382px] h-40 left-[420px] top-[393px] absolute">
    <div className="w-[238px] h-[70px] left-0 top-0 absolute">
      <div className="w-[151px] h-[29px] left-[87px] top-[13px] absolute text-[#484848] text-base font-bold font-montserrat">John Doberman</div>
      <div className="w-[95px] h-6 left-[87px] top-[38px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">Mar 12 2020</div>
      <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#9a9a9a] rounded-full" />
    </div>
    <div className="w-[382px] h-[70px] left-0 top-[90px] absolute text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
  <div className="w-[242px] h-[60px] left-0 top-[591px]  absolute" >
    <div className="w-[242px] h-[60px] left-0 top-0  absolute bg-white rounded-md border border-[#484848]" />
    <div className="w-[169px] h-[22px] left-[37px] top-[22px] absolute text-[#484848] text-[15px] font-semibold font-montserrat"><Link to="">Show All 100 Reviews</Link></div>
  </div>
</div>
</div>
  )
}
