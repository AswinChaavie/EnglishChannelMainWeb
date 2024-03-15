import React, { useEffect, useState } from 'react'
import "./LandingView.css"
import Navbar from '../../Components/Navbar/Navbar'
import { Home } from '../Web/Home/Home'
import { AboutUs } from '../Web/AbouUs/AboutUs'
import { Courses } from '../Web/Courses/Courses'
import { ContactUs } from '../Web/ContactUs/ContactUs'
import { StudentsLove } from '../Web/StudentsLove/StudentsLove'
import { Footer } from '../../Components/Footer/Footer'
import { HomeMobile } from '../Mobile/HomeMobile/HomeMobile'
import { AboutMobile } from '../Mobile/AboutMobile/AboutMobile'
import { CoursesMobile } from '../Mobile/CoursesMobile/CoursesMobile'
import { ContactUsMobile } from '../Mobile/ContactUsMobile/ContactUsMobile'
import { useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MobileNavbar } from '../Mobile/MobileNavbar/MobileNavbar'
import axios from 'axios'
import { api } from '../../config'
import { FlowChart } from '../Web/FlowChart/FlowChart'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NewContactForm } from '../Web/NewContactForm/NewContactForm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
// import { motion, useScroll, useTransform } from 'framer-motion'
export const LandingView = () => {
    const [blogs, setblogs] = useState([])
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);
    useEffect(() => {
        axios.get(`${api}/users/getblog`).then((res) => {
            setblogs(res?.data?.data)
        }).catch((err) => {
            console.log(err)
            
        })

    }, [])
    console.log(blogs)

    return (
        <>
            <ToastContainer />

            <div className='responsiveWeb'>
                <div id='responsiveNav'>
                    <Navbar />
                </div>
                {/* <motion.section style={{ y: backgroundY }} id='navigator_Home'> */}
                <section id='navigator_Home'>
                    <Home />
                    {/* </motion.section> */}
                </section>
                <br />

                <section id='navigate_aboutUs'>
                    <AboutUs />
                </section>
                <br />

                <section id='navigator_contries'>
                    {/* <section id='navigator_contries'> */}
                    {/* <FeaturedCountries /> */}
                    <FlowChart />
                </section>
                <br />

                <section id='navigate_Courses'>
                    <Courses />
                </section>
                <br />

                <section id='navigate_ContactUs'>
                    <NewContactForm />
                </section>
                <br />

                <section id='navigate_StudentsLove'>
                    <StudentsLove data={{ blogs: blogs }} />
                </section>
                <br />

                <section id='navigate_Footer'>
                    <Footer />
                </section>

            </div>

            <div className='responsiveMobile'>
                <MobileNavbar />
                <section id='HomeMob'>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <HomeMobile />
                    </div>
                </section>
                <section id='aboutMob'>
                    <div data-aos="zoom-in-right">
                        <AboutMobile />
                    </div>
                </section>
                <section id='courseMob'>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <CoursesMobile />
                    </div>
                </section>
                <section id='contactMob'>
                    <div>
                        <ContactUsMobile />
                    </div>
                </section>
                <section id='studentsMob'>
                    <div>
                        <StudentsLove />
                    </div>
                </section>
                <section className='HomeMob'>
                    <div>
                        <Footer />
                    </div>
                </section>
            </div>
            <div className='floatingButton'>
                <a href='https://wa.me/918877222255' className='floatingButtonWhatsApp'>
                    <WhatsAppIcon id="floatingButtonWhatsAppIcon" />
                </a>
            </div>
        </>
    )
}
