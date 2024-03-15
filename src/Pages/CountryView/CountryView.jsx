import React, { useEffect, useState } from 'react'
import "./CountryView.css"
import { Countries } from '../Web/Countries/Countries'
import { MobileCountry } from '../Mobile/MobileCountry/MobileCountry'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
export const CountryView = () => {

    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);



    return (
        <>
            <div className='WebCountryToast'>
                <ToastContainer />

            </div>
            <div className='WebCountry'>
                <Navbar countrie={true} />
                <Countries />
            </div>
            <div className='MobileCountry'>
                <MobileCountry />
            </div>


            <div className='floatingButton'>
                <a href='https://wa.me/918877222255' className='floatingButtonWhatsApp'>
                    <WhatsAppIcon id="floatingButtonWhatsAppIcon" />
                </a>
            </div>
        </>
    )
}
