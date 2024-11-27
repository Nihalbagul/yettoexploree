import React from "react";
import {Link} from "react-router-dom";
import Header from "./header";
export default function HostPageContent() {
  return (
    <div>
    <div className="bg-cover w-full h-[711px] relative">
      <div className="bg-cover w-full h-[711px] left-0 top-0 absolute bg-[#eff0f2]" />
      <div className="absolute inset-x-0 top-0 z-10">
            <Header />
          </div>

      <div className="w-[220px] h-[60px] left-[80px] top-[550px] absolute">
        <div className="w-[220px] h-[60px] left-0 top-0 absolute bg-[#484848] rounded-[30px]" />
        <div className="w-[132px] h-[17px] left-[49px] top-[21px] absolute text-white text-[15px] font-bold font-['Montserrat']">
         <Link to="">Lets Get Started</Link>  
        </div>
      </div>
      <div className="w-[691px] h-[65px] left-[80px] top-[464px] absolute text-[#9a9a9a] text-base font-normal font-['Montserrat'] leading-relaxed">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias.
      </div>
      <div className="w-[527px] h-[75px] left-[82px] top-[389px] absolute text-[#484848] text-[46px] font-bold font-['Montserrat']">
        Try Hosting With Us
      </div>
      
    </div>
    {/* some title here  */}
    <div className="w-[1206px] h-[450px] relative mx-[125px] " style={{marginTop:"90px"}}>
  {/* Text Content Section */}
  <div className="w-[588px] h-[386px] absolute left-[618px] top-[19px]">
    <div className="w-[588px] h-[100px] absolute left-0 top-[77px] text-[#9a9a9a] text-base font-normal font-['Montserrat'] leading-relaxed">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
    </div>
    <div className="w-[588px] h-[100px] absolute left-0 top-[177px] text-[#9a9a9a] text-base font-normal font-['Montserrat'] leading-relaxed">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
    </div>
    <div className="w-[588px] h-[100px] absolute left-0 top-[286px] text-[#9a9a9a] text-base font-normal font-['Montserrat'] leading-relaxed">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
    </div>
    <div className="w-[527px] h-[68px] absolute left-0 top-0 text-[#484848] text-[46px] font-bold font-['Montserrat']">
      Some Title Here
    </div>
  </div>

  {/* Image Section */}
  <div className="w-[574px] h-[450px] absolute left-0 top-0 rounded-xl overflow-hidden">
    <img
      src="https://via.placeholder.com/574x450"
      // alt="img"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>

{/* {Hosting tips  } */}
<div className="w-[1251px] h-[775px] relative mx-[105px]">
  <div className="w-[550px] h-[63px] left-[22px] top-[103px] absolute text-[#484848] text-[46px] font-bold font-['Montserrat'] leading-[48px]">Hosting Tips & Guides</div>
  <div className="w-[382px] h-[431px] left-[24px] top-[209px] absolute">
    <div className="w-[382px] h-[340px] left-0 top-[8px] absolute rounded-xl" >
    <img
      src="https://via.placeholder.com/382x340"
      alt="img"
      className="w-full h-full object-cover rounded-xl"
    />
    </div>
    <div className="w-[346px] h-6 left-0 top-[378px] absolute text-[#484848] text-lg font-bold font-['Montserrat']">Choose the right property!</div>
    <div className="w-[100px] h-6 left-0 top-[407px] absolute text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">Economy</div>
  </div>
  <div className="w-[382px] h-[431px] left-[436px] top-[209px] absolute">
    <div className="w-[382px] h-[340px] left-0 top-[8px] absolute  rounded-xl" ><img
      src="https://via.placeholder.com/382x340"
      alt="img"
      className="w-full h-full object-cover rounded-xl"
    />
    </div>
    <div className="w-[346px] h-6 left-0 top-[378px] absolute text-[#484848] text-lg font-bold font-['Montserrat']">Best environment for rental</div>
    <div className="w-[136px] h-6 left-0 top-[407px] absolute text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">Lifestyle</div>
  </div>
  <div className="w-[382px] h-[431px] left-[849px] top-[209px] absolute">
    <div className="w-[382px] h-[340px] left-0 top-[8px] absolute  rounded-xl" ><img
      src="https://via.placeholder.com/382x340"
      alt="img"
      className="w-full h-full object-cover rounded-xl"
    />
    </div>
    <div className="w-[336px] h-6 left-0 top-[378px] absolute text-[#484848] text-lg font-bold font-['Montserrat']">Boys Hostel Apartment</div>
    <div className="w-[375px] h-6 left-0 top-[407px] absolute text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">Property</div>
  </div>
  <div className="w-[125px] h-6 left-[573px] top-[715px] absolute text-white text-[15px] font-bold font-['Montserrat']">View All Blogs</div>
</div>
    </div>
  );
}
