import api from "./api-config"

export const getAllDays = async (id) => {
    const res = await api.get(`/trips/${id}/days`)
    return res.data
}

export const createADay = async (id, body) => {
    const res = await api.post(`/trips/${id}/days`, body)
    return res.data
}

export const updateADay = async (id, body) => {
    const res = await api.put(`/trips/${id}/days`, body)
    return res.data
}