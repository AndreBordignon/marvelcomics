import api from '../../services/api'


export const getCharactersDetails = async (id) => {
    const response = await api.get(`characters/${id}`),
    {data} = response.data;

    return data;
}