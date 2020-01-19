import React from 'react'

export const StyledLabel = (props) => <div className="text-gray-700 font-bold mb-1 text-left">{props.text}</div>

export const StyledInput = ({value, setValue, type, placeholder}) => <div className="block">
        <input 
            className="appearance-none w-full text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:border-teal-500" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            placeholder={placeholder}
            type={type}/>
    </div>