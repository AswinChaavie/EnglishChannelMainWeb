import React from 'react'
import "./LandingView.css"
import Navbar from '../../Components/Navbar/Navbar'
import { FeaturedCountries } from '../FeaturedCountries/FeaturedCountries'
import { Home } from '../Home/Home'
import { AboutUs } from '../AbouUs/AboutUs'
import { Courses } from '../Courses/Courses'
import { ContactUs } from '../ContactUs/ContactUs'
import { Footer } from '../../Components/Footer/Footer'
import { StudentsLove } from '../StudentsLove/StudentsLove'
export const LandingView = () => {
    return (
        <>
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
        </>
    )
}
