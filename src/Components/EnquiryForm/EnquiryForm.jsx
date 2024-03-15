import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ButtonField } from '../MainComponents/ButtonField';
import { InputField } from '../MainComponents/InputField';
import { Modal } from '@mui/material';
import { ImageField } from '../MainComponents/ImageField';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../config';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '../MainComponents/TextField';

export const EnquiryForm = ({ data }) => {
    const [FormData, setFormData] = useState({})
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);


    const changes = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setFormData({ ...FormData, [name]: value })
    }
    console.log("FormData>>>>", FormData)

    const Submit = () => {
        if (FormData?.email && FormData?.message && FormData?.name && FormData?.number && FormData?.qualification) {
            axios.post(`${api}/users/mailenquiry`, FormData).then((res) => {
                if (res?.data?.success) {
                    toast.success('Your submission has been successfully received.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }).catch((err) => {
                console.log(err)
                toast.info(err?.response?.data?.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
        } else {
            toast.info('All fields are mandatory', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const FnCall = () => {
        return data()
    }
    return (
        <>
            <ToastContainer />
            <Modal open={true} className='landingViewPop'>
                <div className='landingViewPopInner'>
                    <div className='landingViewPopMargin'>
                        <div className='landingViewLogo'>
                            <ImageField data={{ ImgName: "Untitled-1.png", style: "landingViewPopImg" }} />
                            <div onClick={() => { FnCall() }} className='landingViewPopClsLogoDiv'>
                                <CloseIcon id="landingViewPopClsLogo" />
                            </div>
                        </div>
                        <div className='landingViewSections'>
                            <div className='landingView1sec'>
                                <ImageField data={{ ImgName: "enquiry.png", style: "landingViewSecImg" }} />
                            </div>
                            <div data-aos="zoom-in" className='landingView1sec'>
                                <p className='landingView1Ptag'>Enquire <span className='landingView1Span'>Now</span></p>
                                <TextField data={{ style: "landingView1Text", Text: "To secure a cost-free consultation and meticulous step-by-step support" }} />
                                <div className='landingViewInputs'>
                                    <div className='landingViewInputsDiv'>
                                        <label className='landingViewInputlabel' htmlFor="">Name</label>
                                        <InputField data={{ style: "landingViewInputsField", name: "name", InputOnchange: changes }} />
                                    </div>
                                    <div className='landingViewInputsDiv'>
                                        <label className='landingViewInputlabel' htmlFor="">Qualification</label>
                                        <InputField data={{ style: "landingViewInputsField", name: "qualification", InputOnchange: changes }} />
                                    </div>
                                </div>
                                <div className='landingViewInputs'>
                                    <div className='landingViewInputsDiv'>
                                        <label className='landingViewInputlabel' htmlFor="">Email</label>
                                        <InputField data={{ style: "landingViewInputsField", name: "email", InputOnchange: changes }} />
                                    </div>
                                    <div className='landingViewInputsDiv'>
                                        <label className='landingViewInputlabel' htmlFor="">Contact No</label>
                                        <InputField data={{ style: "landingViewInputsField", type: "number", name: "number", InputOnchange: changes }} />
                                    </div>
                                </div>
                                <div className='landingViewInputs'>
                                    <div className='landingViewInputsDiv'>
                                        <label className='landingViewInputlabel' htmlFor="">Message</label>
                                        <textarea onChange={changes} className='landingViewTextArea' name="message" id="" cols="30" rows="10"></textarea>
                                    </div>

                                </div>
                                <div className='landingViewInputs'>
                                    <ButtonField data={{ style: "landingViewSubmit", text: "Submit", Fn: Submit }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}
