import React, { useState } from "react";
import Frame3 from "../img/Frame (3).png";
function Card({ title, priceRange, address, imageUrl }) {
  const [liked, setLiked] = useState(false); // State to track if the card is liked

  const handleHeartClick = () => {
    setLiked((prevLiked) => !prevLiked); // Toggle the liked state
  };

  return (
    <div className="w-full max-w-[498px] p-4 relative">
      {/* Image Section */}
      <div className="relative w-[498px] h-[315px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Heart Icon */}
        <button
          className="absolute top-2 right-2 p-2 z-10"
          onClick={handleHeartClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 ${liked ? "text-[#9A9A9A]" : "text-[#E0E2E6]"}`}
            fill="currentColor"
            stroke="#9A9A9A"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Price at the Bottom of Image */}
        <div
          className="absolute bottom-2 left-2 text-sm font-medium font-montserrat"
          style={{ color: "#9a9a9a" }}
        >
          {priceRange}
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 text-xl font-bold text-[#484848]">{title}</div>

      {/* Address */}
      <div className="text-sm font-medium text-[#9a9a9a]">{address}</div>
    </div>
  );
}

function PropertyContainer() {
  const cards = [
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/498x315",
    },
  ];

  return (
    <div className="container" style={{marginLeft:"-30px"}}>
      {/* Text Lines (Showing 1-10 and Sort by) */}
      <div className="flex mt-6" style={{marginLeft:"150px"}}>
        {/* Showing 1-10 of 100 Products */}
        <div className="">
          <div className="text-black/60 text-base font-normal font-abhaya">
            Showing 1-10 of 100 Products
          </div>
        </div>

        {/* Sort by: Most Popular */}
        <div className="flex items-center" style={{ marginLeft: "500px" }}>
  <span className="text-black/60 text-xl font-normal font-abhaya">
    Sort by:{" "}
  </span>
  <span className="text-black text-xl font-medium font-abhaya">
    Most Popular
  </span>
  {/* Image next to "Most Popular" */}
  <img src={Frame3} alt="img" className="ml-2 " />
</div>

      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-[200px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            priceRange={card.priceRange}
            address={card.address}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyContainer;
