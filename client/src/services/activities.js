import api from "./api-config"

export const createActivity = async (id, day_id, body) => {
    const res = await api.post(`/trips/${id}/days/${day_id}/activities`, body)
    return res.data
}

export const deleteActivity = async (trip_id, day_id, id) => {
    const res = await api.delete(`trips/${trip_id}/days/${day_id}/activities/${id}`)
    return res.data
}