import React, { useEffect } from 'react'
import "./AboutUs.css"
import { ImageField } from '../../Components/MainComponents/ImageField'
import { TextField } from '../../Components/MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ButtonField } from '../../Components/MainComponents/ButtonField';
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
export const AboutUs = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div className='AboutUsAlign p-4'>
                <TextField data={{
                    style: "AboutUsSecondCoughtFont", Text: "Why ENGLISH CHANNEL leads the race?"
                }} />
                <div className='AboutSecAlign'>
                    <div className='AboutUsSecset p-3'>
                        <ImageField data={{ style: "AboutUsSecsetImg", ImgName: "3d-casual-life-young-people-discussing-the-project 1.png" }} />
                        <div data-aos="fade-right" className='AboutUsSecsetBoxAlign'>
                            <div className='AboutUsSecsetCoughtsSec'>
                                <div className='AboutUsInnerSec'>
                                    <div className='AboutUsInnerSein'></div>
                                </div>
                                <div className='p-2'>
                                    <TextField data={{
                                        style: "AboutUsInnerCoughtFont", Text: "Education is the most powerful weapon which you can use to change the world."
                                    }} />
                                    <TextField data={{
                                        style: "AboutUsInnerCoughtFont2", Text: "-Nelson Mandela-"
                                    }} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='AboutUsSecset p-3'>
                        <TextField data={{
                            style: "AboutUsInnerSecond_sec", Text: "At English Channel, we share your mindset, constantly innovating strategies for talented students. Our dedicated team works tirelessly to tackle the major hurdle for aspiring students—finding the perfect university and courses tailored to their preferences."
                        }} />
                        <TextField data={{
                            style: "AboutUsInnerSecond_sec", Text: "We offer comprehensive support throughout your academic journey, guiding you seamlessly from the application process to the completion of your dream course."
                        }} />
                        <div className='AboutUsAlignLets'>
                            <a href="/side">
                                <ButtonField data={{ text: "Talk To An Expert", designed: true }} />
                            </a>
                        </div>
                        <div className='AboutUsLastContent'>
                            <div data-aos="fade-left" data-aos-duration="300" className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Counseling towards the right course and University. "
                                }} />
                            </div>
                            <div data-aos="fade-left" data-aos-duration="600" className='AboutUsLastFlexAlgn'>

                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Assistance with pre-departure formalities."
                                }} />
                            </div>
                            <div data-aos="fade-left" data-aos-duration="900" className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Personalized support  and accommodation suggestions at the destination."
                                }} />
                            </div>

                            <div data-aos="fade-left" data-aos-duration="1200" className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Extended support to make sure your path to success is smooth and fulfilling."
                                }} />
                            </div>
                        </div>

                    </div>



                </div>

            </div>

        </>
    )
}
