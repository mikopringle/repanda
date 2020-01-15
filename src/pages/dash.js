import React, { useState, useEffect } from 'react'
import { get } from '../api/api'
import { CardWLogoMd } from '../components/containers'
import { BigLeftHeading, NumberDisplay } from '../components/text'

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

    const chart = <img className="inline-block px-10" src="https://via.placeholder.com/300" alt="placeholder for chart"/>

    //button that switches to employee mode
    const employeeMode = <button onClick={() => props.setEmployeeMode(true)}>Switch to employee mode</button>

    //loading screen
    const loadingScreen = <h1>Fetching insights, sit tight!</h1>

    //dashboard on successful data fetching
    const successScreen = <div>
        <BigLeftHeading text={`Your Dashboard`} />
        <div className="flex align-center">
            {chart}
            <ul className="inline-flex flex-col justify-center px-10">{measures.map((measure, i) => <li className="text-left py-5" key={measure}><NumberDisplay number={averages[i]}/><p className="ml-10 inline-block">{measure}</p></li>)}</ul>
        </div>
        <div className="block py-10">{employeeMode}</div>
    </div>

    //error display
    const errorScreen = <h1>Error fetching</h1>

    if (loading && !success) {
        return <CardWLogoMd child={loadingScreen} />
    }
    else if (!loading && success) {
        return <CardWLogoMd child={successScreen} />
    }
    else return <CardWLogoMd child={errorScreen} />
}