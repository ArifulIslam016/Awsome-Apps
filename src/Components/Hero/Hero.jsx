import React from 'react';
import PhoneImg from './heroImgs/Iphone.png'
import Elips24 from './heroImgs/Ellipse24.png'
import Elips25 from './heroImgs/Ellipse25.png'
import Elips26 from './heroImgs/Ellipse26.png'
import Elips27 from './heroImgs/Ellipse27.png'
import Elips28 from './heroImgs/Ellipse28.png'
import Elips29 from './heroImgs/Ellipse29.png'
const Hero = () => {
    return (
        <div className='relative  flex justify-center max-w-[1440px] mx-auto'>
            <div className='relative'>
                <img className='max-w-[442px]' src={PhoneImg} alt="" />
            </div>
            <img className='absolute top-11 left-100 ' src={Elips24} alt="" />
            <img className='absolute top-43 left-85 ' src={Elips26} alt="" />
            <img className='absolute top-80 left-68 ' src={Elips28} alt="" />

            <img className='absolute top-11 right-100 ' src={Elips25} alt="" />
            <img className='absolute top-43 right-85 ' src={Elips27} alt="" />
            <img className='absolute top-80 right-68 ' src={Elips29} alt="" />
        </div>
    );
};

export default Hero;