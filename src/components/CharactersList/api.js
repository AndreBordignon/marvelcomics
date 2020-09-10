import api from '../../services/api'

export const getAllCharacters = async (query, limit, offset) => {
    const params = {
        nameStartsWith: query || null,
        limit: limit,
        offset: offset,
    }
    const response = await api.get('characters?', {params}),
    {data} = response.data;

    return data;
}