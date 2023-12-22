import { list } from 'postcss'
import React from 'react'
import MenuList from './MenuList'

const Menus = ({menus}) => {

  return (
<div className='containerMb lg:container overflow-y-hidden overflow-auto lg:overflow-visible'>
    <ul className='flex justify-start lg:justify-between items-center gap-3 lg:w-full w-full lg:px-[20px] relative overflow-x-auto lg:overflow-visible whitespace-nowrap'>
        {
            menus.map((menu, idx) => (
                <li key={idx}>
                    <div className='min-w-[100%] mx-[5px] lg:mx-0'>
                        <MenuList menu={menu}></MenuList>
                    </div>
                </li>
            ))
        }
    </ul>
</div>



  )
}

export default Menus
