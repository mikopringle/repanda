import React, { useState, useEffect } from 'react'
import { get } from '../api/api'

export function Dash(props){
    const [measures, setMeasures] = useState([])
    const [averages, setAverages] = useState([])

    useEffect(() => {
        
    },[])
    return <h1>Big Dash</h1>
}