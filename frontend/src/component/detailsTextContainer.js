import React from "react";
import bed from "../img/bed (1).png";
import vector from "../img/Vector (1).png";
import car from "../img/Group 1.png";
import pet from "../img/pet icon (1).png";
import heart from "../img/Heart.png";
import share from "../img/share.png";
import kitchen from "../img/kitchen.png";
import air from "../img/Group.png";
import washer from "../img/laundry 1.png";
import tv from "../img/tv.png";
import wifi from "../img/wifi.png";
import balcony from "../img/balcony 1.png";
import safety from "../img/healthicons_health-data-security-outline.png";
import map from "../img/Large Map.png";
import { Link } from "react-router-dom";
export default function DetailsPage() {
  return (
    <div>
      <div className="flex justify-between mx-[125px] mt-8">
        {/* Details Text Container */}
        <div className="w-[745px]">
          <div className="w-[745px] h-[97px] relative">
            <div className="relative">
              {/* Title */}
              <div className="w-[423px] h-[41px] absolute top-[19px] text-[#484848] text-[28px] font-bold font-montserrat">
                Well Furnished Apartment
              </div>

              {/* Address */}
              <div className="w-[215px] h-[25px] absolute top-[70px] text-[#9a9a9a] text-base font-medium font-montserrat">
                100 Smart Street, LA, USA
              </div>

              {/* Images side by side */}
              <div className="absolute top-[30px] left-[650px] flex items-center gap-[20px]">
                <img src={heart} alt="Heart icon" />
                <img src={share} alt="Share icon" />
              </div>
            </div>
          </div>

          {/* Apartment Features */}
          <div className="w-[745px] h-[179px] relative mt-8">
            <div className="w-44 h-40 left-0 top-[12px] absolute bg-[#eff0f2] rounded-lg" />
            <div className=" left-[67px] top-[59px] absolute">
              <img src={bed} alt="bed image" />
            </div>
            <div className="w-[108px] h-[22px] left-[39px] top-[110px] absolute text-[#484848] text-base font-semibold font-montserrat">
              3 Bedrooms
            </div>
            <div className="w-44 h-40 left-[190px] top-[12px] absolute bg-[#eff0f2] rounded-lg"></div>
            <div className="w-[108px] h-[22px] left-[226px] top-[110px] absolute text-[#484848] text-base font-semibold font-montserrat">
              2 Bathrooms
            </div>
            <div className="w-44 h-40 left-[379px] top-[12px] absolute bg-[#eff0f2] rounded-lg" />
            <div className=" left-[256px] top-[59px] absolute">
              <img src={vector} alt="vector image" />
            </div>
            <div className="w-[37px] h-[30.27px] left-[454px] top-[59px] absolute">
              <img src={car} alt="car image" />
            </div>
            <div className="w-[123px] h-[22px] left-[411px] top-[110px] absolute text-[#484848] text-base font-semibold font-montserrat">
              3 Cars/2 Bikes
            </div>
            <div className="w-44 h-40 left-[569px] top-[12px] absolute bg-[#eff0f2] rounded-lg" />
            <div className="w-[39.37px] h-[33.75px] left-[636px] top-[59px] absolute">
              <img src={pet} alt="pet image" />
            </div>
            <div className="w-[123px] h-[22px] left-[595px] top-[110px] absolute text-[#484848] text-base font-semibold font-montserrat">
              0 Pets Allowed
            </div>
          </div>

          {/* Apartment Description */}
          <div className="w-[785px] h-52 relative mt-8">
            <div className="w-[363px] h-[29px] left-[17px] top-[15px] absolute text-[#484848] text-[22px] font-bold font-montserrat">
              Apartment Description
            </div>
            <div className="w-[745px] h-[86px] left-[16px] top-[58px] absolute text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="w-[745px] h-[86px] left-[16px] top-[134px] absolute text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="w-[382px] h-[436px] relative">
          <div className="w-[382px] h-[436px] left-0 top-6 absolute bg-white rounded-[10px] shadow" />
          <div className="w-[324px] h-[60px] left-[30px] top-[248px] absolute">
            <div className="w-[324px] h-[60px] left-0 top-0 absolute bg-[#484848] rounded-[30px]" />
            <div className="w-[111px] h-6 left-[117px] top-[22px] absolute text-white text-[15px] font-bold font-montserrat">
              <a href="" alt="link">
                Reserve Now
              </a>
            </div>
          </div>
          <div className="w-[191px] h-[27px] left-[31px] top-[36px] absolute text-[#484848] text-[22px] font-bold font-montserrat">
            $ 1000 - $ 2000
          </div>
          <div className="w-[181px] h-7 left-[31px] top-[128px] absolute text-[#9a9a9a] text-base font-medium font-montserrat">
            Short Period: $ 1000
          </div>
          <div className="w-[197px] h-7 left-[31px] top-[158px] absolute text-[#9a9a9a] text-base font-medium font-montserrat">
            Medium Period: $ 2000
          </div>
          <div className="w-[191px] h-7 left-[31px] top-[189px] absolute text-[#9a9a9a] text-base font-medium font-montserrat">
            Long Period: $ 2000
          </div>
          <div className="w-[167px] h-[26px] left-[31px] top-[352px] absolute">
            <div className="w-[135px] h-6 left-[32px] top-[2px] absolute text-[#484848] text-[15px] font-semibold font-montserrat">
              Property Inquiry
            </div>
          </div>
          <div className="w-[134px] h-[26px] left-[221px] top-[352px] absolute">
            <div className="w-[104px] h-6 left-[30px] top-[2px] absolute text-[#484848] text-[15px] font-semibold font-montserrat">
              Contact Host
            </div>
          </div>
          <div className="w-[325px] h-[0px] left-[30px] top-[91px] absolute border border-[#e0e2e6]"></div>
        </div>
      </div>
      <div className="w-[595px] h-[302px] relative mx-[125px]">
        {/* Title */}
        <div className="w-[261px] h-[29px] left-0 top-[9px] absolute text-[#484848] text-[22px] font-bold  font-milliard">
          Offered Amenities
          <br />
        </div>

        {/* Kitchen */}
        <div className="w-6 h-[22.79px] left-0 top-[63.63px] absolute">
          <img
            src={kitchen}
            alt="Kitchen Icon"
            className="left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[97px] h-[23px] left-[42px] top-[69px] absolute text-[#484848] text-base font-medium font-milliard">
          Kitchen
        </div>

        {/* Air Conditioner */}
        <div className="w-6 h-[22.79px] left-0 top-[110px] absolute">
          <img
            src={air}
            alt="Air Conditioner Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[133px] h-[23px] left-[42px] top-[115px] absolute text-[#484848] text-base font-medium  font-milliard">
          Air Conditioner
        </div>

        {/* Television with Netflix */}
        <div className="w-6 h-[22.79px] left-[343px] top-[63.63px] absolute">
          <img
            src={tv}
            alt="Television Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[185px] h-[23px] left-[385px] top-[69px] absolute text-[#484848] text-base font-medium  font-milliard">
          Television with Netflix
        </div>

        {/* Free Wireless Internet */}
        <div className="w-6 h-[22.79px] left-[343px] top-[112px] absolute">
          <img
            src={wifi}
            alt="WiFi Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[185px] h-[23px] left-[385px] top-[118px] absolute text-[#484848] text-base font-medium  font-milliard">
          Free Wireless Internet
        </div>

        {/* Washer */}
        <div className="w-6 h-[22.79px] left-0 top-[157px] absolute">
          <img
            src={washer}
            alt="Washer Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[133px] h-[23px] left-[42px] top-[162px] absolute text-[#484848] text-base font-medium  font-milliard">
          Washer
        </div>

        {/* Balcony or Patio */}
        <div className="w-6 h-[22.79px] left-[343px] top-[157px] absolute">
          <img
            src={balcony}
            alt="Balcony Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[137px] h-[23px] left-[385px] top-[165px] absolute text-[#484848] text-base font-medium  font-milliard">
          Balcony or Patio
        </div>

        {/* Show All Amenities Button */}
        <div className="w-[242px] h-[60px] left-0 top-[227px] absolute">
          <div className="w-[242px] h-[60px] left-0 top-0 absolute bg-white rounded-md border border-[#484848]" />
          <div className="w-[184px] h-[22px] left-[37px] top-[22px] absolute text-[#484848] text-[15px] font-semibold font-montserrat">
            <a href="" alt="link">
              Show All 10 Amenities
            </a>
          </div>
        </div>
      </div>

      <div className="w-[588px] h-[165px] relative mx-[125px]">
        <div className="w-6 h-[22.79px] left-[1px] top-[73px] absolute">
          <img
            src={safety}
            alt="safety Icon"
            className=" left-[1.37px] top-1 absolute"
          />
        </div>
        <div className="w-[272px] h-[29px] left-[px] top-[19px] absolute text-[#484848] text-[22px] font-bold font-montserrat">
          Safety and Hygiene
        </div>
        <div className="w-6 h-[22.79px] left-[1px] top-[117px] absolute">
          <img
            src={safety}
            alt="safety Icon"
            className=" left-[1.37px] top-1 absolute"
          />
        </div>
        <div className="w-[130px] h-[23px] left-[39px] top-[79px] absolute text-[#484848] text-base font-medium font-montserrat">
          Daily Cleaning
        </div>
        <div className="w-6 h-[22.79px] left-[343px] top-[73px] absolute">
          <img
            src={safety}
            alt="safety Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[255px] h-[23px] left-[39px] top-[125px] absolute text-[#484848] text-base font-medium font-montserrat">
          Disinfections and Sterilizations
        </div>
        <div className="w-6 h-[22.79px] left-[343px] top-[117px] absolute">
          <img
            src={safety}
            alt="safety Icon"
            className=" left-[0.37px] top-1 absolute"
          />
        </div>
        <div className="w-[185px] h-[23px] left-[382px] top-[79px] absolute text-[#484848] text-base font-medium font-montserrat">
          Fire Extinguishers
        </div>
        <div className="w-[185px] h-[23px] left-[382px] top-[128px] absolute text-[#484848] text-base font-medium font-montserrat">
          Smoke Detectors
        </div>
      </div>
      {/* map   */}
      <div className="mx-[125px]">
        <Link to="">
          <img src={map} alt="img" />{" "}
        </Link>
      </div>
    </div>
  );
}
