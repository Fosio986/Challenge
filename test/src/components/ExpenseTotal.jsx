// TotalExpense.js
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TotalExpense = () => {
  const { state } = useContext(ExpenseContext);

  return (
    <div>
      <h3>Total des dépenses : {state.total}€</h3>
    </div>
  );
};

export default TotalExpense;