import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaCheck } from "react-icons/fa";
import { GoHeart, GoHeartFill  } from "react-icons/go";
import PriceConverter from '../../../CustomHook/PriceConverter';
import { FaCheckCircle, FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import linkedin from '../../../public/images/Group20.png'
import twitter from '../../../public/images/Group21.svg'
import facebook from '../../../public/images/Group22.png'
import whatsApp from '../../../public/images/Group23.png'
import shareLink from '../../../public/images/Group24.png'
import More from './More';
import Reviews from './Reviews';



const SingleProduct = () => {
  const product = useLoaderData();
  const { productImage, price, productName,category, rating, discount,description, SKU, features, sizes, stock, soldQuantity, reviews } = product;
  const [imgIdx, setImgIdx] =useState(0)

  const [fave, setFave] = useState(false)
  const discountPrice = price +( price * discount / 100) ;

  const [productQuantity, setProductQuantity] = useState(1)
  const handleProductIncrease =()=>{
      if(productQuantity < stock){
        setProductQuantity(productQuantity + 1)
      }
  }
  const handleProductDecrease = () => {
    if (productQuantity > 1 && productQuantity <= stock) {
      setProductQuantity(productQuantity - 1);
    }
  };
  

  const handleFave = () =>{
      setFave(!fave);
  }

  const handleImgShow = (idx) =>{
    setImgIdx(idx)
  }

  return (
    <div className='py-[5px]'>
      <div className="container">
        <ul className='flex pt-[26px] gap-2 items-center'>
          <Link to='/' className='text-[16px] font-[500] leading-normal  capitalize text-[#02344F]'>Home</Link>
          <IoIosArrowForward />
          <li className='text-[16px] font-[500] leading-normal  capitalize text-[#02344F]'>{category}</li>
          <IoIosArrowForward />
          <li className='text-[16px] font-[500] leading-normal  capitalize text-[#757575]'>{productName}</li>
        </ul>

        <div className="grid grid-cols-2 pt-[25px] pb-[80px] gap-[100px]">
          <div className="">
          <div className="flex gap-[24px]">
            <div className="w-[550px] h-[550px] border">
              <img className='w-full h-full object-cover' src={productImage[imgIdx]} alt="" />
            </div>
            <div className="w-[20%] flex flex-col gap-2 items-center">
              <IoIosArrowUp />
              <div onClick={()=> handleImgShow(1)} className='w-[104px] h-[104px] p-[6px] border border-slate-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer'
                tabIndex="0"><img className='w-full h-full object-cover' src={productImage[1]} alt="" /></div>
              <div onClick={()=> handleImgShow(2)} className='w-[104px] h-[104px] p-[6px] border border-slate-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer'
                tabIndex="0"><img className='w-full h-full object-cover' src={productImage[2]} alt="" /></div>
              <div onClick={()=> handleImgShow(3)} className='w-[104px] h-[104px] p-[6px] border border-slate-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer'
                tabIndex="0"><img className='w-full h-full object-cover' src={productImage[3]} alt="" /></div>
              <div onClick={()=> handleImgShow(4)} className='w-[104px] h-[104px] p-[6px] border border-slate-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer'
                tabIndex="0"><img className='w-full h-full object-cover' src={productImage[4]} alt="" /></div>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="flex mt-[45px] gap-[12px] items-center">
            <span className='text-[20px] font-[500] leading-normal text-[#333333]'>Share</span>
            <ul className='flex gap-[14px] items-center'>
              <li className='w-[44px] Poppins rounded-full h-[44px] cursor-pointer'><img className='w-full h-full' src={linkedin} alt="" /></li>
              <li className='w-[44px] Poppins rounded-full h-[44px] cursor-pointer'><img className='w-full h-full' src={twitter} alt="" /></li>
              <li className='w-[44px] Poppins rounded-full h-[44px] cursor-pointer'><img className='w-full h-full' src={facebook} alt="" /></li>
              <li className='w-[44px] Poppins rounded-full h-[44px] cursor-pointer'><img className='w-full h-full' src={whatsApp} alt="" /></li>
              <li className='w-[44px] Poppins rounded-full h-[44px] cursor-pointer'><img className='w-full h-full' src={shareLink} alt="" /></li>
            </ul>
          </div>
          </div>
          <div className="">
            <h2 className='text-[26px] font-[500] leading-normal Poppins text-[#333333]'>{productName}</h2>
            <div className="flex pt-[18px]">
              <span className='flex items-center gap-2 pr-3 text-[18px] font-[500]'>{rating}
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
              <span className='font-[400] Lato text-[#BABABA]'>({reviews.length})</span>
              </span>
              <span className='flex items-center gap-3 px-3 border-x-2 border-gray-300 text-[18px] font-[400] Poppins'>
              <FaCheck className='text-green-500'/>
              <span className='text-[18px] font-[600]'>{soldQuantity} </span>
              Sold
              </span>
              <span className='flex items-center gap-3 px-3'>
             {
              !fave?  <GoHeart className='text-gray-400 text-[24px]'/> : <GoHeartFill  className='text-red-600 text-[24px]'/>
             }
                <button onClick={handleFave} className='text-[18px] Lato font-[700] text-[#0198E9]'>Add to wishlist</button>
              </span>
            </div>
            <div className=" flex gap-5 items-center pt-[33px]">
              <span className='text-[36px] text-[#0198E9] font-[600] Poppins leading-normal'><PriceConverter price={price}></PriceConverter></span>
              <span className='line-through text-[20px] text-[#8D8D8D] font-[400] Poppins leading-normal'><PriceConverter price={discountPrice}></PriceConverter></span>
              <span className='py-[5px] px-[10px] rounded bg-gradient-to-r from-orange-500 to-amber-400 text-[14px] text-white font-[600] Poppins leading-normal'>{discount}%</span>
            </div>
            <div className="flex gap-[20px] items-center pt-[10] pb-[18px] border-b">
              <span className='text-[16px] font-[600] leading-normal Poppins text-[#333333'>SKU:<span className='text-[#757575] font-[500]'> {SKU}</span></span>
              <span className='flex items-center gap-1 text-[16px] leading-normal Poppins text-[#757575] font-[500]'><FaCheckCircle className='text-[green]'/>In Stock</span>
            </div>
            <div className="pt-[14px]">
              <p className='text-[18px] font-[400] leading-[30px] Poppins text-[#333333]'>{description}</p>
              <ul className='pt-[10px]'>
                {
                  features.map((item, idx)=> <li key={idx} className='text-[18px] font-[400] leading-[202%] Poppins text-[#333333] list-disc ml-[30px]'>{item}</li>)
                }
              </ul>
            </div>
            <div className="py-[33px] flex gap-[16px]">
                <span  className='text-[19px] font-[400] leading-normal Poppins text-[#333333]'>Size</span>
                <ul className='flex gap-[15px]'>
                  {sizes.map((elm, idx)=> <li className='px-[13px] py-1  rounded border border-slate-300 bg-white focus:bg-blue-500 cursor-pointer focus:text-white 
                text-[14px] font-[400] leading-[150%] Poppins text-[#6E6E6F]'  tabIndex="0" key={idx}>{elm}</li>)}
                </ul>
            </div>
            <div className="flex gap-[16px] items-center">
              <p className='text-[14px] font-[400] leading-[150%] Poppins text-[#3D3D3F]'>Quantity:</p>
              <div className="flex gap-[35px] items-center">
                <div className="py-[9px] px-[2px] border rounded-md">
                  <button onClick={handleProductDecrease} className='px-[9px] text-[12px] text-[#ACACAC]'><FaMinus /></button>
                  <span className='px-[15px] py-[10px] bg-white text-[16px] font-[600] leading-[202%] Poppins text-[#333333]'>{productQuantity}</span>
                  <button  onClick={handleProductIncrease}  className='px-[9px] text-[12px] text-[#ACACAC]'><FaPlus /></button>
                </div>
                <button className='py-[8px] px-[34px] bg-[#0198E9] text-[20px] font-[500] leading-normal Poppins text-white rounded-md'>Add to Cart</button>
                <button className='py-[8px] px-[34px] border-[1.5px] border-blue-500 text-[20px] font-[500] leading-normal Poppins text-[#0198E9] rounded-md'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <More product={product}></More>
        <Reviews product={product}></Reviews>
      </div>
    </div>
  )
}

export default SingleProduct
