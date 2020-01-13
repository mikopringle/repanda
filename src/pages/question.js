import React, { useState, useEffect } from 'react'
import { get, post } from '../api/api'

export function Questionnaire(props){
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState({ array: [] })
    const [ready, setReady] = useState(false)
    //Index of question array
    const [currentq, setCurrentq] = useState(0)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    //fetches questions on render
    //fires the post request event if ready
    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const res = await get(`question/today?id=${props.companyId}`)
                console.log(res)
                setQuestions(res.data.questions.map((question) => question.text))
            }
            catch (err) {
                console.log(err.message)
            }
        }
        const submitQuestions = async () => {
            try{
                const payload = {
                    answers: answers.array,
                    id: props.companyId
                }
                setReady(false)
                const res = await post('question/answer', payload)
                console.log(res)
                setSuccess(true)
                setTimeout(() => {
                    setAnswers({ array: [], ready: false })
                    setCurrentq(0)
                    setReady(false)
                    setSuccess(false)
                }, 3000)
            }
            catch(err){
                console.log(err)
                setError(true)
                setTimeout(() => {
                    setAnswers({ array: [], ready: false })
                    setCurrentq(0)
                    setError(false)
                }, 3000)
            }
        }
        loadQuestions()
        if (ready){
            submitQuestions()
        }
    },[props.companyId, answers, ready])

    //stores answer in the answers array, and advance to the next question
    //If current question is the last one then submit answers
    const answer = (choice) => {
        setAnswers({ array: [...answers.array, choice] })
        if (currentq === questions.length - 1){
            setReady(true)
        }
        else {
            setCurrentq(currentq + 1)
        }
    }

    const answerChoices = [1, 2, 3, 4, 5]

    //five buttons that represent 5 scores
    const answerButtons = <div>
        {answerChoices.map((choice) => {
            return (
            <button onClick={() => answer(choice)}>{choice}</button>
            )
        })}
    </div>

    //text of current question
    const questionText = <h1>{questions[currentq]}</h1>

    //button that switches to employer mode
    const employerMode = <button onClick={() => props.setEmployeeMode(false)}>Switch to employer mode</button>

    //load this for individual questions
    const questionPage = <div>
        {questionText}
        {answerButtons}
        {employerMode}
    </div>



    return success ? <h1>Success!</h1> : error ? <h1>Error!</h1> : questionPage
} 