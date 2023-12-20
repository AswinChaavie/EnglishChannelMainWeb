import React, { useEffect } from 'react'
import "./ExpertAdvice.css"
import { TextField } from '../MainComponents/TextField'
import { ButtonField } from '../MainComponents/ButtonField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export const ExpertAdvice = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='ExpertAdviceAdjst'>
                <div className='ExpertAdviceAdjstFinal'>
                    <div className='ExpertAdviceSec'>
                        <TextField data={{
                            style: "ExpertAdviceText", Text: "Get our experts to answer your questions within 24 Hrs"
                        }} />
                        <button class="cta">
                            <span>Ask a Question</span>
                            <svg className='swiperInnerBoxeSvg' viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className='ExpertAdviceSec1'>
                        {/* <ImageField data={{ style: "ExpertAdviceAdjstImg", ImgName: "casual-life-3d-open-orange-book-floating 1.png" }} /> */}
                        <TextField data={{
                            style: "ExpertAdviceText", Text: "Need expert advice"
                        }} />
                        <div className='ExpertAdviceBTnDiv'>
                            <ButtonField data={{ style: "ExpertAdviceButton", text: "Get in Touch" }} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
