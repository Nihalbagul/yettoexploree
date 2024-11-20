import React from "react";
import Header from "../component/header.js";
import Footer from "../component/footer.js";
import bannerimg from "../img/sreehari-devadas-Asnwfq5mQ3w-unsplash 1.png"
import roundsearch from "../img/round-search.png";
import Slideshow from "../component/slideshow.js";
import PickSlideshow from "../component/pick_slideshow.js";
import Collectioncard from "../component/collectioncard.js";
import mobile from "../img/icomoon-free_mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import PropertyImages from "../component/propertyimages.js";
import Cloud from "../img/cloudmountain2 1.png";
import NewsletterSignup from "../component/newsletter.js";

function Home() {
  return (
    <div className="flex flex-col ">
      <main className="flex-grow relative">
        {/* Banner Image with lowered brightness */}
        <div className="relative">
          <img
            src={bannerimg}
            alt="Banner"
            className="mx-auto w-full "
            style={{ filter: "brightness(70%)" }} // Apply low brightness to the banner image
          />

          {/* Header positioned on top */}
          <div className="absolute inset-x-0 top-0 z-10">
            <Header />
          </div>

          {/* Overlay text content */}
          <div
            className="absolute inset-x-0 top-[120px] z-20 flex flex-col items-start px-8 py-4"
            style={{ marginLeft: "100px", marginTop: "70px" }}
          >
            {/* Title with left alignment and space between lines */}
            <h1 className="text-[70px] font-bold text-[#E8EAEC] w-[1138px] h-[254px] leading-tight font-battambang">
              Explore the <br />
              <span style={{ display: "block", marginTop: "50px" }}>
                Unexplored Places in India
              </span>{" "}
              {/* 50px space between lines */}
            </h1>

            {/* Search bar centered below the text */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center z-20"
              style={{ marginTop: "400px" }}
            >
              {/* Search Bar */}
              <div className="bg-white rounded-[30px] p-4 flex items-center w-[794px] shadow-lg">
                {/* Location Field */}
                <div className="flex items-center ">
                  <div>
                    <p
                      className="text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Location
                    </p>
                    <input
                      type="text"
                      placeholder="Which city / State do you prefer?"
                      className="text-sm font-semibold bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Check In Field */}
                <div className="border-l border-gray-300 h-8 mx-4"></div>

                <div className="flex items-center  ">
                  <div>
                    <p
                      className="text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Check In
                    </p>
                    <input
                      type="text"
                      placeholder="Add Dates"
                      className="text-sm font-semibold bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Check Out Field */}
                <div
                  className="border-l border-gray-300 h-8 mx-2"
                  style={{ marginLeft: "-30px" }}
                ></div>

                <div className="flex items-center ">
                  <div>
                    <p
                      className="text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Check Out
                    </p>
                    <input
                      type="text"
                      placeholder="Add Dates"
                      className="text-sm font-semibold bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Guests Field */}
                <div className="border-l border-gray-300 h-8 mx-2"></div>

                <div className="flex items-center ">
                  <div>
                    <p
                      className="text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Guests
                    </p>
                    <input
                      type="text"
                      placeholder="Add Guests"
                      className="text-sm font-semibold bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Search Icon */}
                <div className="flex items-center ">
                  <div>
                    <img src={roundsearch} alt="Search Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slideshow */}

        <Slideshow />

        <PickSlideshow />

        {/* Browse for  */}

        <div
          className="w-[1292px] h-[427px] relative bg-[#1cb2f6] mx-auto"
          style={{ marginTop: "100px" }}
        >
          <div className="w-[1206px] h-[395px] left-[15px] top-[12px] absolute bg-black/10 rounded-xl ml-6" />
          <div className="w-[397px] h-[37px] left-[67px] top-[192px] absolute text-white text-base font-medium font-montserrat] leading-[52px]">
            Explore properties by their categories/types...
          </div>
          <div className="w-[328px] h-[103px] left-[70px] top-[82px] absolute text-white text-[38px] font-bold font-montserrat leading-[52px]">
            Browse For <br/> More Properties
          </div>
          <div className="w-[220px] h-[60px] left-[66px] top-[263px] absolute bg-[#484848] rounded-[30px] flex items-center justify-center">
            <a
              href=""
              className="text-white text-[15px] font-bold font-montserrat"
            >
              Find A Property
            </a>
          </div>
        </div>

        {/* collection comonent  */}

        <Collectioncard />

        {/* mobile part  */}
        <div className="w-[1227px] h-[481px] relative mx-auto">
          {/* Background Section */}
          <div className="w-[1206px] h-96 left-0 top-[71px] absolute bg-[#43feb6] rounded-xl" />

          {/* Play Store Button */}
          <div className="w-[172px] h-[52px] left-[57px] top-[311px] absolute flex items-center bg-white rounded-md">
            <FontAwesomeIcon icon={faGooglePlay} className=" ml-4 text-2xl" />
            <div className="ml-4 text-black text-[15px] font-semibold font-montserrat">
              PlayStore
            </div>
          </div>

          {/* Apple Store Button */}
          <div className="w-[172px] h-[52px] left-[242px] top-[311px] absolute flex items-center bg-white rounded-md">
            <FontAwesomeIcon icon={faApple} className=" ml-4 text-2xl" />
            <div className="ml-4 text-black text-[15px] font-semibold font-montserrat">
              AppleStore
            </div>
          </div>

          {/* Download App Text */}
          <div className="w-[387px] h-[103px] left-[57px] top-[136px] absolute text-black text-[38px] font-bold font-montserrat leading-[52px]">
            Download Our <br/> Mobile App
          </div>

          {/* Subtext */}
          <div className="w-[415px] h-[37px] left-[57px] top-[245px] absolute text-black text-base font-bold font-montserrat leading-[52px]">
            Available for free on these platforms
          </div>

          {/* Mobile Image */}
          <div className="w-[257px] h-auto right-[57px] top-[111px] absolute">
            <img
              src={mobile} // Replace with actual image URL
              alt="Mobile App Preview"
            />
          </div>
        </div>

        {/* PropertyImages part */}
        <PropertyImages />

        {/* Become a Host  */}

        <div
          className="w-[1242px] h-[427px] relative mx-auto"
          style={{ marginTop: "50px" }}
        >
          <div className="w-[1242px] h-[427px] left-[-3px] top-0 absolute bg-[#1bd0d4]" />
          <div className="w-[1206px] h-[395px] left-[15px] top-[12px] absolute bg-black/10 rounded-xl" />
          <div className="w-[410px] h-[37px] left-[67px] top-[192px] absolute text-[#292929] text-base font-medium font-montserrat leading-[52px]">
            Experience hassle-free hosting. Get started today!
          </div>
          <div className="w-[313px] h-[103px] left-[70px] top-[82px] absolute text-[#484848] text-[38px] font-bold font-montserrat leading-[52px]">
            List Your Property
          </div>
          <img
            className="w-[568px] h-[350px] left-[618px] top-[35px] absolute"
            src={Cloud}
          />
          <div className="w-[220px] h-[60px] left-[66px] top-[263px] absolute bg-[#484848] rounded-[30px]" />
          <div className="w-[136px] h-6 left-[117px] top-[284px] absolute">
            <a
              href="/become-a-host" // replace with your desired URL
              className="text-[#1bd0d4] text-[15px] font-bold font-montserrat"
            >
              Become A Host
            </a>
          </div>
        </div>

        <div
          className="w-[1238px] h-[497px] relative mx-auto"
          style={{ marginTop: "50px" }}
        >
          <div className="w-[472px] h-[103px] left-[20px] top-[17px] absolute text-[#484848] text-4xl font-bold font-montserrat leading-[48px]">
            Discover More About Property Rental
          </div>
          <div className="w-[140px] h-1.5 left-[23px] top-[144px] absolute bg-[#484848] rounded-[3px]" />
          <div className="w-[220px] h-[60px] left-[20px] top-[395px] absolute">
            <div className="w-[220px] h-[60px] left-0 top-0 absolute bg-[#484848] rounded-[30px]" />
            <div className="w-[123px] h-6 left-[55px] top-[21px] absolute text-white ">
              <a href=" " className="text-[15px] font-bold font-montserrat">
                Discover More
              </a>
            </div>
          </div>
          <div className="w-[691px] h-[129px] left-[20px] top-[187px] absolute text-[#9a9a9a] text-base font-normal font-montserrat leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </div>
          {/* Replace the gray box with an image */}
          <div className="w-[382px] h-[437px] left-[845px] top-[26px] absolute">
            <img
              src="https://via.placeholder.com/382x437" // Replace with your image URL

              alt="Property Image"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="w-[137px] h-7 left-[23px] top-[331px] absolute text-[#484848] text-[15px] font-bold font-montserrat">
            Ask A Question
          </div>
          <div className="w-[137px] h-5 left-[185px] top-[331px] absolute text-[#484848] text-[15px] font-bold font-montserrat">
            List A Property
          </div>
        </div>


        {/* NEWSLETTER */}

        <NewsletterSignup/>

      
        <Footer />
      </main>
    </div>
  );
}

export default Home;
