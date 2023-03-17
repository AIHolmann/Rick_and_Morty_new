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
