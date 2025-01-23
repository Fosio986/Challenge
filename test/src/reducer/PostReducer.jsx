export const initialState = {
    posts: [],
  };
  
const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload], // Ajoute un nouveau post à la liste
      };
    default:
      throw new Error(`Action type "${action.type}" non reconnue.`);
  }
};

export default postReducer;