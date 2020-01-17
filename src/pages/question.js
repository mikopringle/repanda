import React, { useState, useEffect } from 'react'
import { get, post } from '../api/api'
import { GroupedActionButtons, ActionButton } from '../components/buttons'
import { CardWLogoMd } from '../components/containers'

export function Questionnaire(props){
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState({ array: [] })
    const [ready, setReady] = useState(false)
    //Index of question array
    const [currentq, setCurrentq] = useState(0)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    //fires the post request event if ready
    useEffect(() => {
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
        if (ready){
            submitQuestions()
        }
    },[props.companyId, answers, ready])

    //fetches questions on render
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
        loadQuestions()
    }, [props.companyId])

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

    const answerActions = answerChoices.map((choice) => {
        return () => {
            setAnswers({ array: [...answers.array, choice] })
            if (currentq === questions.length - 1){
                setReady(true)
            }
            else {
                setCurrentq(currentq + 1)
            }
        }
    })

    //text of current question
    const questionText = <h1>{questions[currentq]}</h1>

    const switchMode = () => props.setEmployeeMode(false)

    //button that switches to employer mode
    const employerMode =  <ActionButton action={switchMode} text="Dashboard" />

    //load this for individual questions
    const questionPage = <div>
        {questionText}
        <GroupedActionButtons actions={answerActions} texts={answerChoices} />
        {employerMode}
    </div>



    const renderChild = success ? <h1>Success!</h1> : error ? <h1>Error!</h1> : questionPage

    return <CardWLogoMd child={renderChild} />
} 