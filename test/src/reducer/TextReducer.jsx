export const initialState = {
    texts: [], // Liste des textes avec style et taille
    text: "", // Texte saisi actuellement
    color: "palevioletred", // Couleur sélectionnée par défaut
    size: "15", // Taille sélectionnée par défaut
  };
  
  const textReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TEXT":
        return {
          ...state,
          texts: [...state.texts, action.payload], 
        };
      case "DELETE_TEXT":
        return {
          ...state,
          texts: state.texts.filter((_, index) => index !== action.payload), // Suppression par index
        };
      case "CLEAR_TEXT":
        return {
          ...state,
          text: "", // Réinitialise le texte
        };
      case "ADD_SIZE": 
        return {
          ...state,
          size: action.payload, 
        };
      case "ADD_COLOR": 
        return {
          ...state,
          color: action.payload, 
        };
      case "UPDATE_TEXT": 
        return {
          ...state,
          text: action.payload, 
        };
      default:
        return state;
    }
  };
  
  export default textReducer;