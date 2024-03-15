import React, { useEffect, useState } from 'react'
import "./NewContactForm.css"
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { InputField } from '../../../Components/MainComponents/InputField'
import { TextField } from '../../../Components/MainComponents/TextField'
import TelegramIcon from '@mui/icons-material/Telegram';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ExpertAdvice } from '../../../Components/ExpertAdvice/ExpertAdvice'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { api } from "../../../config"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

export const NewContactForm = () => {
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
            console.log(formData?.email, formData?.message, formData?.name, formData?.number)
            toast.info('All fields are mandatory', {
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
    }
    console.log("formData>>>>>", formData)
    return (
        <>
            <ToastContainer />

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
                            <InputField data={{ style: "ContactUsAlignSec2Inp p-3", palaceholder: "Name", name: "name", type: "text ", value: formData?.name, InputOnchange: gettingInputs }} />
                            <InputField data={{ style: "ContactUsAlignSec2Inp2 p-3", palaceholder: "Email", name: "email", type: "text ", value: formData?.email, InputOnchange: gettingInputs }} />
                            <InputField data={{ style: "ContactUsAlignSec2Inp3 p-3", palaceholder: "Mobile Number", name: "number", type: "number", value: formData?.number, InputOnchange: gettingInputs }} />
                            <InputField data={{ style: "ContactUsAlignSec2Inp4 p-3", palaceholder: "Message", name: "message", type: "text", value: formData?.message, InputOnchange: gettingInputs }} />
                        </div>
                        <button onClick={Submit} className='ContactUsAlignSec2BUtton'>Submit<TelegramIcon /></button>
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
