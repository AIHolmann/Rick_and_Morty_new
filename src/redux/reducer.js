import { AGREGAR_FAV, ELIMINAR_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_FAV: {
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    }
    case ELIMINAR_FAV: {
      return {
        ...state,
        myFavorites: [
          state.myFavorites.filter((fav) => fav.id !== action.payload),
        ],
      };
    }
    default:
      return { ...state };
  }
}

export default rootReducer;
