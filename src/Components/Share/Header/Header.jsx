import React, { useContext, useState } from 'react'
import logo from "../../../../public/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import Menus from './menus';
import { productProvider } from '../../../../ProductsContext/ProductsContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { getStoredItem } from '../../../../CartContext/CartProvider';


const Header = () => {
  const navigate = useNavigate()
  const {scrollY} = useScroll()
  const {menus} = useContext(productProvider)
  const [hidden, setHidden] = useState(false)
  const localItem = getStoredItem();
  const arrFromObj = Object.keys(localItem);


  useMotionValueEvent(scrollY, "change", (latest)=>{
    const previous=  scrollY.getPrevious();

    if(latest > previous){
      setHidden(true);
    }else{
      setHidden(false)
    }
  })
const handleCartPage = () =>{
  navigate('/cart')
}
const handleWishList = () =>{
  navigate('/coming-soon')
}
const handleLogin = () =>{
  navigate('/login')
}

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
      <div className="containerMb lg:container  flex py-[17px] lg:py-[33px]  lg:gap-[59px] items-center justify-between">
        <div className="logo w-[100px] lg:w-[120px]">
          <Link to='/'>
          <img className='w-full' src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[720px] hidden lg:flex h-[40px] justify-between rounded-md overflow-hidden">
           <input type="text" className='w-[700px] focus:border-transparent px-4 py-3 focus-visible:none focus:outline-none bg-[#F6F6F6] border-[#F1F1F1] border' placeholder="i'm searching for..."/>
           <button className='w-[10%] py-5 bg-blue-600 mr-auto flex justify-center items-center'>
           <IoSearchOutline  className='text-2xl text-white bg-transparent'/>
           </button>
        </div>
      
        <div className="">
          <div className="flex gap-[15px] lg:gap-[30px]">
            <button onClick={handleLogin} className='flex items-center gap-1 text-[20px] lg:text-[16px] font-[400] text-[rgba(77, 77, 77, 1)]'><FaRegUser className='w-[30px] lg:w-[24px]'/><span className='hidden md:block'>Login</span></button>
            <button onClick={handleWishList} className='flex items-center gap-1 text-[20px] lg:text-[16px] font-[400] text-[rgba(77, 77, 77, 1)]'> <FaRegHeart   className='w-[24px]'/> <span className='hidden md:block'>Wishlist</span></button>
           <div className="flex items-center gap-[15px]">
           <button onClick={handleCartPage} className='flex items-center gap-1 text-[20px] lg:text-[16px] font-[400] text-[rgba(77, 77, 77, 1)]'><BsHandbag   className='w-[24px]'/> <span className='hidden md:block'>MY Cart</span></button>
            <span className='w-[23px] lg:top-0 h-[23px] flex justify-center items-center text-[12px] rounded-full bg-red-500 text-white font-[500] right-[10px] top-[13px]  absolute lg:relative'>{arrFromObj.length}</span>
           </div>
            
          </div>
        </div>
      
      </div>
      <div className="containerMb">
       <div className="w-[full] flex mb-4 lg:hidden h-[40px] justify-between rounded-md overflow-hidden">
           <input type="text" className='px-4 w-[90%] py-3 focus-visible:none focus:outline-none bg-[#F6F6F6] border-[#F1F1F1] border' placeholder="i'm searching for..."/>
           <button className='w-[10%] py-5 bg-blue-600 mr-auto flex justify-center items-center'>
           <IoSearchOutline  className='text-2xl text-white bg-transparent'/>
           </button>
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
