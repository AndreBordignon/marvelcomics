import api from '../../services/api'

export const getAllComics = async (query, limit, offset) => {
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