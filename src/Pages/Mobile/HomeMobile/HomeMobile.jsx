import React from 'react'
import "./HomeMobile.css"
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { ButtonField } from '../../../Components/MainComponents/ButtonField'
import { CounterBar } from '../../../Components/CounterBar/CounterBar'
export const HomeMobile = () => {
    return (
        <>
            <div className=' HomeMobileALign p-4'>
                <p className='HomeMob_font1'>Get Your passport to <span data-aos="fade-down" className='HomeSpan'>Excellence </span>
                    <br />
                    from the most<span data-aos="fade-down" className='HomeSpan'> trusted</span> Study Abroad and <span data-aos="fade-down" className='HomeSpan'>Educational</span> Consultant.</p>
                <div className='HomeMobImages'>
                    <div className='HomeMobAdjstImg'>
                        <ImageField data={{ ImgName: "casual-life-3d-books-graduation-hat-and-diploma-scroll 1.png", style: "HomeMobImage2" }} />
                    </div>
                    <ImageField data={{ ImgName: "3d-business-graduated-student-showing-her-diploma 1.png", style: "HomeMobImage1" }} />
                    <div className='HomeMobAdjstImg'>
                        <ImageField data={{ ImgName: "casual-life-3d-stack-of-books-and-mug-next-to-laptop-screen-showing-planets 1.png", style: "HomeMobImage2" }} />
                    </div>
                </div>
                <div className='HomeMobButton'>
                    <ButtonField data={{ style: "HomeMobButtonDes", text: "Talk to an expert" }} />
                </div>
                <CounterBar />
            </div>
        </>
    )
}


