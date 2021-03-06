import React, { useState, useEffect } from 'react'
import { get } from '../api/api'
import { CardWLogoMd } from '../components/containers'
import { BigLeftHeading, NumberDisplay } from '../components/text'
import { ActionButton } from '../components/buttons'
import { DashChart } from '../components/charts'

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
                if (res.data === "No results yet!"){
                    setMeasures(["No Data","No Data","No Data"])
                    setAverages([0, 0, 0])
                }
                else {
                    setMeasures(res.data.measures)
                    setAverages(res.data.averages)
                }
            }
            catch (err) {
                setLoading(false)
                console.log(err.message)
            }
        }
        apiCall(`search/week?id=${props.companyId}`)
    },[props.companyId])

    const chart = <div className="h-auto w-auto">
        <DashChart measures={measures} averages={averages} />
    </div>

    //button that switches to employee mode
    const employeeMode = <ActionButton action={() => props.setEmployeeMode(true)} text="Questionnaire" />

    //loading screen
    const loadingScreen = <h1>Fetching insights, sit tight!</h1>

    //dashboard on successful data fetching
    const successScreen = <div>
        <BigLeftHeading text={`Your Dashboard`} />
        <div className="flex-wrap md:flex md:items-center">
            <div className="inline-block">{chart}</div>
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