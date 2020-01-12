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
                setQuestions(res.data.questions.map((question) => question.text))
            }
            catch (err) {
                console.log(err.message)
            }
        }
        apiCall(`question/today?id=${props.companyId}`)
    },[props.companyId])

    const questionsJsx = <ul>
        {questions.map((question) => <li key={question}>{question}</li>)}
    </ul>

    return <div>{questionsJsx}</div>
} 