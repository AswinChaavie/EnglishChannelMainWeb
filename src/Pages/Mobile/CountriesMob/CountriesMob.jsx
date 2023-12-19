import React from 'react'
import "./CountriesMob.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import SwiperSliders from '../../../Components/SwiperSlider/Swiper'
export const CountriesMob = () => {
    return (
        <>
            <div className='CountriesMobAlign p-4'>
                <TextField data={{ style: "CountriesMobText", Text: "Latest Featured Countries" }} />
                <SwiperSliders mobile={true} />
            </div>
        </>
    )
}
