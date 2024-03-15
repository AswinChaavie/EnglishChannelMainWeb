import React, { useEffect, useState } from 'react'
import "./ContactUsMobile.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { InputField } from '../../../Components/MainComponents/InputField'
import TelegramIcon from '@mui/icons-material/Telegram';
import { ExpertAdvice } from '../../../Components/ExpertAdvice/ExpertAdvice'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import { api } from '../../../config'
import 'react-toastify/dist/ReactToastify.css';

export const ContactUsMobile = () => {
    const location = useLocation();
    const [formData, setformData] = useState()

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);

    const gettingInputs = (e) => {
        const { value, name } = e.target
        console.log("name>>>>>>", name, "value>>>>>>", value)
        setformData({ ...formData, [name]: value })
    }
    const Submit = () => {
        if (formData?.email && formData?.message && formData?.name && formData?.number) {
            axios.post(`${api}/users/mailenquiry`, formData).then((res) => {
                if (res?.data?.success) {
                    toast.success('Your submission has been successfully received.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }).catch((err) => {
                toast.info(err?.response?.data?.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
        } else {
            toast.success('all fields are require ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(formData?.email, formData?.message, formData?.name, formData?.number)
        }
    }
    console.log("formData>>>>>", formData)
    return (
        <>
            <ToastContainer />
            <div className='ContactUsMobileAlign p-3'>
                <div className='ContactUsMobilTextDiv'>
                    <TextField data={{ style: "ContactUsMobileText", Text: "Contact Us" }} />
                </div>
                <div data-aos-duration="1000" data-aos="zoom-in-down" className='ContactUsMobileImgDiv'>
                    <ImageField data={{ ImgName: "casual-life-3d-boy-studying-remotely-with-tutor 1.png", style: "ContactUsMobileImg" }} />
                </div>
                <div data-aos="fade-right"
                    data-aos-duration="1000" className='ContactUsMobileInpDiv'>
                    <InputField data={{ type: "text", style: "ContactUsMobileInp1", palaceholder: "Name", name: "name", value: formData?.name, InputOnchange: gettingInputs }} />
                    <InputField data={{ type: "text", style: "ContactUsMobileInp2", palaceholder: "Email", name: "email", value: formData?.email, InputOnchange: gettingInputs }} />
                    <InputField data={{ style: "ContactUsMobileInp3", palaceholder: "Mobile Number", name: "number", type: "number", value: formData?.number, InputOnchange: gettingInputs }} />
                    <InputField data={{ type: "name", style: "ContactUsMobileInp3", palaceholder: "Message", name: "message", type: "text", value: formData?.message, InputOnchange: gettingInputs }} />
                </div>
                <div className='ContactUsMobileSubBtn'>
                    <button onClick={Submit} className='ContactUsAlignSec2BUtton'>Submit<TelegramIcon /></button>
                </div>
                <ExpertAdvice />

            </div>

        </>
    )
}
