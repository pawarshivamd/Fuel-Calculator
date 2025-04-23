import React from 'react'

const Input = (props) => {
    const { type, labelName,htmlFor, placeholder = "Enter here..", ...rest } = props
    return (
        <div className='input-group'>
            <label htmlFor={htmlFor}>{labelName}</label>
            <input type={type} id={htmlFor} placeholder={placeholder} {...rest} />
        </div>
    )
}

export default Input