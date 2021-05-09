import api from "./api-config"

export const createActivity = async (id, day_id, body) => {
    const res = await api.post(`/trips/${id}/days/${day_id}/activities`, body)
    return res.data
}