import React from 'react'
import "./Admission.css"
import { TextField } from '../MainComponents/TextField'
export const Admission = ({ data }) => {
    const mastersLevel = data?.masters;
    const BachelorsLevel = data?.bachelors;
    console.log("master>>>>", data)
    console.log("bachelors>>>>", data)
    
    return (
        <>
            <div className='AdmissionAlign'>
                <div className='AdmissionCardSec1 p-4'>
                    <TextField data={{
                        style: "AdmissionCardFrontText", Text: "Bachelors Level"
                    }} />
                    <ul>
                        {BachelorsLevel?.map((ele, index) =>
                            <li data-aos="fade-right" key={index} className='AdmissionCardFrontLi'>{ele}</li>
                        )}
                    </ul>
                </div>
                <div className='AdmissionCardSec2 p-4'>
                    <TextField data={{
                        style: "AdmissionCardFrontText", Text: "Masters Level"
                    }} />
                    <ul>
                        {mastersLevel?.map((ele, index) =>
                            <li data-aos="fade-right" key={index} className='AdmissionCardFrontLi'>{ele}</li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}
