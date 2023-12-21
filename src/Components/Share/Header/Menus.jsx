import { list } from 'postcss'
import React from 'react'
import MenuList from './MenuList'

const Menus = ({menus}) => {

  return (
    <div className='container'>
        <ul className='flex justify-between items-center px-[20px] relative'>
            {
                menus.map((menu, idx) => <MenuList key={idx} menu={menu}></MenuList>)
            }
        </ul>
    </div>
  )
}

export default Menus
