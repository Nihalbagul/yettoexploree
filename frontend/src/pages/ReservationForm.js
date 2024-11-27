import React from 'react'
import Header from '../component/header'
import ReservationFormContent from '../component/ReservationFormContent'
import Footer from '../component/footer'
export default function ReservationForm() {
  return (
    <div>
    <Header/>
    <ReservationFormContent/>
    <div className='mt-[325px]'><Footer/></div>
    
    </div>
  )
}
