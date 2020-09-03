import {
    FETCH_COMICS_BEGIN,
    FETCH_COMICS_SUCCESS,
    FETCH_COMICS_FAILURE,
    FETCH_COMICS_DETAILS
  } from './actions';
  
  const initialState = {
    comics: [],
    comicDetail: [],
    loading: false,
    error: null
  };

  export default function comicsReducer(state = initialState, action) {
      switch(action.type){
          case FETCH_COMICS_BEGIN:
            return{
                ...state,
                loading: true,
                error: null,
						};
					case FETCH_COMICS_SUCCESS:
						return{
							...state,
							loading: false,
							items: action.payload.comics.data.results
						};
					case FETCH_COMICS_FAILURE:
						return{
							...state,
							loading: false,
							error: action.payload.error,
							items: []
            };
          case FETCH_COMICS_DETAILS:
            return{
              ...state,
              loading: false,
              comicDetail: action.payload.comic.data.results[0]
            };
					default:
						return state;
      }
  }