import React, { useEffect } from 'react'
import "./TopCourses.css"
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const TopCourses = () => {
    const tile = [
        {
            img: "3d-medical-background-with-virus-cells-dna-strand.jpg",
            title: "Master of Science in Biology"
        },
        {
            img: "education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus.jpg",
            title: "Master of Arts in Natural Resources and Environmental Studies"
        },
        {
            img: "3d-medical-background-with-virus-cells-dna-strand.jpg",
            title: "Master of Science in Biology"
        },
        {
            img: "education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus.jpg",
            title: "Master of Arts in Natural Resources and Environmental Studies"
        },
        {
            img: "3d-medical-background-with-virus-cells-dna-strand.jpg",
            title: "Master of Science in Biology"
        },
        {
            img: "education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus.jpg",
            title: "Master of Arts in Natural Resources and Environmental Studies"
        },
        {
            img: "3d-medical-background-with-virus-cells-dna-strand.jpg",
            title: "Master of Science in Biology"
        },
        {
            img: "education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus.jpg",
            title: "Master of Arts in Natural Resources and Environmental Studies"
        },
        

    ]
    const location = useLocation();


    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div className='TopCoursesAlign p-5'>
                <TextField data={{ Text: "Top Courses", style: "TopCourseText" }} />
                <div className='TopCoursesTileAlign'>
                    {tile.map((ele, index) =>
                        <div key={index} className='TopCoursesTilesSet'>
                            <div className="image-container">
                                <ImageField data={{ style: "gradient-image", ImgName: ele.img }}  className="" />
                                <div className="gradient-overlay">
                                    <div className='TopCoursesTileTextDiv p-3'>
                                        <TextField data={{ Text: ele.title, style: "TopCoursesTileText" }} />
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
