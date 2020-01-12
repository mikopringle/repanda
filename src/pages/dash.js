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
        apiCall(`search/week?id=${props.companyId}`)
    },[props.companyId])

    //button that switches to employee mode
    const employeeMode = <button onClick={() => props.setEmployeeMode(true)}>Switch to employee mode</button>

    //loading screen
    const loadingScreen = <h1>Fetching insights, sit tight!</h1>

    //dashboard on successful data fetching
    const successScreen = <div>
        <ul>{measures.map((measure, i) => <li key={measure}>{measure}: {averages[i]}</li>)}</ul>
        {employeeMode}
    </div>

    //error display
    const errorScreen = <h1>Error fetching</h1>

    if (loading && !success) {
        return loadingScreen
    }
    else if (!loading && success) {
        return successScreen
    }
    else return errorScreen
}