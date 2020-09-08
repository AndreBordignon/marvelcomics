import api from '../../services/api'

export const getComicDetails = async (id) => {
    const response = await api.get(`comics/${id}`),
    {data} = response.data;

    return data;
}