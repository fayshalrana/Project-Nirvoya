import React, { useContext } from 'react'
import { productProvider } from '../../../../ProductsContext/ProductsContext';
import Items from './Items';

const Category = () => {
    const { products } = useContext(productProvider)
    const productCategory = products.map(item => item.category)
    const categories = [...new Set(productCategory)]




    return (
        <div className='container py-[25px]'>
            <h2 className='text-[26px] font-[500] text-black pb-[32px] leading-normal'>Category</h2>

            <div className="grid grid-cols-5 gap-[13px]">
                {
                    categories.map(Item => <Items key={Item.id} item={Item}></Items>)
                }
            </div>

        </div>
    )
}

export default Category