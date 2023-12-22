import React, { useContext, useState } from 'react'
import logo from "../../../../public/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import Menus from './menus';
import { productProvider } from '../../../../ProductsContext/ProductsContext';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"


const Header = () => {
  const {scrollY} = useScroll()
  const {menus} = useContext(productProvider)
  const [hidden, setHidden] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest)=>{
    const previous=  scrollY.getPrevious();

    if(latest > previous){
      setHidden(true);
    }else{
      setHidden(false)
    }
  })


  return (
    <>
    <motion.div
    variants={{
      visible: {x:0},
      hidden: {y:"-100%"}
    }}
    animate={hidden? "hidden":"visible"}
    transition={{duration:.35, ease: "easeInOut"}}
    className='border-b-[1px] w-full z-50 sticky top-0 bg-[#FBFBFB]'>
      <div className="container flex  py-[33px]  gap-[59px] items-center justify-between">
        <div className="logo w-[120px]">
          <Link to='/'>
          <img src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[720px] flex h-[40px] justify-between rounded-md overflow-hidden">
           <input type="text" className='w-[700px] px-4 py-3 focus-visible:none focus:outline-none bg-[#F6F6F6] border-[#F1F1F1] border' placeholder="i'm searching for..."/>
           <button className='w-[10%] py-5 bg-blue-600 mr-auto flex justify-center items-center'>
           <IoSearchOutline  className='text-2xl text-white bg-transparent'/>
           </button>
        </div>
        <div className="">
          <div className="flex gap-[40px]">
            <button className='flex items-center gap-1 text-[16px] font-[400] text-[rgba(77, 77, 77, 1)]'><FaRegUser className='w-[24px]'/>Login</button>
            <button className='flex items-center gap-1 text-[16px] font-[400] text-[rgba(77, 77, 77, 1)]'> <FaRegHeart   className='w-[24px]'/> Wishlist</button>
            <button className='flex items-center gap-1 text-[16px] font-[400] text-[rgba(77, 77, 77, 1)]'><BsHandbag   className='w-[24px]'/> MY Cart</button>
          </div>
        </div>
      </div>
      <div className="">
        <Menus menus={menus}></Menus>
      </div>
    </motion.div>
    </>
  )
}

export default Header
