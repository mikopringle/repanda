import axios from 'axios'

//const apiUrl = "http://52.63.127.93:3000/"
const devUrl = "http://localhost:3001/"

export function post(route, body) {
    const url = devUrl + route
    return axios.post(url, body)
}

export function get(route) {
    const url = devUrl + route
    return axios.get(url)
}