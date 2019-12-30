const apiUrl = "http://localhost:3001/"

export function postRegister (params) {
    const url = apiUrl + "user/new"
    return (fetch(url, {
        method: "POST",
        body: params,
        headers: {
            "Content-type": "application/json"
        }
    }))
}