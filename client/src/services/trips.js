import api from "./api-config"

export const getAllTrips = async () => {
    const res = await api.get("/all-trips")
    return res.data
}

export const getUserTrips = async () => {
    const res = await api.get("/trips")
    return res.data
}

export const getATrip = async (id) => {
    const res = await api.get(`/trips/${id}`)
    return res.data
}

export const createATrip = async (body) => {
    const res = await api.post("/trips", body)
    return res.data
}

export const updateATrip = async (id, body) => {
    const res = await api.put(`/trips/${id}`, body)
    return res.data
}

export const deleteATrip = async (id) => {
    const res = await api.delete(`/trips/${id}`)
    return res.data
}