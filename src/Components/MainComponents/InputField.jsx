import React from 'react'

export const InputField = ({ data: { type, style, value, palaceholder, name, InputOnchange } }) => {


    return (
        <>
            <input onChange={InputOnchange} placeholder={palaceholder} className={style} type={type} name={name} value={value} id="" />
        </>
    )
}
