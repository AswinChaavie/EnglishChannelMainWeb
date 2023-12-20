import React from 'react'
import "./CoursesMobile.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { ButtonField } from '../../../Components/MainComponents/ButtonField'
export const CoursesMobile = () => {
    return (
        <>
            <div className='CoursesMobileALign p-3'>
                <TextField data={{ style: "CoursesMobileALignText", Text: "Courses" }} />
                <ImageField data={{ ImgName: "Group 1.png", style: "CoursesMobileALignImg" }} />
                <div className='swiperCourseSecSettings'>
                    <div className='swiperCoursesSection p-2'>
                        <ImageField data={{ style: "swiperCoursesimg1", ImgName: "Rectangle 39.png" }} />
                        <div className='swiperCoursesInnerSec'>
                            <TextField data={{ style: "swiperCoursesText", Text: "Business Management" }} />
                            <div className='swiperCoursesinnexBtn'>
                                <button class="cta">
                                    <span>Explore</span>
                                    <svg className='swiperInnerBoxeSvg' viewBox="0 0 13 10" height="10px" width="15px">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='swiperCourseSecSettings'>
                    <div className='swiperCoursesSection p-2'>
                        <ImageField data={{ style: "swiperCoursesimg1", ImgName: "Rectangle 39.png" }} />
                        <div className='swiperCoursesInnerSec'>
                            <TextField data={{ style: "swiperCoursesText", Text: "Business Management" }} />
                            <div className='swiperCoursesinnexBtn'>
                                <button class="cta">
                                    <span>Explore</span>
                                    <svg className='swiperInnerBoxeSvg' viewBox="0 0 13 10" height="10px" width="15px">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonField data={{ style: "CoursesMobileButton", text: "Explore All Courses"  }} />
            </div>
        </>
    )
}
