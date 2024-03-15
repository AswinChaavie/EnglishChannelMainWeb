import React, { useEffect, useRef } from 'react';
import './StudentsLove.css';
import { TextField } from '../../../Components/MainComponents/TextField';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import ReactPlayer from 'react-player';
export const StudentsLove = ({ data }) => {
    const swiperRef = useRef(null);
    const blogs = data?.blogs || [];
    const navigate = useNavigate();
    const location = useLocation();
    console.log("data>>>>>>>", blogs);

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;

        if (swiperInstance) {
            swiperInstance.on('mouseenter', () => {
                swiperInstance.autoplay.stop();
            });

            swiperInstance.on('mouseleave', () => {
                swiperInstance.autoplay.start();
            });
        }
    }, [swiperRef]);

    const navigator = () => {
        navigate("/blogs");
    };

    return (
        <>
            <div className='StudentsSliders'>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 1000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {blogs.map(blog => (
                        <SwiperSlide key={blog.id}>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                className='StudentsLove'
                            >
                                <div className='StudentsLoveSec'>
                                    <div className="video-wrapper">
                                        <ReactPlayer
                                            url={blog.blog_link}
                                            controls={false}
                                            height={"100%"}
                                            width={"100%"}
                                        />
                                    </div>
                                </div>
                                <div className='StudentsLoveSec2 p-3'>
                                    <div className='StudentsLoveFinal'>
                                        <TextField data={{ style: "StudentsLoveText", Text: blog.title }} />
                                        <TextField data={{ style: "StudentsLoveText2", Text: blog.description }} />
                                    </div>

                                    <div className='StudentsLoveBtn'>
                                        <button onClick={navigator} class="cta">
                                            <span>Explore</span>
                                            <svg className='swiperInnerBoxeSvg' viewBox="0 0 13 10" height="10px" width="15px">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
