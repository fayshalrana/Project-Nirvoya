import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GiDiamondRing } from "react-icons/gi";
const Items = ({item}) => {
  return (
    <div className='py-[16px] px-[18px] hover:shadow-none transform transition duration-500 cursor-pointer flex gap-[8px] justify-between items-center rounded-[6px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <img src={item.categoryImage} alt="" />
      <span className='text-[14px] text-[#394146] font-[400]'>{item.categoryName}</span>
      <span><IoIosArrowForward /></span>
    </div>
  )
}

export default Items

