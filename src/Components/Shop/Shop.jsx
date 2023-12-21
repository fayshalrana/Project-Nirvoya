import React, { useContext, useEffect, useRef, useState } from 'react'
import { productProvider } from '../../../ProductsContext/ProductsContext'
import ProductItem from '../Share/ProductItem/ProductItem';
import { useLoaderData } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const Shop = () => {
  const { products } = useContext(productProvider);
  const categoryMenus = useLoaderData()
  const focusedLiRef = useRef(null);
  const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false]);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates.fill(false);
    newCheckboxStates[index] = true;
    setCheckboxStates(newCheckboxStates);
  };

  useEffect(() => {
    focusedLiRef.current.focus();
  }, []);

  const productsCopy = [...products];
  const [rang, setRang] = useState(1000)
  const handleRang = (e) => {
    const val = e.target.value
    setRang(val)
  }

  productsCopy.forEach(function (elm) {
    elm.discount = null;
  });
  return (
    <div className='container py-[43px] grid gap-[50px] grid-cols-4'>
      <div>
        <div className="bg-white py-[20px] w-[300px] px-[20px] relative border-b">
          <h2 className='text-[18px] font-[500] leading-normal Poppins text-[#3D3D3F] pb-[10px]'>Related Categories</h2>
          <ul className='pl-[20px] text-[16px] font-[400] leading-normal Poppins text-[#757575] pb-[10px]'>
            <li className='list-disc'>{categoryMenus.name}</li>
            <div className="">
              <ul className='pl-[10px] flex flex-col gap-2'>
                {categoryMenus.submenus.map((submenu, idx) => <li className='hover:text-[#0198E9] cursor-pointer' key={idx}>{submenu.name}</li>)}
              </ul>
            </div>
          </ul>
        </div>
        <div className="bg-white py-[20px] w-[300px] px-[20px] relative border-b">
          <div className="flex justify-between items-center">
            <h3 className='text-[18px] font-[500] leading-normal Poppins text-[#3D3D3F] pb-[10px]'>Filter by Price</h3>
            <IoIosArrowDown />
          </div>
          <div className="">
            <input onChange={handleRang} className='accent-blue-500 w-full py-[20px] block' value={rang} type="range" id="cowbell" name="price" min={1000} max={100000} step="1000" />
            <div className="">
              <span className='text-[18px] font-[500] leading-normal Poppins text-[#383838]'><span className='text-[18px] font-[500] leading-normal Poppins text-[#A7A7A7]'>Price:</span><span className='text-[18px] font-[500] leading-normal Poppins text-[#383838]'> ৳1000 - ৳{rang} </span></span>
            </div>
          </div>
        </div>
        <div className="bg-white py-[20px] w-[300px] px-[20px] relative">
          <div className="flex justify-between items-center">
            <h3 className='text-[18px] font-[500] leading-normal Poppins text-[#3D3D3F] pb-[10px]'>Filter by Rating</h3>
            <IoIosArrowDown />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px] items-center">
              <input id="link-checkbox" type="checkbox"
                checked={checkboxStates[0]}
                onChange={() => handleCheckboxChange(0)} value="" className="w-[24px] h-[24px] rounded text-[24px] text-blue-600 cursor-pointer bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span> <IoMdStar className='text-[30px] text-[#FFB340]' /></span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input id="link-checkbox" type="checkbox"
                checked={checkboxStates[1]}
                onChange={() => handleCheckboxChange(1)} value="" className="w-[24px] h-[24px] rounded text-[24px] text-blue-600 cursor-pointer bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input id="link-checkbox" type="checkbox"
                checked={checkboxStates[2]}
                onChange={() => handleCheckboxChange(2)} value="" className="w-[24px] h-[24px] rounded text-[24px] text-blue-600 cursor-pointer bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input id="link-checkbox" type="checkbox"
                checked={checkboxStates[3]}
                onChange={() => handleCheckboxChange(3)} value="" className="w-[24px] h-[24px] rounded text-[24px] text-blue-600 cursor-pointer bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input id="checkbox5" type="checkbox"
                checked={checkboxStates[4]}
                onChange={() => handleCheckboxChange(4)} value="" className="w-[24px] h-[24px] rounded text-[24px] text-blue-600 cursor-pointer bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span htmlFor='checkbox5' className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="flex justify-between items-center py-[12px]">
          <span className='text-[18px] font-[500] leading-normal Poppins text-[#424241]/40'>Showing <span className='text-[#424241]'>20</span> of <span className='text-[#424241]'>{products.length} </span>products</span>
          <div className="flex items-center gap-[12px]">
            <span className='text-[18px] font-[500] leading-normal Poppins text-[#424241]/40'>Sort by:</span>
            <div className="">


              <select id="countries" className="bg-gray-50 border border-gray-300 text-[18px] font-[500] leading-normal Poppins text-[#424241] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Newest Items</option>
                <option value="US">Features Items</option>
                <option value="CA">Discount Items</option>
                <option value="FR">Most Popular</option>
                <option value="DE">Trendy</option>
              </select>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[25px]">
          {
            productsCopy.map(product => <ProductItem key={product.id} product={product}></ProductItem>)
          }
        </div>
        <div className="flex justify-end pt-[40px]">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 gap-[14px] mr-[18px] leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="#0198E9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                  </svg>
                  <span className="text-[18px] font-[500] leading-normal Poppins text-[#0198E9]">Previous</span>
                </a>
              </li>
            <div className="rounded-md flex overflow-hidden border">
            <li ref={focusedLiRef} className="flex items-center justify-center px-4 h-10 leading-tight focus:bg-blue-600 focus:text-white outline-none border-r border-gray-300 bg-white text-blue-500  hover:bg-gray-100 hover:text-gray-700 cursor-pointer" tabIndex="1" focused>
                1
              </li>
              <li className="flex items-center justify-center px-4 h-10 leading-tight focus:bg-blue-600 focus:text-white border-r border-gray-300 bg-white text-blue-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" tabIndex="0">
                2
              </li>
              <li className="flex items-center justify-center px-4 h-10 leading-tight focus:bg-blue-600 focus:text-white  border-gray-300 bg-white text-blue-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" tabIndex="0">
                3
              </li>
            </div>
              <li>
                <a href="#" className="flex items-center gap-[14px] ml-[18px] justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="text-[18px] font-[500] leading-normal Poppins text-[#0198E9]">Next</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="#0198E9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Shop
