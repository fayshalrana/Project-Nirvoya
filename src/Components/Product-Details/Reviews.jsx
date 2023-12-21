import { Rating } from '@smastrom/react-rating'
import React from 'react'
import user1 from '../../../public/images/user1.png'

const Reviews = ({ product }) => {
    return (
        <div className='px-[50px] py-[40px] mt-[30px] bg-white'>
            <div className="flex gap-[75px] items-center">
                <div className="">
                    <h3 className='text-[20px] font-[500] leading-normal Poppins text-[#3D3D3F]'>Customer reviews</h3>
                    <span className='flex gap-[8px] text-[15px] font-[400] leading-normal Poppins text-[#3D3D3F]'><Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />{product.rating} Out of 5</span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-5 items-center flex-nowrap">
                        <h4 className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>5 Stars</h4>
                        <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "99%" }}></div>
                        </div>
                        <span className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>99%</span>
                    </div>
                    <div className="flex gap-5 items-center flex-nowrap">
                        <h4 className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>4 Stars</h4>
                        <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "79%" }}></div>
                        </div>
                        <span className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>79%</span>
                    </div>
                    <div className="flex gap-5 items-center flex-nowrap">
                        <h4 className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>3 Stars</h4>
                        <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "59%" }}></div>
                        </div>
                        <span className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>59%</span>
                    </div>
                    <div className="flex gap-5 items-center flex-nowrap">
                        <h4 className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>2 Stars</h4>
                        <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "39%" }}></div>
                        </div>
                        <span className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>39%</span>
                    </div>
                    <div className="flex gap-5 items-center flex-nowrap">
                        <h4 className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>1 Stars</h4>
                        <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <span className='text-[14px] font-[400] leading-normal Poppins text-[#3D3D3F]'>10%</span>
                    </div>
                </div>
                <div className="">
                    <a href='#commentForm' className='py-[10px] px-[50px] rounded-[3px] text-white bg-[#0198E9] shadow-[0px_2px_8px_0px_rgba(0, 0, 0, 0.12)] text-[14px] font-[500] leading-normal Poppins'>Write a Review</a>
                </div>
            </div>
            <h2 className='text-[24px] font-[500] leading-[120%] Poppins text-[#333] pb-[20px] pt-[35px]'>Reviews ({product.reviews.length})</h2>
            <div className="pt-[22px] border-t flex flex-col gap-[33px]">
                {
                    product.reviews.map((elm, idx) => 
                          <div key={idx}>
                          <div className="flex gap-[16px] flex-col">
                                <div className="flex gap-[16px]">
                                    <div className="">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='text-[18px] font-[600] leading-[120%] Poppins text-[#383838] pb-[10px]'>{elm.customerName}</h1>
                                        <span className='flex gap-[16px] items-center text-[18px] font-[500] leading-[120%] Poppins text-[#333]'>{elm.rating} <Rating style={{ maxWidth: 120 }} value={product.rating} readOnly /> <span className='text-[18px] font-[500] leading-[120%] Poppins text-[#A7A7A7]'>5 day ago</span></span>
                                    </div>
                                </div>
                            <p className='text-[18px] font-[400] leading-normal Poppins text-[#383838]'>{elm.comment}</p>
                            </div>
                          </div>)
                }
            </div>
            <div id='commentForm'>
                <h2 className='text-[24px] font-[600] leading-normal Poppins text-[#383838] pb-[10px] pt-[70px]'>Add Your Review</h2>
                <p className='text-[18px] font-[400] leading-normal Poppins text-[#A7A7A7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                <div className="max-w-[700px] mt-[30px] mb-[50px]">
                <form action="#" className="space-y-8" >
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name *</label>
              <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name Here" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email *</label>
              <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email Here" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Review *</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none" placeholder="Leave a comment..." ></textarea>
          </div>
          <span className='flex gap-[16px] items-center text-[18px] font-[500] leading-normal Poppins text-[#383838]'>Rating<Rating style={{ maxWidth: 120 }} value={4} /></span>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0198E9] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
                </div>
            </div>
        </div>
    )
}

export default Reviews
