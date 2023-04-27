import { FILTER, ORDER } from "./action-types";
import axios from "axios";

export const AGREGAR_FAV = "AGREGAR_FAV";
export const ELIMINAR_FAV = "ELIMINAR_FAV";

export const agregarFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: AGREGAR_FAV,
        payload: data,
      });
    });
  };
};

export const eliminarFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: ELIMINAR_FAV,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
