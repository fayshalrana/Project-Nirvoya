import React, { useContext, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import PriceConverter from '../../../../CustomHook/PriceConverter'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import basket from "./../../../../public/images/basket.svg"
import {setItemLocalStor} from "../../../../CartContext/CartProvider"
import toast from 'react-hot-toast';

const ProductItem = ({ product }) => {
    const [fave, setFave] = useState(false)

    const handleFave = () => {
        setFave(!fave);
    }

    //Navigate Single product page
    const navigate = useNavigate();
    const showSingleProduct = id => {
        navigate(`/product/${id}`)
    }


const handleAddToCart =(id,name)  =>{
    setItemLocalStor(id, name) 
    toast.success('Item added on bag')
}
    return (
        <div className='group flex lg:block justify-between flex-col p-[10px] border rounded-[10px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
            <div className="relative w-full h-[160px] lg:h-[303px] rounded-[10px] overflow-hidden border">
                <img className='group-hover:scale-110 transform transition duration-500  w-full h-full object-cover' src={product.productImage[0]} alt="" />
                {
                    product.discount !== null ? <span className='h-[30px] flex justify-center items-center px-[16px] absolute left-0 top-0 bg-gradient-to-r from-orange-500 to-amber-400 text-[14px] font-[600] leading-normal shadow text-white rounded-sm'>- {product.discount}% OFF</span> : ""
                }
                <span onClick={handleFave} className='text-[30px] absolute top-[20px] right-[20px] cursor-pointer' >{fave == false ? <GoHeart className='text-gray-400' /> : <GoHeartFill className='text-red-600' />}</span>
            </div>
            <div onClick={() => showSingleProduct(product.id)} className="cursor-pointer">
                <div className="pt-[15px]">
                    <span className='flex gap-2'><Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />({product.reviews.length})</span>
                    <h2 className='cursor-pointer text-[14px] lg:text-[18px] font-[400] leading-[120%] text-[rgba(56, 56, 56, 1)] Poppins py-[10px]'>{product.productName}</h2>
                </div>
         
            </div>
            <div className="flex justify-between items-center">
                    <h3 className='text-[16px] lg:text-[22px] font-[500] Montserrat text-[#0970CD] leading-normal'><PriceConverter price={product.price}></PriceConverter></h3>
                    <div className="">
                        <img onClick={()=>handleAddToCart( product.id, product.productName)}  className='w-[16px] lg:w-[26px] cursor-pointer' src={basket} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default ProductItem
