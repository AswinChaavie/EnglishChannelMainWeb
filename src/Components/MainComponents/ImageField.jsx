import React from 'react'
import "./Main.css"
export const ImageField = ({ data: { ImgName, style } }) => {
    return (
        <>
            <img className={style} src={`./Images/${ImgName}`} alt="" />
        </>
    )
}
