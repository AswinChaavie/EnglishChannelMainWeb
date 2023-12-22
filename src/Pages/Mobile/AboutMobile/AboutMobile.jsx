import React, { useEffect } from 'react'
import "./About.css"
import DoneIcon from '@mui/icons-material/Done';
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export const AboutMobile = () => {
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div className='AboutMobileAlign p-3'>
                <TextField data={{ style: "AboutMobileAlignText", Text: "Why ENGLISH CHANNEL leads the race?" }} />
                <div className='AboutMobileImgAlign'>
                    <ImageField data={{ style: "AboutMobileAlignImage", ImgName: "3d-casual-life-young-people-discussing-the-project 1.png" }} />
                </div>
                <TextField data={{ style: "AboutMobileAlignText2", Text: "At English Channel, we share your mindset, constantly innovating strategies for talented students. Our dedicated team works tirelessly to tackle the major hurdle for aspiring students—finding the perfect university and courses tailored to their preferences." }} />
                <div className='AboutUsLastContent'>
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        className='AboutUsLastFlexAlgn'>
                        <DoneIcon id="AboutUsLastIcon" />
                        <TextField data={{
                            style: "AboutMobileSecond_secFont", Text: "Counseling towards the right course and University. "
                        }} />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        className='AboutUsLastFlexAlgn'>

                        <DoneIcon id="AboutUsLastIcon" />
                        <TextField data={{
                            style: "AboutMobileSecond_secFont", Text: "Assistance with pre-departure formalities."
                        }} />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        className='AboutUsLastFlexAlgn'>
                        <DoneIcon id="AboutUsLastIcon" />
                        <TextField data={{
                            style: "AboutMobileSecond_secFont", Text: "Personalized support  and accommodation suggestions at the destination."
                        }} />
                    </div>

                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        className='AboutUsLastFlexAlgn'>
                        <DoneIcon id="AboutUsLastIcon" />
                        <TextField data={{
                            style: "AboutMobileSecond_secFont", Text: "Extended support to make sure your path to success is smooth and fulfilling."
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}

