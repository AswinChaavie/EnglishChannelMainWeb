import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { TopCourses } from '../TopCourses/TopCourses'
import { Footer } from '../../../Components/Footer/Footer'
import { MobileNavbar } from '../../Mobile/MobileNavbar/MobileNavbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./AllCourses.css"
export const AllCourses = () => {
    return (
        <>
            <div className='AllCoursesWeb'>
                <Navbar />
                <TopCourses />
                <Footer />
                <div className='floatingButton'>
                <a href='https://wa.me/918877222255' className='floatingButtonWhatsApp'>
                    <WhatsAppIcon id="floatingButtonWhatsAppIcon" />
                </a>
            </div>
            </div>
            <div className='AllCoursesmob'>
                <MobileNavbar />
                <TopCourses />
                <Footer />
                <div className='floatingButton'>
                <a href='https://wa.me/918877222255' className='floatingButtonWhatsApp'>
                    <WhatsAppIcon id="floatingButtonWhatsAppIcon" />
                </a>
            </div>
            </div>


        </>
    )
}
