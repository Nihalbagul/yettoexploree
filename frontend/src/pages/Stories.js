import React from "react";
import Header from "../component/header";
import plus from "../img/bi_plus-lg.png";
import Footer from "../component/footer";

export default function Stories() {
  return (
    <div>
      <Header />
      <div className="w-[1219px] h-[592px] relative mx-[125px] mt-[50px]">
        <div className="w-[279px] h-[66px] left-0 top-[9px] absolute text-[#484848] text-[38px] font-extrabold font-montserrat">
          Stories
        </div>
        <div className="w-[392px] h-20 left-0 top-[75px] absolute">
          <div className="w-20 h-20 left-0 top-0 absolute">
            <div className="w-20 h-20 left-0 top-0 absolute bg-[#9a9a9a] rounded-full">
              <img src={plus} alt="img" className="mt-[28px] ml-[28px]"></img>
            </div>
            <div className="w-[25px] h-[25px] left-[28px] top-[27px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[157px] h-[26px] left-[104px] top-[16px] absolute text-[#484848] text-lg font-bold font-montserrat">
            Add Your Story
          </div>
          <div className="w-72 h-[26px] left-[104px] top-[43px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">
            Share your moments, experiences...
          </div>
        </div>

        <div className="w-[376px] h-[70px] left-0 top-[220px] absolute text-[22px] font-bold font-montserrat">
          <h1> All Stories </h1>
        </div>
        <div className="w-[376px] h-[70px] left-0 top-[279px] absolute">
          <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#c2c6cc] rounded-full overflow-hidden">
            <img
              src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[157px] h-[26px] left-[88px] top-[14px] absolute text-[#484848] text-lg font-bold font-montserrat">
            John Doberman
          </div>
          <div className="w-72 h-[26px] left-[88px] top-[41px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">
            Shared On: 12 Mar 2021
          </div>
        </div>
        <div className="w-[261px] h-[70px] left-0 top-[368px] absolute">
          <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#c2c6cc] rounded-full">
            <img
              src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[157px] h-[26px] left-[88px] top-[14px] absolute text-[#484848] text-lg font-bold font-montserrat">
            Harry Parker
          </div>
          <div className="w-[173px] h-[26px] left-[88px] top-[41px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">
            Shared On: 12 Mar 2021
          </div>
        </div>
        <div className="w-[261px] h-[70px] left-0 top-[458px] absolute">
          <div className="w-[70px] h-[70px] left-0 top-0 absolute bg-[#c2c6cc] rounded-full">
            <img
              src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[157px] h-[26px] left-[88px] top-[14px] absolute text-[#484848] text-lg font-bold font-montserrat">
            Peter Potter
          </div>
          <div className="w-[173px] h-[26px] left-[88px] top-[41px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">
            Shared On: 12 Mar 2021
          </div>
        </div>
        <div className="w-[774px] h-[574px] left-[533px] top-[6px] absolute bg-[#e8eaec] rounded-xl">
          <img
            src="https://via.placeholder.com/774x574"
            alt="large img"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <div className='mt-[255px]'><Footer/></div>
    </div>
  );
}
