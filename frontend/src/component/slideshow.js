import { useState } from "react";

function Slideshow() {
  const [cards, setCards] = useState([
    {
      title: "Well Furnished Apartment",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Apartment+1",
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
    },
    {
      title: "Comfortable Family Flat",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Flat+1",
      logo: "https://via.placeholder.com/50x50?text=Logo2",
    },
    {
      title: "Beach House Summer",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Beach+House",
      logo: "https://via.placeholder.com/50x50?text=Logo3",
    },
    {
      title: "Double Size Room",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Room+1",
      logo: "https://via.placeholder.com/50x50?text=Logo4",
    },
    {
      title: "Well Furnished Apartment",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Apartment+2",
      logo: "https://via.placeholder.com/50x50?text=Logo5",
    },
    {
      title: "Comfortable Family Flat",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Flat+2",
      logo: "https://via.placeholder.com/50x50?text=Logo6",
    },
    {
      title: "Beach House Summer",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Beach+House+2",
      logo: "https://via.placeholder.com/50x50?text=Logo7",
    },
    {
      title: "Double Size Room",
      address: "Demo address in India",
      image: "https://via.placeholder.com/300x200?text=Room+2",
      logo: "https://via.placeholder.com/50x50?text=Logo8",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < cards.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleHeartClick = (index) => {
    const updatedCards = [...cards];
    updatedCards[startIndex + index].liked =
      !updatedCards[startIndex + index].liked;
    setCards(updatedCards);
  };

  return (
    <div className="container mx-auto " style={{marginTop:"50px"}}>
      <div className="text-[#484848] text-4xl font-bold font-montserrat leading-[48px] mb-4">
        Explore India's <br/> Hidden Gems.
      </div>
      <div
        className="flex justify-between 
       mb-4 "
      >
        <div className="w-[140px] h-1.5 bg-[#484848] rounded-[3px]" />
        <div className="flex gap-2">
          {/* Left Arrow */}
          <button onClick={handlePrev} disabled={currentPage === 0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-12 ${
                currentPage === 0 ? "text-gray-300" : "text-black"
              }`}
              fill="none"
              viewBox="0 0 50 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M50 12H0m10-10L0 12l10 10"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button onClick={handleNext} disabled={endIndex >= cards.length}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-12 ${
                endIndex >= cards.length ? "text-gray-300" : "text-black"
              }`}
              fill="none"
              viewBox="0 0 50 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0 12h50m-10-10l10 10-10 10"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md w-[279px] h-[340px] overflow-hidden"
          >
            {/* Card Background Image */}
            <div
              className="absolute inset-0 bg-gray-200 bg-cover bg-center"
              style={{
                backgroundImage: card.image ? `url(${card.image})` : "none",
              }}
            />
            {/* Heart Icon */}
            <button
              className="absolute top-2 right-2 p-2  z-10"
              onClick={() => handleHeartClick(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${
                  card.liked ? "text-[#9A9A9A]" : "text-[#E0E2E6]"
                }`}
                fill="currentColor"
                stroke="#9A9A9A"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            {/* Text and Logo Overlay */}
            <div className="absolute bottom-0 left-0 right-0 text-white p-4 z-10 ">
              <div
                className="absolute bottom-6 left-4 w-12 h-12 rounded-full overflow-hidden"
                style={{ marginBottom: "50px", backgroundColor: "#C2C6CC" }}
              >
                <img
                  src={card.logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-bold text-[#484848] ">
                {card.title}
              </h2>
              <p className="text-sm text-[#9A9A9A]">{card.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
