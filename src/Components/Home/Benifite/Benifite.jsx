import React from 'react'
import vector from '../../../../public/images/Vector.png'
import vector1 from '../../../../public/images/Vector1.png'
import vector2 from '../../../../public/images/Vector2.png'
import vector3 from '../../../../public/images/Vector3.png'

const Benifite = () => {
  return (
    <div className='border-b bg-white'>
      <div className="containerMb lg:container py-[50px] gap-3 grid-cols-1 grid lg:grid-cols-4">
        <div className="flex justify-start lg:justify-center items-center gap-[18px]">
            <div className="">
                <img src={vector} alt="" />
            </div>
            <div className="">
                <h3 className='text-[20px] font-[500] text-black Poppins leading-normal'>FREE SHIPPING</h3>
                <p className='text-[16px] font-[400] text-[#757575] Poppins leading-normal'>Order via Campaign</p>
            </div>
        </div>
        <div className="flex justify-start lg:justify-center items-center gap-[18px]">
            <div className="">
                <img src={vector1} alt="" />
            </div>
            <div className="">
                <h3 className='text-[20px] font-[500] text-black Poppins leading-normal'>Best Price</h3>
                <p className='text-[16px] font-[400] text-[#757575] Poppins leading-normal'>Within 7 days returns</p>
            </div>
        </div>
        <div className="flex justify-start lg:justify-center items-center gap-[18px]">
            <div className="">
                <img src={vector2} alt="" />
            </div>
            <div className="">
                <h3 className='text-[20px] font-[500] text-black Poppins leading-normal'>Free Return</h3>
                <p className='text-[16px] font-[400] text-[#757575] Poppins leading-normal'>Order via Campaign</p>
            </div>
        </div>
        <div className="flex justify-start lg:justify-center items-center gap-[18px]">
            <div className="">
                <img src={vector3} alt="" />
            </div>
            <div className="">
                <h3 className='text-[20px] font-[500] text-black Poppins leading-normal'>Secure Payment</h3>
                <p className='text-[16px] font-[400] text-[#757575] Poppins leading-normal'>100% secure payment</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benifite
