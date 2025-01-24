import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const CategoryTotal = () => {
  const { state } = useContext(ExpenseContext);
  const { catégories } = state;
  
  return (
    <div>
      <h3>Total des dépenses par catégorie</h3>
      <ul>
        {Object.keys(catégories).map((categorie) => (
          <li key={categorie} style={{listStyle:"none"}}>
            {categorie}: {catégories[categorie]}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTotal;