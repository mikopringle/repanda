import React, { useState, useEffect } from 'react'
import { get } from '../api/api'

export function Dash(props){
    const [measures, setMeasures] = useState([])
    const [averages, setAverages] = useState([])
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const apiCall = async (route) => {
            try {
                const res = await get(route)
                setLoading(false)
                setSuccess(true)
                console.log(res)
                setMeasures(res.data.measures)
                setAverages(res.data.averages)
            }
            catch (err) {
                setLoading(false)
                console.log(err.message)
            }
        }
        apiCall(`search/day?id=${props.companyId}`)
    },[])

    if (loading && !success) {
        return <h1>Fetching insights, sit tight!</h1>
    }
    else if (!loading && success) {
        return <ul>{measures.map((measure, i) => <li key={measure}>{measure}: {averages[i]}</li>)}</ul>
    }
    else return <h1>Error fetching</h1>
}