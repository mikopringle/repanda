import React from 'react'

export const StyledLabel = (props) => <div className="text-gray-700 text-xl font-bold mb-1">{props.text}</div>

export const StyledInput = ({value, setValue, type}) => <input 
                    className="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    type={type}
                    />