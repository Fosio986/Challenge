export const initialState = {
  dépenses: [],
  total: 0,
  catégories: {
    Alimentation: 0,
    Logement: 0,
    Transport: 0,
    Divertissement: 0,
    Santé: 0,
    Éducation: 0,
    Autres: 0,
  },
};

export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const newCategoryTotals = { ...state.catégories };
      newCategoryTotals[action.payload.categorie] += action.payload.montant;

      return {
        ...state,
        dépenses: [...state.dépenses, action.payload],
        catégories: newCategoryTotals,
      };

    case "DELETE_EXPENSE":
      const deletedExpense = state.dépenses.find(
        (expense) => expense.id === action.payload
      );
      const updatedCategoryTotals = { ...state.catégories };
      updatedCategoryTotals[deletedExpense.categorie] -= deletedExpense.montant;

      return {
        ...state,
        dépenses: state.dépenses.filter((expense) => expense.id !== action.payload),
        catégories: updatedCategoryTotals,
      };

    case "UPDATE_TOTAL":
      const total = state.dépenses.reduce(
        (acc, expense) => acc + expense.montant,
        0
      );
      return {
        ...state,
        total,
      };

    default:
      return state;
  }
};