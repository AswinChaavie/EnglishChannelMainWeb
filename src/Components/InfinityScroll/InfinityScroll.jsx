import { TextField } from "../MainComponents/TextField";
import "./InfinityScroll.css"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ImageField } from "../MainComponents/ImageField";
import { Autoplay, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from "react-router-dom";
export const InfinityScroll = () => {
    const images = [
        "28aa18660423cdc66dbf93a8af21fd72.1043.webp",
        "6354ffbe7d4bce280dab3df59d19b08c.6.webp",
        "4c5db9f0b4a203668dbecbed5ddae456.493.webp",
        "8ce26599f197f7f29afbdb261ac18715.8.webp",
        "4266c552e6368ac021da9838b5f47c49.1-1.webp"
    ]
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);
    return (
        <>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" className="InfinityScrollAligneset p-5">
                <div className="InfinityScrollImg p-4">
                    <TextField data={{ style: "InfinityScrollText", Text: "Top Universities" }} />
                    <TextField data={{
                        style: "InfinityScrollText2", Text: "Learn from top-class universities abroad with expert assistance from ENSLISH CHANNEL. We help you get admitted to the best universities!"
                    }} />
                    <div className="InfinityScrollSwiper">
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={10}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                        >
                            {images?.map((ele, index) =>
                                <div key={ele} className="InfinityScrollSlideAdjst">
                                    <SwiperSlide className="InfinityScrollswiperslide">
                                        <div className="InfinityScrollSlide">
                                            <ImageField data={{ ImgName: ele, style: "InfinityScrollSlideImg" }} />
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                            }
                        </Swiper>
                    </div>

                </div>
            </div>

        </>


    )
}
