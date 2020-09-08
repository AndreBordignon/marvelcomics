//actions
export const ADD_COMICS = 'ADD_COMICS'
export const CLEAR_COMICS = 'CLEAR_COMICS'
export const SEARCH_COMICS = 'SEARCH_COMICS'

export const addComics = (comics) => ({
    type: ADD_COMICS,
    payload: {comics}
});
export const clearComics = () => ({
  type: CLEAR_COMICS
})
export const searchComics = (query) => ({
  type: SEARCH_COMICS,
  payload: {query}
});