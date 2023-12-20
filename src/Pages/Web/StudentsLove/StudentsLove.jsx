import React, { useEffect } from 'react'
import './StudentsLove.css'
import ReactPlayer from 'react-player'
import { TextField } from '../../../Components/MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export const StudentsLove = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='StudentsLove'>
                <div className='StudentsLoveSec'>
                    <div className="video-wrapper">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=F-vLdvPjN-k"
                            controls={false}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                </div>
                <div className='StudentsLoveSec2 p-3'>
                    <div className='StudentsLoveFinal'>
                        <TextField data={{ style: "StudentsLoveText", Text: "Why Students Love" }} />
                        <TextField data={{ style: "StudentsLoveText2", Text: "English Channel" }} />
                    </div>
                    <TextField data={{
                        style: "StudentsLoveText3", Text: "Choosing a course of study can be challenging as there are numerous options available"
                    }} />
                </div>
            </div >
        </>
    )
}
