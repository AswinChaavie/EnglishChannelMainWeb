import React, { useEffect } from 'react'
import "./HighAcademic.css"
import { TextField } from '../MainComponents/TextField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export const HighAcademic = ({ data }) => {
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
                {data?.data?.map(highAc =>
                    <>
                        {highAc?.title ?
                            <h4 data-aos="fade-right" className='PostPermitHtag'>{highAc.title}</h4>
                            : " "
                        }
                        {
                            highAc?.li ?
                                <ul className='PostPermitUl'>
                                    {
                                        highAc?.li.map(li =>
                                            <li data-aos="fade-right" >{li}</li>
                                        )
                                    }
                                </ul>
                                : ""
                        }

                        {
                            highAc?.content ?
                                <div data-aos="fade-right">
                                    <TextField data={{ Text: highAc?.content, style: "PostPermitTextField" }} />
                                </div>
                                : " "
                        }
                        {
                            highAc?.h ?
                                <h4 data-aos="fade-right" className='PostPermitH4'>{highAc?.h}</h4>
                                : " "
                        }
                    </>
                )}

            </div>

        </>
    )
}
