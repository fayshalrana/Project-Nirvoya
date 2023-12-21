import React, { useContext, useState } from 'react'
import { productProvider } from '../../../ProductsContext/ProductsContext'
import ProductItem from '../Share/ProductItem/ProductItem';
import { useLoaderData } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const Shop = () => {
  const { products } = useContext(productProvider);
  const categoryMenus = useLoaderData()

  const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false]);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];

    // Uncheck all checkboxes
    newCheckboxStates.fill(false);

    // Check the clicked checkbox
    newCheckboxStates[index] = true;

    setCheckboxStates(newCheckboxStates);
  };


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
              <input name="list-radio" id="link-checkbox" type="checkbox"
                checked={checkboxStates[0]}
                onChange={() => handleCheckboxChange(0)} value="" class="w-[24px] h-[24px] rounded text-[24px] text-blue-600 bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span> <IoMdStar className='text-[30px] text-[#FFB340]' /></span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input name="list-radio" id="link-checkbox" type="checkbox"
                checked={checkboxStates[1]}
                onChange={() => handleCheckboxChange(1)} value="" class="w-[24px] h-[24px] rounded text-[24px] text-blue-600 bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input name="list-radio" id="link-checkbox" type="checkbox"
                checked={checkboxStates[2]}
                onChange={() => handleCheckboxChange(2)} value="" class="w-[24px] h-[24px] rounded text-[24px] text-blue-600 bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input name="list-radio" id="link-checkbox" type="checkbox"
                checked={checkboxStates[3]}
                onChange={() => handleCheckboxChange(3)} value="" class="w-[24px] h-[24px] rounded text-[24px] text-blue-600 bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
                <IoMdStar className='text-[30px] text-[#FFB340]' />
              </span>
            </div>
            <div className="flex gap-[16px] items-center">
              <input name="list-radio" id="link-checkbox" type="checkbox"
                checked={checkboxStates[4]}
                onChange={() => handleCheckboxChange(4)} value="" class="w-[24px] h-[24px] rounded text-[24px] text-blue-600 bg-gray-100 focus:ring-transparent border-[2px] border-gray-500" />
              <span className='flex gap-[8px]'>
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
      <div className="col-span-3 grid grid-cols-3 gap-[25px]">
        {
          productsCopy.map(product => <ProductItem key={product.id} product={product}></ProductItem>)
        }
      </div>
    </div>
  )
}

export default Shop
