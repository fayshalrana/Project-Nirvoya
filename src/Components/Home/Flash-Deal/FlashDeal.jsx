import React, { useContext } from 'react'
import { productProvider } from '../../../../ProductsContext/ProductsContext'
import ProductItem from '../../Share/ProductItem/ProductItem';

const FlashDeal = () => {
    const {products} = useContext(productProvider);
  return (
    <div className='container py-[6px]'>
     <div className="flex justify-between mb[20px]">
     <h2 className='text-[26px] font-[500] text-black pb-[32px] leading-[63.984px]'>Flash Deals</h2>
      <button>View More</button>
     </div>
    <div className="grid grid-cols-4 gap-[25px]">
        {
            products.slice(10, 14).map(product => <ProductItem key={product.id} product={product}></ProductItem>)
        }
    </div>


    </div>
  )
}

export default FlashDeal
