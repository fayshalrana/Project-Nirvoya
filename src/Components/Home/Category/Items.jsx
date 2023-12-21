import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GiDiamondRing } from "react-icons/gi";
const Items = ({item}) => {
  return (
    <div className='py-[16px] px-[18px] flex justify-between items-center rounded-[6px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <span><GiDiamondRing /></span>
      <span>{item}</span>
      <span><IoIosArrowForward /></span>
    </div>
  )
}

export default Items

