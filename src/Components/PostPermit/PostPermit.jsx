import React, { useEffect } from 'react'
import "./PostPermit.css"
import { TextField } from '../MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export const PostPermit = ({ data }) => {
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);
    return (
        <>
            <div className='PostPermitAlign'>

                {data?.data?.map(postData =>
                    <>
                        {postData?.title ?
                            <h3 data-aos="fade-right" className='PostPermitHtag'>{postData.title}</h3>
                            : " "
                        }
                        {
                            postData?.li ?
                                <ul className='PostPermitUl'>
                                    {
                                        postData?.li.map(li =>
                                            <li data-aos="fade-right" >{li}</li>
                                        )
                                    }
                                </ul>
                                : ""
                        }

                        {
                            postData?.content ?
                                <div data-aos="fade-right">
                                    <TextField data={{ Text: postData?.content, style: "PostPermitTextField" }} />
                                </div>

                                : " "
                        }

                        {
                            postData?.h ?
                                <h4 data-aos="fade-right" className='PostPermitH4'>{postData?.h}</h4>
                                : " "
                        }
                    </>
                )}

            </div>

        </>
    )
}
