import api from '../services/api'
import md5 from 'js-md5'

//axios keys configs
const PUBLIC_KEY = `07963a49398a81c0f9280dd092ed9076`
const PRIVATE_KEY = '235296d16df5eda4f22b7fc8cf18065d41cc847d';
const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
const auth = 'ts=' + timestamp + '&apikey=' + PUBLIC_KEY + '&hash=' + hash;


//buscando comics
export  function fetchComics(initialOptions = {}) {
  const defaultOptions = { page: 1, count: 10, name: '', nameStartsWith: '' };
  const options = Object.assign(defaultOptions, initialOptions)
  
  const offset = options.page === 1 ? 0 : (options.count * (options.page - 1));

  let params = `${auth}&limit=${options.count}&offset=${offset}`;
  
  const response = api.get('comics?' + params)
    return dispatch => {
      dispatch(fetchComicsBegin());
      response        
      .then(handleErrors)
      .then(({data}) => {
        dispatch(fetchComicsSuccess(data));
        return data;
      })
      .catch((Error) => dispatch(fetchComicsFailure(Error)))
    };
}

//buscando detalhes dos comics
export  function fetchDetails(id, limit = 10) {
  const response = api.get(`comics/${id}?`+ auth + '&limit=' + limit)
    return dispatch => {
      dispatch(fetchComicsBegin())
      response        
      .then(handleErrors)
      .then(({data}) => {
        dispatch(fetchComicsDetails(data));
        return data;
      })
      .catch((Error) => dispatch(fetchComicsFailure(Error)))
    };
}
  
// caso retorne erro na API da Marvel
function handleErrors(response) {
    if (!response.status) {    
      throw Error(response.status);
    }
    return response;
}  

//actions
export const FETCH_COMICS_BEGIN   = 'FETCH_COMICS_BEGIN';
export const FETCH_COMICS_SUCCESS = 'FETCH_COMICS_SUCCESS';
export const FETCH_COMICS_FAILURE = 'FETCH_COMICS_FAILURE';
export const FETCH_COMICS_DETAILS = 'FETCH_COMICS_DETAILS';

export const fetchComicsBegin = () => ({
    type: FETCH_COMICS_BEGIN
});

export const fetchComicsSuccess = comics => ({
    type: FETCH_COMICS_SUCCESS,
    payload: { ...comics, comics }
});
export const fetchComicsFailure = error => ({
    type: FETCH_COMICS_FAILURE,
    payload: { error }
});
export const fetchComicsDetails = comic => ({
  type: FETCH_COMICS_DETAILS,
  payload: { comic }
});