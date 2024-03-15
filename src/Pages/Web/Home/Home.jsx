import React, { useEffect, useState } from 'react'
import "./Home.css"
import { ButtonField } from '../../../Components/MainComponents/ButtonField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { TextField } from '../../../Components/MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CounterBar } from '../../../Components/CounterBar/CounterBar'
import { useLocation } from 'react-router-dom'
import WorldAnimation from '../../../Components/WorldAnnimation/WorldAnnimation'
import { ReactTyped } from 'react-typed'
import { EnquiryForm } from '../../../Components/EnquiryForm/EnquiryForm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
export const Home = () => {
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
            <ToastContainer />
            <>
                <div className='Home_align p-5'>
                    <div className='home_sectionSettings'>
                        <div className='homeSec_setting'>
                            <div className='Home_fontBtnalign'>
                                <p className='Home_font1 '>Get Your passport to <span data-aos="fade-down" className='HomeSpan'>Excellence </span>
                                    <br />
                                    from the most<span data-aos="fade-down" className='HomeSpan'> trusted</span> Study Abroad and <span data-aos="fade-down" className='HomeSpan'>Educational</span> Consultant.</p>
                                <ButtonField data={{ style: "HomeButton1", text: "Talk To An Expert", Fn: OpenPop, }} />
                            </div>
                        </div>
                        <div className='homeSec_settin2'>
                            <div className='Home_fontBtalignS'>
                                <div data-aos="zoom-in-up"
                                    data-aos-duration="3000">
                                    <WorldAnimation />
                                    <ImageField data={{ style: "homeSectionImage", ImgName: "secondStatue.png" }} />
                                </div>
                                <div className='Home_lastSecAlign'>
                                    {/* <ReactTyped strings={["My React App"]} typeSpeed={100} loop /> */}
                                    <TextField data={{
                                        style: "Home_lastText", Text: "Embark on your academic journey with English Channel, your trusted companion for seamless migration to global education destinations. Elevate your future with confidence!"
                                    }} />
                                </div>
                            </div>
                        </div>
                        <ImageField data={{ style: "Home_FlightAlgn", ImgName: "backFlight.png" }} />
                    </div>
                </div>
                <div className='Home_lastButtomCntnt'>
                </div>
            </>
            {popup ?
                <EnquiryForm data={close} />
                : ""
            }
        </>
    )
}
