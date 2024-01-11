import React, { useEffect } from 'react'
import "./LandingView.css"
import Navbar from '../../Components/Navbar/Navbar'
import { Home } from '../Web/Home/Home'
import { FeaturedCountries } from '../Web/FeaturedCountries/FeaturedCountries'
import { AboutUs } from '../Web/AbouUs/AboutUs'
import { Courses } from '../Web/Courses/Courses'
import { ContactUs } from '../Web/ContactUs/ContactUs'
import { StudentsLove } from '../Web/StudentsLove/StudentsLove'
import { Footer } from '../../Components/Footer/Footer'
import { HomeMobile } from '../Mobile/HomeMobile/HomeMobile'
import { CountriesMob } from '../Mobile/CountriesMob/CountriesMob'
import { AboutMobile } from '../Mobile/AboutMobile/AboutMobile'
import { CoursesMobile } from '../Mobile/CoursesMobile/CoursesMobile'
import { ContactUsMobile } from '../Mobile/ContactUsMobile/ContactUsMobile'
import { useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MobileNavbar } from '../Mobile/MobileNavbar/MobileNavbar'

export const LandingView = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);

    return (
        <>
            <div className='responsiveWeb'>
                <Navbar />
                <section id='navigator_Home'>
                    <Home />
                </section>
                <section id='navigator_contries'>
                    <FeaturedCountries />
                </section>
                <section id='navigate_aboutUs'>
                    <AboutUs />
                </section>
                <section id='navigate_Courses'>
                    <Courses />
                </section>
                <section id='navigate_ContactUs'>
                    <ContactUs />
                </section>
                <section id='navigate_StudentsLove'>
                    <StudentsLove />
                </section>
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
                <section id='countriesMob'>
                    <div data-aos="zoom-in-down">
                        <CountriesMob />
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

        </>
    )
}
