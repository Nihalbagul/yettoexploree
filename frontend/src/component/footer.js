import React from "react";
import yetlogo from "../img/footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="p-6 text-[#484848] mx-auto"
      style={{
        backgroundColor: "#EDEDED",
        
        
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="col-span-1 md:col-span-2 lg:col-span-1"
            style={{ marginTop: "50px", }}
          >
            <img src={yetlogo} alt="Your Logo" />
            <p style={{ color: "#9A9A9A" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex mt-4">
              <div
                className="flex items-center justify-center mr-4"
                style={{
                  backgroundColor: "#E0E2E6",
                  width: "172px",
                  height: "52px",
                  borderRadius: "8px",
                }}
              >
                <a href="#" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    style={{ color: "#484848" }}
                  />
                  <span className="ml-2" style={{ color: "#484848" }}>
                    PlayStore
                  </span>
                </a>
              </div>

              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "#E0E2E6",
                  width: "172px",
                  height: "52px",
                  borderRadius: "8px",
                }}
              >
                <a href="#" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faAppStoreIos}
                    style={{ color: "#484848" }}
                  />
                  <span className="ml-2" style={{ color: "#484848" }}>
                    AppStore
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-span-1 md:col-span-1 lg:col-span-1"
            style={{ marginLeft: "50px" }}
          >
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: "#484848", marginTop: "60px" }}
            >
              COMPANY
            </h4>
            <ul style={{ color: "#484848" }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">About Us</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">Legal Information</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">Contact Us</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: "#484848", marginTop: "60px" }}
            >
              HELP CENTER
            </h4>
            <ul style={{ color: "#484848", lineHeight: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">Find a Property</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">How To Host?</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">Why Us?</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">FAQs</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#">Rental Guides</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: "#484848", marginTop: "60px" }}
            >
              CONTACT INFO
            </h4>
            <ul style={{ color: "#484848" }}>
              <li style={{ marginBottom: "10px" }}>Phone: 1234567890</li>
              <li style={{ marginBottom: "10px" }}>Email: company@email.com</li>
              <li style={{ marginBottom: "10px" }}>
                Location: 100 Smart Street, LA, USA
              </li>
            </ul>
            <div className="flex mt-4">
              <a href="#" style={{ marginRight: "26px" }}>
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  size="2xl"
                  style={{ color: "#484848" }}
                />
              </a>
              <a href="#" style={{ marginRight: "26px" }}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2xl"
                  style={{ color: "#484848" }}
                />
              </a>
              <a href="#" style={{ marginRight: "26px" }}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2xl"
                  style={{ color: "#484848" }}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  style={{ color: "#484848" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 font-semibold" style={{ color: "#484848" }}>
          <div className="flex justify-between">
            <p>&copy; 2024 Midlead Technovations | All rights reserved</p>
            <p>Created with love by Midlead</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
