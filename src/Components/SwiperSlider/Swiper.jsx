import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImageField } from "../MainComponents/ImageField"
import "./Swiper.css"
import { Navigation, Pagination, History } from 'swiper/modules';
import { TextField } from '../MainComponents/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export default function SwiperSliders({ Courses, mobile }) {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            {!Courses ?
                <>
                    {!mobile ?
                        <>
                            {/* CountriesSlider */}

                            <div className='swiperAdjstAlign'>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: '.custom-next-button',
                                        prevEl: '.custom-prev-button',
                                    }}
                                    history={{
                                        key: 'slide',
                                    }}
                                    modules={[Navigation, Pagination, History]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide data-history="1">
                                        <div data-aos="flip-left" className='swiperInnerBoxSet'>
                                            <ImageField data={{ ImgName: "3d-casual-life-ecology-earth 1.png", style: "swiperInnerBoxImg" }} />
                                        </div>
                                        <div data-aos="flip-left" className='swiperInnerBox'>
                                            <div className='swiperInnerBoxer p-4'>
                                                <div className='swiperInnerBoxerAdjst'>
                                                    <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                    <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                                </div>
                                                <div className='swiperInnerBoxerSecond'>
                                                    <div className='swiperInnerBoxer1SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxe2SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxeBotton'>
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
                                        <div data-aos="flip-left" className='swiperInnerBox'>
                                            <div className='swiperInnerBoxer p-4'>
                                                <div className='swiperInnerBoxerAdjst'>
                                                    <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                    <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                                </div>
                                                <div className='swiperInnerBoxerSecond'>
                                                    <div className='swiperInnerBoxer1SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxe2SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxeBotton'>
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
                                    </SwiperSlide>
                                    <SwiperSlide data-history="2">
                                        <div className='swiperInnerBox'>
                                            <div className='swiperInnerBoxer p-4'>
                                                <div className='swiperInnerBoxerAdjst'>
                                                    <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                    <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                                </div>
                                                <div className='swiperInnerBoxerSecond'>
                                                    <div className='swiperInnerBoxer1SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxe2SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxeBotton'>
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
                                        <div className='swiperInnerBox'>
                                            <div className='swiperInnerBoxer p-4'>
                                                <div className='swiperInnerBoxerAdjst'>
                                                    <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                    <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                                </div>
                                                <div className='swiperInnerBoxerSecond'>
                                                    <div className='swiperInnerBoxer1SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxe2SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxeBotton'>
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
                                        <div className='swiperInnerBox'>
                                            <div className='swiperInnerBoxer p-4'>
                                                <div className='swiperInnerBoxerAdjst'>
                                                    <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                    <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                                </div>
                                                <div className='swiperInnerBoxerSecond'>
                                                    <div className='swiperInnerBoxer1SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxe2SingleBox p-1'>
                                                        <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                        <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                    </div>
                                                    <div className='swiperInnerBoxeBotton'>
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
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" className='swiperPreNext p-5'>
                                <button className="custom-prev-button"><ArrowBackIcon /></button>
                                <button className="custom-next-button"><ArrowForwardIcon id="swiperPreFontSet" /></button>
                            </div>


                            {/* End CountriesSlider */}

                        </>
                        :

                        <>
                            {/* MobileFeatruedCountriesSlider */}
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.custom-next-button',
                                    prevEl: '.custom-prev-button',
                                }}
                                history={{
                                    key: 'slide',
                                }}
                                modules={[Navigation, Pagination, History]}
                                className="mySwiper"
                            >
                                <SwiperSlide data-history="1">
                                    <div className='swiperInnerBox'>
                                        <div className='swiperInnerBoxer p-4'>
                                            <div className='swiperInnerBoxerAdjst'>
                                                <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                            </div>
                                            <div className='swiperInnerBoxerSecond'>
                                                <div className='swiperInnerBoxer1SingleBox p-1'>
                                                    <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                    <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                </div>
                                                <div className='swiperInnerBoxe2SingleBox p-1'>
                                                    <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                    <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                </div>
                                                <div className='swiperInnerBoxeBotton'>
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
                                </SwiperSlide>
                                <SwiperSlide data-history="1">
                                    <div className='swiperInnerBox'>
                                        <div className='swiperInnerBoxer p-4'>
                                            <div className='swiperInnerBoxerAdjst'>
                                                <TextField data={{ style: "swiperInnerBoxerText", Text: "Canada" }} />
                                                <ImageField data={{ style: "swiperInnerBoxerImage", ImgName: "Ellipse 3.svg" }} />
                                            </div>
                                            <div className='swiperInnerBoxerSecond'>
                                                <div className='swiperInnerBoxer1SingleBox p-1'>
                                                    <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                    <TextField data={{ Text: "2000 Courses", style: "swiperInnerPtags" }} />
                                                </div>
                                                <div className='swiperInnerBoxe2SingleBox p-1'>
                                                    <ImageField data={{ style: "", ImgName: "book-bold (1) 1.svg" }} />
                                                    <TextField data={{ Text: "135 Universities", style: "swiperInnerPtags" }} />
                                                </div>
                                                <div className='swiperInnerBoxeBotton'>
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
                                </SwiperSlide>
                            </Swiper>
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" className='swiperPreNext p-5'>
                                <button className="custom-prev-button"><ArrowBackIcon /></button>
                                <button className="custom-next-button"><ArrowForwardIcon id="swiperPreFontSet" /></button>
                            </div>
                            {/* End MobileFeatruedCountriesSlider */}

                        </>
                    }
                </>
                :
                <>
                    {/* WebCourseSlider */}
                    <div className='swiperAdjstAlign2'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.custom-next-button',
                                prevEl: '.custom-prev-button',
                            }}
                            history={{
                                key: 'slide',
                            }}
                            modules={[Navigation, Pagination, History]}
                            className="mySwiper"
                        >
                            <SwiperSlide data-history="1">
                                <div className='swiperCoursesSetting'>
                                    <div className='swiperCoursesSecAlgn'
                                    >
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
                                        <div className='swiperCourseSecSettings2'>
                                            <div className='swiperCoursesSection p-2'>
                                                <ImageField data={{ style: "swiperCoursesimg1", ImgName: "Rectangle 36.png" }} />
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
                                        <div className='swiperCourseSecSettings3'>
                                            <div className='swiperCoursesSection p-2'>
                                                <ImageField data={{ style: "swiperCoursesimg1", ImgName: "Rectangle 37.png" }} />
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
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-history="2">
                                <div className='swiperCoursesSetting'>
                                    <div className='swiperCoursesSecAlgn'
                                    >
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
                                        <div className='swiperCourseSecSettings2'>
                                            <div className='swiperCoursesSection p-2'>
                                                <ImageField data={{ style: "swiperCoursesimg1", ImgName: "Rectangle 36.png" }} />
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
                                        <div className='swiperCourseSecSettings3'>
                                            <div className='swiperCoursesSection p-2'>
                                                <ImageField data={{ style: "swiperCoursesimg1", ImgName: "Rectangle 37.png" }} />
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
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0" className='swiperCoursePreNext'>
                        <button className="custom-prev-button"><ArrowBackIcon /></button>
                        <button className="custom-next-button"><ArrowForwardIcon id="swiperPreFontSet" /></button>
                    </div>
                    {/* End WebCourseSlider */}
                </>

            }
        </>
    )
}
