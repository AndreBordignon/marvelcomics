import api from '../../services/api'

export const getAllCharacters = async (query, limit, offset) => {
    const params = {
        titleStartsWith: query || null,
        limit: limit,
        offset: offset,
        orderBy: 'title',
    }
    const response = await api.get('comics?', {params}),
    {data} = response.data;

    return data;
}
