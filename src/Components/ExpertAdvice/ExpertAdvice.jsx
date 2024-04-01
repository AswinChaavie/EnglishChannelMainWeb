import React, { useEffect, useState } from 'react'
import "./ExpertAdvice.css"
import { TextField } from '../MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'react-toastify/dist/ReactToastify.css';
import { EnquiryForm } from '../EnquiryForm/EnquiryForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
export const ExpertAdvice = () => {
    const location = useLocation();
    const [popup, setpopup] = useState(false)
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    const OpenPop = () => {
        setpopup(true)
        // return data.FnCall()
    }

    const close = () => {
        setpopup(false)
    }
    return (
        <>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='ExpertAdviceAdjst'>
                <div className='ExpertAdviceAdjstFinal'>
                    <div className='ExpertAdviceSec'>
                        <TextField data={{
                            style: "ExpertAdviceText", Text: "Get our experts to answer your questions immediately"
                        }} />
                        <a href="https://wa.me/918877222255">
                            <button class="cta">
                                <WhatsAppIcon id="swiperInnerBoxeIocns" />
                                <span>Ask a Question</span>
                                <svg className='swiperInnerBoxeSvg' viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div className='ExpertAdviceSec1'>
                        {/* <ImageField data={{ style: "ExpertAdviceAdjstImg", ImgName: "casual-life-3d-open-orange-book-floating 1.png" }} /> */}
                        <TextField data={{
                            style: "ExpertAdviceText", Text: "Need expert advice"
                        }} />
                        <div className='ExpertAdviceBTnDiv'>
                            <button className='ExpertAdviceButton' onClick={OpenPop}>Get in Touch</button>
                        </div>
                    </div>
                </div>

            </div>
            {
                popup ?
                    <EnquiryForm data={close} />
                    : ""
            }
        </>
    )
}
