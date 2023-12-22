import React, { useContext } from 'react'
import { productProvider } from '../../../../ProductsContext/ProductsContext';
import Items from './Items';

const Category = () => {
    const { category } = useContext(productProvider)
return (
        <div className='containerMb lg:container py-[25px]'>
            <h2 className='text-[26px] font-[500] text-black pb-[32px] leading-normal'>Category</h2>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-[6px] lg:gap-[13px]">
                {
                    category.map(Item => <Items key={Item.id} item={Item}></Items>)
                }
            </div>

        </div>
    )
}

export default Category
