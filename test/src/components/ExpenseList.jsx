import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const { dépenses } = state;

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
    dispatch({ type: "UPDATE_TOTAL" }); // Mise à jour du total après suppression
  };

  return (
    <div>
      <h3>Dépenses enregistrées</h3>
      <ul>
        {dépenses.map((expense) => (
          <li key={expense.id} style={{listStyle:"none",marginBottom:"10px" }}>
            {expense.label} - {expense.montant}€ - {expense.categorie} 
            <button onClick={() => handleDelete(expense.id)} style={{marginLeft:"10px",fontSize: "14px",borderRadius:"5px"}}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;