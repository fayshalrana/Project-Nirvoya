import React from 'react'
import Slider from './slider'
import bannerImg2 from '../../../../public/images/banner2.svg'
import bannerImg3 from '../../../../public/images/banner3.png'

const Banner = () => {
    return (
        <div className='containerMb lg:container lg:grid lg:grid-cols-3 pt-5 lg:gap-5'>
            <div className="col-span-2">
                <Slider></Slider>
            </div>
            <div className="lg:grid  gap-5 flex-col h-full hidden lg:max-h-[583px]">
                <div className="relative group rounded-[10px] overflow-hidden">
                    <img className='w-full h-full object-fill group-hover:scale-125 transform transition duration-500' src={bannerImg2} alt="" />
                    <div className="absolute group-hover:backdrop-blur-sm transform transition duration-500 group-hover:bg-blue-600/20 cursor-pointer left-0 top-0 w-full h-full flex justify-center items-end">
                        <div className="py-[16px] px-[32px] mb-4 bg-white/60  backdrop-blur-[4px] rounded-[5px]">
                            <h3 className='text-[20px] text-[#0198E9] font-[600] Montserrat'>Groceries collection</h3>
                        </div>
                    </div>
                </div>
                <div className="relative group rounded-[10px] overflow-hidden">
                    <img className='w-full h-full object-fill group-hover:scale-125 transform transition duration-500' src={bannerImg3} alt="" />
                    <div className="absolute left-0 top-0 w-full h-full flex justify-center items-end group-hover:backdrop-blur-sm transform transition duration-500 group-hover:bg-blue-600/20 cursor-pointer">
                        <div className="py-[16px] px-[32px] mb-4 bg-white/60   backdrop-blur-[4px] rounded-[5px]">
                            <h3 className='text-[20px] text-[#0198E9] font-[600] Montserrat'>Health & Beauty collection</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
