import React from 'react'

export const InputField = ({ data: { type, style, value, palaceholder } }) => {
    return (
        <>
            <input placeholder={palaceholder} className={style} type={type} name="" id="" />
        </>
    )
}
