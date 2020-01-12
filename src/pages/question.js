import React, { useState, useEffect } from 'react'
import { get } from '../api/api'

export function Questionnaire(props){
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        const apiCall = async (route) => {
            try {
                const res = await get(route)
                console.log(res)
            }
            catch (err) {
                console.log(err.message)
            }
        }
        apiCall(`question/today?id=${props.compayId}`)
    },[])

    return <div>{}</div>
} 