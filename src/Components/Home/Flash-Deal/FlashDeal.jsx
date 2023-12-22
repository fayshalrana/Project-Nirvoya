import React, { useContext } from 'react'
import { productProvider } from '../../../../ProductsContext/ProductsContext'
import ProductItem from '../../Share/ProductItem/ProductItem';
import { MdArrowForward } from "react-icons/md";

const FlashDeal = () => {
    const {products} = useContext(productProvider);
  return (
    <div className='containerMb lg:container py-[6px]'>
     <div className="flex justify-between mb[20px]">
     <h2 className='text-[26px] font-[500] text-black pb-[32px] leading-[63.984px]'>Flash Deals</h2>
      <div className="flex items-center gap-[10px]">
      <button className='text-[16px] font-[500] text-[#757575]'>View More</button>
      <MdArrowForward className='text-[#757575] text-[25px]'/>
      </div>
     </div>
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[25px]">
        {
            products.slice(10, 14).map(product => <ProductItem key={product.id} product={product}></ProductItem>)
        }
    </div>


    </div>
  )
}

export default FlashDeal
