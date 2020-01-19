import axios from 'axios'

//const apiUrl = "https://surveypandaa.appspot.com/"
const apiUrl = "http://localhost:3001/"

export function post(route, body) {
    const url = apiUrl + route
    return axios.post(url, body)
}

export function get(route) {
    const url = apiUrl + route
    return axios.get(url)
}