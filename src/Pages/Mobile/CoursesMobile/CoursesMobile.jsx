import React, { useEffect } from 'react'
import "./CoursesMobile.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { ButtonField } from '../../../Components/MainComponents/ButtonField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom'
import SwiperSliders from '../../../Components/SwiperSlider/Swiper'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
export const CoursesMobile = () => {
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        window.scrollTo(0, 0);
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    const NavigateFn = () => {
        navigate("/TopCourses")
    }
    return (
        <>
            <ToastContainer />
            <div className='CoursesMobileALign p-3'>
                <TextField data={{ style: "CoursesMobileALignText", Text: "Courses" }} />
                <ImageField data={{ ImgName: "Group 1.png", style: "CoursesMobileALignImg" }} />
                <SwiperSliders Courses={true} />
                <div data-aos="zoom-in-down">
                    <ButtonField data={{ style: "CoursesMobileButton", text: "Explore All Courses", Fn: NavigateFn }} />
                </div>
            </div>
        </>
    )
}
