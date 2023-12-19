import React from 'react'
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

export const LandingView = () => {
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
                <section className='HomeMob'>
                    <HomeMobile />
                    <CountriesMob />
                </section>
            </div>

        </>
    )
}
