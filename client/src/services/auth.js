import api from "./api-config"

export const registerUser = async (body) => {
    const res = await api.post("/users", body)
    return res.data
}

export const loginUser = async (body) => {
    const res = await api.post("api/v1/auth", body)
    if(res.data.token) {
        localStorage.setItem("token", res.data.token)
    } else {
        return false
    }
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data
}

export const verifyUser = async () => {
    const token = localStorage.getItem("token")
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const res = await api.get("/api/v1/auth")
        return res.data
    }
    return false
}