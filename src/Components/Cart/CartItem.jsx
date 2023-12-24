import React from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import PriceConverter from '../../../CustomHook/PriceConverter'
const CartItem = ({cartItem}) => {
  return (
    <div>
        <div className='group flex lg:block justify-between flex-col p-[10px] border rounded-[10px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
            <div className="relative w-full h-[160px] lg:h-[303px] rounded-[10px] overflow-hidden border">
                <img className='group-hover:scale-110 transform transition duration-500  w-full h-full object-cover' src={cartItem.productImage[0]} alt="" />
                
            </div>
            <div onClick={() => showSingleProduct(cartItem.id)} className="cursor-pointer">
                <div className="pt-[15px]">
                    <span className='flex gap-2'><Rating style={{ maxWidth: 80 }} value={cartItem.rating} readOnly />({cartItem.reviews.length})</span>
                    <h2 className='cursor-pointer text-[14px] lg:text-[18px] font-[400] leading-[120%] text-[rgba(56, 56, 56, 1)] Poppins py-[10px]'>{cartItem.productName}</h2>
                </div>
         
            </div>
            <div className="flex justify-between items-center">
                    <h3 className='text-[16px] lg:text-[22px] font-[500] Montserrat text-[#0970CD] leading-normal'><PriceConverter price={cartItem.price}></PriceConverter></h3>
                </div>
        </div>
    </div>
  )
}

export default CartItem
