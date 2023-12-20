import React from 'react'
import "./ContactUsMobile.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { InputField } from '../../../Components/MainComponents/InputField'
import TelegramIcon from '@mui/icons-material/Telegram';
import { ExpertAdvice } from '../../../Components/ExpertAdvice/ExpertAdvice'

export const ContactUsMobile = () => {
    return (
        <>
            <div className='ContactUsMobileAlign p-3'>
                <div className='ContactUsMobilTextDiv'>
                    <TextField data={{ style: "ContactUsMobileText", Text: "Contact Us" }} />
                </div>
                <div className='ContactUsMobileImgDiv'>
                    <ImageField data={{ ImgName: "casual-life-3d-boy-studying-remotely-with-tutor 1.png", style: "ContactUsMobileImg" }} />
                </div>
                <div className='ContactUsMobileInpDiv'>
                    <InputField data={{ type: "name", style: "ContactUsMobileInp1", palaceholder: "Name" }} />
                    <InputField data={{ type: "name", style: "ContactUsMobileInp2", palaceholder: "Email" }} />
                    <InputField data={{ type: "name", style: "ContactUsMobileInp3", palaceholder: "Message" }} />
                </div>
                <div className='ContactUsMobileSubBtn'>
                    <button className='ContactUsAlignSec2BUtton'>Submit<TelegramIcon /></button>
                </div>
                <ExpertAdvice />

            </div>

        </>
    )
}
