import React from "react";
import Header from "../component/header.js";
import Propertiesfilter from "../component/propertiesfilter.js";
import Filter from "../component/filter.js";
import PropertyContainer from "../component/propertycontainer.js";
import Footer from "../component/footer.js";
import Newsletter from "../component/newsletter.js"; 
function properties() {
  return (
    <div>
      <Header />
      <Propertiesfilter />
      <div className="flex">
        {/* Filter Component */}
        <div>
          <Filter />
        </div>

        {/* Image Container */}
        <div className="flex-1">
          <PropertyContainer />
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default properties;
