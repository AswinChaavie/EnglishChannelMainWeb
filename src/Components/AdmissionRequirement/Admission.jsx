import React, { useEffect } from 'react'
import "./Admission.css"
import { TextField } from '../MainComponents/TextField'
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Admission = () => {
    const mastersLevel = ["Acceptance letter from the previous educational institution", "Academic transcripts"
        , "Scores of English Proficiency Tests (IELTS/ TOEFL)",
        "Statement of Purpose", "Letters of Recommendations", "Resume", "A valid passport", "Financial Statements"]
    const BachelorsLevel = ["Acceptance letter from your previous educational institution", "School or diploma transcripts"
        , "Scores of English Proficiency Tests (TOEFL, IELTS)",
        "Statement of Purpose", "Letters of Recommendations", "Resume", "A valid passport", "ACT/SAT/LSAT scores", "Financial statements"]
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);
    return (
        <>
            {/* <div className='AdmissionAlign'>
                <div className='AdmissionCardSec'>
                    <div class="AdmissionCardSecmyCard">
                            <div class="frontSide">
                                <ImageField data={{ style: "AdmissionImg", ImgName: "Rectangle 71.png" }} />
                                <div className='AdmissionCardFront p-3'>
                                    <TextField data={{ style: "AdmissionCardFrontText", Text: "Bachelors level" }} />
                                    <ArrowForwardIcon id="AdmissionCardFrontArrow" />
                                </div>
                            </div>
                            <div class="backSide p-4">
                                <TextField data={{
                                    style: "AdmissionCardFrontText", Text: "Bachelors level"
                                }} />
                                <ul>
                                    {BachelorsLevel.map(ele =>
                                        <li className='AdmissionCardFrontLi'>{ele}</li>
                                    )}
                                </ul>
                        </div>
                    </div>
                    <div class="myCard">
                        <div class="innerCard">
                            <div class="frontSide">
                                <ImageField data={{ style: "AdmissionImg", ImgName: "Rectangle 72.png" }} />
                                <div className='AdmissionCardFront p-3'>
                                    <TextField data={{ style: "AdmissionCardFrontText", Text: "Masters level" }} />
                                    <ArrowForwardIcon id="AdmissionCardFrontArrow" />
                                </div>
                            </div>
                            <div class="backSide p-3">
                                <TextField data={{
                                    style: "AdmissionCardFrontText", Text: "Masters level"
                                }} />
                                <ul>
                                    {mastersLevel.map(ele =>
                                        <li className='AdmissionCardFrontLi'>{ele}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}
            {/* <div className='AdmissionAlign'>
                <div className='AdmissionCardSec'>
                    <div className='AdmissionInnerCard1'>
                        <ImageField data={{ style: "AdmissionImg", ImgName: "Rectangle 71.png" }} />
                    </div>
                    <div className='AdmissionInnerCard2'>
                        <TextField data={{
                            style: "AdmissionCardFrontText", Text: "Bachelors Level"
                        }} />
                        <ul>
                            {BachelorsLevel.map(ele =>
                                <li className='AdmissionCardFrontLi'>{ele}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='AdmissionCardSec'>
                    <div className='AdmissionInnerCard1'>
                        <ImageField data={{ style: "AdmissionImg", ImgName: "Rectangle 72.png" }} />
                    </div>
                    <div className='AdmissionInnerCard2'>
                        <TextField data={{
                            style: "AdmissionCardFrontText", Text: "Masters Level"
                        }} />
                        <ul>
                            {mastersLevel.map(ele =>
                                <li className='AdmissionCardFrontLi'>{ele}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div> */}
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='AdmissionAlign'>
                <div className='AdmissionCardSec1 p-4'>
                    <TextField data={{
                        style: "AdmissionCardFrontText", Text: "Bachelors Level"
                    }} />
                    <ul>
                        {BachelorsLevel.map((ele, index) =>
                            <li key={index} className='AdmissionCardFrontLi'>{ele}</li>
                        )}
                    </ul>
                </div>
                <div className='AdmissionCardSec2 p-4'>
                    <TextField data={{
                        style: "AdmissionCardFrontText", Text: "Masters Level"
                    }} />
                    <ul>
                        {mastersLevel.map((ele, index) =>
                            <li key={index} className='AdmissionCardFrontLi'>{ele}</li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}
