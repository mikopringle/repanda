import axios from 'axios'

const apiUrl = "http://52.63.127.93:3000/"

export function post(route, body) {
    const url = apiUrl + route
    return axios.post(url, body)
}