import React, { useEffect } from 'react'
import "./ContactUs.css"
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { InputField } from '../../../Components/MainComponents/InputField'
import { TextField } from '../../../Components/MainComponents/TextField'
import TelegramIcon from '@mui/icons-material/Telegram';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ExpertAdvice } from '../../../Components/ExpertAdvice/ExpertAdvice'
import { useLocation } from 'react-router-dom'
export const ContactUs = () => {
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-duration="1500">
                <ImageField data={{ style: "ContactUsSecImg", ImgName: "backFlight.png" }} />
            </div>

            <div className='ContactUsAlign p-5'>
                <div className='ContactUsAlignSec'>
                    <div className='ContactUsAlignSec1'>
                        <ImageField data={{ style: "ContactUsAlignSec1Img", ImgName: "casual-life-3d-boy-studying-remotely-with-tutor 1.png" }} />
                    </div>
                    <div className='ContactUsAlignSec2'>
                        <TextField data={{ style: "ContactUsAlignSec2Text", Text: "Contact Us" }} />
                        <div className='ContactUsAlignSec2Contact'>
                            <InputField data={{ style: "ContactUsAlignSec2Inp p-3", palaceholder: "Name" }} />
                            <InputField data={{ style: "ContactUsAlignSec2Inp2 p-3", palaceholder: "Email" }} />
                            <InputField data={{ style: "ContactUsAlignSec2Inp3 p-3", palaceholder: "Message" }} />
                        </div>
                        <button className='ContactUsAlignSec2BUtton'>Submit<TelegramIcon /></button>
                    </div>
                    <div data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        className='ContactUsAlignSec3'>
                        <ImageField data={{ style: "ContactUsAlignSec3Img", ImgName: "casual-life-3d-stationery-cup 1.png" }} />
                    </div>
                </div>
                <div className='ContactUsAlignLastSec'>
                    <ExpertAdvice />
                </div>
            </div>


        </>
    )
}
