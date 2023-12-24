import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../../public/images/slide1.jpg'
import './Slider.css'
const Slide = () => {

const slideItem =[
    {
        id: 1,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img:slide1
    },
    {
        id: 2,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: "https://www.jdinstitute.edu.in/media/2021/07/Types-of-Fashion-Photography-Thumbnail.jpg"
    },
    {
        id: 3,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: "https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-jacket-fashion-male-isolated-blue-wall-studio-sunglasses_158538-26556.jpg"
    },
    {
        id: 4,
        title: "Explore Men’s Winter Collection",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
        img: "https://img.freepik.com/free-photo/portrait-young-stylish-model-gray-casual-summer-clothes-brown-hat_158538-11701.jpg"
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
    <div className='w-full lg:max-h-[600px] overflow-hidden rounded-md'>
        <Slider {...settings} >
      {
       slideItem.map((item, idx) =>(
        <div key={item.id} className='relative overflow-hidden rounded-md'>
            <img className='w-full h-full object-cover z-[5]' src={item.img} alt="" />
            <div className=" w-full h-full absolute z-[10] left-[0] top-[0] bg-back/90 flex flex-col justify-center px-[20px] lg:px-[60px]">
               <div className="w-[60%]">
               <h1 className={`text-[20px] ${idx === 1? "text-white" : ""} lg:text-[45px] ${idx === 2? "text-blue-7000" : ""} text-[#0970CD] font-[700] leading-none Montserrat`}>{item.title}</h1>
                <p className={`py-[12px] lg:py-[27px] text-[12px] lg:text-[20px] font-[400] ${idx === 1 ? "text-white" : ""} ${idx === 2? "text-blue-7000" : ""} text-[#646464]`}>{item.subTitle}</p>
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
