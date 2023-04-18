import { FILTER, ORDER } from "./action-types";

export const AGREGAR_FAV = "AGREGAR_FAV";
export const ELIMINAR_FAV = "ELIMINAR_FAV";

export const agregarFav = (character) => {
  return {
    type: AGREGAR_FAV,
    payload: character,
  };
};

export const eliminarFav = (id) => {
  return {
    type: ELIMINAR_FAV,
    payload: id,
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
