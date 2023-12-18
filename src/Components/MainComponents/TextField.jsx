import React from 'react'
import "./Main.css"
export const TextField = ({ data: { Text, style } }) => {
    return (
        <>
            <p className={style}>
                {Text}
            </p>
        </>
    )
}
