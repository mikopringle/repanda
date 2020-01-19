import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'

export function DashChart({ measures, averages }) {
    const data = [
        {
            day: "Monday",
            measure1: 3.5
        },
        {
            day: "Tuesday",
            measure1: 2.8
        },
        {
            day: "Wednesday",
            measure1: 4
        },
        {
            day: "Thursday",
            measure1: 3.6
        },
        {
            day: "Friday",
            measure1: 5
        }
    ]
    return (
        <LineChart width={600} height={400} data={data}>
            <XAxis dataKey="day"/>
            <YAxis />
            <Line type="monotone" dataKey="measure1" stroke="#8884d8" />
        </LineChart>
    )
}