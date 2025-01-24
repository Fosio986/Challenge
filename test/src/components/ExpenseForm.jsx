import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [label, setLabel] = useState("");
  const [montant, setMontant] = useState("");
  const [categorie, setCategorie] = useState("Alimentation");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      label,
      montant: parseFloat(montant),
      categorie,
    };
    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
    dispatch({ type: "UPDATE_TOTAL" }); // Mise à jour du total après ajout
    setLabel("");
    setMontant("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{marginRight:"5px",fontSize:"14px"}}
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Label de la dépense"
      />
      <input
        style={{marginRight:"5px",fontSize:"14px"}}
        type="number"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        placeholder="Montant"
      />
      <select value={categorie} onChange={(e) => setCategorie(e.target.value)} style={{marginRight:"5px",fontSize:"14px"}}>
        <option value="Alimentation">Alimentation</option>
        <option value="Logement">Logement</option>
        <option value="Transport">Transport</option>
        <option value="Divertissement">Divertissement</option>
        <option value="Santé">Santé</option>
        <option value="Éducation">Éducation</option>
        <option value="Autres">Autres</option>
      </select>
      <button type="submit" disabled={!label || !montant} style={{fontSize: "14px", padding:"4px 10px"}}>
        Ajouter
      </button>
    </form>
  );
};

export default ExpenseForm;