import React, { useState } from 'react'
import { IoMagnetOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const MenuList = ({menu}) => {
    const  [hideMegaMenus, setHideMegaMenus] = useState(true)
    const navigate = useNavigate()
    const handleMenusName = (name) =>{
        navigate(`/shop/${name}`)
        setHideMegaMenus(false)
    }
   setTimeout(() => {
    setHideMegaMenus(true)
   }, 3000);
  return (
    <>
      <li onClick={()=>handleMenusName(menu.name)} className='group text-[14px] lg:text-[16px] font-[500] text-[rgba(51, 51, 51, 0.85)] hover:text-[#0198E9] border-b-2 duration-300 border-transparent hover:border-b-2 hover:border-[#0198E9] cursor-pointer'>{menu.name}
   { hideMegaMenus &&
    <div className="hidden lg:invisible z-[999] lg:group-hover:visible group-hover:translate-y-0 w-full translate-y-3  duration-300 bg-white lg:py-[30px] lg:px-[70px] lg:grid grid-cols-5 absolute left-0 top-6">
    {
        menu.submenus.slice(0, 4).map((submenu, idx)  => (
            <div className=" bg-transparent" key={idx}>
                <h3 className='text-[rgba(61, 61, 63, 1)] font-[500] text-[16px] group-hover:text-black'>{submenu.name}</h3>
                <ul>
                    {
                        submenu.item.map((item, idx) => <li key={idx} className='text-[14px] cursor-pointer font-[400] my-[6px] text-[#757575]'>{item}</li>)
                    }
                </ul>
            </div>
        ))
    }

    <div className="bg-white">
    {
          menu.submenus.slice(4).map((submenu, idx)  => (
            <div className="pb-5" key={idx}>
                <h3 className='text-[rgba(61, 61, 63, 1)] font-[500] text-[16px]'>{submenu.name}</h3>
                <ul>
                    {
                        submenu.item.map((item, idx) => <li key={idx} className='text-[14px] cursor-pointer my-[6px] font-[400] text-[#757575]'>{item}</li>)
                    }
                </ul>
            </div>
        ))
    }
    </div>
  
</div>

   }
    </li>

    </>
  )
}

export default MenuList
