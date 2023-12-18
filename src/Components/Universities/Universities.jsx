import React from 'react'
import "./Universities.css"
import { TextField } from '../MainComponents/TextField'
import { ImageField } from '../MainComponents/ImageField'
export const Universities = () => {
    return (
        <>

            <div className='UniversitiesAlign p-5'>
                <TextField data={{ style: "UniversitiesMainText", Text: "Top Universities in Canada" }} />
                <div className='UniversitiesAlignSec'>
                    <ImageField data={{ style: "UniversitiesImg", ImgName: "Rectangle 73.png" }} />
                    <ImageField data={{ style: "UniversitiesImg", ImgName: "Rectangle 75.png" }} />
                </div>
            </div>

        </>
    )
}
