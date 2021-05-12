import axios from "axios"

let apiUrl

let apiUrls = {
    development: "http://localhost:3000",
    production: "https://wetinenary-api.herokuapp.com/"
}

if(window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
const api = axios.create({
    baseURL: apiUrl
})

export default api