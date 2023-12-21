import React, { useCallback, useContext, useState } from 'react'
import { productProvider } from '../../../../ProductsContext/ProductsContext'
import ProductItem from '../../Share/ProductItem/ProductItem'
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const Featured = () => {
    const {products} = useContext(productProvider)
    const [visible, setVisible] = useState(12)

    const handleVisibleAdd = () =>{
        setVisible(visible + 8)
    }
    const handleVisibleLow = () =>{
        setVisible(12)
    }

    return (
        <div className='container py-[6px]'>
            <div className="flex justify-between items-center">
                <h2 className='text-[26px] font-[500] text-black pb-[32px] leading-[63.984px]'>Featured Product</h2>
                <button>View More</button>
            </div>

            <div className="grid grid-cols-4 gap-[25px]">
                    {
                        products.slice(0, visible).map(product =><ProductItem key={product.id} product={product}></ProductItem>)
                    }
            </div>
            <div className="flex justify-center w-full pt-[40px] pb-[36px]">
                       {
                        visible < products.length &&(
                            <button onClick={handleVisibleAdd} className='py-[11px] px-[26px] bg-[#34ADED] rounded-[81px] text-white text-[16px] font-[500] Poppins uppercase leading-normal flex items-center gap-[4px]'>Show More <IoIosArrowDown className='text-[18px]'/></button>
                            ) || <button onClick={handleVisibleLow} className='py-[11px] px-[26px] bg-[#34ADED] rounded-[81px] text-white text-[16px] font-[500] Poppins uppercase leading-normal flex items-center gap-[4px]'>Show Less <IoIosArrowUp  className='text-[18px]'/></button>
                        }
                        </div>
        </div>
    )
}

export default Featured