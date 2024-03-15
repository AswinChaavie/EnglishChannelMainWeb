import React from 'react'
import "./FlowChart.css"
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { TextField } from '../../../Components/MainComponents/TextField'
export const FlowChart = () => {
    return (
        <>
            <div className='FlowChart'>
                <TextField data={{ Text: "" }} />
                <ImageField data={{ ImgName: "new.jpg", style: "FlowChartImg" }} />
            </div>
        </>
    )
}
