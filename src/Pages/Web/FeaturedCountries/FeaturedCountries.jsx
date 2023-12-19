import React, { useEffect } from 'react'
import "./FeaturedCountries.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import SwiperSliders from '../../../Components/SwiperSlider/Swiper'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export const FeaturedCountries = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div className='FeaturedAlign p-4'>
                <div className='FeaturedAlign'>
                    <div data-aos="fade-down" className='FeaturedTextAlign'>
                        <TextField data={{ style: "FeaturedTextField", Text: "Choose your Countries" }} />
                        <TextField data={{ style: "FeaturedTextField2", Text: "Latest Featured Countries" }} />
                    </div>
                    <SwiperSliders />
                </div>
            </div>
        </>
    )
}
