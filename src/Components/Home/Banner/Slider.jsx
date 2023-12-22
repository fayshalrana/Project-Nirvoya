import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../../public/images/slide1.png'
import './Slider.css'
const Slide = () => {

const slideItem =[
    {
        id: 1,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: "https://images.unsplash.com/photo-1516974409143-b067ec3e0ec8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: "https://images.unsplash.com/photo-1702350310746-c318426d9ee2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
    },
    {
        id: 3,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: slide1
    },
    {
        id: 4,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: "https://images.unsplash.com/photo-1702901023340-7bc1fcc30a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoPlay:true
  };

  return (
    <div className='w-full max-h-[518px] overflow-hidden rounded-md'>
        <Slider {...settings} >
      {
       slideItem.map(item =>(
        <div key={item.id} className='relative'>
            <img className='w-full h-full object-fill z-[5]' src={item.img} alt="" />
            <div className=" w-full h-full absolute z-[10] left-[0] top-[0] bg-back/90 flex flex-col justify-center px-[20px] lg:px-[60px]">
               <div className="w-[60%]">
               <h1 className='text-[20px] lg:text-[45px] text-[#0970CD] font-[700] leading-none Montserrat'>{item.title}</h1>
                <p className='py-[12px] lg:py-[27px] text-[12px] lg:text-[20px] font-[400] text-[#646464]'>{item.subTitle}</p>
               <div className="">
               <button className='py-[5px] lg:py-[10px] px-[10px] before:hidden lg:px-[25px] rounded-[5px] text-white text-[12px] lg:text-[16px] font-[600] bg-blue-700'>Shop Now</button>
               </div>
               </div>
            </div>
        </div>
       ))
      }
         </Slider>
    </div>
  )
}

export default Slide
