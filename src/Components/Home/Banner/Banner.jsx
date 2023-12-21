import React from 'react'
import Slider from './slider'
import bannerImg2 from '../../../../public/images/banner2.svg'
import bannerImg3 from '../../../../public/images/banner3.png'

const Banner = () => {
    return (
        <div className='container grid grid-cols-3 pt-5 gap-5'>
            <div className="col-span-2">
                <Slider></Slider>
            </div>
            <div className="flex gap-5 flex-col h-full max-h-[518px]">
                <div className="relative rounded-[10px] overflow-hidden">
                    <img className='w-full h-full object-fill' src={bannerImg2} alt="" />
                    <div className="absolute left-0 top-0 w-full h-full flex justify-center items-end">
                        <div className="py-[16px] px-[32px] mb-4 bg-white/60  backdrop-blur-[4px] rounded-[5px]">
                            <h3 className='text-[20px] text-[#0198E9] font-[600] Montserrat'>Groceries collection</h3>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-[10px] overflow-hidden">
                    <img className='w-full h-full object-fill' src={bannerImg3} alt="" />
                    <div className="absolute left-0 top-0 w-full h-full flex justify-center items-end">
                        <div className="py-[16px] px-[32px] mb-4 bg-white/60  backdrop-blur-[4px] rounded-[5px]">
                            <h3 className='text-[20px] text-[#0198E9] font-[600] Montserrat'>Health & Beauty collection</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
