import React from 'react'
import logo from '../../../../public/images/logo.png'
import facebook from '../../../../public/images/facebook.svg'
import instagram from '../../../../public/images/instagram.svg'
import linkedin from '../../../../public/images/linkedin.svg'
import twitter from '../../../../public/images/twitter.svg'
import call from '../../../../public/images/call.png'
import bnk from '../../../../public/images/bnk.png'
import bnk2 from '../../../../public/images/bnk2.png'
import bnk3 from '../../../../public/images/bnk3.jpeg'
import bnk4 from '../../../../public/images/bnk4.png'
import bnk5 from '../../../../public/images/bnk5.png'
import bnk6 from '../../../../public/images/bnk6.jpeg'
import bnk7 from '../../../../public/images/bnk7.png'
import bnk8 from '../../../../public/images/bnk8.png'
import bnk9 from '../../../../public/images/bnk9.png'
import bnk10 from '../../../../public/images/bnk10.png'
import bnk11 from '../../../../public/images/bnk11.png'

const Footer = () => {
  return (
   <>
    <div className='border-b bg-white py-[50px]'>
      <div className="container grid grid-cols-3 gap-[100px]">
        <div className="">
          <div className="">
            <img className='drop-shadow-xl' src={logo} alt="" />
          </div>
          <p className='pt-[35px] pb-[26px] text-[18px] font-[400] text-[#333333CC] Lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <div className="flex justify-start gap-3">
            <span>
              <img src={facebook} alt="" />
            </span>
            <span>
              <img src={instagram} alt="" />
            </span>
            <span>
              <img src={linkedin} alt="" />
            </span>
            <span>
              <img src={twitter} alt="" />
            </span>
          </div>
        </div>

        <div className="flex justify-between">
      <div className="">
        <h3 className='text-[#333333] text-[20px] font-[500] Poppins leading-normal'>QUICK LINKS</h3>
        <ul className='pt-[25px]'>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#5c5c5c]'>About us</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Contact us</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Products</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Login</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Sign Up</li>
        </ul>
      </div>

      <div className="">
        <h3 className='text-[#333333] text-[20px] font-[500] Poppins leading-normal'>CUSTOMER AREA</h3>
        <ul className='pt-[25px]'>
        <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#5c5c5c]'>My Account</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Orders</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Terms</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Privacy Policy</li>
          <li className='text-[16px] font-[400] leading-[44px] Poppins text-[#333333CC]'>Shipping Information</li>
        </ul>
      </div>
        </div>
        <div className="">
      <div className="">
        <h3 className='text-[#333333] text-[20px] font-[500] Poppins leading-normal'>QUICK LINKS</h3>
        <p className='pt-[25px] pb-[34px] text-[18px] font-[400] text-[#333333CC] Lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="flex items-center gap-[27px]">
          <div className="">
            <img src={call} alt="" />
          </div>
          <div className="">
            <h2 className='text-[18px] font-[400] leading-[24px] Poppins text-[#333333]'>Have any question?</h2>
            <h3 className='text-[28px] font-[600] leading-[24px] Poppins text-[#0198E9] pt-[6px]'> 099 456 789</h3>
          </div>
        </div>
      </div>
        </div>
      </div>

    </div>
    <div className="py-[15px]">
      <div className="container flex justify-between">
        <div className="">
          <p className='text-[16px] font-[400] leading-normal text-[#757575] Poppins'>Projectnirvoya -   © 2021 All Rights Reserved</p>
        </div>
        <div className="flex gap-5">
          <span className='text-[18px] font-[500] leading-normal Poppins text-[#0198E9CC]'>Pay With</span>
          <div className="flex gap-3 items-center ">
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk2} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk3} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk4} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk5} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk6} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk7} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk8} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk9} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk10} alt="" />
            </span>
            <span className=''>
              <img className='w-[100%] max-h-[20px]  object-cover cursor-pointer'  src={bnk11} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default Footer
