import {
    ADD_COMICS,
    CLEAR_COMICS,
    SEARCH_COMICS,
  } from './actions';
  
  const initialState = {
    data: [],
    searchTerm: ''
  };

  export default function comicsReducer(state = initialState, action) {
      switch(action.type){
					case ADD_COMICS:
						return{
              ...state,
							data: [...state.data, ...action.payload.comics]
            };
          case CLEAR_COMICS:
            return{
              ...state,
              data: []
            }
					case SEARCH_COMICS:
						return{
							...state,
              searchTerm: action.payload.query,
            };
					default:
						return state;
      }
  }