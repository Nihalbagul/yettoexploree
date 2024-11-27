import React from "react";

export default function DetailsImageContainer() {
  return (
    <div>
      <div className="w-[1334px] h-[540px] relative ml-14 mt-7">
        {/* Main large image */}
        <img
          className="w-[650px] h-[540px] left-0 top-0 absolute rounded-2xl object-cover"
          src="https://via.placeholder.com/650x540"
          alt="Main large"
        />

        
        {/* Top smaller images */}
        <img
          className="w-[360px] h-[260px] left-[670px]  absolute rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=260"
          alt="Top small 1"
        />
        <img
          className="w-[360px] h-[260px] left-[1050px]  absolute rounded-lg object-cover"
          src="https://via.placeholder.com/360x260"
          alt="Top small 2"
        />
        {/* Bottom smaller images */}
        <img
          className="w-[360px] h-[260px] left-[670px] top-[280px] absolute rounded-lg object-cover"
          src="https://via.placeholder.com/360x260"
          alt="Bottom small 1"
        />
        <img
          className="w-[360px] h-[260px] left-[1050px] top-[280px] absolute rounded-lg object-cover"
          src="https://via.placeholder.com/360x260"
          alt="Bottom small 2"
        />
        {/* Overlay text for "+2 More Photos" */}
        <div className="absolute left-[1140px] top-[390px] text-[#484848] text-5xl font-bold font-montserrat">
          +2
        </div>
        <div className="absolute left-[1210px] top-[390px] text-[#484848] text-sm font-semibold font-montserrat">
          More
        </div>
        <div className="absolute left-[1210px] top-[408px] text-[#484848] text-lg font-bold font-montserrat">
          Photos
        </div>
        
        {/* Overlay text for "logo and content" */}
        <div className="absolute top-[380px] left-6 w-[76px] h-[76px] rounded-full overflow-hidden" style={{ marginBottom: "170px", marginLeft: "30px", backgroundColor: "#C2C6CC" }}>
    <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" alt="Logo" className="w-full h-full object-cover" />
</div>

<div className="absolute left-36 top-[385px] w-[272px] h-[76px]" style={{ marginBottom: "150px" }}>
    <div className="absolute bottom-12 left-0.5 w-[88px] h-[23px] text-[#484848] text-xs font-medium font-montserrat">
        Listed By:
    </div>
    <div className="absolute top-5 left-0 w-[155px] h-[23px] text-[#484848] text-lg font-bold font-montserrat">
    John Doberman
    </div>
    <div className="absolute bottom-2 left-0 w-[175px] h-[23px] text-[#484848] text-base font-medium font-montserrat">
        For: $1000 - 5000 USD
    </div>
    </div>
    </div>

    </div>
  );
}
