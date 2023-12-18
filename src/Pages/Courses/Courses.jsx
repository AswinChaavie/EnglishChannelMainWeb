import React, { useEffect } from 'react'
import "./Courses.css"
import SwiperSliders from '../../Components/SwiperSlider/Swiper'
import { ImageField } from '../../Components/MainComponents/ImageField'
import { TextField } from '../../Components/MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom'
export const Courses = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>

            <div className='CoursesAlign p-5'>
                <div className='CoursesAlignTextSec'>
                    <TextField data={{ style: "TCoursesAlignText", Text: "Courses" }} />
                </div>
                <div className='CoursesSectionAlign'>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='CoursesAlignSec'>
                        <SwiperSliders Courses={true} />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='CoursesAlignSec'>
                        <ImageField data={{ style: "CoursesAlignSecImg", ImgName: "Group 1.png" }} />
                        
                    </div>
                </div>



            </div>
        </>
    )
}
