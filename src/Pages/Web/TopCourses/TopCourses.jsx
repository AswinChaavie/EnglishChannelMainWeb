import React, { useEffect } from 'react'
import "./TopCourses.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { courses } from '../../../StoreData'
export const TopCourses = () => {
    const location = useLocation();


    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <>
            <div className='TopCoursesAlign'>
                <p className='TopCourseText'>Top <span className='TopCourseText2'>Courses</span></p>
                <div className='TopCoursesTileAlign'>
                    {courses.map((ele, index) =>
                        <div data-aos="flip-left" key={index} className='TopCoursesTilesSet'>
                            <div className="image-container">
                                <ImageField data={{ style: "gradient-image", ImgName: ele.img }} className="" />
                                <div className="gradient-overlay">
                                    <div className='TopCoursesTileTextDiv p-3'>
                                        <TextField data={{ Text: ele.courseName, style: "TopCoursesTileText" }} />
                                        <TextField data={{ Text: ele.dis, style: "TopCoursesTileText2" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
