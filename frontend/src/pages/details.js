import React from 'react'
import Header from '../component/header'
import DetailsImageContainer from '../component/detailsImageContainer'
import DetailsTextContainer from '../component/detailsTextContainer'
import DetailsNearbyAndReviews from '../component/detailsNearbyAndReviews'
import Newsletter from '../component/newsletter'
import Footer from '../component/footer'
export default function details() {
  return (
    <div>
        <Header/>
        <DetailsImageContainer/>
        <DetailsTextContainer/>
        <DetailsNearbyAndReviews/>
       <div style={{marginTop:"250px"}}> <Newsletter /></div>
        <Footer/>
    </div>
  )
}
