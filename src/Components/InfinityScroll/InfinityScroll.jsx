import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from "react-router-dom";
import { TextField } from "../MainComponents/TextField";
import { ImageField } from "../MainComponents/ImageField";
import "./InfinityScroll.css";
import { courses } from '../../StoreData';

export const InfinityScroll = ({ data }) => {
    console.log("data.data", data?.data?.university)

    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);
    return (
        <div className="InfinityScrollAligneset">
            <div className="InfinityScrollImg p-4">
                <div className='InfinityScrollImgAlign' data-aos="zoom-in" >
                    <div className='InfinityScrollImgAlignSec1'>

                    </div>
                    <div className='InfinityScrollImgAlignSec'>
                        <TextField data={{ style: "InfinityScrollText", Text: "Top Universities" }} />
                    </div>
                    <div className='InfinityScrollImgAlignKnow'>
                        <a href="https://wa.me/918877222255">
                            <TextField data={{ style: "InfinityScrollText3", Text: "Know more..." }} />
                        </a>
                    </div>
                </div>
                <TextField data={{
                    style: "InfinityScrollText2", Text: "Learn from top-class universities abroad with expert assistance from ENGLISH CHANNEL. We help you get admitted to the best universities!"
                }} />
                <div className="InfinityScrollSwiper">
                    <Swiper
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={0}
                        navigation={true}
                        autoplay={
                            { delay: 2000 }
                        }
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                    >

                        {data?.data?.university?.map((ele, index) =>
                            <SwiperSlide key={index} className="InfinityScrollSlideAdjst">
                                <div className="InfinityScrollSlide">
                                    {/* <ImageField data={{ ImgName: ele, style: "InfinityScrollSlideImg" }} /> */}
                                    <p className='InfinintyScrollptag'>{ele}</p>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}
