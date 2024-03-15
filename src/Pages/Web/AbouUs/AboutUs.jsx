import React, { useEffect, useState } from 'react'
import "./AboutUs.css"
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { TextField } from '../../../Components/MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ButtonField } from '../../../Components/MainComponents/ButtonField';
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import { EnquiryForm } from '../../../Components/EnquiryForm/EnquiryForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
export const AboutUs = () => {
    const [popup, setpopup] = useState(false)
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);


    const OpenPop = () => {
        setpopup(true)
        // return data.FnCall()
    }

    const close = () => {
        setpopup(false)
    }

    return (
        <>
            <ToastContainer />  
            <div className='AboutUsAlign p-4'>
                <div className='AboutUsSecondTextSet'>
                    <TextField data={{
                        style: "AboutUsSecondCoughtFont", Text: "Why ENGLISH CHANNEL leads the race?"
                    }} />
                </div>

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
                        <div>
                            <TextField data={{
                                style: "AboutUsInnerSecond_sec", Text: "English Channel stands at the forefront of education consulting, committed to  transforming dreams into global careers."
                            }} />
                            <TextField data={{
                                style: "AboutUsInnerSecond_sec", Text: "Rooted locally with a visionary global outlook, English Channel pioneers in setting high standards and navigating students towards a future- oriented education."
                            }} />

                        </div>

                        <div className='AboutUsAlignLets'>
                            <ButtonField data={{ text: "Talk To An Expert", designed: true, Fn: OpenPop }} />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="300" className='AboutUsLastContent'>
                            <div className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Understanding each student's unique goals and crafting a roadmap for their academic journey"
                                }} />
                            </div>
                            <div className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Connecting students with prestigious institutions worldwide."
                                }} />
                            </div>
                            <div className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "Ensuring our students have a competitive edge in their academic pursuits."
                                }} />
                            </div>
                            <div className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: " Students learn not just from textbooks but from the rich tapestry of global cultures."
                                }} />
                            </div>
                            <div className='AboutUsLastFlexAlgn'>
                                <DoneIcon id="AboutUsLastIcon" />
                                <TextField data={{
                                    style: "AboutUsInnerSecond_secFont", Text: "From the initial stages of choosing a program to post-arrival assistance"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {popup ?
                <EnquiryForm data={close} />
                : ""
            }
        </>
    )
}
