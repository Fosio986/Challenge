export const initialState = {
    texts: [], // Liste des textes avec style et taille
  };
  
const textReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        texts: [...state.texts, action.payload], // Ajout d'un nouveau texte
      };
    case "DELETE_TEXT":
      return {
        ...state,
        texts: state.texts.filter((_, index) => index !== action.payload), // Suppression par index
      };
    default:
      return state;
  }
};

export default textReducer;